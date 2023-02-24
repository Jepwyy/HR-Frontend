import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import reactLogo from './assets/react.svg'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

//Components
import Layout from './shared/Layout'

// Pages

import Login from './pages/Login'
import Dashboard from './pages/admin/Dashboard'
import Archive from './pages/admin/Archive'
import Attendance from './pages/admin/Attendance'
import Schedule from './pages/admin/Schedule'
import EmployeeList from './pages/admin/EmployeeList'
import Payroll from './pages/admin/Payroll'

import Unauthorized from './pages/Unauthorized'
import PrivateRoute from './helpers/PrivateRoute'
import PersistLogin from './helpers/PersistLogin'
import LoginViaCard from './pages/LoginViaCard'

const ROLES = {
  hr_manager: 'hr_manager',
}
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/card' element={<LoginViaCard />} />
            {/* private routes */}
            <Route element={<PersistLogin />}>
              <Route
                element={<PrivateRoute allowedRoles={[ROLES.hr_manager]} />}
              >
                <Route element={<Layout />}>
                  <Route path='/archive' element={<Archive />} />
                  <Route path='/attendance' element={<Attendance />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/schedule' element={<Schedule />} />
                  <Route path='/employee-list' element={<EmployeeList />} />
                  <Route path='/payroll' element={<Payroll />} />
                </Route>
              </Route>
            </Route>

            <Route path='/unauthorize' element={<Unauthorized />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
