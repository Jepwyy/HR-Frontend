import React from 'react'
import Swal from 'sweetalert2'
const respond = () => {
  Swal.fire({
    title: 'Respond Leave Request?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonColor: '#ac7238',
    confirmButtonText: 'Accept',
    denyButtonText: `Decline`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}
const LeaveRequest = () => {
  return (
    <div className='h-[310px] mb-6'>
      <h1 className='font-semibold text-xl mb-2 text-black'>
        Employee's Leave Request
      </h1>
      <div className='overflow-x-auto max-h-[269px] border-4 border-[#010100] mb-1'>
        <table className='border-separate border-spacing-0 w-full text-sm text-left text-[#010100]  overflow-y-auto '>
          <thead className='text-xs text-gray-50 uppercase border-2 border-[#010100] bg-[#010100] sticky -top-[0.10rem]'>
            <tr>
              <th className='p-2 md:p-[17px]'>ID</th>
              <th className='p-2 md:p-[17px]'>Employee</th>
              <th className='p-2 md:p-[17px]'>Department</th>
              <th className='p-2 md:p-[17px]'>Position</th>
              <th className='p-2 md:p-[17px]'>Date Start</th>
              <th className='p-2 md:p-[17px]'>Date End</th>
              <th className='p-2 md:p-[17px]'>Date Requested</th>
              <th className='p-2 md:p-[17px]'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-2 md:p-3 border border-[#010100]'>69</td>
              <td className='p-2 md:p-3 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
              <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/11/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/22/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/10/2023</td>
              <td className='p-2 md:p-3 border border-[#010100] text-center'>
                <button
                  onClick={respond}
                  className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                >
                  Respond
                </button>
              </td>
            </tr>
            <tr>
              <td className='p-2 md:p-3 border border-[#010100]'>69</td>
              <td className='p-2 md:p-3 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
              <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/11/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/22/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/10/2023</td>
              <td className='p-2 md:p-3 border border-[#010100] text-center'>
                <button
                  onClick={respond}
                  className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                >
                  Respond
                </button>
              </td>
            </tr>
            <tr>
              <td className='p-2 md:p-3 border border-[#010100]'>69</td>
              <td className='p-2 md:p-3 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
              <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/11/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/22/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/10/2023</td>
              <td className='p-2 md:p-3 border border-[#010100] text-center'>
                <button
                  onClick={respond}
                  className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                >
                  Respond
                </button>
              </td>
            </tr>
            <tr>
              <td className='p-2 md:p-3 border border-[#010100]'>69</td>
              <td className='p-2 md:p-3 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
              <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/11/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/22/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/10/2023</td>
              <td className='p-2 md:p-3 border border-[#010100] text-center'>
                <button
                  onClick={respond}
                  className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                >
                  Respond
                </button>
              </td>
            </tr>
            <tr>
              <td className='p-2 md:p-3 border border-[#010100]'>69</td>
              <td className='p-2 md:p-3 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
              <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/11/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/22/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/10/2023</td>
              <td className='p-2 md:p-3 border border-[#010100] text-center'>
                <button
                  onClick={respond}
                  className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                >
                  Respond
                </button>
              </td>
            </tr>
            <tr>
              <td className='p-2 md:p-3 border border-[#010100]'>69</td>
              <td className='p-2 md:p-3 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
              <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/11/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/22/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/10/2023</td>
              <td className='p-2 md:p-3 border border-[#010100] text-center'>
                <button
                  onClick={respond}
                  className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                >
                  Respond
                </button>
              </td>
            </tr>
            <tr>
              <td className='p-2 md:p-3 border border-[#010100]'>69</td>
              <td className='p-2 md:p-3 border border-[#010100]'>
                Abdul Jabol
              </td>
              <td className='p-2 md:p-3 border border-[#010100]'>Sales</td>
              <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/11/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/22/2023</td>
              <td className='p-2 md:p-3 border border-[#010100]'>2/10/2023</td>
              <td className='p-2 md:p-3 border border-[#010100] text-center'>
                <button
                  onClick={respond}
                  className='rounded-full bg-[#ac7238] py-1 px-6  font-sans text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
                >
                  Respond
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeaveRequest
