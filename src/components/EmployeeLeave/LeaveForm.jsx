import React from 'react'

const LeaveForm = () => {
  return (
    <div>
      <h1 className='font-semibold text-xl mb-2 text-black'>
        Employee's Leave Request
      </h1>
      <div className='overflow-x-auto max-h-[425px] border-4 border-[#010100] mb-1'>
        <h1 className='w-full text-center'>EMPLOYEE LEAVE REQUEST FORM</h1>
        <div className='flex flex-row gap-6'>
          <div className='w-2/4 px-10'>
            <div className='mb-3'>
              <label className='block text-gray-700 text-lg font-bold'>
                Employee :
              </label>
              <select
                className='border-2 border-black w-full'
                name='employee'
                required
              >
                <option value=''>Abdol Jabol</option>
                <option value=''>Abdol SalSalani</option>
              </select>
            </div>
            <div className='mb-3'>
              <label className='block text-gray-700 text-lg font-bold'>
                Position :
              </label>
              <input
                className='border-2 border-black w-full'
                type='text'
                name='department'
                min='1'
                max='100'
                required
              />
            </div>
            <div className='mb-3'>
              <label className='block text-gray-700 text-lg font-bold'>
                Department :
              </label>
              <input
                className='border-2 border-black w-full'
                type='text'
                name='department'
                min='1'
                max='100'
                required
              />
            </div>
          </div>
          <div className='w-2/4 px-10'></div>
        </div>
      </div>
    </div>
  )
}

export default LeaveForm
