import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import axios from '../api/api'
import { useMutation } from 'react-query'
import { UserAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

// styles
import '../style/login.css'
// images
import logo from '../assets/images/logo.png'
import Spinner from '../components/Spinner'

const LoginViaCard = () => {
  const [message, setMessage] = useState('')
  const formRef = useRef(null)
  const inputRef = useRef(null)
  const { setUserData, setToken } = UserAuth()
  const navigate = useNavigate()
  const passwordRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    function handleClick(event) {
      const clickedElement = event.target

      // Check if the clicked element is the input element or one of its descendants
      if (inputRef.current.contains(clickedElement)) {
        return
      }

      // If the clicked element is not the input element or one of its descendants, focus the input element
      inputRef.current.focus()
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const mutation = useMutation({
    mutationFn: (userdetails) =>
      axios.post('/auth/card', userdetails, {
        headers: { 'Content-Type': 'application/json' },
      }),
    onError: (error) => {
      setMessage(error.response.data.message)
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
      navigate('/employee-list')
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('')
    const rfidRegex = /^\d{10}$/

    if (rfidRegex.test(inputRef.current.value)) {
      mutation.mutate({
        rfid: inputRef.current.value,
      })
    } else {
      setMessage('Invalid RFID. Please Try Again')
    }

    formRef.current.reset()
  }

  return (
    <div className='flex flex-col md:flex-row justify-center items-center h-screen w-screen'>
      <div className='md:mx-20 md:w-1/2'>
        <img
          src={logo}
          alt='logo'
          className='md:h-auto'
        />
      </div>

      <div className=' md:w-1/2 w-80 bg-white rounded-lg shadow  md:mt-0  xl:p-0 md:mx-20'>
        <div className=' w-full p-6 space-y-4 md:space-y-6 sm:p-8 '>
          <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl'>
            TAP YOUR CARD
          </h1>
          <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl'>
            {message}
          </h1>

          <form
            ref={formRef}
            className='relative space-y-4 md:space-y-5'
            onSubmit={handleSubmit}
          >
            <div className='flex items-center justify-center'>
              {mutation.isLoading && <Spinner />}
            </div>
            <input
              type='text'
              ref={inputRef}
              className='text-white outline-none'
            />
            <button
              type='submit'
              className='hidden'
              disabled={mutation.isLoading}
            >
              test
            </button>
          </form>
        </div>
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

export default LoginViaCard
