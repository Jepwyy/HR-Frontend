import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import ArchHeader from '../../components/Archive/ArchHeader'
import ArchiveList from '../../components/Archive/ArchiveList'
import { useEmployeeArchives } from '../../hooks/useEmployeeArchives'
const Archive = () => {
  const { isLoading, error, data } = useEmployeeArchives()
  const [query, setQuery] = useState('')
  return (
    <div className='p-4 md:p-12'>
      <ArchHeader setQuery={setQuery} />
      <div className='overflow-x-auto max-h-[400px]'>
        <table className='w-full text-sm text-left text-[#010100] border border-[#010100] overflow-y-auto overflow-x-auto max-h-[500px]'>
          <thead className='text-xs text-gray-50 uppercase bg-[#010100] sticky -top-[0.10rem]'>
            <tr>
              <th className='p-2 md:p-4'>ID</th>
              <th className='p-2 md:p-4'>EMPLOYEE</th>
              <th className='p-2 md:p-4'>DEPARTMENT</th>
              <th className='p-2 md:p-4'>POSITION</th>
              <th className='p-2 md:p-4'></th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.filter((item) => {
                return Object.keys(item).some((key) =>
                  item[key]
                    ?.toString()
                    .toLowerCase()
                    .includes(query.toLowerCase())
                )
              })
              .map((item, index) => (
                <ArchiveList
                  key={index}
                  item={item}
                />
              ))}
          </tbody>
        </table>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}

export default Archive
