import React from 'react'
import { motion } from 'framer-motion'

import { Doughnut } from 'react-chartjs-2'
import { useQuery } from 'react-query'
import axios from '../../api/api'

const DoughnutChart = ({ chartOptions }) => {
  const { data, isLoading, isError } = useQuery('barchartData', () =>
    axios.get('/report/piechart').then((res) => res.data)
  )
  let chartData
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>
  if (data)
    chartData = {
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Employee Count',
          data: Object.values(data),
          backgroundColor: ['#ac7238', '#1d0e0b', '#d88c51', '#f3e7c9'],
          borderColor: '#010100',
          borderWidth: 2,
        },
      ],
    }

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
        <Doughnut
          data={chartData}
          options={chartOptions}
        />
      </div>
    </motion.span>
  )
}

export default DoughnutChart
