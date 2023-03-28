import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiUserGroup } from 'react-icons/hi'
import { AiFillSchedule } from 'react-icons/ai'
import { MdOutlineDashboard, MdArchive } from 'react-icons/md'
import { RiHealthBookFill } from 'react-icons/ri'
import { TbReportMoney } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { FcAcceptDatabase, FcOvertime, FcLeave } from 'react-icons/fc'
// pages
import Topbar from './Topbar'

import logo from '../assets/images/logo.png'

const Sidebar = ({ open, setOpen }) => {
  const menus = [
    { name: 'Dashboard', link: '/dashboard', icon: MdOutlineDashboard },
    { name: "Employees' List", link: '/employee-list', icon: HiUserGroup },
    { name: "Employees' Leave", link: '/employee-leave', icon: FcLeave },
    {
      name: 'Attendance Monitoring',
      link: '/attendance',
      icon: RiHealthBookFill,
    },
    { name: 'Payroll', link: '/payroll', icon: TbReportMoney },
    { name: 'Archive', link: '/archive', icon: MdArchive },
    { name: 'Audit Logs', link: '/audit-logs', icon: FcOvertime },
    { name: 'Backup', link: '/backup', icon: FcAcceptDatabase },
  ]

  // const [open, setOpen] = useState(true);

  return (
    <div>
      <div className='flex gap-6'>
        <div
          className={`bg-sidebar bg-cover bg-repeat-y min-h-screen ${
            open ? 'md:w-72 w-60' : 'w-16'
          }  duration-500 text-gray-100 px-4`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className='flex gap-x-4 items-center justify-center'
          >
            <img
              src={logo}
              className={`mt-4 cursor-pointer w-40 duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            />
          </motion.div>
          <div className='mt-3 flex flex-col gap-4 relative'>
            {menus?.map((menu, i) => (
              <NavLink
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && 'mt-5'
                }   group flex items-center text-sm  gap-3.5 font-medium p-2 pr-7 hover:bg-gray-800 rounded-md`}
              >
                <div>
                  {React.createElement(menu?.icon, {
                    size: '20',
                    color: 'white',
                  })}
                </div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={` whitespace-pre text-white duration-500 ${
                    !open && 'opacity-0 translate-x-28 overflow-hidden'
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && 'hidden'
                  } absolute z-10 left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
