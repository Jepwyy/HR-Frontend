import React, { useState } from 'react'
import { useMutation } from 'react-query'
import axios from '../../api/api'
import { format } from 'date-fns'
import { ToastContainer, toast } from 'react-toastify'
import { motion } from 'framer-motion'
import BackupPassModal from './modal/BackupPassModal'
const ManualBackup = () => {
  const [table, setTable] = useState('')
  const [passModal, setPassModal] = useState(false)

  const mutation = useMutation({
    mutationFn: (table) => axios.post('/backup/export', table),
    onSuccess: (data) => {
      const jsonData = data.data
      const blob = new Blob([JSON.stringify(jsonData)], {
        type: 'application/json',
      })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = `${format(new Date(), 'yyyy-MM-dd')}-${table}-data.json`
      link.href = url
      link.click()
    },
    onError: (error) => {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
      })
    },
  })

  const exportData = () => {
    if (!table)
      return toast.error('Please Select a field', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
      })

    mutation.mutate({ table: table })
  }
  const openModal = () => {
    if (!table)
      return toast.error('Please Select a field', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
      })
    setPassModal(true)
  }

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='w-full h-full flex flex-col justify-center items-center'
    >
      <div className='mb-3 w-1/2 flex justify-center'>
        <label className=' text-gray-700 text-lg font-bold mr-2 uppercase'>
          Select Table :
        </label>
        <select
          className='border-2 border-black w-3/6'
          name='employeeId'
          required
          onChange={(e) => setTable(e.target.value)}
        >
          <option
            className='text-center'
            value=''
          >
            --Select Table--
          </option>
          <option value='hr_employee_logs'>Employees` Attendance</option>
          <option value='hr_payroll'>Employees` Payroll</option>
        </select>
      </div>
      <button
        className='bg-[#ac7238] text-gray-50 font-bold py-2 px-10 rounded-lg'
        // onClick={exportData}
        onClick={openModal}
      >
        Export
      </button>
      {passModal && (
        <BackupPassModal
          setPassModal={setPassModal}
          exportData={exportData}
        />
      )}
      <div>{mutation.isLoading && 'Loading'}</div>
      <ToastContainer
        position='top-center'
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </motion.div>
  )
}

export default ManualBackup
