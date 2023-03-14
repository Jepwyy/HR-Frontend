import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import axios from '../../api/api'
import { formatDepartment, formatPosition } from '../../utils/colParser'

const ArchiveList = ({ item }) => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (user) => axios.put(`/users/unarchive/${user}`),
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
      queryClient.invalidateQueries({ queryKey: ['EmployeeArchives'] })
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

  const unarchiveEmployee = (id) => {
    Swal.fire({
      icon: 'warning',
      title: `Unarchive Employee ${item.fullname} ?`,
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#919294',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(id)
      }
    })
  }
  return (
    <tr>
      <td className='p-2 md:p-4 border border-[#010100]'>{item.id}</td>
      <td className='p-2 md:p-4 border border-[#010100]'>{item.fullname}</td>
      <td className='p-2 md:p-4 border border-[#010100]'>
        {formatDepartment(item.department)}
      </td>
      <td className='p-2 md:p-4 border border-[#010100]'>
        {formatPosition(item.role)}
      </td>
      <td className=' p-2 md:p-3 border border-[#010100] text-center'>
        <button
          className=' rounded-lg bg-[#ac7238] py-2 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          onClick={() => unarchiveEmployee(item.id)}
        >
          UNARCHIVE
        </button>
      </td>
    </tr>
  )
}

export default ArchiveList
