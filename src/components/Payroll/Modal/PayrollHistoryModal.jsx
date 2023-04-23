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
          <div className='overflow-x-auto max-h-[269px] border-4 border-[#010100] mb-1'></div>
        </div>
        {modalPayslip && <PayslipModal setModalPayslip={setModalPayslip} />}
      </div>
    </div>
  )
}

export default PayrollHistoryModal
