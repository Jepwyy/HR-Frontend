import React from 'react'
import logo from '../assets/images/loaderr.png'
import '../style/loader.css'
const LogoLoader = () => {
  return (
    <div className='absolute z-20 inset-0 bg-white bg-opacity-75  flex items-center justify-center py-2 overflow-y-auto'>
      <div className='flex flex-col justify-center items-center'>
        <div className='animate-bounce'>
          <img className='mb-2 h-28 ' src={logo} />
        </div>

        <div class='dots'></div>
      </div>
    </div>
  )
}

export default LogoLoader
