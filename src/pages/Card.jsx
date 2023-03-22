import React, { useState } from 'react'

import TimeInForm from '../components/Login/TimeInForm'
import TimeOutForm from '../components/Login/TimeOutForm'
import '../style/login.css'
// images
import logo from '../assets/images/logo.png'
const Card = () => {
  const [page, setPage] = useState('FirstPage')
  return (
    <div className='flex flex-col md:flex-row justify-center bg-login bg-cover items-center md:h-screen  h-auto '>
      <div className='-mt-24 md:mx-20 md:w-1/2 '>
        <img src={logo} alt='logo' className='md:h-auto' />
      </div>

      <div className=' md:w-1/2 w-96 bg-white rounded-lg shadow  md:mt-0 xl:p-0 md:mx-24 mb-3'>
        <div className=' w-full p-6 space-y-2 md:space-y-4 sm:p-8 '>
          <div className='flex justify-end'>
            <button
              className={
                page === 'FirstPage'
                  ? 'bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded-l'
                  : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l'
              }
              onClick={() => setPage('FirstPage')}
            >
              Time In
            </button>
            <button
              className={
                page === 'SecondPage'
                  ? 'bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded-r'
                  : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r'
              }
              onClick={() => setPage('SecondPage')}
            >
              Time Out
            </button>
          </div>

          {page === 'FirstPage' && <TimeInForm />}
          {page === 'SecondPage' && <TimeOutForm />}
        </div>
      </div>
    </div>
  )
}

export default Card
