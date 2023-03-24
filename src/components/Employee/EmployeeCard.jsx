import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toast, ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2'
import profile from '../../assets/images/dp.jpg'
import axios from '../../api/api'
// import { AiOutlineUser } from 'react-icons/ai'
import { formatPosition, formatDepartment } from '../../utils/colParser'
import EmployeeEditModal from './Modal/EmployeeEditModal'
import EmployeeSchedModal from './Modal/EmployeeSchedModal'
import { motion } from 'framer-motion'
const EmployeeCard = ({ item, setDetails }) => {
  const queryClient = useQueryClient()
  const [modalEdit, setModalEdit] = useState(false)
  const [modalSched, setModalSched] = useState(false)
  const mutation = useMutation({
    mutationFn: (user) => axios.put(`/users/archive/${user}`),
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
      setDetails({})
      toast.success(`${data.data.message}`, {
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
  const archiveEmployee = () => {
    Swal.fire({
      icon: 'warning',
      title: `Archive Employee ${item.fullname} ?`,
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#919294',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(item.id)
      }
    })
  }
  return Object.keys(item).length === 0 ? (
    <></>
  ) : (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 30, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='py-10 px-5 h-full flex flex-col justify-between bg-[#F3F3F3]'
    >
      <div className='flex justify-center items-start'>
        <div className='flex-none mr-5'>
          <img
            className='border-4 border-black rounded-full aspect-square h-36 w-36'
            src={item.imgurl ? item.imgurl : profile}
          />
        </div>
        <div className='flex-1'>
          <h2 className='font-bold text-4xl mb-2'>{item.fullname}</h2>
          <div className='flex'>
            <div className='mr-10'>
              <div className='font-semibold'>
                Position:{' '}
                <span className='font-normal'>{formatPosition(item.role)}</span>
              </div>
              <div className='font-semibold'>
                Email: <span className='font-normal'>{item.email}</span>
              </div>
              <div className='font-semibold'>
                Address: <span className='font-normal'>{item.address}</span>
              </div>
            </div>
            <div className="className='ml-6'">
              <div className='font-semibold'>
                Department:{' '}
                <span className='font-normal'>
                  {formatDepartment(item.department)}
                </span>
              </div>
              {/* iinstallan ko ng date formatter kapag nasa payroll na tayo */}
              <div className='font-semibold'>Birth Date: </div>
              <div className='font-semibold'>
                Contact: <span className='font-normal'>{item.contact}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className='flex justify-center text-white mt-40'>
        <button
          className='mx-2 bg-[#ac7238] h-10 px-5 rounded-full font-semibold'
          onClick={() => {
            setModalSched(true)
          }}
        >
          View Schedule
        </button>
        <button
          className='mx-2 bg-[#ac7238] h-10 px-12 rounded-full font-semibold'
          onClick={() => {
            setModalEdit(true)
          }}
        >
          Edit
        </button>
        <button
          className='mx-2 bg-[#ac7238] h-10 px-12 rounded-full font-semibold'
          onClick={archiveEmployee}
        >
          Archive
        </button>
      </div>
      {modalEdit && (
        <EmployeeEditModal
          item={item}
          setDetails={setDetails}
          setModalEdit={setModalEdit}
        />
      )}
      {modalSched && (
        <EmployeeSchedModal item={item} setModalSched={setModalSched} />
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
    </motion.div>
  )
}

export default EmployeeCard
