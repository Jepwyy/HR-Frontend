import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { TiArrowForward } from 'react-icons/ti'
import Spinner from '../../components/AdminLoader'
import { BiSearch } from 'react-icons/bi'
import { useQuery } from 'react-query'
import axios from '../../api/api'
import { parseISO, format } from 'date-fns'
import '../../style/print.css'
const AuditLogs = () => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery('audit_logs', () =>
    axios.get('/logs/get').then((res) => res.data)
  )

  return (
    <div className='p-4 md:p-12'>
      <div className='flex flex-col-reverse md:flex-row justify-between md:mt-10 mb-4'>
        {/* sort */}
        <div className='flex items-end mb-2'>
          <h1 className='hidden md:block mr-4 text-4xl font-bold'>
            Audit Logs
          </h1>
        </div>
        {isLoading && <Spinner />}
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
        <table
          ref={componentRef}
          className='border-separate border-spacing-0 w-full text-sm text-left text-[#010100]  overflow-y-auto overflow-x-auto max-h-[500px]'
        >
          <thead className='text-xs text-gray-50 uppercase border-2 border-[#010100] bg-[#010100] sticky -top-[0.10rem]'>
            <tr>
              <th className='p-2 md:p-4'>EMPLOYEE</th>
              <th className='p-2 md:p-4'>Activity</th>
              <th className='p-2 md:p-4'>Date</th>
              <th className='p-2 md:p-4'>Time</th>
            </tr>
          </thead>
          <tbody>
            {isError && (
              <tr>
                <td colSpan={4}>Error</td>
              </tr>
            )}
            {users?.map((item, index) => (
              <tr key={index}>
                <td className='p-2 md:p-4 border border-[#010100]'>
                  {item.fullname}
                </td>
                <td className='p-2 md:p-4 border border-[#010100]'>
                  {item.log_activity}
                </td>
                <td className='p-2 md:p-4 border border-[#010100]'>
                  {format(parseISO(item.actiondate), 'M/d/yyyy')}
                </td>
                <td className='p-2 md:p-4 border border-[#010100]'>
                  {item.created_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-end'>
        <button
          onClick={handlePrint}
          className='mx-1 bg-[#ac7238] h-8 px-5 gap-1 text-white rounded-full font-semibold group flex items-center'
        >
          <TiArrowForward size={23} /> Export
        </button>
      </div>
    </div>
  )
}

export default AuditLogs
