import React from 'react'

const ManualBackup = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='mb-3 w-1/2 flex justify-center'>
        <label className=' text-gray-700 text-lg font-bold mr-2 uppercase'>
          Select Table :
        </label>
        <select
          className='border-2 border-black w-3/6'
          name='employeeId'
          required
        >
          <option className='text-center' value=''>
            --Select Table--
          </option>
          <option value=''>Employees` Table</option>
        </select>
      </div>
      <button className='bg-[#ac7238] text-gray-50 font-bold py-2 px-10 rounded-lg'>
        Export
      </button>
    </div>
  )
}

export default ManualBackup
