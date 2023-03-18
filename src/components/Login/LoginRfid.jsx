import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import axios from '../../api/api'
import { useMutation } from 'react-query'
import { UserAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import TapCard from '../../assets/images/TapCard.png'
import { motion } from 'framer-motion'
// styles
// images

import Spinner from '../InfiniteLoader'

const LoginRfid = () => {
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
      axios.post('/auth/admin-card', userdetails, {
        headers: { 'Content-Type': 'application/json' },
      }),
    onError: (error) => {
      setMessage(error.response.data.message)
      Swal.fire({
        title: 'Error',
        text: `${error.response.data.message}`,
        icon: 'error',
        timer: 2000,
        // allowOutsideClick: false,
        showConfirmButton: false,
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
      toast.error(`${'Invalid RFID. Please Try Again'}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
      })
    }

    formRef.current.reset()
  }
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className=' '>
        {mutation.isLoading && <Spinner />}
        {/* <div className='flex items-center justify-center m-auto left-0 right-0 absolute'>
          
        </div> */}
        <div className='flex flex-col justify-center pt-7'>
          <img className='h-[19.2rem]' src={TapCard} />
          <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl border-b-4 border-black mx-16'>
            TAP YOUR CARD
          </h1>
        </div>

        <form
          ref={formRef}
          className='relative space-y-4 md:space-y-5 md:pb-[1.4rem] pb-[2.0rem]'
          onSubmit={handleSubmit}
        >
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
    </motion.div>
  )
}

export default LoginRfid
