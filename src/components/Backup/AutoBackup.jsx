import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from '../../api/api'
import { motion } from 'framer-motion'
const Table = ({ table }) => {
  const { data, isLoading, isError } = useQuery(['backup', table], () =>
    axios.get(`/backup/list?table=${table}`).then((res) => res.data.files)
  )

  if (isLoading)
    return (
      <tr>
        <td colSpan={2}>Loading...</td>
      </tr>
    )
  if (isError)
    return (
      <tr>
        <td colSpan={2}>Error...</td>
      </tr>
    )

  if (!data.length)
    return (
      <tr>
        <td colSpan={2}>No Data</td>
      </tr>
    )

  return (
    <>
      {data?.map((item, index) => (
        <tr key={index}>
          <td className='p-2 md:p-4 border border-[#010100]'>{item}</td>
          <td className='p-2 md:p-4 border border-[#010100] text-center'>
            <button className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold   text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '>
              RESTORE
            </button>
          </td>
        </tr>
      ))}
    </>
  )
}

const AutoBackup = () => {
  const [table, setTable] = useState('logs')
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 30, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='mb-3'>
        <label className=' text-gray-700 text-lg font-bold mr-2'>
          Select Table :
        </label>
        <select
          className='border-2 border-black w-3/6'
          name='employeeId'
          required
          onChange={(e) => setTable(e.target.value)}
        >
          <option value=''>--Select--</option>
          <option value='logs'>Employees` Attendance</option>
        </select>
      </div>
      <div className='overflow-x-auto max-h-[438px] border-4 border-[#010100] '>
        <table className='border-separate border-spacing-0 w-full text-sm text-left text-[#010100]  overflow-y-auto overflow-x-auto max-h-[500px]'>
          <tbody>
            <Table table={table} />
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default AutoBackup
