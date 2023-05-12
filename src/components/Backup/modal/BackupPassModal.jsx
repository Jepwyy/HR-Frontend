import React, { useState } from 'react'
import { HiOutlineKey } from 'react-icons/hi'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { BsBackspaceFill } from 'react-icons/bs'
import { UserAuth } from '../../../context/authContext'
import bycrpt from 'bcrypt'
import { toast } from 'react-toastify'

const BackupPassModal = ({ setPassModal, exportData }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [password, setPassword] = useState('')
  const { userData } = UserAuth()
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handlePassword = async (e) => {
    try {
      e.preventDefault()
      const compare = await bycrpt.compare(password, userData?.password)
      if (compare) {
        exportData()
        setPassModal(false)
        toast.success('Backup Sucessfully', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: 'light',
        })
      } else {
        toast.error('Wrong Password', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: 'light',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log(userData)

  return (
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center py-2 overflow-y-auto'>
      <div className='mx-auto  rounded-xl shadow bg-white shadow-slate-300'>
        <div className='flex justify-end pr-4 pt-4'>
          <BsBackspaceFill
            size={40}
            className='cursor-pointer'
            onClick={() => {
              setPassModal(false)
            }}
          />
        </div>
        <div className='mt-1 p-8'>
          <h1 className='text-4xl font-medium'>Confirm password</h1>
          <p className='text-slate-500'>Enter password to Backup</p>

          <form
            className='my-5'
            onSubmit={handlePassword}
          >
            <div className='flex flex-col space-y-5'>
              <label className='relative'>
                <p className='font-medium text-slate-700 pb-2'>Password</p>
                <input
                  name='password'
                  type={passwordVisible ? 'text' : 'password'}
                  className='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                  placeholder='Enter password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className='absolute top-[70%] right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer'
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <FaEyeSlash size={25} />
                  ) : (
                    <FaEye size={25} />
                  )}
                </span>
              </label>

              <button
                type='submit'
                className='w-full py-3 font-medium text-white bg-[#ac7238f4] hover:bg-[#9c6732] rounded-lg  hover:shadow inline-flex space-x-2 items-center justify-center'
              >
                <HiOutlineKey size={22} />
                <span>Confirm password</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BackupPassModal
