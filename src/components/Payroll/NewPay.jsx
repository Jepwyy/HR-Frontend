import React, { useEffect, useRef, useState } from 'react'
import { UsePayroll } from '../../context/payrollContext'
import axios from '../../api/api'
import { useQuery } from 'react-query'
import Swal from 'sweetalert2'
import Spinner from '../../components/AdminLoader'
import { formatMinDate } from '../../utils/formatTime'
import { format, parseISO } from 'date-fns'
const NewPay = () => {
  const endDateRef = useRef()
  const {
    data: employees,
    isLoading,
    isError,
  } = useQuery('EmployeesPayroll', async () => {
    const employees = await axios.get('/users/get-employees')
    return employees.data
  })

  const {
    payrollObject,
    setPayrollObject,
    advancePayRef,
    bonusPayRef,
    deducValues,
    leave,
    setLeave,
  } = UsePayroll()

  const [minDate, setMinDate] = useState('')

  const totalDeduct = deducValues.reduce((acc, cur) => {
    return acc + parseInt(cur)
  }, 0)
  const getMinDate = async (id) => {
    try {
      const data = await axios.get(`/payroll/get/${id}`)
      setMinDate(
        formatMinDate(
          data.data[data.data.length - 1].enddate
            ? data.data[data.data.length - 1].enddate
            : ''
        )
      )
    } catch (error) {
      setMinDate('')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setPayrollObject((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const calculateLeaveDays = (
    startdate = '0000-00-00',
    enddate = '0000-00-00',
    rangestart = '0000-00-00',
    rangeend = '0000-00-00',
    schedule = []
  ) => {
    try {
      const startDate = new Date(startdate)
      const endDate = new Date(enddate)
      const rangeStart = new Date(rangestart)
      const rangeEnd = new Date(rangeend)
      const datesInRange = []

      for (
        let date = startDate;
        date <= endDate;
        date.setDate(date.getDate() + 1)
      ) {
        if (date >= rangeStart && date <= rangeEnd) {
          const formattedDate = date.toISOString().split('T')[0]
          const dayOfWeek = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
          }).format(date)
          datesInRange.push({ date: formattedDate, day: dayOfWeek })
        }
      }

      let totalHours = 0

      for (const scheduleItem of schedule) {
        for (const dateItem of datesInRange) {
          if (scheduleItem.day === dateItem.day) {
            const shiftStart = new Date(
              `${dateItem.date} ${scheduleItem.shift_timein}`
            )
            const shiftEnd = new Date(
              `${dateItem.date} ${scheduleItem.shift_timeout}`
            )
            const durationMs = shiftEnd - shiftStart
            const durationHours = durationMs / (1000 * 60 * 60)
            totalHours += durationHours
          }
        }
      }
      return {
        days: datesInRange.length,
        hours: totalHours,
      }
    } catch (error) {
      return {
        days: 0,
        hours: 0,
      }
    }
  }

  const handleEmployee = async (id, startdate = '', enddate = '') => {
    try {
      let data

      if (startdate && enddate) {
        data = await axios.get(
          `/users/logs/${id}?startdate=${startdate}&enddate=${enddate}`
        )
      }

      const employees = data?.data[0]
      let leaveDays = 0

      if (employees) {
        leaveDays = calculateLeaveDays(
          startdate,
          enddate,
          employees?.startdate
            ? format(parseISO(employees?.startdate), 'yyyy-MM-dd')
            : '0000-00-00',
          employees?.startdate
            ? format(parseISO(employees?.enddate), 'yyyy-MM-dd')
            : '0000-00-00',
          employees.schedule
        )
      }

      const totalCost = employees?.logs.reduce((acc, cur) => {
        return acc + parseInt(cur.total_cost)
      }, 0)

      const totalHours = employees?.logs.reduce((acc, cur) => {
        return acc + parseInt(cur.totalhours)
      }, 0)

      const totalOvertime = employees?.logs.reduce((acc, cur) => {
        return acc + parseInt(cur.overtimestatus === 0 ? 0 : cur.overtime)
      }, 0)

      const invalidOverTime = employees?.logs.reduce((acc, cur) => {
        return acc + parseInt(cur.overtime)
      }, 0)

      const totalLeave = leaveDays?.hours * employees?.rateperhour
      const totalF = totalCost - invalidOverTime * employees?.rateperhour

      const grospayF =
        totalF + totalLeave + employees?.rateperhour * 1.5 * totalOvertime

      const netpayF =
        parseInt(grospayF) +
        (advancePayRef.current?.checked
          ? parseFloat(payrollObject.advance ? payrollObject.advance : 0)
          : 0) +
        (bonusPayRef.current?.checked
          ? parseFloat(payrollObject.bonus ? payrollObject.bonus : 0)
          : 0) +
        -totalDeduct

      setLeave((prev) => ({
        ...prev,
        days: leaveDays.days ? leaveDays.days : 0,
        hours: leaveDays.hours ? leaveDays.hours : 0,
      }))

      setPayrollObject({
        ...payrollObject,
        type: employees?.type,
        hoursWorked: {
          unit:
            totalOvertime && totalOvertime > 0
              ? totalHours - invalidOverTime
                ? totalHours - invalidOverTime
                : 0
              : totalHours - invalidOverTime - totalOvertime
              ? totalHours - invalidOverTime - totalOvertime
              : 0,
          rate: employees?.rateperhour,
          total: totalF ? totalF : 0,
        },
        overTime: {
          unit: totalOvertime,
          rate: employees?.rateperhour,
          total: employees?.rateperhour * 1.5 * totalOvertime,
        },
        grossPay: grospayF,
        netPay: netpayF ? netpayF : 0 + totalLeave,
        paidleave: {
          unit: leaveDays.hours ? leaveDays.hours : 0,
          rate: employees?.rateperhour,
          total: totalLeave,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleEmployee(
      payrollObject.employeeId,
      payrollObject.startingDate,
      payrollObject.endingDate
    )
    getMinDate(payrollObject.employeeId)
  }, [
    payrollObject.employeeId,
    payrollObject.startingDate,
    payrollObject.endingDate,
  ])

  const handleEndDate = (e) => {
    if (!payrollObject.startingDate) {
      endDateRef.current.value = ''
      return Swal.fire('Error', 'Please select a Starting Date.', 'error')
    }
    if (new Date(e.target.value) <= new Date(payrollObject.startingDate)) {
      endDateRef.current.value = ''
      return Swal.fire(
        'Error',
        'End date must be larger on startdate.',
        'error'
      )
    }

    setPayrollObject({
      ...payrollObject,
      endingDate: e.target.value,
    })
  }

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <div>Error loading logs</div>
  }
  return (
    <div>
      <h1 className='mb-3 text-lg font-bold uppercase'>NewPay</h1>
      <div className='ml-5'>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold '>
            Employee :
          </label>
          <select
            className='border-2 border-black w-3/6'
            name='employeeId'
            required
            defaultValue={
              payrollObject.employeeId ? payrollObject.employeeId : ''
            }
            onChange={handleChange}
          >
            <option value=''>--Select Employee--</option>
            {employees.map((item, i) => (
              <option
                key={i}
                value={item.id}
              >
                {item.fullname}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold '>
            Pay Date :
          </label>
          <input
            className='border-2 border-black w-3/6'
            type='date'
            name='payDate'
            defaultValue={payrollObject.payDate}
            required
            onChange={handleChange}
          />
        </div>
        {payrollObject.employeeId > 0 && (
          <>
            <div className='mb-3'>
              <label className='block text-gray-700 text-lg font-bold '>
                Starting Date :
              </label>
              <input
                className='border-2 border-black w-3/6'
                type='date'
                name='startingDate'
                required
                onChange={handleChange}
                min={minDate}
                defaultValue={payrollObject.startingDate}
              />
            </div>
            <div className='mb-3'>
              <label className='block text-gray-700 text-lg font-bold '>
                Ending Date :
              </label>
              <input
                className='border-2 border-black w-3/6'
                type='date'
                name='endingDate'
                required
                ref={endDateRef}
                onChange={handleEndDate}
                defaultValue={payrollObject.endingDate}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default NewPay
