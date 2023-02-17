import React from "react";
import { IoIosAdd } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const EmployeeListHeader = ({ setQuery }) => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between md:mt-10 mb-4'>
      {/* sort */}
      <div className='flex items-end mb-2'>
        <h1 className='hidden md:block mr-4 text-4xl font-bold'>Employees</h1>
        <select
          name='sortby'
          className='w-40 text-center h-8 font-semibold border-2 border-black bg-white'
        >
          <option value='...'>SORT BY</option>
        </select>
      </div>
      {/* search */}
      <div className='flex items-end mb-2'>
        <IoIosAdd
          size={40}
          className='mr-4 font-extrabold cursor-pointer text-[#ac7238]'
        />
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
  );
};

export default EmployeeListHeader;
