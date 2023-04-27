import React from 'react'

import { BsBackspaceFill } from 'react-icons/bs'

const ProfileModal = ({ setProfileModal }) => {
  return (
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center overflow-auto'>
      <div className='bg-white p-2 rounded md:w-[40%] w-[60%] md:mt-0 mt-56 mb-2 '>
        <div className='flex justify-end px-py'>
          <BsBackspaceFill
            size={40}
            className='cursor-pointer'
            onClick={() => {
              setProfileModal(false)
            }}
          />
        </div>
        <div className='flex flex-col pb-5'>
          <h1>test</h1>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
