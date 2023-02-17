import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { formatPosition, formatDepartment } from "../../utils/colParser";
const EmployeeCard = ({ item }) => {
  return Object.keys(item).length === 0 ? (
    <></>
  ) : (
    <div className='p-10 h-full'>
      <div className='flex justify-center items-start'>
        <div className='mr-2'>
          <AiOutlineUser
            size={140}
            className='border-4 border-black rounded-full'
          />
        </div>
        <div>
          <h2 className='font-bold text-4xl'>{item.fullname}</h2>
          <div className='flex'>
            <div className='mr-2'>
              <div>
                Position: <span>{formatPosition(item.role)}</span>
              </div>
              <div>
                Email: <span>{item.email}</span>
              </div>
              <div>
                Address: <span>{item.address}</span>
              </div>
            </div>
            <div className="className='ml-2'">
              <div>
                Department: <span>{formatDepartment(item.department)}</span>
              </div>
              {/* iinstallan ko ng date formatter kapag nasa payroll na tayo */}
              <div>Birth Date: </div>
              <div>Contact: {item.contact}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
