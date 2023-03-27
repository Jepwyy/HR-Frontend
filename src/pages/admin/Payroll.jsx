import React, { useState } from 'react'
import Add from '../../components/Payroll/Add'
import Deduc from '../../components/Payroll/Deduc'
import NewPay from '../../components/Payroll/NewPay'
import PayslipModal from '../../components/Payroll/Modal/PayslipModal'
import PayrollHistoryModal from '../../components/Payroll/Modal/PayrollHistoryModal'
import { UsePayroll } from '../../context/payrollContext'
import { useQueryClient } from 'react-query'
import Swal from 'sweetalert2'

const Payroll = () => {
  const { payrollObject, setPayrollObject } = UsePayroll()
  const [modalPayslip, setModalPayslip] = useState(false)
  const [modalHistory, setModalHistory] = useState(false)
  const [active, setActive] = useState('FirstPage')

  const [addCheckbox, setAddCheckbox] = useState(false)
  const [checkboxBonus, setCheckboxBonus] = useState(false)
  const [checkboxAdvance, setCheckboxAdvance] = useState(false)

  const [deducCheckbox, setDeducCheckbox] = useState(false)
  const [checkboxSss, setCheckboxSss] = useState(false)
  const [checkboxPh, setCheckboxPh] = useState(false)
  const [checkboxPi, setCheckboxPi] = useState(false)
  const [checkboxRa, setCheckboxRa] = useState(false)

  const queryClient = useQueryClient()

  const handleAddCheckboxChange = () => {
    setAddCheckbox(!addCheckbox)
    setCheckboxAdvance(!addCheckbox)
    setCheckboxBonus(!addCheckbox)
  }

  const handleDeducCheckboxChange = () => {
    setDeducCheckbox(!deducCheckbox)
    setCheckboxSss(!deducCheckbox)
    setCheckboxPh(!deducCheckbox)
    setCheckboxPi(!deducCheckbox)
    setCheckboxRa(!deducCheckbox)
  }

  const handleSubmit = () => {
    if (!payrollObject.employeeId)
      return Swal.fire('Error?', 'Please select an Employee.', 'error')
    queryClient.invalidateQueries({ queryKey: 'SingleLog' })
    setModalPayslip(true)
  }

  return (
    <div className='p-4 md:p-10'>
      <div className='flex flex-col md:flex-row justify-between md:mt-10 mb-4'>
        {/* sort */}
        <div className='flex md:flex-row flex-col md:items-end items-start mb-2'>
          <h1 className='text-2xl md:block mr-4 md:text-4xl font-bold'>
            Payroll
          </h1>

          <select
            name='sortby'
            className='w-40 text-center h-8 font-semibold border-2 border-black bg-white'
          >
            <option value='...'>SORT BY</option>
          </select>
        </div>
        {/* search */}
      </div>
      <div className='flex flex-col lg:flex-row gap-1'>
        <div className=' md:w-2/5 w-full max-h-[377px] '>
          <div className='flex gap-[1px]'>
            <button
              className={
                active === 'FirstPage'
                  ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 rounded-l'
                  : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l'
              }
              onClick={() => setActive('FirstPage')}
            >
              Payroll
            </button>
            <button
              className={
                active === 'SecondPage'
                  ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 rounded-r'
                  : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r'
              }
              onClick={() => setActive('SecondPage')}
            >
              Additions
            </button>
            {/* <button
              className={
                active === 'ThirdPage'
                  ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 rounded-r'
                  : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r'
              }
              onClick={() => setActive('ThirdPage')}
            >
              Deductions
            </button> */}
          </div>
          <div className='w-full  bg-[#F3F3F3] mt-2 py-5 px-3 h-full'>
            {active === 'FirstPage' && <NewPay />}
            {active === 'SecondPage' && <Add />}
            {/* {active === 'ThirdPage' && <Deduc />} */}
          </div>
        </div>

        {/* TABLE */}
        <div className=' md:w-3/5 w-full h-full md:mb-0 mb-40'>
          <div className='bg-gray-100 scroll-smooth overflow-x-auto max-h-[425px] border-2 border-[#010100]'>
            <table className='border-separate border-spacing-0 w-full text-sm text-left text-[#010100] overflow-y-auto overflow-x-auto max-h-[500px]'>
              <thead className='text-xs text-gray-50 border border-[#010100] bg-[#010100] uppercase'>
                <tr>
                  <th className='p-2 md:p-4 '>EARNINGS</th>
                  <th className='p-2 md:p-4'>UNIT</th>
                  <th className='p-2 md:p-4'>RATE</th>
                  <th className='p-2 md:p-4'>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    Hours Worked
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>48</td>
                  <td className='p-2 md:p-4 border border-[#010100]'>50</td>
                  <td className='p-2 md:p-4 border border-[#010100]'>2,400</td>
                </tr>
                <tr>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    Overtime
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>20</td>
                  <td className='p-2 md:p-4 border border-[#010100]'>50</td>
                  <td className='p-2 md:p-4 border border-[#010100]'>1,000</td>
                </tr>
                <tr>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    Per Cup Commision
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>100</td>
                  <td className='p-2 md:p-4 border border-[#010100]'>5</td>
                  <td className='p-2 md:p-4 border border-[#010100]'>500</td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    className='p-2 md:p-4 border border-[#010100]'
                  >
                    Gross Pay :
                  </td>

                  <td className='p-2 md:p-4 border border-[#010100]'>3900</td>
                </tr>
                {/* Addition */}
                <tr>
                  <td
                    colSpan={4}
                    className='p-2 md:p-4 border border-[#010100] bg-black text-center'
                  >
                    <input
                      className='float-left mr-2 w-5 h-5 bg-gray-100 border-gray-300 rounded focus:ring-0'
                      type='checkbox'
                      id='forAdd'
                      name='forAdd'
                      value=''
                      checked={addCheckbox}
                      onChange={handleAddCheckboxChange}
                    />
                    <span className='text-xs text-gray-50 uppercase font-bold'>
                      Additions
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    className='p-2 md:p-4 border border-[#010100]'
                  >
                    <input
                      className='float-left  mr-2 w-5 h-5 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                      type='checkbox'
                      id='forAdvance'
                      name='forAdvance'
                      value=''
                      checked={checkboxAdvance}
                      onChange={() => setCheckboxAdvance(!checkboxAdvance)}
                    />
                    <span>Advance</span>
                  </td>

                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {payrollObject.advance}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    className='p-2 md:p-4 border border-[#010100]'
                  >
                    <input
                      className='float-left mr-2 w-5 h-5 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                      type='checkbox'
                      id='forBonus'
                      name='forBonus'
                      value=''
                      checked={checkboxBonus}
                      onChange={() => setCheckboxBonus(!checkboxBonus)}
                    />
                    <span>Bonus</span>
                  </td>

                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {payrollObject.bonus}
                  </td>
                </tr>
                {/* Deductions */}
                <tr>
                  <td
                    colSpan={4}
                    className='p-2 md:p-4 border border-[#010100] bg-black text-center'
                  >
                    <input
                      className='float-left mr-2 w-5 h-5 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                      type='checkbox'
                      id='forDeduc'
                      name='forDeduc'
                      value=''
                      checked={deducCheckbox}
                      onChange={handleDeducCheckboxChange}
                    />
                    <span className='text-xs text-gray-50 uppercase font-bold'>
                      Deductions
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    className='p-2 md:p-4 border border-[#010100]'
                  >
                    <input
                      className='float-left mr-2 w-5 h-5 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                      type='checkbox'
                      id='forSss'
                      name='forSss'
                      value=''
                      checked={checkboxSss}
                      onChange={() => setCheckboxSss(!checkboxSss)}
                    />
                    <span>SSS</span>
                  </td>

                  <td className='p-2 md:p-4 border border-[#010100]'>5%</td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    className='p-2 md:p-4 border border-[#010100]'
                  >
                    <input
                      className='float-left mr-2 w-5 h-5 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                      type='checkbox'
                      id='forPhilhealth'
                      name='forPhilhealth'
                      value=''
                      checked={checkboxPh}
                      onChange={() => setCheckboxPh(!checkboxPh)}
                    />
                    <span>PhilHealth</span>
                  </td>

                  <td className='p-2 md:p-4 border border-[#010100]'>5%</td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    className='p-2 md:p-4 border border-[#010100]'
                  >
                    <input
                      className='float-left mr-2 w-5 h-5 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                      type='checkbox'
                      id='forPagibig'
                      name='forPagibig'
                      value=''
                      checked={checkboxPi}
                      onChange={() => setCheckboxPi(!checkboxPi)}
                    />
                    <span>Pagibig</span>
                  </td>

                  <td className='p-2 md:p-4 border border-[#010100]'>5%</td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    className='p-2 md:p-4 border border-[#010100]'
                  >
                    <input
                      className='float-left mr-2 w-5 h-5 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                      type='checkbox'
                      id='forRadvance'
                      name='forRadvance'
                      value=''
                      checked={checkboxRa}
                      onChange={() => setCheckboxRa(!checkboxRa)}
                    />
                    <span>Recent Advance</span>
                  </td>

                  <td className='p-2 md:p-4 border border-[#010100]'>500</td>
                </tr>
                <tr className='bg-[#ac7238] sticky -bottom-[1px]  border-4 border-[#010100]'>
                  <td
                    colSpan={3}
                    className='p-2 md:p-4  border-y-[2px] border-x border-[#010100]  text-gray-50 uppercase font-bold'
                  >
                    Net Pay :
                  </td>

                  <td className='p-2 md:p-4 border-y-[2px] border-x border-[#010100]  text-gray-50 font-bold'>
                    ₱ 5,415
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mt-5 flex justify-end gap-5 pr-7'>
            <button
              onClick={() => {
                setModalHistory(true)
              }}
              className='rounded-full bg-[#ac7238] py-2 px-6  font-sans  md:text-base text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
            >
              Payroll History
            </button>
            <button
              onClick={handleSubmit}
              className='rounded-full bg-[#ac7238] py-2 px-6  font-sans md:text-base text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
            >
              Submit Payroll
            </button>
          </div>
        </div>
      </div>
      {modalPayslip && <PayslipModal setModalPayslip={setModalPayslip} />}
      {modalHistory && (
        <PayrollHistoryModal setModalHistory={setModalHistory} />
      )}
    </div>
  )
}

export default Payroll
