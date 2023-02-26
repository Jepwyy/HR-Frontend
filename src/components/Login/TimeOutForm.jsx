import React from 'react'
import TapCard from '../../assets/images/TapCard.png'
const TimeOutForm = () => {
  return (
    <>
      <h1 className='flex justify-start text-sm font-semibold leading-tight tracking-tight text-gray-900 md:text-xl'>
        Time Out
      </h1>
      <div className='flex flex-col justify-center'>
        <img className='h-72' src={TapCard} />
        <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl border-b-4 border-black mx-16'>
          TAP YOUR CARD
        </h1>
      </div>

      <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl'></h1>
      <form className='relative space-y-4 md:space-y-5'>
        <div className='flex items-center justify-center'></div>
        <input type='text' className='text-white outline-none' />
        <button type='submit' className='hidden' disabled>
          test
        </button>
      </form>
    </>
  )
}

export default TimeOutForm
