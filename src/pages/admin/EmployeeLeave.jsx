import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import OnLeave from '../../components/EmployeeLeave/OnLeave'
import LeaveRequest from '../../components/EmployeeLeave/LeaveRequest'
const EmployeeLeave = () => {
  const [active, setActive] = useState('FirstPage')
  return (
    <div className='p-4 md:p-12'>
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
        <div className='flex items-end mb-2'>
          <div className='relative'>
            <input
              className='w-full text-white py-2 px-4 pr-10 border border-white bg-[#ac7238] rounded-lg shadow-sm placeholder-white'
              type='text'
              placeholder='Search'
            />
            <BiSearch
              size={30}
              className='absolute top-3 right-3 w-6 h-6 text-white font-semibold cursor-pointer'
            />
          </div>
        </div>
      </div>
      <div className=''>
        <div className='flex gap-[1px]'>
          <button
            className={
              active === 'FirstPage'
                ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 rounded-l'
                : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l'
            }
            onClick={() => setActive('FirstPage')}
          >
            On Leave
          </button>
          <button
            className={
              active === 'SecondPage'
                ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 '
                : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 '
            }
            onClick={() => setActive('SecondPage')}
          >
            Leave Request
          </button>
          <button
            className={
              active === 'ThirdPage'
                ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 rounded-r'
                : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r'
            }
            onClick={() => setActive('ThirdPage')}
          >
            Leave Form
          </button>
        </div>
        <div className='w-full bg-[#F3F3F3] mt-2 py-5 px-3 h-full'>
          {active === 'FirstPage' && <OnLeave />}
          {active === 'SecondPage' && <LeaveRequest />}
        </div>
      </div>
    </div>
  )
}

export default EmployeeLeave
