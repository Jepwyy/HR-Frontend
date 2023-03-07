import React, { useEffect, useRef } from 'react'
import TapCard from '../../../assets/images/TapCard.png'
import { BsBackspaceFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
const ScanRfidModal = ({ setModalScanner, setEmployee, employee }) => {
  const formRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()
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

  const handleRFID = () => {
    setEmployee({ ...employee, rfid: inputRef.current.value })
    setModalScanner(false)
  }
  return (
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center overflow-auto'>
      <div className='bg-white p-2 rounded md:w-[40rem] w-96 md:mt-0 mt-56 mb-2 '>
        <div className='flex justify-end px-py'>
          <BsBackspaceFill
            size={40}
            className='cursor-pointer'
            onClick={() => {
              setModalScanner(false)
            }}
          />
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
          onSubmit={handleRFID}
        >
          <input
            type='text'
            ref={inputRef}
            className='text-white outline-none'
          />
          <button
            type='submit'
            className='hidden'
          >
            test
          </button>
        </form>
      </div>
    </div>
  )
}

export default ScanRfidModal
