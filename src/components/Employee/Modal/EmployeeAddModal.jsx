import { useState } from 'react'
import { BsBackspaceFill } from 'react-icons/bs'
import { useMutation, useQueryClient } from 'react-query'
import axios from '../../../api/api'
import Spinner from '../../Spinner'
import ScanRfidModal from './ScanRfidModal'
import { ToastContainer, toast } from 'react-toastify'
import { FcOk } from 'react-icons/fc'

const EmployeeAddModal = ({ setModalAdd }) => {
  const [modalScanner, setModalScanner] = useState(false)
  const queryClient = useQueryClient()
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
    contact: '',
    rfid: null,
    shift_timein: '1:00',
    shift_timeout: '23:00',
    dayoff: [],
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
  ])
  const addDays = (e) => {
    setDays([...days, e.target.value])
  }
  const removeDay = (id) => {
    setDays((item) => item !== id)
  }
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
      default:
        break
    }
  }
  //handle day off checkboxes

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target
    if (checked) {
      setEmployee((prevState) => ({
        ...prevState,
        dayoff: [...prevState.dayoff, value],
      }))
    } else {
      setEmployee((prevState) => ({
        ...prevState,
        dayoff: prevState.dayoff.filter((day) => day !== value),
      }))
    }
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
      queryClient.invalidateQueries({ queryKey: ['Employess'] })
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
    //form data
    const formData = new FormData()
    const stringtifyEmployee = JSON.stringify(employee)
    formData.append('file', file)
    formData.append('json', stringtifyEmployee)

    mutation.mutate(formData)
  }
  return (
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center py-2 overflow-y-auto'>
      <div className='bg-white p-2 rounded md:w-[40rem] w-96 md:mt-0 mt-auto mb-2 overflow-y-auto'>
        <div className='flex justify-end px-py'>
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
          <form
            className='flex flex-col md:flex-row px-3 md:gap-10'
            onSubmit={handleSubmit}
          >
            <div className='  md:w-1/2 w-full'>
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
              <div className='mb-2'>
                <label className='block text-gray-700 text-sm font-bold'>
                  Dayoff
                </label>
                <div className='flex flex-row gap-5'>
                  <div>
                    <div className='flex flex-row items-center'>
                      {/* {dayoff.map((item) => (
                        <input
                          className=' h-4 w-4 rounded'
                          type='checkbox'
                          name='dayoff1'
                          value='Monday'
                        />
                      ))} */}
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff1'
                        value='Sunday'
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff1'
                      >
                        Sunday
                      </label>
                    </div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff2'
                        value='Monday'
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff2'
                      >
                        Monday
                      </label>
                    </div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff3'
                        value='Tuesday'
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff3'
                      >
                        Tuesday
                      </label>
                    </div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff4'
                        value='Wednesday'
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff4'
                      >
                        Wednesday
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff5'
                        value='Thursday'
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff5'
                      >
                        Thursday
                      </label>
                    </div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff6'
                        value='Friday'
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff6'
                      >
                        Friday
                      </label>
                    </div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff7'
                        value='Saturday'
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff7'
                      >
                        Saturday
                      </label>
                    </div>
                  </div>
                </div>
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
                    <option
                      key={i}
                      value={item.position}
                    >
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
                <label className='flex items-center text-gray-700 text-sm font-bold mb-1'>
                  Register RFID{' '}
                  <span className='mx-2'>
                    {employee.rfid && <FcOk size={20} />}
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
              <div className='mb-14'>
                <label className='block text-gray-700 text-sm font-bold'>
                  Working Time
                </label>
                <div className='flex flex-row'>
                  <input
                    type='time'
                    name='shift_timein'
                    className='border-2 border-black w-2/5'
                    min='1:00'
                    max='23:00'
                    required
                    onChange={handleChange}
                  />
                  <h1 className='font-semibold  mx-2'> - </h1>
                  <input
                    type='time'
                    className='border-2 border-black w-2/5'
                    name='shift_timeout'
                    min={employee.shift_timein}
                    max='23:00'
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='flex justify-end pb-5'>
                <button
                  type='submit'
                  className='px-6 py-2 bg-[#ac7238] text-white rounded-xl'
                >
                  Add
                </button>
              </div>
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
      </div>
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

export default EmployeeAddModal
