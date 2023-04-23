import { createContext, useContext, useRef, useState } from 'react'
import { getDateToday } from '../utils/formatTime'

const PayrollContext = createContext()

export const PayrollContextProvider = ({ children }) => {
  // refs
  const advancePayRef = useRef(null)
  const bonusPayRef = useRef(null)

  const [deducValues, setDeducValues] = useState([])
  const [payrollObject, setPayrollObject] = useState({
    employeeId: 0,
    payDate: getDateToday(),
    startingDate: '',
    endingDate: '',
    hoursWorked: {
      unit: 0,
      rate: 0,
      total: 0,
    },
    overTime: {
      unit: 0,
      rate: 0,
      total: 0,
    },
    grossPay: 0,
    advance: 0,
    bonus: 0,
    sss: 0,
    philhealth: 0,
    pagibig: 0,
    recentAdvance: 0,
    netPay: 0,
  })

  return (
    <PayrollContext.Provider
      value={{
        payrollObject,
        setPayrollObject,
        advancePayRef,
        bonusPayRef,
        deducValues,
        setDeducValues,
      }}
    >
      {children}
    </PayrollContext.Provider>
  )
}
export const UsePayroll = () => {
  return useContext(PayrollContext)
}
