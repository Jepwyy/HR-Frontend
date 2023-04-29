import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useReactToPrint } from 'react-to-print'
//icons
import { TiArrowForward } from 'react-icons/ti'
import { useQuery } from 'react-query'
import axios from '../../api/api'

const AttendanceCard = ({ item }) => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  const [range, setRange] = useState('week')

  const { data, isLoading, isError } = useQuery(
    ['userlogssingle', item.id, range],
    () =>
      axios
        .get(`/users/logs?range=${range}&id=${item.id || 0}`)
        .then((res) => res.data[0])
  )
  // sort attendance
  const attendance = data?.logs?.sort((a, b) => {
    return new Date(a.log_date) - new Date(b.log_date)
  })

  const handleRange = (e) => {
    setRange(e.target.value)
  }

  console.log(attendance)

  return Object.keys(item).length === 0 ? (
    <></>
  ) : (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 30, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='py-10 px-5 h-full flex flex-col  bg-[#F3F3F3]  '
    >
      <div className=''>
        <div className='flex justify-between'>
          <h1 className='font-bold text-2xl'>LOGS</h1>
          <select
            name='sortby'
            className='w-40 text-center h-8 font-semibold border-2 border-[#010100] bg-white'
            onChange={handleRange}
          >
            <option value='week'>THIS WEEK</option>
            <option value='month'>THIS MONTH</option>
            <option value='year'>THIS YEAR</option>
          </select>
        </div>

        <h1 className='font-bold'>Name: {item.fullname}</h1>
        <div className=' overflow-y-auto h-[268px] '>
          <table
            ref={componentRef}
            className='border-separate border-spacing-0 w-full text-sm text-left text-[#010100] border border-[#010100] overflow-y-auto overflow-x-auto max-h-[512px]'
          >
            <thead className=' text-gray-50 text-sm uppercase bg-[#010100] sticky -top-[0.10rem]'>
              <tr className='py-10 text-center'>
                <th className='p-4 md:p-4'>DAY</th>
                <th className='p-4 md:p-4'>DATE</th>
                <th className='p-4 md:p-4'>TIME IN</th>
                <th className='p-4 md:p-4'>TIME OUT</th>
                <th className='p-4 md:p-4'>TOTAL HOURS</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr className='text-center'>
                  <td
                    colSpan={5}
                    className='p-2 md:py-4 md:px-1 border border-[#010100]'
                  >
                    Loading
                  </td>
                </tr>
              )}
              {isError && (
                <tr className='text-center'>
                  <td
                    colSpan={5}
                    className='p-2 md:py-4 md:px-1 border border-[#010100]'
                  >
                    Error
                  </td>
                </tr>
              )}
              {attendance?.length <= 0 && (
                <tr className='text-center'>
                  <td
                    colSpan={5}
                    className='p-2 md:py-4 md:px-1 border border-[#010100]'
                  >
                    No Attendance
                  </td>
                </tr>
              )}
              {attendance?.map((log) => (
                <tr
                  className='text-center'
                  key={log.id}
                >
                  <td className='p-2 md:py-4 md:px-1 border border-[#010100]'>
                    {new Date(log.log_date).toLocaleString('en-US', {
                      weekday: 'long',
                    })}
                  </td>
                  <td className='p-2 md:py-4 md:px-1 border border-[#010100]'>
                    {new Date(log.log_date).toLocaleDateString()}
                  </td>
                  <td className='p-2 md:py-4 md:px-1 border border-[#010100]'>
                    {new Date(log.time_in).toLocaleTimeString()}
                  </td>
                  <td className='p-2 md:py-4 md:px-1 border border-[#010100]'>
                    {log.time_out
                      ? new Date(log.time_out).toLocaleTimeString()
                      : '--'}
                  </td>
                  <td className='p-2 md:py-4 md:px-1 border text-center border-[#010100]'>
                    {log.totalhours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='mt-2 '>
          <button
            onClick={handlePrint}
            className='mx-1 bg-[#ac7238] h-8 px-5 gap-1 text-white rounded-full font-semibold group flex items-center'
          >
            <TiArrowForward size={23} /> Export
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default AttendanceCard
