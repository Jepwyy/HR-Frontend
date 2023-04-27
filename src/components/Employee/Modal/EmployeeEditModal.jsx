import React, { useEffect, useState } from 'react'
import { BsBackspaceFill } from 'react-icons/bs'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from '../../../api/api'
import Spinner from '../../LogoLoader'
import ScanRfidModal from './ScanRfidModal'
import { ToastContainer, toast } from 'react-toastify'
import { FcOk } from 'react-icons/fc'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { BsFillXCircleFill } from 'react-icons/bs'
import { formatBirthdate, formatLocalTime } from '../../../utils/formatTime'
import { formatPosition } from '../../../utils/colParser'
import { motion } from 'framer-motion'
const EmployeeEditModal = ({ item, setModalEdit, setDetails }) => {
  // const { isLoading, error, data } = useSingleEmployee(item.id)
  const [modalScanner, setModalScanner] = useState(false)
  const queryClient = useQueryClient()

  //schedule states
  const [scheduleDay, setScheduleDay] = useState('Sunday')
  const [timein, setTimein] = useState('')
  const [timeout, setTimeout] = useState('')

  const [employee, setEmployee] = useState({
    role: '',
    username: '',
    department: '',
    rateperhour: '',
    status: 'active',
    active: 1,
    fullname: '',
    birthdate: '',
    address: '',
    email: '',
    contact: '',
    rfid: 0,
    imgurl: '',
    schedule: [],
  })
  console.log(employee)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/users/get/${item.id}`)
        const data = response.data[0]
        setEmployee({
          ...employee,
          role: data.role,
          username: data.username,
          department: data.department,
          rateperhour: data.rateperhour,
          status: data.status,
          active: data.active,
          fullname: data.fullname,
          birthdate: data.birthdate,
          address: data.address,
          email: data.email,
          contact: data.contact,
          rfid: data.rfid,
          imgurl: data.imgurl,
          schedule: data.schedule || [],
        })
      } catch (error) {
        console.log(error)
      }
    }

    return () => {
      fetchUser()
    }
  }, [])

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

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
              schedule: [...prev.schedule, newScheduleItem],
            }
          })
        }
      }
    }
  }

  const removeSchedule = (day) => {
    setEmployee((prev) => {
      return {
        ...prev,
        schedule: prev.schedule.filter((item) => item.day !== day),
      }
    })
  }

  const mutation = useMutation({
    mutationFn: (userdetails) =>
      axios.put(`/users/update/${item.id}`, userdetails, {
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
      setModalEdit(false)
      setDetails(data.data.user[0])
      toast.success(`Employee updated`, {
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
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center py-2 overflow-y-auto'>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='relative bg-white p-2 rounded md:w-[40rem] w-96 md:my-auto mt-auto mb-2 overflow-y-auto'
      >
        <div className='flex justify-end '>
          <BsBackspaceFill
            size={40}
            className='cursor-pointer'
            onClick={() => {
              setModalEdit(false)
            }}
          />
        </div>
        <h1 className=' text-center font-bold text-4xl text-black mb-12'>
          Edit Employee
        </h1>
        {/* loading component */}
        <div className='flex justify-center'>
          {mutation.isLoading && <Spinner />}
        </div>
        <div className='flex justify-center'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col md:flex-row px-3 md:gap-10'>
              <div className='  md:w-1/2 w-full'>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Username
                  </label>
                  <input
                    className='border-2 border-black w-full '
                    name='username'
                    type='text'
                    defaultValue={employee.username}
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
                    defaultValue={employee.fullname}
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
                    defaultValue={formatBirthdate(employee?.birthdate)}
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
                    defaultValue={employee.email}
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
                    defaultValue={employee.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='md:w-1/2 w-full'>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Profile Photo
                  </label>
                  <input
                    className='border-2 border-black w-full'
                    type='file'
                    accept='image/*'
                    onChange={handleFile}
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Department
                  </label>
                  <select
                    className='border-2 border-black w-full'
                    name='department'
                    defaultValue={employee.department}
                    onChange={handleChange}
                    required
                  >
                    <option value='sales'>SALES</option>
                    <option value='warehouse'>WAREHOUSE</option>
                    {/* <option value='po'>PURCHASING</option> */}
                  </select>
                </div>
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Position
                  </label>
                  <input
                    type='text'
                    className='border-2 border-black w-full'
                    defaultValue={formatPosition(employee.role)}
                    disabled
                  />
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
                    defaultValue={employee.contact}
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
                    defaultValue={employee.rateperhour}
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
            <div className='px-3 mt-3 flex justify-center w-full items-start flex-col'>
              <div className='font-bold'>WORK SCHEDULE</div>
              <div className='flex items-center'>
                <select
                  className='mr-2'
                  name='day'
                  onChange={(e) => setScheduleDay(e.target.value)}
                >
                  {daysOfWeek.map((days, i) => (
                    <option key={i} value={days} className='text-center'>
                      {days}
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
                  <tbody>
                    {employee?.schedule?.map((sched, i) => (
                      <tr key={i}>
                        <td className='px-4 py-1 font-semibold'>{sched.day}</td>
                        <td className='px-4 py-1 '>
                          {formatLocalTime(sched.shift_timein)}
                        </td>
                        <td>-</td>
                        <td className='px-4 py-1'>
                          {formatLocalTime(sched.shift_timeout)}
                        </td>
                        <td className='flex h-full py-1'>
                          <span className='cursor-pointer '>
                            <BsFillXCircleFill
                              size={23}
                              color='#ac7238'
                              onClick={() => removeSchedule(sched.day)}
                            />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='flex justify-end pb-5 px-3'>
              <button
                type='submit'
                className='px-6 py-2 bg-[#ac7238] text-white rounded-xl'
              >
                Save
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
    </div>
  )

  // <div>test</div>
}

export default EmployeeEditModal
