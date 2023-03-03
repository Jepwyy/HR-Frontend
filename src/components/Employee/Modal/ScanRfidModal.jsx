import React from 'react'
import TapCard from '../../../assets/images/TapCard.png'
import { BsBackspaceFill } from 'react-icons/bs'
const ScanRfidModal = ({ setModalScanner }) => {
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
          <img className='h-[19.2rem]' src={TapCard} />
          <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl border-b-4 border-black mx-16'>
            TAP YOUR CARD
          </h1>
        </div>

        <form className='relative space-y-4 md:space-y-5'>
          <input className='text-white outline-none' />
          <button className='hidden'>test</button>
        </form>
      </div>
    </div>
  )
}

export default ScanRfidModal
