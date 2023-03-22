import React from 'react'
import { BiSearch } from 'react-icons/bi'
const AuditLogs = () => {
  return (
    <div className='p-4 md:p-12'>
      <div className='flex flex-col-reverse md:flex-row justify-between md:mt-10 mb-4'>
        {/* sort */}
        <div className='flex items-end mb-2'>
          <h1 className='hidden md:block mr-4 text-4xl font-bold'>
            Audit Logs
          </h1>
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
      <div className='overflow-x-auto max-h-[425px] border-4 border-[#010100] mb-4'>
        <table className='border-separate border-spacing-0 w-full text-sm text-left text-[#010100]  overflow-y-auto overflow-x-auto max-h-[500px]'>
          <thead className='text-xs text-gray-50 uppercase border-2 border-[#010100] bg-[#010100] sticky -top-[0.10rem]'>
            <tr>
              <th className='p-2 md:p-4'>EMPLOYEE</th>
              <th className='p-2 md:p-4'>Activity</th>
              <th className='p-2 md:p-4'>Date</th>
              <th className='p-2 md:p-4'>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>
                Abdul Jabol Added an Employee.
              </td>
              <td className='p-2 md:p-4 border border-[#010100]'>1/1/2023</td>
              <td className='p-2 md:p-4 border border-[#010100]'>11:23 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex justify-end'>
        <button className='py-2 px-4 rounded-lg bg-green-500 text-white'>
          Print
        </button>
      </div>
    </div>
  )
}

export default AuditLogs
