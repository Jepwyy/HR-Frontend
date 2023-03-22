import React, { useState } from 'react'
import EmployeeListItems from '../../components/Employee/EmployeeListItems'
import Spinner from '../../components/AdminLoader'
import { useEmployees } from '../../hooks/useEmployees'
import AttendanceCard from '../../components/Attendance/AttendanceCard'
import AttendanceHeader from '../../components/Attendance/AttendanceHeader'

const Attendance = () => {
  const { isLoading, error, data } = useEmployees()
  const [query, setQuery] = useState('')
  const [details, setDetails] = useState({})
  const [active, setActive] = useState(false)

  const toggle = (i) => {
    if (open === i) {
      return setActive(false)
    }
    setActive(i)
    setDetails(data.find((obj) => obj.id === i))
  }
  return (
    <div className='p-4 md:p-12'>
      <AttendanceHeader setQuery={setQuery} />
      <div className='flex flex-col lg:flex-row md:mb-0 mb-40'>
        {/* table */}

        {error && 'Error'}
        <div className='h-[25rem] overflow-y-auto flex-1'>
          <table className=' border-2 border-collapse flex-1 text-center overflow-auto w-full'>
            <thead className='bg-[#010100] text-white sticky top-0'>
              <tr>
                <td className='p-2 md:p-4'>ID</td>
                <td className='p-2 md:p-4'>Name</td>
                <td className='p-2 md:p-4'>Department</td>
                <td className='p-2 md:p-4'>Position</td>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={4}>
                    <Spinner />
                  </td>
                </tr>
              )}
              {data
                ?.filter((item) => {
                  return Object.keys(item).some((key) =>
                    item[key]
                      ?.toString()
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  )
                })
                .map((item, i) => (
                  <EmployeeListItems
                    key={i}
                    id={item.id}
                    item={item}
                    active={active}
                    toggle={toggle}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {/* card */}
        <div className='flex-1'>
          <AttendanceCard item={details} />
        </div>
      </div>
    </div>
  )
}

export default Attendance
