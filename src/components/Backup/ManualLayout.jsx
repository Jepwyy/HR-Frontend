import React, { useState } from 'react'
import ManualBackup from './ManualBackup'
import ManualRestore from './ManualRestore'
const ManualLayout = () => {
  const [active, setActive] = useState('FirstPage')
  return (
    <div>
      <div className=' w-full h-[27.2rem]'>
        <div className='flex gap-[1px]'>
          <button
            className={
              active === 'FirstPage'
                ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 rounded-l'
                : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l'
            }
            onClick={() => setActive('FirstPage')}
          >
            Backup
          </button>
          <button
            className={
              active === 'SecondPage'
                ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 rounded-r'
                : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r'
            }
            onClick={() => setActive('SecondPage')}
          >
            Restore
          </button>
        </div>
        <div className='w-full   bg-[#F3F3F3] mt-2  h-full'>
          {active === 'FirstPage' && <ManualBackup />}
          {active === 'SecondPage' && <ManualRestore />}
        </div>
      </div>
    </div>
  )
}

export default ManualLayout
