import React from 'react'
import logo from '../../assets/images/backup1.png'
const Backup = () => {
  return (
    <div className='h-full w-full flex gap-20 justify-center items-center'>
      <div className='border-4 border-blue-500 bg-blue-500 w-40 h-44 rounded-lg flex flex-col shadow-lg p-4 gap-4'>
        <img src={logo} />
        <button className='p-2 rounded-lg bg-slate-100'>Backup</button>
      </div>
      <div className='border-4 border-blue-500 bg-blue-500 w-40 h-44 rounded-lg flex flex-col shadow-lg p-4 gap-4'>
        <img src={logo} />
        <button className='p-2 rounded-lg bg-slate-100'>Restore</button>
      </div>
    </div>
  )
}

export default Backup
