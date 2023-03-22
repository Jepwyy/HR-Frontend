import React, { useState } from 'react'
import { BsBackspaceFill } from 'react-icons/bs'
import PayslipModal from './PayslipModal'
const PayrollHistoryModal = ({ setModalHistory }) => {
  const [modalPayslip, setModalPayslip] = useState(false)
  return (
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center overflow-auto'>
      <div className='bg-white p-2 rounded md:w-[70%] w-96 md:my-auto my-auto '>
        <div className='flex justify-end px-py'>
          <BsBackspaceFill
            size={40}
            className='cursor-pointer'
            onClick={() => {
              setModalHistory(false)
            }}
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='flex mb-3 justify-center text-xl font-bold leading-tight tracking-tight text-black md:text-2xl uppercase'>
            Payroll History
          </h1>
          <div className='overflow-x-auto max-h-[269px] border-4 border-[#010100] mb-1'>
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
                    Abdul Jabol
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    2/11/2023
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 3,900
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 5,415
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100] text-center'>
                    <button
                      onClick={() => {
                        setModalPayslip(true)
                      }}
                      className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                    >
                      Payslip
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    Abdul Jabol
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    2/11/2023
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 3,900
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 5,415
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100] text-center'>
                    <button
                      onClick={() => {
                        setModalPayslip(true)
                      }}
                      className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                    >
                      Payslip
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    Abdul Jabol
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    2/11/2023
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 3,900
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 5,415
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100] text-center'>
                    <button
                      onClick={() => {
                        setModalPayslip(true)
                      }}
                      className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                    >
                      Payslip
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    Abdul Jabol
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    2/11/2023
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 3,900
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 5,415
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100] text-center'>
                    <button
                      onClick={() => {
                        setModalPayslip(true)
                      }}
                      className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                    >
                      Payslip
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    Abdul Jabol
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    2/11/2023
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 3,900
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 5,415
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100] text-center'>
                    <button
                      onClick={() => {
                        setModalPayslip(true)
                      }}
                      className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                    >
                      Payslip
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    Abdul Jabol
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    2/11/2023
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 3,900
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 5,415
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100] text-center'>
                    <button
                      onClick={() => {
                        setModalPayslip(true)
                      }}
                      className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                    >
                      Payslip
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    Abdul Jabol
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    2/11/2023
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 3,900
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 5,415
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100] text-center'>
                    <button
                      onClick={() => {
                        setModalPayslip(true)
                      }}
                      className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                    >
                      Payslip
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    Abdul Jabol
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    2/11/2023
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 3,900
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100]'>
                    ₱ 5,415
                  </td>
                  <td className='p-2 md:p-3 border border-[#010100] text-center'>
                    <button
                      onClick={() => {
                        setModalPayslip(true)
                      }}
                      className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                    >
                      Payslip
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {modalPayslip && <PayslipModal setModalPayslip={setModalPayslip} />}
      </div>
    </div>
  )
}

export default PayrollHistoryModal
