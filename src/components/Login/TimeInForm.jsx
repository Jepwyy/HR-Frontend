import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import axios from '../../api/api'
import { useMutation } from 'react-query'
import { UserAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import TapCard from '../../assets/images/TapCard.png'
// styles
// images

import Spinner from '../Spinner'

const TimeInForm = () => {
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
      if (data.status === 200) {
        setUserData(data.data.user[0])
        setToken(true)
        navigate('/employee-list')
      } else {
        Swal.fire({
          title: 'Success',
          text: `${data.data.message}`,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        })
      }
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
    <div className='relative'>
      <h1 className='flex justify-start text-sm font-semibold leading-tight tracking-tight text-gray-900 md:text-xl'>
        Time In
      </h1>
      <div className='flex items-center justify-center m-auto left-0 right-0 absolute'>
        {mutation.isLoading && <Spinner />}
      </div>
      <div className='flex flex-col justify-center'>
        <img
          className='h-[19.2rem]'
          src={TapCard}
        />
        <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl border-b-4 border-black mx-16'>
          TAP YOUR CARD
        </h1>
      </div>

      <form
        ref={formRef}
        className='relative space-y-4 md:space-y-5'
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
  )
}

export default TimeInForm
