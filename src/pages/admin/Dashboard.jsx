import React, { useState } from 'react'
import dp from '../../assets/images/dp.jpg'
import BarChart from '../../components/Charts/BarChart'
import PieChart from '../../components/Charts/PieChart'
const UserData = [
  {
    id: 1,
    month: 'January',
    Attendance: 1000,
  },
  {
    id: 2,
    month: 'February',
    Attendance: 234,
  },
  {
    id: 3,
    month: 'March',
    Attendance: 345,
  },
  {
    id: 4,
    month: 'April',
    Attendance: 123,
  },
  {
    id: 5,
    month: 'May',
    Attendance: 435,
  },
  {
    id: 6,
    month: 'June',
    Attendance: 234,
  },
  {
    id: 7,
    month: 'July',
    Attendance: 567,
  },
  {
    id: 8,
    month: 'Aug',
    Attendance: 234,
  },
  {
    id: 9,
    month: 'Sept',
    Attendance: 234,
  },
  {
    id: 10,
    month: 'Oct',
    Attendance: 345,
  },
  {
    id: 11,
    month: 'Nov',
    Attendance: 223,
  },
  {
    id: 12,
    month: 'Dec',
    Attendance: 234,
  },
]
const PieData = [
  {
    id: 1,
    gender: 'Male',
    count: 5,
  },
  {
    id: 2,
    gender: 'Female',
    count: 6,
  },
]

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: 'Employee Attendance',
        data: UserData.map((data) => data.Attendance),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
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
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  })
  return (
    <div className='p-4 md:p-12'>
      <div className='flex justify-between'>
        <div className='border-4 border-slate-900 w-52 h-20'>
          <img className='w-full h-full' src={dp} />
        </div>
        <div className='border-4 border-slate-900 w-52 h-20'>
          <img className='w-full h-full' src={dp} />
        </div>
        <div className='border-4 border-slate-900 w-52 h-20'>
          <img className='w-full h-full' src={dp} />
        </div>
        <div className='border-4 border-slate-900 w-52 h-20'>
          <img className='w-full h-full' src={dp} />
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='border-4 border-slate-900 w-[50rem] h-96 mt-16 flex justify-center'>
          <div style={{ width: 850 }}>
            <BarChart chartData={userData} />
          </div>
        </div>
        <div className='border-4 border-slate-900 w-[25rem] h-96 mt-16 flex justify-center'>
          <div style={{ width: 400 }}>
            <PieChart chartData={pieData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
