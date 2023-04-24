import React from 'react'

import { BsBackspaceFill } from 'react-icons/bs'

const SuspendModal = ({ setModalSuspend }) => {
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
          <div className='px-16'>
            <h1 className='font-semibold text-lg mt-4'>DATE</h1>
            <input
              className='w-[48%] border border-black'
              type='date'
              name='startDate'
            />{' '}
            -{' '}
            <input
              className='w-[48%] border border-black'
              type='date'
              name='endDate'
            />
            <h1>Number of Days: 0</h1>
            <div className='flex justify-end'>
              <button className=' bg-[#ac7238] py-1 px-5  text-white rounded-full font-semibold'>
                Suspend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuspendModal
