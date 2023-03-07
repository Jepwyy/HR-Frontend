import React, { useEffect, useRef, useState } from 'react'
import TapCard from '../../assets/images/TapCard.png'
import Swal from 'sweetalert2'
import axios from '../../api/api'
import { useMutation } from 'react-query'
import Spinner from '../Spinner'

const TimeOutForm = () => {
  const [message, setMessage] = useState('')
  const [rfid, setRFID] = useState(null)
  const formRef = useRef(null)
  const inputRef = useRef(null)

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
      axios.post('/auth/timeout', userdetails, {
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
      Swal.fire({
        title: 'Invalid RFID. Please Try Again',
        text: `Invalid RFID`,
        icon: 'error',
        timer: 2000,
        showConfirmButton: false,
      })
    }

    formRef.current.reset()
  }
  return (
    <div className='relative'>
      <h1 className='flex justify-start text-sm font-semibold leading-tight tracking-tight text-gray-900 md:text-xl'>
        Time Out
      </h1>
      <div className='flex items-center justify-center m-auto left-0 right-0 absolute'>
        {mutation.isLoading && <Spinner />}
      </div>
      <div className='flex items-center justify-center m-auto left-0 right-0 absolute'></div>
      <div className='flex flex-col justify-center'>
        <img
          className='h-[19.2rem]'
          src={TapCard}
        />
        <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl border-b-4 border-black mx-16'>
          TAP YOUR CARD
        </h1>
      </div>

      <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl'></h1>
      <form
        className='relative space-y-4 md:space-y-5'
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='text-white outline-none'
          ref={inputRef}
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

export default TimeOutForm
