import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { TiArrowUnsorted } from 'react-icons/ti'

const AttendanceHeader = ({ setQuery, setSort, setOrder }) => {
  const handleSort = (e) => {
    setSort(e.target.value)
  }

  const handleOrder = () => {
    setOrder((prev) => !prev)
  }

  return (
    <div className='flex flex-col-reverse md:flex-row justify-between md:mt-10 mb-4'>
      {/* sort */}
      <div className='flex items-end mb-2'>
        <h1 className='hidden md:block mr-4 text-4xl font-bold'>Attendance</h1>
        <select
          name='sortby'
          className='w-40 text-center h-8 font-semibold border-2 border-black bg-white'
          onChange={handleSort}
        >
          <option value='id'>SORT BY</option>
          <option value='department'>DEPARTMENT</option>
          <option value='role'>POSITION</option>
          <option value='fullname'>NAME</option>
        </select>
        <span className='ml-4 py-1 pt cursor-pointer'>
          <TiArrowUnsorted
            size={28}
            onClick={handleOrder}
          />
        </span>
      </div>
      {/* search */}
      <div className='flex items-end mb-2'>
        <div className='relative'>
          <input
            className='w-full text-white py-2 px-4 pr-10 border border-white bg-[#ac7238] rounded-lg shadow-sm placeholder-white'
            type='text'
            placeholder='Search'
            onChange={(e) => setQuery(e.target.value)}
          />
          <BiSearch
            size={30}
            className='absolute top-3 right-3 w-6 h-6 text-white font-semibold cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}

export default AttendanceHeader
