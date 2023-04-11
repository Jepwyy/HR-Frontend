import React from 'react'
import { BsBackspaceFill } from 'react-icons/bs'
import { formatTime, formatLocalTime } from '../../../utils/formatTime'
import { FcOk } from 'react-icons/fc'
import { BsFillXCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
const EmployeeSchedModal = ({ item, setModalSched }) => {
  const schedule = item.schedule
  const employeeData = item
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const sortedDays = schedule?.sort((a, b) => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    return daysOfWeek.indexOf(a.day) - daysOfWeek.indexOf(b.day)
  })
  console.log(sortedDays)
  return (
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center overflow-auto'>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='bg-white p-2 rounded md:w-[45rem]  w-96 '
      >
        <div className='flex justify-end px-py'>
          <BsBackspaceFill
            size={40}
            className='cursor-pointer'
            onClick={() => {
              setModalSched(false)
            }}
          />
        </div>
        <h1 className=' text-center font-bold text-4xl text-black mb-7'>
          View Schedule
        </h1>
        <div className='relative overflow-x-auto'>
          <h1 className='font-bold'>Name: {item.fullname}</h1>
          <table className='w-full text-sm text-center text-gray-900 border border-gray-900'>
            <thead className='text-xs text-gray-50 uppercase bg-gray-900'>
              <tr>
                {daysOfWeek.map((item, i) => (
                  <th key={i} className='p-2 md:p-4'>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {daysOfWeek.map((item, i) => (
                  <td key={i} className='p-4 border border-gray-500'>
                    <span className='flex justify-center items-start'>
                      {schedule
                        ?.filter((data) => data.day === item)
                        .map((item) => (
                          <span className='w-full font-bold'>
                            {formatLocalTime(item.shift_timein)} <br />- <br />
                            {formatLocalTime(item.shift_timeout)}
                          </span>
                        ))}
                      {schedule?.filter((data) => data.day === item).length ? (
                        ''
                      ) : (
                        <BsFillXCircleFill size={30} color='#ac7238' />
                      )}
                    </span>
                  </td>
                ))}
                {/* <td>
                  {schedule.filter((item) => item.day === 'Sunday')
                    ? 'Meron'
                    : 'Wala'}
                </td>
                <td>
                  {schedule.filter((item) => item.day === 'Monday').length
                    ? 'Meron'
                    : 'Wala'}
                </td>
                <td>
                  {schedule.filter((item) => item.day === 'Tuesday').length
                    ? 'Meron'
                    : 'Wala'}
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default EmployeeSchedModal
