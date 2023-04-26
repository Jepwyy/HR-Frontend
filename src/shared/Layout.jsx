import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }
  const variantsTop = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }
  const [open, setOpen] = useState(true)
  return (
    <div className='flex flex-row h-screen'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        transition={{ duration: 0.5 }}
        className=''
      >
        <Sidebar open={open} setOpen={setOpen} />
      </motion.div>

      <div className='overflow-hidden w-screen'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variantsTop}
          transition={{ duration: 0.5 }}
          className='flex flex-col flex-1 w-full'
        >
          <Topbar open={open} setOpen={setOpen} />
        </motion.div>
        <div className='flex-1 p-0 min-h-0 bg-white h-full w-full overflow-auto relative'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
