import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { formatPosition, formatDepartment } from "../../utils/colParser";
import EmployeeEditModal from "./Modal/EmployeeEditModal";
import EmployeeSchedModal from "./Modal/EmployeeSchedModal";
const EmployeeCard = ({ item }) => {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalSched, setModalSched] = useState(false);
  return Object.keys(item).length === 0 ? (
    <></>
  ) : (
    <div className="py-10 px-5 h-full flex flex-col justify-between bg-[#F3F3F3]">
      <div className="flex justify-center items-start">
        <div className="mr-6">
          <AiOutlineUser
            size={140}
            className="border-4 border-black rounded-full"
          />
        </div>
        <div>
          <h2 className="font-bold text-4xl mb-2">{item.fullname}</h2>
          <div className="flex">
            <div className="mr-10">
              <div className="font-semibold">
                Position:{" "}
                <span className="font-normal">{formatPosition(item.role)}</span>
              </div>
              <div className="font-semibold">
                Email: <span className="font-normal">{item.email}</span>
              </div>
              <div className="font-semibold">
                Address: <span className="font-normal">{item.address}</span>
              </div>
            </div>
            <div className="className='ml-6'">
              <div className="font-semibold">
                Department:{" "}
                <span className="font-normal">
                  {formatDepartment(item.department)}
                </span>
              </div>
              {/* iinstallan ko ng date formatter kapag nasa payroll na tayo */}
              <div className="font-semibold">Birth Date: </div>
              <div className="font-semibold">
                Contact: <span className="font-normal">{item.contact}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="flex justify-center text-white mt-40">
        <button
          className="mx-2 bg-[#ac7238] h-10 px-5 rounded-full font-semibold"
          onClick={() => {
            setModalSched(true);
          }}
        >
          View Schedule
        </button>
        <button
          className="mx-2 bg-[#ac7238] h-10 px-12 rounded-full font-semibold"
          onClick={() => {
            setModalEdit(true);
          }}
        >
          Edit
        </button>
        <button className="mx-2 bg-[#ac7238] h-10 px-12 rounded-full font-semibold">
          Archive
        </button>
      </div>
      {modalEdit && <EmployeeEditModal setModalEdit={setModalEdit} />}
      {modalSched && <EmployeeSchedModal setModalSched={setModalSched} />}
    </div>
  );
};

export default EmployeeCard;
