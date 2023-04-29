import React, { useState, useRef } from 'react'
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from 'react-component-export-image'
import { useMutation, useQueryClient } from 'react-query'
import { toast, ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2'
import profile from '../../assets/images/default.png'
import axios from '../../api/api'
//icons
import { MdEmail } from 'react-icons/md'
import { IoLocation } from 'react-icons/io5'
import { FaBirthdayCake } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { TiArrowForward } from 'react-icons/ti'
// import { AiOutlineUser } from 'react-icons/ai'
import { formatPosition, formatDepartment } from '../../utils/colParser'
import EmployeeEditModal from './Modal/EmployeeEditModal'
import EmployeeSchedModal from './Modal/EmployeeSchedModal'
import SuspendModal from './Modal/SuspendModal'
import { motion } from 'framer-motion'
const EmployeeCard = ({ item, setDetails }) => {
  const queryClient = useQueryClient()
  const [modalEdit, setModalEdit] = useState(false)
  const [modalSuspend, setModalSuspend] = useState(false)
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
  const componentRef = useRef()
  return Object.keys(item).length === 0 ? (
    <></>
  ) : (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 30, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='py-5 px-5 h-full flex flex-col justify-between bg-[#F3F3F3]'
    >
      <div className='flex mb-2 justify-between'>
        <button
          onClick={() => {
            setModalSuspend(true)
          }}
          className='mx-1 bg-[#ac7238] h-8 px-5 gap-1 text-white rounded-full font-semibold group flex items-center'
        >
          Suspend
        </button>
        <button
          onClick={() => exportComponentAsPNG(componentRef)}
          className='mx-1 bg-[#ac7238] h-8 px-5 gap-1 text-white rounded-full font-semibold group flex items-center'
        >
          <TiArrowForward size={23} /> Export ID
        </button>
      </div>
      <motion.div
        key={item.id} // add a key prop that changes when the state updates
        ref={componentRef}
        className='flex justify-center items-center bg-idbg bg-no-repeat bg-cover h-96 w-full px-5'
      >
        <div className='w-[60%]'>
          <motion.div
            className='pl-2 group flex items-center text-sm gap-3 font-medium py-2 mt-20'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MdEmail size='20' color='black' /> {item.email}
          </motion.div>
          <motion.div
            className='pl-2 group flex items-center text-sm gap-3 font-medium py-2'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IoLocation size='20' color='black' /> {item.address}
          </motion.div>
          <motion.div
            className='pl-2 group flex items-center text-sm gap-3 font-medium py-2'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaBirthdayCake size='20' color='black' />{' '}
            {new Date(item.birthdate).toLocaleDateString()}
          </motion.div>
          <motion.div
            className='pl-2 group flex items-center text-sm gap-3 font-medium py-2'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BsTelephoneFill size='20' color='black' /> {item.contact}
          </motion.div>
          <h1 className='mr-2 bg-[#ac7238] font-semibold text-white text-center uppercase'>
            {formatDepartment(item.department)}
          </h1>
        </div>
        <div className='w-[40%]  flex flex-col '>
          <motion.div
            className='flex justify-center items-start'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className='border-4 border-black rounded-full aspect-square h-44 w-44 mb-4 '
              src={item.imgurl ? item.imgurl : profile}
            />
          </motion.div>
          <motion.div
            className='font-bold text-2xl mb-2 text-center'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {item.fullname}
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='font-semibold text-center'
          >
            {formatPosition(item.role)}
          </motion.div>
        </div>
      </motion.div>
      {/* buttons */}
      <div className='flex justify-center text-white mt-5'>
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
      {modalSuspend && <SuspendModal setModalSuspend={setModalSuspend} />}
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
