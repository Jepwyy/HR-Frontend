import React, { useState } from 'react'

const NewPay = () => {
  const [date, setDate] = useState(new Date())

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
            name='employee'
            required
          >
            <option value=''>Abdol Jabol</option>
            <option value=''>Abdol SalSalani</option>
          </select>
        </div>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold '>
            Pay Date :
          </label>
          <input
            className='border-2 border-black w-3/6'
            type='date'
            name='paydate'
            defaultValue={date.toLocaleDateString('en-CA')}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold '>
            Ending Date :
          </label>
          <input
            className='border-2 border-black w-3/6'
            type='date'
            name='endingdate'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold '>
            Starting Date :
          </label>
          <input
            className='border-2 border-black w-3/6'
            type='date'
            name='startingdate'
            required
          />
        </div>
      </div>
    </div>
  )
}

export default NewPay
