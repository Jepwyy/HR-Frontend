import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { BsBackspaceFill } from 'react-icons/bs'
import { useQuery, useQueryClient } from 'react-query'
import axios from '../../api/api'
import AdminLoader from '../AdminLoader'
import { format, parseISO } from 'date-fns'
import { formatPrice } from '../../utils/priceFormatter'

const HistoryPayslip = ({ setModalHistory, id }) => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const { data, isLoading, isError } = useQuery(['payrollSingle', id], () =>
    axios.get(`/payroll/display/${id}`).then((res) => res.data[0])
  )

  const queryClient = useQueryClient()

  if (isLoading) return <AdminLoader />
  if (isError) return <div>Error...</div>
  if (!data) return <div>No Data</div>

  const closeModal = () => {
    setModalHistory(false)
    queryClient.invalidateQueries({ queryKey: ['payrollSingle'] })
  }

  return (
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center overflow-auto py-1'>
      <div className='bg-white p-2 rounded md:w-3/5 w-96  md:my-auto my-auto '>
        <div className='flex justify-end '>
          <BsBackspaceFill
            size={40}
            className='cursor-pointer'
            onClick={closeModal}
          />
        </div>
        <div
          className='flex flex-col justify-center px-5 py-7'
          ref={componentRef}
        >
          <h1 className='flex justify-center text-xl font-bold leading-tight tracking-tight text-black md:text-4xl uppercase'>
            Payslip
          </h1>
          <h1 className='flex mb-10 justify-center text-base font-bold leading-tight tracking-tight text-black md:text-3xl uppercase'>
            Pandayo <span className='text-[#ac7238] ml-2'>Coffee</span>
          </h1>
          <div className='flex justify-between mt-2'>
            <h1 className='text-base font-bold leading-tight tracking-tight text-black md:text-base uppercase'>
              Pay date: {format(parseISO(data.paydate), 'M/dd/yyyy')}
            </h1>
            <h1 className='text-base font-bold leading-tight tracking-tight text-black md:text-base uppercase'>
              Start date: {format(parseISO(data.startdate), 'M/dd/yyyy')}
            </h1>
            <h1 className='text-base font-bold leading-tight tracking-tight text-black md:text-base uppercase'>
              End date: {format(parseISO(data.enddate), 'M/dd/yyyy')}
            </h1>
          </div>

          <h1 className='mt-4 text-base font-bold leading-tight tracking-tight text-black md:text-xl uppercase'>
            Employee information
          </h1>
          <div className='grid grid-cols-2'>
            <h1 className='place-self-start'>{data.fullname}</h1>
            <h1 className='place-self-end'>{data.contact}</h1>
            <h1 className='place-self-start'>{data.address}</h1>
            <h1 className='place-self-end'>{data.email}</h1>
          </div>
          <table className='mt-4 border-separate border-spacing-0 w-full text-sm text-left text-[#010100] overflow-y-auto overflow-x-auto max-h-[500px]'>
            <thead className='text-xs text-gray-50 border border-[#010100] bg-[#010100] uppercase'>
              <tr>
                <th className='px-2 md:px-4 '>EARNINGS</th>
                <th className='px-2 md:px-4'>UNIT</th>
                <th className='px-2 md:px-4'>RATE</th>
                <th className='px-2 md:px-4'>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-2 md:px-4 font-bold'>Hours Worked</td>
                <td className='px-2 md:px-4'>{data.hoursworked.unit}</td>
                <td className='px-2 md:px-4'>{data.hoursworked.rate}</td>
                <td className='px-2 md:px-4'>
                  {formatPrice(data.hoursworked.total)}
                </td>
              </tr>
              <tr>
                <td className='px-2 md:px-4 font-bold'>Hours Worked</td>
                <td className='px-2 md:px-4'>{data.overtime.unit}</td>
                <td className='px-2 md:px-4'>{data.overtime.rate}</td>
                <td className='px-2 md:px-4'>
                  {formatPrice(data.overtime.total)}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className='px-2 md:px-4 font-bold uppercase text-center'
                >
                  Gross Pay :
                </td>

                <td className='p-2 md:p-4'>{formatPrice(data.grosspay)}</td>
              </tr>
              {/* Addition */}
              <tr>
                <td
                  colSpan={4}
                  className='px-2 md:px-4 bg-black text-start'
                >
                  <span className='text-xs text-gray-50 uppercase font-bold'>
                    Additions
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className='px-2 md:px-4 font-bold'
                >
                  <span>Advance</span>
                </td>

                <td className='px-2 md:px-4'>{formatPrice(data.advance)}</td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className='px-2 md:px-4 font-bold pb-3'
                >
                  <span>Bonus</span>
                </td>

                <td className='px-2 md:px-4'>{formatPrice(data.bonus)}</td>
              </tr>

              {/* Deductions */}
              <tr>
                <td
                  colSpan={4}
                  className='px-2 md:px-4  bg-black text-start'
                >
                  <span className='text-xs text-gray-50 uppercase font-bold'>
                    Deductions
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className='px-2 md:px-4 font-bold'
                >
                  <span>SSS</span>
                </td>

                <td className='px-2 md:px-4'>5%</td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className='px-2 md:px-4 font-bold'
                >
                  <span>PhilHealth</span>
                </td>

                <td className='px-2 md:px-4'>5%</td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className='px-2 md:px-4 font-bold'
                >
                  <span>Pagibig</span>
                </td>

                <td className='px-2 md:px-4'>5%</td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className='px-2 md:px-4 font-bold pb-3'
                >
                  <span>Recent Advance</span>
                </td>

                <td className='px-2 md:px-4'>500</td>
              </tr>
              <tr className=''>
                <td
                  colSpan={3}
                  className='px-2 md:px-4  uppercase font-bold text-center'
                >
                  Net Pay :
                </td>

                <td className='px-2 md:px-4 font-bold'>
                  {formatPrice(data.netpay)}
                </td>
              </tr>
            </tbody>
          </table>
          <div className='mt-8 pt-3 border-t-2  border-black'>
            <h1 className='font-bold text-center text-2xl mb-3 uppercase'>
              Logs
            </h1>
            <table className='border-separate border-spacing-0 w-full text-sm text-left text-[#010100] border border-[#010100] overflow-y-auto overflow-x-auto max-h-[500px]'>
              <thead className=' text-gray-50 text-sm uppercase bg-[#010100] sticky -top-[0.10rem]'>
                <tr className='py-10'>
                  <th className='text-center'>DAY</th>
                  <th className='text-center'>DATE</th>
                  <th className='text-center'>TIME IN</th>
                  <th className='text-center'>TIME OUT</th>
                  <th className='text-center'>TOTAL TIME</th>
                </tr>
              </thead>
              <tbody>
                {data.logs.map((item, index) => (
                  <tr
                    className='text-center'
                    key={index}
                  >
                    <td className=' border  border-[#010100]'>
                      {format(parseISO(item.log_date), 'EEEE')}
                    </td>
                    <td className=' border  border-[#010100]'>
                      {format(parseISO(item.log_date), 'M/dd/yyyy')}
                    </td>
                    <td className=' border  border-[#010100]'>
                      {new Date(item.time_in).toLocaleTimeString()}
                    </td>
                    <td className=' border  border-[#010100]'>
                      {new Date(item.time_out).toLocaleTimeString()}
                    </td>
                    <td className=' border  border-[#010100]'>
                      {item.totalhours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='my-5 px-5 flex justify-end gap-5'>
          <button
            onClick={handlePrint}
            className='rounded-full bg-[#ac7238] py-1 px-6  font-sans  md:text-base text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
          >
            Export
          </button>
          {/* <button
            onClick={() => {
              setModalPayslip(false)
            }}
            className='rounded-full bg-[#ac7238] py-1 px-6  font-sans  md:text-base text-sm font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-[#ac7238]/40 '
          >
            Done
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default HistoryPayslip
