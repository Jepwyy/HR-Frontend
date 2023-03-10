import React, { useState } from 'react'
import EmployeeListHeader from '../../components/Employee/EmployeeListHeader'
import EmployeeListItems from '../../components/Employee/EmployeeListItems'
import Spinner from '../../components/Spinner'
import { useEmployees } from '../../hooks/useEmployees'
import EmployeeCard from '../../components/Employee/EmployeeCard'

const EmployeeList = () => {
  const { isLoading, error, data } = useEmployees()
  const [query, setQuery] = useState('')
  const [details, setDetails] = useState({})
  const [active, setActive] = useState(false)
  const [sort, setSort] = useState('id')
  const [order, setOrder] = useState(true)

  const toggle = (i) => {
    if (open === i) {
      return setActive(false)
    }
    setActive(i)
    setDetails(data.find((obj) => obj.id === i))
  }

  return (
    <div className='p-4 md:p-12'>
      <EmployeeListHeader
        setSort={setSort}
        setOrder={setOrder}
        setQuery={setQuery}
      />
      <div className='flex flex-col lg:flex-row'>
        {/* table */}

        {error && 'Error'}
        <div className='h-96 overflow-y-auto flex-1 '>
          <table className='border-2 border-collapse text-center w-full  '>
            <thead className='bg-[#010100] text-white h-16 sticky top-0'>
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
                ?.sort((a, b) => {
                  if (order) {
                    if (a[sort] < b[sort]) {
                      return -1
                    }
                    if (a[sort] > b[sort]) {
                      return 1
                    }
                    return 0
                  } else {
                    if (a[sort] < b[sort]) {
                      return 1
                    }
                    if (a[sort] > b[sort]) {
                      return -1
                    }
                    return 0
                  }
                })
                .filter((item) => {
                  return Object.keys(item).some((key) =>
                    item[key]
                      ?.toString()
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  )
                })
                .filter((item) => item.department !== 'hr')
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
          <EmployeeCard
            item={details}
            setDetails={setDetails}
          />
        </div>
      </div>
    </div>
  )
}

export default EmployeeList
