import { useState } from 'react'
import { BsBackspaceFill } from 'react-icons/bs'
import { useMutation, useQueryClient } from 'react-query'
import axios from '../../../api/api'
import Spinner from '../../Spinner'
import ScanRfidModal from './ScanRfidModal'
import { ToastContainer, toast } from 'react-toastify'

const EmployeeAddModal = ({ setModalAdd }) => {
  const [modalScanner, setModalScanner] = useState(false)
  const queryClient = useQueryClient()
  const [employee, setEmployee] = useState({
    role: 'sales_manager',
    username: '',
    password: '',
    department: 'hr',
    scheduletype: 'morning',
    rateperhour: '',
    status: 'active',
    active: 1,
    fullname: '',
    birthdate: '',
    address: '',
    email: '',
    contact: '',
    rfid: '0000000000',
  })

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
                  Fullname
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
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff1'
                        value='Monday'
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff1'
                      >
                        Monday
                      </label>
                    </div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff2'
                        value='Tuesday'
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff2'
                      >
                        Tuesday
                      </label>
                    </div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff3'
                        value='Wednesday'
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff3'
                      >
                        Wednesday
                      </label>
                    </div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff4'
                        value='Thursday'
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff4'
                      >
                        Thursday
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff5'
                        value='Friday'
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff5'
                      >
                        Friday
                      </label>
                    </div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff6'
                        value='Saturday'
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff6'
                      >
                        Saturday
                      </label>
                    </div>
                    <div className='flex flex-row items-center'>
                      <input
                        className=' h-4 w-4 rounded'
                        type='checkbox'
                        name='dayoff7'
                        value='Sunday'
                      />
                      <label
                        className='text-sm ml-1 font-medium text-gray-900'
                        for='dayoff7'
                      >
                        Sunday
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
                  onChange={handleChange}
                  required
                >
                  <option value='hr'>HR</option>
                  <option value='sales'>SALES</option>
                  <option value='warehouse'>WAREHOUSE</option>
                  <option value='po'>PURCHASING</option>
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
                  <option value='hr_manager'>te</option>
                  <option value='sales_artista'>ete</option>
                  <option value='sales_something'>te</option>
                  <option value='sales_lang'>et</option>
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
                  Rate per our
                </label>
                <input
                  className='border-2 border-black w-full'
                  type='text'
                  name='rateperhour'
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-2'>
                <label className='block text-gray-700 text-sm font-bold'>
                  Register RFID
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
                  <select className='border-2 border-black w-2/5'>
                    <option value=''>1 PM</option>
                    <option value=''> PM</option>
                    <option value=''>3 PM</option>
                    <option value=''>4 PM</option>
                    <option value=''>5 PM</option>
                    <option value=''>6 PM</option>
                    <option value=''>7 PM</option>
                    <option value=''>8 PM</option>
                    <option value=''>9 PM</option>
                    <option value=''>10 PM</option>
                    <option value=''>11 PM</option>
                  </select>
                  <h1 className='font-semibold  mx-2'> - </h1>
                  <select className='border-2 border-black w-2/5'>
                    <option value=''>11 PM</option>
                    <option value=''>10 PM</option>
                    <option value=''>9 PM</option>
                    <option value=''>8 PM</option>
                    <option value=''>7 PM</option>
                    <option value=''>6 PM</option>
                    <option value=''>5 PM</option>
                    <option value=''>4 PM</option>
                    <option value=''>3 PM</option>
                    <option value=''>2 PM</option>
                    <option value=''>1 PM</option>
                  </select>
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
        {modalScanner && <ScanRfidModal setModalScanner={setModalScanner} />}
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
