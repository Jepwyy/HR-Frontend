import React from 'react'
import { motion } from 'framer-motion'

import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({ pieData, chartOptions }) => {
  return (
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-center md:text-4xl text-2xl font-bold mb-4'>
        Total Employees
      </h1>
      <div className='h-[85%]'>
        <Doughnut data={pieData} options={chartOptions} />
      </div>
    </motion.span>
  )
}

export default DoughnutChart
