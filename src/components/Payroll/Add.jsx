import React from 'react'
import { UsePayroll } from '../../context/payrollContext'

const Add = () => {
  const { payrollObject, setPayrollObject } = UsePayroll()
  const handleChange = (e) => {
    const { name, value } = e.target
    setPayrollObject((prev) => {
      return { ...prev, [name]: value }
    })
  }
  return (
    <div>
      <h1 className='mb-3 text-lg font-bold uppercase'>Additions</h1>
      <div className='ml-5'>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold'>
            Bonus :
          </label>
          <input
            className='border-2 border-black w-3/6'
            type='number'
            name='bonus'
            min='1'
            max='100'
            required
            onChange={handleChange}
            defaultValue={payrollObject.bonus}
          />
        </div>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold'>
            Advance Pay :
          </label>
          <input
            className='border-2 border-black w-3/6'
            type='number'
            min='1'
            max='100'
            name='advance'
            required
            onChange={handleChange}
            defaultValue={payrollObject.advance}
          />
        </div>
      </div>
    </div>
  )
}

export default Add
