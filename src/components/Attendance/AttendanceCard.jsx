import React from 'react'

const AttendanceCard = () => {
  return (
    <div className='py-10 px-5 h-full flex flex-col justify-between bg-[#F3F3F3] overflow-y-auto max-h-[400px]'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-2xl'>LOGS</h1>
        <select
          name='sortby'
          className='w-40 text-center h-8 font-semibold border-2 border-[#010100] bg-white'
        >
          <option value='...'>THIS WEEK</option>
          <option value='...'>THIS MONTH</option>
        </select>
      </div>
      <h1>Name: Abdol Jabol</h1>
      <div className=' overflow-y-auto'>
        <table className='w-full text-sm text-left text-[#010100] border border-[#010100] overflow-y-auto max-h-[500px]'>
          <thead className=' text-gray-50 text-sm uppercase bg-[#010100] sticky -top-[0.10rem]'>
            <tr className='py-10'>
              <th className='p-4 md:p-4'>DAY</th>
              <th className='p-4 md:p-4'>DATE</th>
              <th className='p-4 md:p-4'>TIME IN</th>
              <th className='p-4 md:p-4'>TIME OUT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>adasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>adasdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasdasd</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>adasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>adasdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasdasd</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>adasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>adasdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasdasd</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>adasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>adasdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasdasd</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>adasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>adasdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasdasd</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>adasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>adasdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasdasd</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>adasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>adasdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasdasd</td>
            </tr>
            <tr>
              <td className='p-2 md:p-4 border border-[#010100]'>adasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>adasdasd</td>
              <td className='p-2 md:p-4 border border-[#010100]'>asdasdasd</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  )
}

export default AttendanceCard
