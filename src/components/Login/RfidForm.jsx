import React, { useState } from 'react'
import TimeInForm from './TimeInForm'
import TimeOutForm from './TimeOutForm'
const RfidForm = () => {
  const [page, setPage] = useState('FirstPage')
  return (
    <div>
      <div className='flex justify-end'>
        <button
          className={
            page === 'FirstPage'
              ? 'bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded-l'
              : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l'
          }
          onClick={() => setPage('FirstPage')}
        >
          Time In
        </button>
        <button
          className={
            page === 'SecondPage'
              ? 'bg-gray-600 text-gray-50 font-bold py-2 px-4 rounded-r'
              : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r'
          }
          onClick={() => setPage('SecondPage')}
        >
          Time Out
        </button>
      </div>

      {page === 'FirstPage' && <TimeInForm />}
      {page === 'SecondPage' && <TimeOutForm />}
    </div>
  )
}

export default RfidForm
