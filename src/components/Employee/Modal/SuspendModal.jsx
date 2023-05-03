import { addDays, format, parseISO } from 'date-fns'
import React, { useState } from 'react'

import { BsBackspaceFill } from 'react-icons/bs'

const SuspendModal = ({ setModalSuspend, suspendEmployee }) => {
  const [date, setDate] = useState(null)
  const [message, setMessage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    suspendEmployee(date, message)
  }

  return (
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center overflow-auto'>
      <div className='bg-white p-2 rounded md:w-[40%] w-[60%] md:mt-0 mt-56 mb-2 '>
        <div className='flex justify-end px-py'>
          <BsBackspaceFill
            size={40}
            className='cursor-pointer'
            onClick={() => {
              setModalSuspend(false)
            }}
          />
        </div>
        <div className='flex flex-col pb-5'>
          <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl border-b-2 border-black mx-16'>
            Employee Suspension
          </h1>
          <div className='px-16 mt-2 flex gap-2 justify-center'>
            <form onSubmit={handleSubmit}>
              <div className='flex gap-2 justify-center'>
                <h1 className='text-xl'>Valid Until</h1>
                <input
                  type='date'
                  className='border border-black'
                  onChange={(e) => setDate(e.target.value)}
                  min={format(addDays(new Date(), 1), 'yyyy-MM-dd')}
                />
              </div>
              <div className='mt-2 flex flex-col items-center'>
                <textarea
                  cols='30'
                  rows='5'
                  className='border border-black text-center'
                  placeholder='Reason of Suspension'
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button className='mt-4 bg-[#ac7238] h-8 px-5 gap-1 text-white rounded-full font-semibold'>
                  Suspend
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuspendModal
