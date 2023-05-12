import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import RestorePassModal from './modal/RestorePassModal'
const ManualRestore = () => {
  const [file, setFile] = useState('')
  const [passModal, setPassModal] = useState(false)
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='w-full h-full flex flex-row justify-center items-center px-5 py-12 gap-7 '
    >
      <div className='w-1/2 flex flex-col justify-center items-center h-full border-r-2 border-gray-300 border-dashed'>
        <div className='w-full flex justify-center mb-3'>
          <label className=' text-gray-700 text-lg font-bold mr-2 uppercase'>
            Select Table :
          </label>
          <select
            className='border-2 border-black w-1/2'
            name='employeeId'
            required
          >
            <option className='text-center' value=''>
              --Select Table--
            </option>
            <option value='hr_employee_logs'>Employees` Attendance</option>
            <option value='hr_payroll'>Employees` Payroll</option>
          </select>
        </div>
        <button
          onClick={() => setPassModal(true)}
          className='bg-[#ac7238] text-gray-50 font-bold py-2 px-5 mx-20 rounded-lg'
        >
          RESTORE
        </button>
      </div>
      <div className='flex items-center justify-center w-1/2'>
        <label className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '>
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <AiOutlineCloudUpload className='text-gray-400 mb-3' size={80} />
            <p className='mb-2 text-sm text-gray-500 '>
              <span className='font-semibold'>Click to upload</span> or drag and
              drop
            </p>
            <p className='text-xs text-gray-500 '>JSON ( .json file only )</p>
            <p className='text-ms text-gray-700 mt-2'>{file}</p>
          </div>
          <input
            id='dropzone-file'
            type='file'
            className='hidden'
            onChange={(e) => setFile(e.target.value)}
            accept='.json'
          />
        </label>
      </div>
      {passModal && <RestorePassModal setPassModal={setPassModal} />}
    </motion.div>
  )
}

export default ManualRestore
