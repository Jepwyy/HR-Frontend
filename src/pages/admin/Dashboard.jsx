import React from 'react'
import dp from '../../assets/images/dp.jpg'
const Dashboard = () => {
  return (
    <div className='p-4 md:p-12'>
      <div className='flex justify-between'>
        <div className='border-4 border-slate-900 w-52 h-20'>
          <img className='w-full h-full' src={dp} />
        </div>
        <div className='border-4 border-slate-900 w-52 h-20'>
          <img className='w-full h-full' src={dp} />
        </div>
        <div className='border-4 border-slate-900 w-52 h-20'>
          <img className='w-full h-full' src={dp} />
        </div>
        <div className='border-4 border-slate-900 w-52 h-20'>
          <img className='w-full h-full' src={dp} />
        </div>
      </div>
      <div className='border-4 border-slate-900 w-full h-96 mt-16'>
        <img className='w-full h-full' src={dp} />
      </div>
    </div>
  )
}

export default Dashboard
