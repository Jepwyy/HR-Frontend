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
Chart.register(...registerables)

const Dashboard = () => {
  const [active, setActive] = useState('FirstChart')
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: 'Employee Attendance',
        data: UserData.map((data) => data.Attendance),
        backgroundColor: ['#ac7238'],
        borderColor: '#462e16',
        borderWidth: 2,
      },
    ],
  })

  const [salaryData, setSalaryData] = useState({
    labels: SalaryData.map((data) => data.month),
    datasets: [
      {
        label: 'Employee Salary',
        data: SalaryData.map((data) => data.salary),
        backgroundColor: ['#ac7238'],
        borderColor: '#462e16',
        borderWidth: 2,
      },
    ],
  })
  const [pieData, setPieData] = useState({
    labels: PieData.map((data) => data.department),
    datasets: [
      {
        label: 'Employee Count',
        data: PieData.map((data) => data.count),
        backgroundColor: ['#ac7238', '#1d0e0b', '#d88c51', '#f3e7c9'],
        borderColor: '#010100',
        borderWidth: 2,
      },
    ],
  })
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
          {active === 'FirstChart' && (
            <BarChart userData={userData} chartOptions={chartOptions} />
          )}
          {active === 'SecondChart' && (
            <DoughnutChart pieData={pieData} chartOptions={chartOptions} />
          )}
          {active === 'ThirdChart' && (
            <LineChart salaryData={salaryData} chartOptions={chartOptions} />
          )}
        </div>
      </div>
      <div className='flex md:flex-row flex-col gap-3 justify-between md:mt-8 mt-5 md:mb-0 mb-20'>
        <div
          onClick={() => setActive('FirstChart')}
          className='md:w-60 w-full h-24 bg-[#F5F5F5] rounded flex select-none'
        >
          <div className='w-[40%] flex justify-center  items-center'>
            <GoCalendar size={50} />
          </div>
          <div className='w-[80%] flex justify-center flex-col '>
            <h1 className='font-bold text-4xl text-[#AC7238] '>100</h1>
            <h1 className='font-bold text-gray-400'>PRESENT TODAY</h1>
          </div>
        </div>
        <div
          onClick={() => setActive('SecondChart')}
          className='md:w-60 w-full h-24 bg-[#F5F5F5] rounded flex select-none'
        >
          <div className='w-[40%] flex justify-center  items-center'>
            <ImUsers size={50} />
          </div>
          <div className='w-[80%] flex justify-center flex-col '>
            <h1 className='font-bold text-4xl text-[#AC7238] '>100</h1>
            <h1 className='font-bold text-gray-400'>TOTAL EMPLOYEES</h1>
          </div>
        </div>
        <div
          onClick={() => setActive('ThirdChart')}
          className='md:w-60 w-full h-24 bg-[#F5F5F5] rounded flex select-none'
        >
          <div className='w-[40%] flex justify-center  items-center'>
            <GiTakeMyMoney size={50} />
          </div>
          <div className='w-[80%] flex justify-center flex-col '>
            <h1 className='font-bold text-4xl text-[#AC7238] w-36 text-shrink overflow-hidden whitespace-nowrap text-ellipsis'>
              12321
            </h1>
            <h1 className='font-bold text-gray-400'>TOTAL PAYOUTS</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
