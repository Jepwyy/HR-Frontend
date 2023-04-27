import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import profile from '../assets/images/default.png'
import axios from '../api/api'
import { UserAuth } from '../context/authContext'
import { useMutation } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProfileModal from './ProfileModal'
import { formatPosition } from '../utils/colParser'
const Topbar = ({ open, setOpen }) => {
  const [profileModal, setProfileModal] = useState(false)
  const { token, userData } = UserAuth()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const { setUserData, setToken } = UserAuth()
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const mutation = useMutation({
    mutationFn: () =>
      axios.delete('/auth/logout', {
        headers: { 'Content-Type': 'application/json' },
      }),
    onError: (error) => {
      // setErrorMessage(error.response.data.message);
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
      })
    },
    onSuccess: () => {
      setUserData({})
      setToken(false)
      navigate('/')
    },
  })
  const logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#010100',
      confirmButtonText: 'Logout',
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate()
      }
    })
  }

  return (
    <>
      <div className='bg-[#010100] h-16 px-4 flex items-center border-b border-gray-200 justify-between text-white'>
        <div
          className={` cursor-pointer right-0 top-2 w-8 border-dark-purple
            rounded-full `}
        >
          <HiOutlineMenuAlt3
            size={26}
            className='cursor-pointer'
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className='relative z-10'>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={toggleDropdown}
            className=' flex z-auto items-center cursor-pointer text-sm text-blue bg-[#010100] rounded-t-xl hover:bg-[#181818]  py-[.7rem] px-4'
          >
            <img
              className='h-10 mr-2 rounded-full aspect-square shadow-gray-500 shadow '
              src={userData.imgurl ? userData.imgurl : profile}
            />

            <div className='hidden md:inline'>
              <h1 className='font-semibold'>{userData.fullname}</h1>
              <p className='leading-3 font-meduim text-xs uppercase'>
                {formatPosition(userData.role)}
              </p>
            </div>
          </motion.button>
          {isOpen && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='items-center absolute border border-t-0 rounded-b-lg shadow-lg  bg-white p-2 md:w-[10.4rem] w-[5.1rem] '
            >
              <button
                onClick={() => {
                  setProfileModal(true)
                }}
                className=' px-0 py-2 block bg-white w-full font-semibold text-start text-black hover:text-[#ac7238]'
              >
                Edit Profile
              </button>
              <button
                className='px-0 py-2 block bg-white w-[100%] font-semibold text-start text-black hover:text-[#ac7238]'
                onClick={logout}
              >
                Logout
              </button>
            </motion.div>
          )}
        </div>
      </div>
      {profileModal && <ProfileModal setProfileModal={setProfileModal} />}
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
    </>
  )
}

export default Topbar
