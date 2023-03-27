import React from 'react'

const Add = () => {
  return (
    <div>
      <h1 className='mb-3 text-lg font-bold uppercase'>Additions</h1>
      <div className='ml-5'>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold'>
            Bonus :
          </label>
          <input
            className='border-2 border-black w-3/6'
            type='number'
            name='department'
            min='1'
            max='100'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='block text-gray-700 text-lg font-bold'>
            Advance Pay :
          </label>
          <input
            className='border-2 border-black w-3/6'
            type='number'
            min='1'
            max='100'
            name='department'
            required
          />
        </div>
      </div>
    </div>
  )
}

export default Add
