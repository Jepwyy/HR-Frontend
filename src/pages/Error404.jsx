import React from 'react'
import logo from '../assets/images/logo1.png'
import { NavLink } from 'react-router-dom'
import '../style/bg.css'
const Error404 = () => {
  return (
    <div className='bgy h-screen w-full flex flex-col justify-center items-center '>
      <img className='' src={logo} />
      <div className=' flex flex-col justify-center items-center'>
        <h1 className='text-9xl font-extrabold text-white tracking-widest'>
          404
        </h1>
        <div className='bg-[#ac7238] px-2 text-sm rounded rotate-12 absolute'>
          Page Not Found
        </div>
        <button className='mt-5'>
          <a className='relative inline-block text-sm font-medium text-[#ac7238] group active:text-yellow-700 focus:outline-none focus:ring'>
            <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#ac7238] group-hover:translate-y-0 group-hover:translate-x-0'></span>
            <NavLink to='/'>
              <span className='relative block px-8 py-3 bg-[#1A2238] border border-current text-[#ac7238]'>
                Go Home
              </span>
            </NavLink>
          </a>
        </button>
      </div>
    </div>
  )
}

export default Error404
