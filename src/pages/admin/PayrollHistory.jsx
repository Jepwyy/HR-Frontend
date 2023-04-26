import React, { useState } from 'react'
import HistoryPayslip from '../../components/Payroll History/HistoryPayslip'
import HistoryHeader from '../../components/Payroll History/HistoryHeader'
import Spinner from '../../components/AdminLoader'
import axios from '../../api/api'
import { useQuery } from 'react-query'
import { formatDepartment, formatPosition } from '../../utils/colParser'
import { format, parseISO } from 'date-fns'
import { formatPrice } from '../../utils/priceFormatter'

const Table = ({ handleModal }) => {
  const { data, isLoading, isError } = useQuery('payrollList', () =>
    axios.get('/payroll/get').then((res) => res.data)
  )

  if (isLoading) return <Spinner />
  if (isError)
    return (
      <tr>
        <td colSpan={7}>Error...</td>
      </tr>
    )

  if (!data.length)
    return (
      <tr>
        <td colSpan={7}>No Data</td>
      </tr>
    )
  return (
    <>
      {data?.map((item, index) => (
        <tr key={index}>
          <td className='p-2 md:p-3 border border-[#010100]'>
            {item.fullname}
          </td>
          <td className='p-2 md:p-3 border border-[#010100]'>
            {formatDepartment(item.department)}
          </td>
          <td className='p-2 md:p-3 border border-[#010100]'>
            {formatPosition(item.role)}
          </td>
          <td className='p-2 md:p-3 border border-[#010100]'>
            {format(parseISO(item.paydate), 'M/d/yyyy')}
          </td>
          <td className='p-2 md:p-3 border border-[#010100]'>
            {formatPrice(item.grosspay)}
          </td>
          <td className='p-2 md:p-3 border border-[#010100]'>
            {formatPrice(item.netpay)}
          </td>
          <td className='p-2 md:p-3 border border-[#010100] text-center'>
            <button
              onClick={() => handleModal(item.id)}
              className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
            >
              Payslip
            </button>
          </td>
        </tr>
      ))}
    </>
  )
}

const PayrollHistory = () => {
  const [modalHistory, setModalHistory] = useState(false)
  const [id, setID] = useState(0)

  const handleModal = (id) => {
    setID(id)
    setModalHistory(true)
  }

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
            <Table handleModal={handleModal} />
          </tbody>
        </table>
      </div>
      {modalHistory && (
        <HistoryPayslip setModalHistory={setModalHistory} id={id} />
      )}
    </div>
  )
}

export default PayrollHistory
