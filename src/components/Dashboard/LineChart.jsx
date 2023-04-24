import React from 'react'
import { motion } from 'framer-motion'
import { Line } from 'react-chartjs-2'
const LineChart = ({ salaryData, chartOptions }) => {
  return (
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-center md:text-4xl text-2xl font-bold mb-4'>
        Employee Monthly Salary Reports
      </h1>
      <div className='flex flex-col md:flex-row justify-between w-full'>
        <div className='w-1/2'>
          <label className=' text-gray-700 text-lg font-bold mr-2'>
            Employee :
          </label>
          <select
            className='border-2 border-black md:w-3/4 w-full'
            name='employeeId'
            required
          >
            <option value=''>--Select Employee--</option>
            <option value=''>Kenneth Collado</option>
          </select>
        </div>
        <div className='w-1/2 flex md:justify-end'>
          <label className=' text-gray-700 text-lg font-bold mr-2 '>
            Year :
          </label>
          <input className='border-2 border-black w-3/6' type='month' />
        </div>
      </div>
      <div className='h-[75%]'>
        <Line data={salaryData} options={chartOptions} />
      </div>
    </motion.span>
  )
}

export default LineChart
