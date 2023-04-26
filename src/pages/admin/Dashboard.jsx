import React, { useState } from 'react'
import { motion } from 'framer-motion'

//icons
import { ImUsers } from 'react-icons/im'
import { GoCalendar } from 'react-icons/go'
import { GiTakeMyMoney } from 'react-icons/gi'

//charts
import BarChart from '../../components/Dashboard/BarChart'
import DoughnutChart from '../../components/Dashboard/DoughnutChart'
import LineChart from '../../components/Dashboard/LineChart'

import { SalaryData, UserData, PieData } from '../../utils/tempdata'

import { Chart, registerables } from 'chart.js'
import { useQuery } from 'react-query'
import axios from '../../api/api'

Chart.register(...registerables)

const Dashboard = () => {
  const { data, isLoading, isError } = useQuery(['summaryData'], () =>
    axios.get('report/summary').then((res) => res.data)
  )

  const [active, setActive] = useState('FirstChart')

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }
  return (
    <div className='p-4 md:p-12'>
      <div className='flex bg-[#F5F5F5]'>
        <div className='w-full md:h-[30rem] h-[37.5rem] p-5'>
          {active === 'FirstChart' && <BarChart chartOptions={chartOptions} />}
          {active === 'SecondChart' && (
            <DoughnutChart chartOptions={chartOptions} />
          )}
          {active === 'ThirdChart' && <LineChart chartOptions={chartOptions} />}
        </div>
      </div>
      <div className='flex md:flex-row flex-col gap-3 justify-between md:mt-8 mt-5 md:mb-0 mb-20'>
        <div
          onClick={() => setActive('FirstChart')}
          className='md:w-60 w-full h-24 bg-[#F5F5F5] rounded flex select-none cursor-pointer'
        >
          <div className='w-[40%] flex justify-center  items-center'>
            <GoCalendar size={50} />
          </div>
          <div className='w-[80%] flex justify-center flex-col'>
            <h1 className='font-bold text-4xl text-[#AC7238] '>
              {data.attendance[0].count}
            </h1>
            <h1 className='font-bold text-gray-400'>PRESENT TODAY</h1>
          </div>
        </div>
        <div
          onClick={() => setActive('SecondChart')}
          className='md:w-60 w-full h-24 bg-[#F5F5F5] rounded flex select-none cursor-pointer'
        >
          <div className='w-[40%] flex justify-center  items-center'>
            <ImUsers size={50} />
          </div>
          <div className='w-[80%] flex justify-center flex-col '>
            <h1 className='font-bold text-4xl text-[#AC7238] '>
              {data.totalEmployees[0].count}
            </h1>
            <h1 className='font-bold text-gray-400'>TOTAL EMPLOYEES</h1>
          </div>
        </div>
        <div
          onClick={() => setActive('ThirdChart')}
          className='md:w-60 w-full h-24 bg-[#F5F5F5] rounded flex select-none cursor-pointer'
        >
          <div className='w-[40%] flex justify-center  items-center'>
            <GiTakeMyMoney size={50} />
          </div>
          <div className='w-[80%] flex justify-center flex-col '>
            <h1 className='font-bold text-4xl text-[#AC7238] w-36 text-shrink overflow-hidden whitespace-nowrap text-ellipsis'>
              {data.totalPayout[0].sum}
            </h1>
            <h1 className='font-bold text-gray-400'>TOTAL PAYOUTS</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
