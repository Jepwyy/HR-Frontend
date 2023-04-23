import React, { useState } from 'react'
import HistoryPayslip from '../../components/Payroll History/HistoryPayslip'
import HistoryHeader from '../../components/Payroll History/HistoryHeader'
const PayrollHistory = () => {
  const [modalHistory, setModalHistory] = useState(false)
  return (
    <div className='p-4 md:p-12'>
      <HistoryHeader />
      <div className='overflow-x-auto max-h-[400px]'>
        <table className='border-separate border-spacing-0 w-full text-sm text-left text-[#010100]  overflow-y-auto '>
          <thead className='text-xs text-gray-50 uppercase border-2 border-[#010100] bg-[#010100] sticky -top-[0.10rem]'>
            <tr>
              <th className='p-2 md:p-[17px]'>Employee</th>
              <th className='p-2 md:p-[17px]'>Department</th>
              <th className='p-2 md:p-[17px]'>Position</th>
              <th className='p-2 md:p-[17px]'>Pay Date</th>
              <th className='p-2 md:p-[17px]'>Gross Pay</th>
              <th className='p-2 md:p-[17px]'>Net Pay</th>

              <th className='p-2 md:p-[17px]'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-2 md:p-3 border border-[#010100]'>
                John Mark Familgan
              </td>
              <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
              <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/11/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>₱ 3,900</td>
              <td className='p-2 md:p-3 border border-[#010100]'>₱ 5,415</td>
              <td className='p-2 md:p-3 border border-[#010100] text-center'>
                <button
                  onClick={() => setModalHistory(true)}
                  className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                >
                  Payslip
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {modalHistory && <HistoryPayslip setModalHistory={setModalHistory} />}
    </div>
  )
}

export default PayrollHistory
