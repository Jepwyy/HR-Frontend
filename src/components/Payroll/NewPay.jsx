import React, { useState } from 'react'
import { UsePayroll } from '../../context/payrollContext'
import axios from '../../api/api'
import { useQuery } from 'react-query'
const NewPay = () => {
  const {
    data: employees,
    isLoading,
    isError,
  } = useQuery('EmployeesPayroll', () =>
    axios.get('/users/get-employees').then((res) => res.data)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading logs</div>
  }

  const { payrollObject, setPayrollObject } = UsePayroll()
  console.log(payrollObject)
  const handleChange = (e) => {
    const { name, value } = e.target
    setPayrollObject((prev) => {
      return { ...prev, [name]: value }
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
            onChange={handleChange}
          >
            <option value=''>--Select Employee--</option>
            {employees.map((item, i) => (
              <option key={i} value={item.id}>
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
            onChange={handleChange}
            defaultValue={payrollObject.endingDate}
          />
        </div>
      </div>
    </div>
  )
}

export default NewPay
