import React, { useEffect, useRef, useState } from 'react'
import Add from '../../components/Payroll/Add'
import NewPay from '../../components/Payroll/NewPay'
import PayslipModal from '../../components/Payroll/Modal/PayslipModal'
import PayrollHistoryModal from '../../components/Payroll/Modal/PayrollHistoryModal'
import { UsePayroll } from '../../context/payrollContext'
import { useDebounce } from '../../hooks/useDebounce'
import { useQueryClient } from 'react-query'
import Swal from 'sweetalert2'
import { formatPrice } from '../../utils/priceFormatter'
import { ToastContainer } from 'react-toastify'

const Payroll = () => {
  const {
    payrollObject,
    setPayrollObject,
    advancePayRef,
    bonusPayRef,
    deducValues,
    setDeducValues,
    leave,
  } = UsePayroll()
  const queryClient = useQueryClient()
  const [modalPayslip, setModalPayslip] = useState(false)
  const [modalHistory, setModalHistory] = useState(false)
  const [active, setActive] = useState('FirstPage')
  const [checkboxRa, setCheckboxRa] = useState(false)
  const [checkedValues, setCheckedValues] = useState([])
  // const [deducValues, setDeducValues] = useState([])
  const [checkAdvance, setCheckAdvance] = useState(false)
  const [checkBonus, setCheckBonus] = useState(false)

  // ref
  // const advancePayRef = useRef(null)
  // const bonusPayRef = useRef(null)

  const totalDeduct = deducValues.reduce((acc, cur) => {
    return acc + parseInt(cur)
  }, 0)

  const debouncedAdvance = useDebounce(payrollObject.advance, 500)
  const debouncedBonus = useDebounce(payrollObject.bonus, 500)

  const netpayF =
    parseInt(payrollObject.grossPay) +
    (advancePayRef.current?.checked
      ? parseFloat(payrollObject.advance ? payrollObject.advance : 0)
      : 0) +
    (bonusPayRef.current?.checked
      ? parseFloat(payrollObject.bonus ? payrollObject.bonus : 0)
      : 0) +
    -totalDeduct

  useEffect(() => {
    setPayrollObject({
      ...payrollObject,
      netPay: netpayF ? netpayF : 0,
    })
  }, [
    checkedValues,
    deducValues,
    payrollObject.employeeId,
    debouncedAdvance,
    debouncedBonus,
    checkAdvance,
    checkBonus,
  ])

  const handleCheckAdvance = () => {
    setCheckAdvance((prev) => !prev)
  }
  const handleBonusAdvance = () => {
    setCheckBonus((prev) => !prev)
  }

  const handleOpenDeductions = (e) => {
    const { checked } = e.target
    if (checked) {
      setOpenDeduction(true)
    } else {
      setOpenDeduction(false)
    }
  }

  const handleDeductions = (e) => {
    const { checked } = e.target
    if (checked) {
      setDeducValues([...deducValues, payrollObject.netPay * 0.0125])
    } else {
      const newArray = [...deducValues]
      newArray.pop()
      setDeducValues(newArray)
    }
  }

  const handleSubmit = () => {
    if (!payrollObject.employeeId)
      return Swal.fire('Error?', 'Please select an Employee.', 'error')
    if (!payrollObject.netPay) return
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

          {/* <select
            name='sortby'
            className='w-40 text-center h-8 font-semibold border-2 border-black bg-white'
          >
            <option value='...'>SORT BY</option>
          </select> */}
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
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {payrollObject.hoursWorked.unit}
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {payrollObject.hoursWorked.rate}
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {formatPrice(payrollObject.hoursWorked.total)}
                  </td>
                </tr>
                <tr>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    Overtime
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {payrollObject.overTime.unit}
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {payrollObject.overTime.rate}
                  </td>
                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {formatPrice(
                      payrollObject.overTime.total
                        ? payrollObject.overTime.total
                        : 0
                    )}
                  </td>
                </tr>
                {leave.hours > 0 && (
                  <>
                    <tr>
                      <td className='p-2 md:p-4 border border-[#010100]'>
                        Paid Leave:{' '}
                        {`(${leave.days} ${leave.days < 1 ? 'days' : 'day'})`}
                      </td>
                      <td className='p-2 md:p-4 border border-[#010100]'>
                        {leave.hours}
                      </td>
                      <td className='p-2 md:p-4 border border-[#010100]'>
                        {payrollObject.overTime.rate}
                      </td>
                      <td className='p-2 md:p-4 border border-[#010100]'>
                        {formatPrice(
                          leave.hours * payrollObject.hoursWorked.rate
                        )}
                      </td>
                    </tr>
                  </>
                )}

                <tr>
                  <td
                    colSpan={3}
                    className='p-2 md:p-4 border border-[#010100]'
                  >
                    Gross Pay :
                  </td>

                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {formatPrice(
                      payrollObject.grossPay ? payrollObject.grossPay : 0
                    )}
                  </td>
                </tr>
                {/* Addition */}
                <tr>
                  <td
                    colSpan={4}
                    className='p-2 md:p-4 border border-[#010100] bg-black text-center'
                  >
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
                      ref={advancePayRef}
                      onChange={handleCheckAdvance}
                    />
                    <span>Advance</span>
                  </td>

                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {formatPrice(
                      payrollObject.advance ? payrollObject.advance : 0
                    )}
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
                      ref={bonusPayRef}
                      onChange={handleBonusAdvance}
                    />
                    <span>Bonus</span>
                  </td>

                  <td className='p-2 md:p-4 border border-[#010100]'>
                    {formatPrice(payrollObject.bonus ? payrollObject.bonus : 0)}
                  </td>
                </tr>
                {/* Deductions */}

                {payrollObject.type === 'fulltime' && (
                  <>
                    <tr>
                      <td
                        colSpan={4}
                        className='p-2 md:p-4 border border-[#010100] bg-black text-center'
                      >
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
                          onChange={handleDeductions}
                        />
                        <span>SSS</span>
                      </td>

                      <td className='p-2 md:p-4 border border-[#010100]'>1%</td>
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
                          onChange={handleDeductions}
                        />
                        <span>PhilHealth</span>
                      </td>

                      <td className='p-2 md:p-4 border border-[#010100]'>1%</td>
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
                          onChange={handleDeductions}
                        />
                        <span>Pagibig</span>
                      </td>

                      <td className='p-2 md:p-4 border border-[#010100]'>1%</td>
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

                      <td className='p-2 md:p-4 border border-[#010100]'>0</td>
                    </tr>
                  </>
                )}

                <tr className='bg-[#ac7238] sticky -bottom-[1px]  border-4 border-[#010100]'>
                  <td
                    colSpan={3}
                    className='p-2 md:p-4  border-y-[2px] border-x border-[#010100]  text-gray-50 uppercase font-bold'
                  >
                    Net Pay :
                  </td>

                  <td className='p-2 md:p-4 border-y-[2px] border-x border-[#010100]  text-gray-50 font-bold'>
                    {formatPrice(payrollObject.netPay)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mt-5 flex justify-end gap-5 pr-7'>
            {/* <button
              onClick={() => {
                setModalHistory(true)
              }}
              className='rounded-full bg-[#ac7238] py-2 px-6  font-sans  md:text-base text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
            >
              Payroll History
            </button> */}
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
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}

export default Payroll
