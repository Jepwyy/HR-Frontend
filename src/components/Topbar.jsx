import React from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import profile from '../assets/images/dp.jpg'

const Topbar = ({ open, setOpen }) => {
  return (
    <div className='bg-[#010100] h-16 px-4 flex items-center border-b border-gray-200 justify-between text-white'>
      <div
        className={` cursor-pointer right-0 top-2 w-8 border-dark-purple
            rounded-full `}
      >
        <HiOutlineMenuAlt3
          size={26}
          className='cursor-pointer'
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className='relative group z-10'>
        <div className='flex items-center cursor-pointer text-sm text-blue bg-[#181818] group-hover:bg-white group-hover:text-black group-hover:border-grey-light rounded-t-lg py-2 group-hover:py-3 px-4   transition ease-in-out delay-75 group-hover:-translate-y-1  duration-300'>
          <img
            className='h-10 mr-2 rounded-full aspect-square shadow-gray-500 shadow '
            src={profile}
          />

          <div>
            <h1 className='font-semibold'>Kenneth Collado</h1>
            <p className='leading-3 font-meduim text-xs'>Manager</p>
          </div>
        </div>
        <div className='items-center absolute border border-t-0 rounded-b-lg shadow-lg  bg-white p-2 invisible group-hover:visible w-full   transition ease-in-out  group-hover:-translate-y-1  duration-500'>
          <button className=' px-4 py-2 block bg-white w-full font-semibold text-start text-black hover:text-[#ac7238]'>
            Edit Profile
          </button>
          <button className='px-4 py-2 block bg-white w-full font-semibold text-start text-black hover:text-[#ac7238]'>
            Settings
          </button>

          <button className='px-4 py-2 block bg-white w-full font-semibold text-start text-black hover:text-[#ac7238]'>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
