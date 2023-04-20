import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import OnLeave from '../../components/EmployeeLeave/OnLeave'
import LeaveRequest from '../../components/EmployeeLeave/LeaveRequest'
import LeaveForm from '../../components/EmployeeLeave/LeaveForm'
const EmployeeLeave = () => {
  const [active, setActive] = useState('FirstPage')
  return (
    <div className='p-4 md:p-10'>
      <div className='flex flex-col md:flex-row justify-between md:mt-10 mb-4'>
        {/* sort */}
        <div className='flex md:flex-row flex-col md:items-end items-start mb-2'>
          <h1 className='text-2xl md:block mr-4 md:text-4xl font-bold'>
            Employee Leave
          </h1>
          <select
            name='sortby'
            className='w-40 text-center h-8 font-semibold border-2 border-black bg-white'
          >
            <option value='...'>SORT BY</option>
          </select>
        </div>
        {/* search */}
        <div className='flex items-end mb-2'>
          <div className='relative'>
            <input
              className='w-full text-white py-2 px-4 pr-10 border border-white bg-[#ac7238] rounded-lg shadow-sm placeholder-white'
              type='text'
              placeholder='Search'
            />
            <BiSearch
              size={30}
              className='absolute top-3 right-3 w-6 h-6 text-white font-semibold cursor-pointer'
            />
          </div>
        </div>
      </div>
      <div className=''>
        {/* <div className='flex gap-[1px]'>
          <button
            className={
              active === 'FirstPage'
                ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 rounded-l'
                : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l'
            }
            onClick={() => setActive('FirstPage')}
          >
            On Leave
          </button>
          <button
            className={
              active === 'SecondPage'
                ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 '
                : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 '
            }
            onClick={() => setActive('SecondPage')}
          >
            Leave Request
          </button>
          <button
            className={
              active === 'ThirdPage'
                ? 'bg-[#ac7238] text-gray-50 font-bold py-2 px-4 rounded-r'
                : 'bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r'
            }
            onClick={() => setActive('ThirdPage')}
          >
            Leave Form
          </button>
        </div> */}
        <div className='w-full bg-[#F3F3F3] mt-2 py-5 px-3 h-full'>
          {/* {active === 'FirstPage' && <OnLeave />}
          {active === 'SecondPage' && <LeaveRequest />}
          {active === 'ThirdPage' && <LeaveForm />} */}
          <div className='h-[310px] mb-2'>
            <h1 className='font-semibold text-2xl text-center mb-2 text-black'></h1>
            <div className='overflow-x-auto max-h-[270px] border-4 border-[#010100] mb-1'>
              <table className='border-separate border-spacing-0 w-full text-sm text-left text-[#010100]  overflow-y-auto '>
                <thead className='text-xs text-gray-50 uppercase border-2 border-[#010100] bg-[#010100] sticky -top-[0.10rem]'>
                  <tr>
                    <th className='p-2 md:p-3'>ID</th>
                    <th className='p-2 md:p-3'>EMPLOYEE</th>
                    <th className='p-2 md:p-3'>Department</th>
                    <th className='p-2 md:p-3'>Position</th>
                    <th className='p-2 md:p-3'>Date Start</th>
                    <th className='p-2 md:p-3'>Date End</th>
                    <th className='p-2 md:p-3'>Approved By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-2 md:p-3 border border-[#010100]'>69</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Kenneth Collado
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Sales
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/11/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/22/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      John Mark Familgan
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 md:p-3 border border-[#010100]'>69</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Kenneth Collado
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Sales
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/11/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/22/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      John Mark Familgan
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 md:p-3 border border-[#010100]'>69</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Kenneth Collado
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Sales
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/11/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/22/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      John Mark Familgan
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 md:p-3 border border-[#010100]'>69</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Kenneth Collado
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Sales
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/11/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/22/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      John Mark Familgan
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 md:p-3 border border-[#010100]'>69</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Kenneth Collado
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Sales
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/11/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/22/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      John Mark Familgan
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 md:p-3 border border-[#010100]'>69</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Kenneth Collado
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Sales
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/11/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/22/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      John Mark Familgan
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 md:p-3 border border-[#010100]'>69</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Kenneth Collado
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Sales
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/11/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/22/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      John Mark Familgan
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 md:p-3 border border-[#010100]'>69</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Kenneth Collado
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Sales
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/11/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/22/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      John Mark Familgan
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 md:p-3 border border-[#010100]'>69</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Kenneth Collado
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      Sales
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>Cook</td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/11/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      2/22/2023
                    </td>
                    <td className='p-2 md:p-3 border border-[#010100]'>
                      John Mark Familgan
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='flex justify-end px-2'>
            <button className='py-2 px-6 rounded-lg bg-green-500 text-white'>
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeLeave
