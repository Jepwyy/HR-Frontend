import React from 'react'
import { useQuery } from 'react-query'
import axios from '../../api/api'
import { motion } from 'framer-motion'
const AttendanceCard = ({ item }) => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery('users', () => axios.get('/users/logs').then((res) => res.data))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading logs</div>
  }

  const selectedUser = users.find(
    (user) => user.id === (!item.id ? 1 : item.id)
  )

  const selectedUserLogs = selectedUser.logs

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
          >
            <option value='...'>THIS WEEK</option>
            <option value='...'>THIS MONTH</option>
          </select>
        </div>

        <h1 className='font-bold'>Name: {item.fullname}</h1>
        <div className=' overflow-y-auto h-[321px] max-h-[321px] '>
          <table className='border-separate border-spacing-0 w-full text-sm text-left text-[#010100] border border-[#010100] overflow-y-auto overflow-x-auto max-h-[500px]'>
            <thead className=' text-gray-50 text-sm uppercase bg-[#010100] sticky -top-[0.10rem]'>
              <tr className='py-10'>
                <th className='p-4 md:p-4'>DAY</th>
                <th className='p-4 md:p-4'>DATE</th>
                <th className='p-4 md:p-4'>TIME IN</th>
                <th className='p-4 md:p-4'>TIME OUT</th>
                <th className='p-4 md:p-4'>TOTAL HOURS</th>
              </tr>
            </thead>
            <tbody>
              {selectedUserLogs.map((log) => (
                <tr key={log.id}>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {new Date(log.log_date).toLocaleString('en-US', {
                      weekday: 'long',
                    })}
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {new Date(log.log_date).toLocaleDateString()}
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {new Date(log.time_in).toLocaleTimeString()}
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {new Date(log.time_out).toLocaleTimeString()}
                  </td>
                  <td className='p-2 md:p-4 border text-center border-[#010100]'>
                    {log.totalhours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button className='rounded-full bg-[#ac7238] py-1 px-6  font-sans  md:text-base text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '>
            Export
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default AttendanceCard
