import React from "react";
import { BsBackspaceFill } from "react-icons/bs";
const EmployeeAddModal = ({ setModalAdd }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center overflow-auto">
      <div className="bg-white p-2 rounded md:w-[40rem] w-96 md:mt-0 mt-56 mb-2 ">
        <div className="flex justify-end px-py">
          <BsBackspaceFill
            size={40}
            className="cursor-pointer"
            onClick={() => {
              setModalAdd(false);
            }}
          />
        </div>
        <h1 className=" text-center font-bold text-4xl text-black mb-7">
          Add Employee
        </h1>
        <div className="flex justify-center">
          <form className="flex flex-col md:flex-row px-3 md:gap-10">
            <div className="  md:w-1/2 w-full">
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Username
                </label>
                <input className="border-2 border-black w-full " type="text" />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Password
                </label>
                <input className="border-2 border-black w-full" type="text" />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Fullname
                </label>
                <input className="border-2 border-black w-full" type="text" />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Birthdate
                </label>
                <input className="border-2 border-black w-full" type="date" />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Email Address
                </label>
                <input className="border-2 border-black w-full" type="email" />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Address
                </label>
                <input className="border-2 border-black w-full" type="text" />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Profile Photo
                </label>
                <input
                  className="border-2 border-black w-full"
                  type="file"
                  accept="image/*"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Department
                </label>
                <select className="border-2 border-black w-full">
                  <option value="">te</option>
                  <option value="">ete</option>
                  <option value="">te</option>
                  <option value="">et</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Position
                </label>
                <select className="border-2 border-black w-full">
                  <option value="">te</option>
                  <option value="">ete</option>
                  <option value="">te</option>
                  <option value="">et</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Contact No.
                </label>
                <input className="border-2 border-black w-full" type="text" />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Rate per our
                </label>
                <input className="border-2 border-black w-full" type="text" />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold">
                  Schedule
                </label>
                <select className="border-2 border-black w-full">
                  <option value="">te</option>
                  <option value="">ete</option>
                  <option value="">te</option>
                  <option value="">et</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-end pb-5 px-12">
          <button className="px-6 py-2 bg-[#ac7238] text-white rounded-xl">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAddModal;
