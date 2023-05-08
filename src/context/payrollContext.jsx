import { createContext, useContext, useRef, useState } from 'react'
import { getDateToday } from '../utils/formatTime'
import { endOfWeek, format, startOfWeek } from 'date-fns'

const PayrollContext = createContext()

export const PayrollContextProvider = ({ children }) => {
  // refs
  const advancePayRef = useRef(null)
  const bonusPayRef = useRef(null)

  const [deducValues, setDeducValues] = useState([])
  const [payrollObject, setPayrollObject] = useState({
    employeeId: 0,
    type: '',
    payDate: getDateToday(),
    startingDate: format(startOfWeek(new Date()), 'yyyy-MM-dd'),
    endingDate: format(endOfWeek(new Date()), 'yyyy-MM-dd'),
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

  const [leave, setLeave] = useState({
    days: 0,
    hours: 0,
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
        leave,
        setLeave,
      }}
    >
      {children}
    </PayrollContext.Provider>
  )
}
export const UsePayroll = () => {
  return useContext(PayrollContext)
}
