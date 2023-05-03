import React from 'react'
import { formatPosition, formatDepartment } from '../../utils/colParser'

// parse data values
const EmployeeListItems = ({ item, active, toggle, id }) => {
  return (
    <tr
      className={
        active === id
          ? 'border-b-2 border-gray-500 cursor-pointer bg-[#D9D9D8]'
          : item.active === 2
          ? 'border-b-2 border-gray-500 cursor-pointer bg-red-500 line-through'
          : 'border-b-2 border-gray-500 cursor-pointer '
      }
      onClick={() => toggle(id)}
    >
      <td className='p-2 md:p-4'>{item.id}</td>
      <td className='p-2 md:p-4'>{item.fullname}</td>
      <td className='p-2 md:p-4'>{formatDepartment(item.department)}</td>
      <td className='p-2 md:p-4'>{formatPosition(item.role)}</td>
    </tr>
  )
}

export default EmployeeListItems
