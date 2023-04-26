import { useState } from 'react'
import { BsBackspaceFill } from 'react-icons/bs'
import { useMutation, useQueryClient } from 'react-query'
import axios from '../../../api/api'
import Spinner from '../../LogoLoader'
import ScanRfidModal from './ScanRfidModal'
import { ToastContainer, toast } from 'react-toastify'
import { FcOk } from 'react-icons/fc'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { BsFillXCircleFill } from 'react-icons/bs'
import { formatLocalTime } from '../../../utils/formatTime'
import { motion } from 'framer-motion'
const EmployeeAddModal = ({ setModalAdd }) => {
  const [modalScanner, setModalScanner] = useState(false)
  const queryClient = useQueryClient()
  //schedule states
  const [scheduleDay, setScheduleDay] = useState('Sunday')
  const [timein, setTimein] = useState('')
  const [timeout, setTimeout] = useState('')

  //employee states
  const [employee, setEmployee] = useState({
    role: 'sales_manager',
    username: '',
    password: '',
    department: 'sales',
    scheduletype: 'morning',
    rateperhour: '',
    status: 'active',
    active: 1,
    fullname: '',
    birthdate: '',
    address: '',
    email: '',
    type: 'fulltime',
    contact: '',
    rfid: 0,
    schedule: [],
  })

  const [position, setPosition] = useState([
    {
      display: 'MANAGER',
      position: 'sales_manager',
    },
    {
      display: 'BARISTA',
      position: 'barista',
    },
    {
      display: 'COOK',
      position: 'sales_cook',
    },
    {
      display: 'CASHIER',
      position: 'sales_cashier',
    },
    {
      display: 'REPRESENTATIVE',
      position: 'sales_representative',
    },
  ])

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const handleDepartment = (e) => {
    setEmployee({ ...employee, department: e.target.value })
    switch (e.target.value) {
      case 'sales':
        setPosition([
          {
            display: 'MANAGER',
            position: 'sales_manager',
          },
          {
            display: 'BARISTA',
            position: 'barista',
          },
          {
            display: 'COOK',
            position: 'sales_cook',
          },
          {
            display: 'CASHIER',
            position: 'sales_cashier',
          },
          {
            display: 'REPRESENTATIVE',
            position: 'sales_representative',
          },
        ])
        break
      case 'warehouse':
        setPosition([
          {
            display: 'WAREHOUSE MANAGER',
            position: 'warehouse_manager',
          },
          {
            display: 'WAREHOUSE STAFF',
            position: 'warehouse_staff',
          },
        ])
        break
      case 'purchasing':
        setPosition([
          {
            display: 'PURCHASING MANAGER',
            position: 'purchasing_manager',
          },
          {
            display: 'PURCHASING STAFF',
            position: 'purchasing_staff',
          },
        ])
        break
      case 'hr':
        setPosition([
          {
            display: 'HR MANAGER',
            position: 'hr_manager',
          },
          {
            display: 'HR ASSISTANT',
            position: 'hr_assistant',
          },
        ])
        break
      default:
        break
    }
  }
  //handle add schedule

  const addSchedule = () => {
    if (timein === '' || timeout === '') {
      toast.error('Time range is required.', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
      })
    } else {
      if (!employee.schedule.length) {
        const newScheduleItem = {
          day: scheduleDay,
          shift_timein: timein,
          shift_timeout: timeout,
        }
        setEmployee((prev) => {
          return {
            ...prev,
            ...prev.schedule,
            schedule: [...prev.schedule, newScheduleItem],
          }
        })
      } else {
        if (employee.schedule.some((item) => item.day === scheduleDay)) {
          toast.error(`You already added ${scheduleDay}`, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: 'light',
          })
        } else {
          const newScheduleItem = {
            day: scheduleDay,
            shift_timein: timein,
            shift_timeout: timeout,
          }
          setEmployee((prev) => {
            return {
              ...prev,
              ...prev.schedule,
              schedule: [...prev.schedule, newScheduleItem],
            }
          })
        }
      }
    }
  }

  const removeSchedule = (day) => {
    setEmployee((prev) => ({
      schedule: prev.schedule.filter((item) => item.day !== day),
    }))
  }

  const mutation = useMutation({
    mutationFn: (userdetails) =>
      axios.post('/users/create', userdetails, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    onError: (error) => {
      // setErrorMessage(error.response.data.message);
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
      })
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['Employees'] })
      setModalAdd(false)
      toast.success(`Employee created`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: 'light',
      })
    },
  })

  const [file, setFile] = useState(null)

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployee((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    const stringtifyEmployee = JSON.stringify(employee)
    formData.append('file', file)
    formData.append('json', stringtifyEmployee)

    mutation.mutate(formData)
  }
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center py-2 overflow-y-auto'
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='bg-white relative p-2 rounded md:w-[50%] w-96 md:my-auto mt-auto mb-2 overflow-y-auto animate__fadeInUp'
      >
        <div className='flex justify-end px-py '>
          <BsBackspaceFill
            size={40}
            className='cursor-pointer'
            onClick={() => {
              setModalAdd(false)
            }}
          />
        </div>
        <h1 className=' text-center font-bold text-4xl text-black mb-12'>
          Add Employee
        </h1>
        {/* loading component */}
        <div className='flex justify-center'>
          {mutation.isLoading && <Spinner />}
        </div>
        <div className='flex justify-center'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col md:flex-row px-3 md:gap-10'>
              <div className=' px-3 w-full'>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Username
                  </label>
                  <input
                    className='border-2 border-black w-full '
                    name='username'
                    type='text'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Password
                  </label>
                  <input
                    className='border-2 border-black w-full'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Full Name
                  </label>
                  <input
                    className='border-2 border-black w-full'
                    type='text'
                    name='fullname'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Birthdate
                  </label>
                  <input
                    className='border-2 border-black w-full'
                    type='date'
                    name='birthdate'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Email Address
                  </label>
                  <input
                    className='border-2 border-black w-full'
                    type='email'
                    name='email'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Address
                  </label>
                  <input
                    className='border-2 border-black w-full'
                    type='text'
                    name='address'
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className=' w-full px-3'>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Profile Photo
                  </label>
                  <input
                    className='border-2 border-black w-full'
                    type='file'
                    accept='image/*'
                    onChange={handleFile}
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Department
                  </label>
                  <select
                    className='border-2 border-black w-full'
                    name='department'
                    onChange={handleDepartment}
                    required
                  >
                    <option value='sales'>SALES</option>
                    <option value='warehouse'>WAREHOUSE</option>
                    <option value='hr'>HR</option>
                    <option value='purchasing'>PURCHASING</option>
                    {/* <option value='po'>PURCHASING</option> */}
                  </select>
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Position
                  </label>
                  <select
                    className='border-2 border-black w-full'
                    name='role'
                    onChange={handleChange}
                    required
                  >
                    {position.map((item, i) => (
                      <option key={i} value={item.position}>
                        {item.display}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Contact No.
                  </label>
                  <input
                    className='border-2 border-black w-full'
                    type='text'
                    name='contact'
                    onChange={handleChange}
                    pattern='^09\d{9}$'
                    title='Enter a valid PH mobile number'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Rate per hour
                  </label>
                  <input
                    className='border-2 border-black w-full'
                    type='number'
                    name='rateperhour'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Employee Type:
                  </label>
                  <select
                    className='border-2 border-black w-full'
                    name='type'
                    onChange={handleChange}
                    required
                  >
                    <option value='fulltime'>FULL-TIME</option>
                    <option value='parttime'>PART-TIME</option>
                  </select>
                </div>
                <div className='mb-2'>
                  <label className='flex items-center text-gray-700 text-sm font-bold mb-1'>
                    Register RFID{' '}
                    <span className='mx-2'>
                      {employee.rfid === 0 ? <></> : <FcOk size={20} />}
                    </span>
                  </label>
                  <button
                    type='button'
                    className='bg-[#ac7238] text-white rounded-md w-full'
                    onClick={() => {
                      setModalScanner(true)
                    }}
                  >
                    Scan
                  </button>
                </div>
              </div>
            </div>
            <div className='px-4 mt-3 flex justify-center w-full items-start flex-col'>
              <div className='font-bold'>WORK SCHEDULE</div>
              <div className='flex items-center'>
                <select
                  className='mr-2'
                  name='day'
                  onChange={(e) => setScheduleDay(e.target.value)}
                >
                  {daysOfWeek.map((item, i) => (
                    <option key={i} value={item} className='text-center'>
                      {item}
                    </option>
                  ))}
                </select>
                <input
                  type='time'
                  name='shift_timein'
                  className='mx-2 border border-gray-900'
                  onChange={(e) => setTimein(e.target.value)}
                />
                <div className='font-bold'> - </div>
                <input
                  type='time'
                  name='shift_timeout'
                  className='mx-2 border border-gray-900'
                  onChange={(e) => setTimeout(e.target.value)}
                />
                <IoMdAddCircleOutline
                  size={25}
                  className='cursor-pointer'
                  onClick={addSchedule}
                />
              </div>
              <div className='my-4'>
                <table>
                  {employee.schedule.map((item, i) => (
                    <tr key={i}>
                      <td className='px-4 py-1 font-semibold'>{item.day}</td>
                      <td className='px-4 py-1 '>
                        {formatLocalTime(item.shift_timein)}
                      </td>
                      <td>-</td>
                      <td className='px-4 py-1'>
                        {formatLocalTime(item.shift_timeout)}
                      </td>
                      <td className='flex h-full py-1'>
                        <span className='cursor-pointer '>
                          <BsFillXCircleFill
                            size={23}
                            color='#ac7238'
                            onClick={() => removeSchedule(item.day)}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
            <div className='flex justify-center pb-5 px-6'>
              <button
                type='submit'
                className='px-6 py-2 bg-[#ac7238] text-white rounded-xl'
              >
                Add
              </button>
            </div>
          </form>
        </div>
        {modalScanner && (
          <ScanRfidModal
            setModalScanner={setModalScanner}
            employee={employee}
            setEmployee={setEmployee}
          />
        )}
      </motion.div>
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
    </motion.div>
  )
}

export default EmployeeAddModal
