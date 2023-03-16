import React from 'react'

const Add = () => {
  return (
    <div>
      <h1 className='mb-3 text-lg font-bold'>Additions</h1>
      <div className='ml-5'>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold'>
            EMPLOYEE :
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
          <label className='block text-gray-700 text-lg font-bold'>
            BONUS :
          </label>
          <input
            className='border-2 border-black w-3/6'
            type='number'
            name='department'
            min='1'
            max='100'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold'>
            ADVANCE PAY :
          </label>
          <input
            className='border-2 border-black w-3/6'
            type='number'
            min='1'
            max='100'
            name='department'
            required
          />
        </div>
      </div>
    </div>
  )
}

export default Add
