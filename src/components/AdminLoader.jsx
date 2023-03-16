import React from 'react'
import logo from '../assets/images/mainlogo1.png'
import loader from '../assets/images/Bars.svg'
const AdminLoader = () => {
  return (
    <div className='absolute z-20 inset-0 bg-white bg-opacity-75  flex items-center justify-center py-2 overflow-y-auto'>
      <div className='flex flex-col justify-center items-center'>
        <div className='animate-bounce'>
          <img className=' h-36 ' src={logo} />
        </div>

        <div class=''>
          <img
            className='mb-2 h-20 w-40 object-cover object-center '
            src={loader}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminLoader
