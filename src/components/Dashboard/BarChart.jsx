import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { motion } from 'framer-motion'
import { useQuery } from 'react-query'
import axios from '../../api/api'
import { useEmployees } from '../../hooks/useEmployees'
import Spinner from '../../components/AdminLoader'

const ChartData = ({ chartOptions, employee, year }) => {
  const { data, isLoading, isError } = useQuery(
    ['barchartData', employee, year],
    () =>
      axios
        .get(`report/barchart?employee=${employee}&year=${year}`)
        .then((res) => res.data)
  )

  let userData

  if (isLoading) return <Spinner />
  if (isError) return <div>Error...</div>
  if (data)
    userData = {
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Employee Attendance',
          data: Object.values(data),
          backgroundColor: ['#ac7238'],
          borderColor: '#462e16',
          borderWidth: 2,
        },
      ],
    }
  return (
    <Bar
      data={userData}
      options={chartOptions}
    />
  )
}

function BarChart({ chartOptions }) {
  const [employee, setEmployee] = useState(0)
  const [year, setYear] = useState(new Date().getFullYear())

  const { isLoading, error, data } = useEmployees()

  if (isLoading) return <Spinner />
  if (error) return <div>Error...</div>

  const handleEmployees = (e) => {
    setEmployee(e.target.value)
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from(
    new Array(currentYear - 2020),
    (val, index) => 2023 + index
  )

  return (
    <motion.span
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-center md:text-4xl text-2xl font-bold mb-4'>
        Employee Attendance Monthly Reports
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
            onChange={handleEmployees}
          >
            <option value='0'>All Employees</option>
            {data?.map((item, index) => (
              <option
                key={index}
                value={item.id}
              >
                {item.fullname}
              </option>
            ))}
          </select>
        </div>
        <div className='w-1/2 flex md:justify-end'>
          <label className=' text-gray-700 text-lg font-bold mr-2 '>
            Year :
          </label>
          <select
            className='border-2 border-black md:w-3/4 w-full'
            required
            onChange={(e) => setYear(e.target.value)}
          >
            <option value='2023'>CURRENT YEAR</option>
            {years.map((year, index) => (
              <option
                key={index}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='h-[75%]'>
        <ChartData
          chartOptions={chartOptions}
          employee={employee}
          year={year}
        />
      </div>
    </motion.span>
  )
}

export default BarChart
