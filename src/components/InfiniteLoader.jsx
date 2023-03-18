import React from 'react'
import logo from '../assets/images/mainlogo1.png'
import loader from '../assets/images/Infinity.svg'
import { motion } from 'framer-motion'
const InfiniteLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className='absolute z-20 inset-0 bg-white bg-opacity-75  flex items-center justify-center py-2 overflow-y-auto'
    >
      <div className='flex flex-col justify-center items-center'>
        <div className='animate-bounce'>
          <img className='h-36' src={logo} />
        </div>

        <div className=''>
          <img
            className='mb-2 h-20 w-40 object-cover object-center '
            src={loader}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default InfiniteLoader
