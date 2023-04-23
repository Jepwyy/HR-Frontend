import React, { useState } from 'react'
import logo from '../../assets/images/backup1.png'
import AutoBackup from '../../components/Backup/AutoBackup'
import ManualLayout from '../../components/Backup/ManualLayout'
import { BsCloudArrowUpFill } from 'react-icons/bs'
import { GiDatabase } from 'react-icons/gi'
//import { BsDatabaseDown } from 'react-icons/bs'
// import { MdOutlineBackup } from 'react-icons/md'
const Backup = () => {
  const [active, setActive] = useState('FirstPage')

  return (
    <div className='p-4 md:p-12'>
      <div className='flex md:flex-row flex-col md:items-end items-start mb-2'>
        <h1 className='text-2xl md:block mr-4 md:text-4xl font-bold'>
          Database Backup
        </h1>
      </div>
      <div className='flex flex-row mt-10 gap-5'>
        <div className='h-full w-[20%] flex flex-col justify-center items-center gap-1'>
          <div className='bg-[#F3F3F3] w-full h-60 rounded-lg flex flex-col shadow-md p-4'>
            <div className='flex justify-center'>
              <BsCloudArrowUpFill size={150} />
            </div>
            <button
              onClick={() => setActive('SecondPage')}
              className='p-2 rounded-lg bg-[#ba844e] hover:bg-[#ac7238] text-white'
            >
              Automatic Backup
            </button>
          </div>
          <div className='bg-[#F3F3F3] w-full h-60  rounded-lg flex flex-col shadow-lg p-4'>
            <div className='flex justify-center'>
              <GiDatabase size={140} />
            </div>
            <button
              onClick={() => setActive('ThirdPage')}
              className='p-2 rounded-lg text-white bg-[#ba844e] hover:bg-[#ac7238] mt-2'
            >
              Manual Backup
            </button>
          </div>
        </div>
        <div className='h-full w-[80%]'>
          {active === 'SecondPage' && <AutoBackup />}
          {active === 'ThirdPage' && <ManualLayout />}
        </div>
      </div>
    </div>
  )
}

export default Backup
