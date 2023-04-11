import React, { useState } from 'react'
import dp from '../../assets/images/dp.jpg'
import { SalaryData, UserData, PieData } from '../../utils/tempdata'
import { Bar, Line, Doughnut } from 'react-chartjs-2'
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
    labels: PieData.map((data) => data.gender),
    datasets: [
      {
        label: 'Employee Count',
        data: PieData.map((data) => data.count),
        backgroundColor: ['#ac7238', 'black'],
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
      <div className='flex '>
        <div className='w-full h-96'>
          {active === 'FirstChart' && (
            <>
              <h1 className='text-center text-4xl font-bold mb-4'>
                Employee Monthly Reports
              </h1>
              <div className='flex flex-col md:flex-row justify-between w-full'>
                <div className='w-1/2'>
                  <label className=' text-gray-700 text-lg font-bold mr-2'>
                    Employee :
                  </label>
                  <select
                    className='border-2 border-black w-3/4'
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
              <Bar data={userData} options={chartOptions} />
            </>
          )}
          {active === 'SecondChart' && (
            <>
              <h1 className='text-center text-4xl font-bold mb-4'>
                Total Employees
              </h1>
              <Doughnut data={pieData} options={chartOptions} />
            </>
          )}
          {active === 'ThirdChart' && (
            <>
              <h1 className='text-center text-4xl font-bold mb-4'>
                Employee Monthly Salary Reports
              </h1>
              <div className='flex flex-col md:flex-row justify-between w-full'>
                <div className='w-1/2'>
                  <label className=' text-gray-700 text-lg font-bold mr-2'>
                    Employee :
                  </label>
                  <select
                    className='border-2 border-black w-3/4'
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
              <Line data={salaryData} options={chartOptions} />
            </>
          )}
        </div>
      </div>
      <div className='flex justify-between mt-32'>
        <div
          onClick={() => setActive('FirstChart')}
          className='border-4 border-slate-900 w-52 h-20'
        >
          <img className='w-full h-full' src={dp} />
        </div>
        <div
          onClick={() => setActive('SecondChart')}
          className='border-4 border-slate-900 w-52 h-20'
        >
          <img className='w-full h-full' src={dp} />
        </div>
        <div
          onClick={() => setActive('ThirdChart')}
          className='border-4 border-slate-900 w-52 h-20'
        >
          <img className='w-full h-full' src={dp} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
