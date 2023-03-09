import React from 'react'
import { BsBackspaceFill } from 'react-icons/bs'
import { formatTime } from '../../../utils/formatTime'
import { FcOk } from 'react-icons/fc'
import { BsFillXCircleFill } from 'react-icons/bs'

const EmployeeSchedModal = ({ item, setModalSched }) => {
  const dayoff = item.dayoff
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
  console.log(employeeData.shift_timein)
  return (
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center overflow-auto'>
      <div className='bg-white p-2 rounded md:w-[45rem]  w-96 '>
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
          <h1 className='font-bold'>{item.fullname}</h1>
          <h2 className='font-bold'>
            {formatTime(item.shift_timein ? item.shift_timein : '0') +
              ' - ' +
              formatTime(item.shift_timeout ? item.shift_timeout : '0')}
          </h2>
          <table className='w-full text-sm text-center text-gray-900 border border-gray-900'>
            <thead className='text-xs text-gray-50 uppercase bg-gray-900'>
              <tr>
                {daysOfWeek.map((item, i) => (
                  <th
                    key={i}
                    className='p-2 md:p-4'
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {daysOfWeek.map((item, i) => (
                  <td
                    key={i}
                    className='p-4 border border-gray-500'
                  >
                    {employeeData.shift_timein === null ||
                    dayoff?.includes(item) ? (
                      <span className='flex'>
                        <BsFillXCircleFill
                          size={29}
                          className='text-red flex-1'
                        />
                      </span>
                    ) : (
                      <span className='flex'>
                        <FcOk
                          size={30}
                          className='flex-1'
                        />
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* <tr>
                <td className='px-4 border border-gray-900'>
                  {dayoff?.includes('Sunday') ? (
                    <FcOk size={30} />
                  ) : (
                    <BsFillXCircleFill
                      size={20}
                      className='text-red'
                    />
                  )}
                </td>
                <td className='p-2 md:p-4 border border-gray-900'>
                  {dayoff?.includes('Monday') ? (
                    <FcOk size={30} />
                  ) : (
                    <BsFillXCircleFill
                      size={20}
                      className='text-red'
                    />
                  )}
                </td>
                <td className='p-2 md:p-4 border border-gray-900'>
                  {dayoff?.includes('Tuesday') ? (
                    <FcOk size={30} />
                  ) : (
                    <BsFillXCircleFill
                      size={20}
                      className='text-red'
                    />
                  )}
                </td>
                <td className='p-2 md:p-4 border border-gray-900'>
                  {dayoff?.includes('Wednesday') ? (
                    <FcOk size={30} />
                  ) : (
                    <BsFillXCircleFill
                      size={20}
                      className='text-red'
                    />
                  )}
                </td>
                <td className='p-2 md:p-4 border border-gray-900'>
                  {dayoff?.includes('Thursday') ? (
                    <FcOk size={30} />
                  ) : (
                    <BsFillXCircleFill
                      size={20}
                      className='text-red'
                    />
                  )}
                </td>
                <td className='p-2 md:p-4 border border-gray-900'>
                  {dayoff?.includes('Friday') ? (
                    <FcOk size={30} />
                  ) : (
                    <BsFillXCircleFill
                      size={20}
                      className='text-red'
                    />
                  )}
                </td>
                <td className='p-2 md:p-4 border border-gray-900'>
                  {dayoff?.includes('Saturday') ? (
                    <FcOk size={30} />
                  ) : (
                    <BsFillXCircleFill
                      size={20}
                      className='text-red'
                    />
                  )}
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EmployeeSchedModal
