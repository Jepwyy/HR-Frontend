import React from 'react'
import { formatDepartment, formatPosition } from '../../utils/colParser'

const ArchiveList = ({ item }) => {
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
      <td className='flex justify-center p-2 md:p-4 border border-[#010100]'>
        <button className=' mr-3 rounded-lg bg-[#ac7238] py-3 px-6 font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
          UNARCHIVE
        </button>
      </td>
    </tr>
  )
}

export default ArchiveList
