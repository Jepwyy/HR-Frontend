import React from 'react'

import { ToastContainer, toast } from 'react-toastify'

// styles
import '../style/login.css'
// images
import logo from '../assets/images/logo.png'
import RfidForm from '../components/Login/TimeInForm'

const LoginViaCard = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center bg-login bg-cover items-center  md:h-screen h-[160vh] '>
      <div className='md:mx-20 md:w-1/2'>
        <img src={logo} alt='logo' className='md:h-auto' />
      </div>

      <div className=' md:w-1/2 w-80 bg-white rounded-lg shadow  md:mt-0  xl:p-0 md:mx-20'>
        <div className=' w-full p-6 space-y-4 md:space-y-6 sm:p-8 '>
          <TimeInForm />
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

export default LoginViaCard
