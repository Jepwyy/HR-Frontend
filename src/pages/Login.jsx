import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'

import LoginForm from '../components/Login/LoginForm'
import RfidForm from '../components/Login/RfidForm'
// styles
import '../style/login.css'
// images
import logo from '../assets/images/logo.png'

const Login = () => {
  const [active, setActive] = useState('FirstPage')

  return (
    <div className='flex flex-col md:flex-row justify-center bg-login bg-cover items-center md:h-screen  h-auto '>
      <div className='-mt-24 md:mx-20 md:w-1/2'>
        <img src={logo} alt='logo' className='md:h-auto' />
      </div>

      <div className=' md:w-1/2 w-96 bg-white rounded-lg shadow  md:mt-0 xl:p-0 md:mx-24 mb-3'>
        <div className=' w-full p-6 space-y-2 md:space-y-4 sm:p-8 '>
          <div className=''>
            <button
              className={
                active === 'FirstPage'
                  ? 'bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded-l'
                  : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l'
              }
              onClick={() => setActive('FirstPage')}
            >
              FORM
            </button>
            <button
              className={
                active === 'SecondPage'
                  ? 'bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded-r'
                  : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r'
              }
              onClick={() => setActive('SecondPage')}
            >
              RFID
            </button>
          </div>
          <div className=''>
            {active === 'FirstPage' && <LoginForm />}
            {active === 'SecondPage' && <RfidForm />}
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}

export default Login
