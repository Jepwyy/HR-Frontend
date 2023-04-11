import React from 'react'

const CheckBoxAdvance = ({ id, type, name, handleClick, isChecked }) => {
  return (
    <input
      className='float-left mr-2 w-5 h-5 bg-gray-100 border-gray-300 rounded  focus:ring-0'
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
  )
}

export default CheckBoxAdvance
