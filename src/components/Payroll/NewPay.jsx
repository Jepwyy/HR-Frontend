import React, { useRef, useState } from 'react'
import { UsePayroll } from '../../context/payrollContext'
import axios from '../../api/api'
import { useQuery } from 'react-query'
import Swal from 'sweetalert2'
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

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading logs</div>
  }

  const { payrollObject, setPayrollObject } = UsePayroll()

  const handleChange = (e) => {
    const { name, value } = e.target
    setPayrollObject((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleEmployee = async (e) => {
    const data = await axios.get(`/users/logs/${e.target.value}`)
    const employees = data.data[0]

    const totalCost = employees.logs.reduce((acc, cur) => {
      return acc + parseInt(cur.total_cost)
    }, 0)

    const totalHours = employees.logs.reduce((acc, cur) => {
      return acc + parseInt(cur.totalhours)
    }, 0)

    const totalOvertime = employees.logs.reduce((acc, cur) => {
      return acc + parseInt(cur.overtime)
    }, 0)

    const totalF = totalCost - totalOvertime * employees.rateperhour

    setPayrollObject({
      ...payrollObject,
      employeeId: e.target.value,
      hoursWorked: {
        unit: totalHours - totalOvertime,
        rate: employees.rateperhour,
        total: totalF,
      },
      overTime: {
        unit: totalOvertime,
        rate: employees.rateperhour,
        total: employees.rateperhour * 1.5 * totalOvertime,
      },
      grosspay: totalF + 500 + employees.rateperhour * 1.5 * totalOvertime,
    })
  }

  const handleEndDate = (e) => {
    if (!payrollObject.startingDate) {
      endDateRef.current.value = ''
      return Swal.fire('Error', 'Please select a Starting Date.', 'error')
    }
    if (new Date(e.target.value) < new Date(payrollObject.startingDate)) {
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
            onChange={handleEmployee}
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
            min={employees}
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
      </div>
    </div>
  )
}

export default NewPay
