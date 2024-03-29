import React, { useRef } from 'react'
import { useState } from 'react'
import axios from '../../api/api'
import { useMutation } from 'react-query'
import { UserAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { motion } from 'framer-motion'
// styles

// images

import icon from '../../assets/images/login.png'
import Spinner from '../InfiniteLoader'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUserData, setToken } = UserAuth()
  const navigate = useNavigate()
  const passwordRef = useRef(null)

  const mutation = useMutation({
    mutationFn: (userdetails) =>
      axios.post('/auth/login', userdetails, {
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
    onSuccess: (data) => {
      setUserData(data.data.user[0])
      setToken(true)
      navigate('/dashboard')
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({
      username: username,
      password: password,
    })
  }

  const show = () => {
    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text'
    } else {
      passwordRef.current.type = 'password'
    }
  }
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='md:mx-5'
    >
      <div className='flex justify-center'>
        <img
          className='h-[161px]'
          src={icon}
        />
      </div>
      {mutation.isLoading && <Spinner />}
      <form
        className=' space-y-4 md:space-y-5'
        onSubmit={handleSubmit}
      >
        {/* <div className='flex items-center justify-center m-auto left-0 right-0 absolute'>
          
        </div> */}
        <div className=''>
          <label className=' block mb-2 text-sm mr-[80%] font-medium text-gray-900'>
            Username
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   '
            placeholder='Enter Username'
            type='text'
            autoFocus
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className=''>
          <label className=' place-self-start block mb-2 text-sm mr-[80%] font-medium text-gray-900'>
            Password
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   '
            type='password'
            name='password'
            id='password'
            ref={passwordRef}
            placeholder='Enter Password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-start'>
            <div className='ml-1 flex items-center h-5'>
              <input
                type='checkbox'
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300'
                required=''
                onClick={show}
              />
            </div>
            <div className='ml-1 text-sm'>
              <label className='text-gray-500 '>Show Password</label>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button
            className='mr-3 rounded-lg bg-[#ac7238] py-3 px-6 font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            type='submit'
            disabled={mutation.isLoading}
          >
            Login
          </button>
        </div>
      </form>
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
    </motion.div>
  )
}

export default LoginForm
