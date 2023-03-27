import { createContext, useContext, useState } from 'react'
import { getDateToday } from '../utils/formatTime'

const PayrollContext = createContext()

export const PayrollContextProvider = ({ children }) => {
  const [payrollObject, setPayrollObject] = useState({
    employeeId: null,
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
    perCupCommision: {
      unit: 100,
      rate: 5,
      total: 500,
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
      }}
    >
      {children}
    </PayrollContext.Provider>
  )
}
export const UsePayroll = () => {
  return useContext(PayrollContext)
}
