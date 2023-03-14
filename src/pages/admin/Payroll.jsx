import React from 'react'
import { BiSearch } from 'react-icons/bi'
const Payroll = () => {
  return (
    <div className='p-4 md:p-10'>
      <div className='flex flex-col md:flex-row justify-between md:mt-10 mb-4'>
        {/* sort */}
        <div className='flex md:flex-row flex-col md:items-end items-start mb-2'>
          <h1 className='text-2xl md:block mr-4 md:text-4xl font-bold'>
            Employee Leave
          </h1>
          <select
            name='sortby'
            className='w-40 text-center h-8 font-semibold border-2 border-black bg-white'
          >
            <option value='...'>SORT BY</option>
          </select>
        </div>
        {/* search */}
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='bg-gray-500 md:w-2/5 w-full'>test</div>
        <div className='bg-gray-100 md:w-3/5 w-full'>
          <div>
            <table className='w-full text-sm text-left text-[#010100]'>
              <thead className='text-xs text-gray-50 uppercase'>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payroll
