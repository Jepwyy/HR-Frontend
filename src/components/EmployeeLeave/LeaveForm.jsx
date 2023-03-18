import React from 'react'

const LeaveForm = () => {
  return (
    <div className='h-[310px] mb-6'>
      <form>
        <h1 className='font-semibold text-xl  text-black'>
          Employee's Leave Request From
        </h1>
        <div className='mb-3 flex justify-end'>
          <label className='inline text-gray-700 text-lg font-bold mr-1 mb-1'>
            Date Now :
          </label>
          <input
            className=' border-2 border-black w-1/6'
            type='date'
            name='datenow'
            min='1'
            max='100'
            required
          />
        </div>
        <div className='overflow-x-auto max-h-[270px] border-4 border-[#010100] mb-1'>
          <h1 className='w-full text-center bg-black text-white'>
            EMPLOYEE LEAVE REQUEST FORM
          </h1>
          <div className='flex flex-row '>
            <div className='w-2/4 px-10 border-r-2 border-black'>
              <h1 className='mt-2 w-full text-center bg-black text-white'>
                Employee Details
              </h1>
              <div className='mb-3'>
                <label className='block text-gray-700 text-lg font-bold'>
                  Employee :
                </label>
                <select
                  className='border-2 border-black w-full h-7'
                  name='employee'
                  required
                >
                  <option value=''>Abdol Jabol</option>
                  <option value=''>Abdol SalSalani</option>
                </select>
              </div>
              <div className='mb-3'>
                <label className='block text-gray-700 text-lg font-bold'>
                  Position :
                </label>
                <input
                  className='border-2 border-black w-full h-6'
                  type='text'
                  name='position'
                  min='1'
                  max='100'
                  required
                />
              </div>
              <div className='mb-3'>
                <label className='block text-gray-700 text-lg font-bold'>
                  Department :
                </label>
                <input
                  className='border-2 border-black w-full h-6'
                  type='text'
                  name='department'
                  min='1'
                  max='100'
                  required
                />
              </div>
            </div>
            <div className='w-2/4 px-10'>
              <h1 className='mt-2 w-full text-center bg-black text-white'>
                Leave Requested
              </h1>
              <div className='mb-3'>
                <label className='block text-gray-700 text-lg font-bold'>
                  From :
                </label>
                <input
                  className='border-2 border-black w-full'
                  name='from'
                  type='date'
                  required
                />
              </div>
              <div className='mb-3'>
                <label className='block text-gray-700 text-lg font-bold'>
                  To :
                </label>
                <input
                  className='border-2 border-black w-full'
                  name='to'
                  type='date'
                  required
                />
              </div>
              <div className='mb-3'>
                <label className='block text-gray-700 text-lg font-bold'>
                  Total Number Of Days :
                </label>
                <input
                  className='border-2 border-black w-full h-6'
                  type='number'
                  name='department'
                  min='1'
                  max='100'
                  required
                />
              </div>
            </div>
          </div>
          <div className='px-10 mb-5'>
            <h1 className='w-full text-center bg-black text-white '>
              Reason For Leave
            </h1>
            <div className='grid gap-x-4 gap-y-2 md:grid-cols-3 grid-cols-2 p-8'>
              <div>
                <input
                  type='checkbox'
                  name='sick'
                  value='sick'
                  className='mr-1 w-3 h-3 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                />
                <label
                  for='sick'
                  className='text-gray-900 text-base font-semibold'
                >
                  Sick Leave
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  name='vacation'
                  value='vacation'
                  className='mr-1 w-3 h-3 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                />
                <label
                  for='vacation'
                  className='text-gray-900 text-base font-semibold'
                >
                  Maternity Leave
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  name='vacation'
                  value='vacation'
                  className='mr-1 w-3 h-3 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                />
                <label
                  for='vacation'
                  className='text-gray-900 text-base font-semibold'
                >
                  Vacation Leave
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  name='vacation'
                  value='vacation'
                  className='mr-1 w-3 h-3 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                />
                <label
                  for='vacation'
                  className='text-gray-900 text-base font-semibold'
                >
                  Annual Leave
                </label>
              </div>
              <div>
                <input
                  type='checkbox'
                  name='vacation'
                  value='vacation'
                  className='mr-1 w-3 h-3 bg-gray-100 border-gray-300 rounded  focus:ring-0'
                />
                <label
                  for='vacation'
                  className='text-gray-900 text-base font-semibold'
                >
                  Parental Leave
                </label>
              </div>
            </div>
            <div className='mb-2'>
              <label className=' text-gray-900 text-base font-semibold mr-1'>
                Supporting Documents(
                <span className='font-normal'>Image Only</span>) :
              </label>
              <input
                className='border-2 border-black h-6 w-3/12 text-xs'
                type='file'
                accept='image/*'
                required
              />
            </div>
          </div>
          <div className='py-6 px-11 flex justify-end gap-4 border-t-2 border-black'>
            <button
              type='reset'
              className='rounded-full bg-gray-900 py-1 px-6  font-sans text-sm font-semibold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-gray-900/40 '
            >
              Reset
            </button>
            <button
              type='submit'
              className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-semibold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LeaveForm
