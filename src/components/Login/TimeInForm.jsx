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
import { format, parseISO } from 'date-fns'
import { toast } from 'react-toastify'

const TimeInForm = () => {
  const [message, setMessage] = useState('')
  const formRef = useRef(null)
  const inputRef = useRef(null)
  const [rfid, setRFID] = useState(null)
  // const { setUserData, setToken } = UserAuth()
  // const navigate = useNavigate()
  // const passwordRef = useRef(null)

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
      let timerInterval
      if (error.response.status === 403) {
        Swal.fire({
          title: 'Attention',
          html: `Are you sure you want to log out before the end of your scheduled shift? 
          Tap the card again if you want to continue. <br /> <b class='text-2xl'>10</b>`,
          icon: 'warning',
          allowOutsideClick: false,
          focusConfirm: true,
          allowEscapeKey: false,
          timer: 10000,
          showConfirmButton: true,
          didOpen: () => {
            // Swal.showLoading()
            let timer = 9
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = timer--
            }, 1000)
          },
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.isConfirmed) {
            mutation.mutate({ rfid: rfid, isConfirmed: true })
            inputRef.current.focus()
          }
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: 'Logout Cancelled',
              showConfirmButton: false,
              icon: 'info',
              timer: 2000,
            })
            inputRef.current.focus()
          }
        })
      } else if (error.response.data.suspended) {
        Swal.fire({
          title: 'You are suspended',
          html: `Reason: ${
            error.response.data.message
          } <br> Valid Until: ${format(
            parseISO(error.response.data.validuntil),
            'MM/dd/yyyy'
          )}`,
          icon: 'error',
          timer: 3000,
          showConfirmButton: false,
        })
      } else {
        Swal.fire({
          title: 'Error',
          text: `${error.response.data.message}`,
          icon: 'error',
          timer: 2000,
          // allowOutsideClick: false,
          showConfirmButton: false,
        })
      }
    },
    onSuccess: (data) => {
      Swal.fire({
        title: 'Success',
        text: `${data.data.message}`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      })
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
          onChange={(e) => setRFID(e.target.value)}
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
