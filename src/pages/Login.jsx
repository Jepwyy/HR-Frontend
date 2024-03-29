import React, { useState } from 'react'

import LoginForm from '../components/Login/LoginForm'
import LoginRfid from '../components/Login/LoginRfid'
// styles
import '../style/login.css'
// images
import logo from '../assets/images/logo.png'
import { motion } from 'framer-motion'

const Login = () => {
  const [active, setActive] = useState('SecondPage')

  return (
    <div className='flex flex-col md:flex-row justify-center bg-login bg-cover items-center md:h-screen  h-auto '>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 30, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='-mt-24 md:mx-20 md:w-1/2 '
      >
        <img src={logo} alt='logo' className='md:h-auto' />
      </motion.div>

      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -30, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='relative md:w-1/2 w-96 bg-white rounded-lg shadow  md:mt-0 xl:p-0 md:mx-24 mb-3'
      >
        <div className=' w-full p-6 space-y-2 md:space-y-4 sm:p-8 '>
          <div className=''>
            <button
              className={
                active === 'SecondPage'
                  ? 'bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded-l'
                  : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l'
              }
              onClick={() => setActive('SecondPage')}
            >
              RFID
            </button>
            <button
              className={
                active === 'FirstPage'
                  ? 'bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded-r'
                  : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r'
              }
              onClick={() => setActive('FirstPage')}
            >
              FORM
            </button>
          </div>

          {active === 'FirstPage' && <LoginForm />}

          {active === 'SecondPage' && <LoginRfid />}
        </div>
      </motion.div>
    </div>
  )
}

export default Login
