import React from "react";
import { BsBackspaceFill } from "react-icons/bs";
const EmployeeSchedModal = ({ setModalSched }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center overflow-auto">
      <div className="bg-white p-2 rounded md:w-[45rem]  w-96 ">
        <div className="flex justify-end px-py">
          <BsBackspaceFill
            size={40}
            className="cursor-pointer"
            onClick={() => {
              setModalSched(false);
            }}
          />
        </div>
        <h1 className=" text-center font-bold text-4xl text-black mb-7">
          View Schedule
        </h1>
        <div class="relative overflow-x-auto">
          <h1>Name: Abdol Jabol</h1>
          <table class="w-full text-sm text-left text-gray-900 border border-gray-900">
            <thead class="text-xs text-gray-50 uppercase bg-gray-900">
              <tr>
                <th className="p-2 md:p-4">Sunday</th>
                <th className="p-2 md:p-4">Monday</th>
                <th className="p-2 md:p-4">Tuesday</th>
                <th className="p-2 md:p-4">Wednesday</th>
                <th className="p-2 md:p-4">Thursday</th>
                <th className="p-2 md:p-4">Friday</th>
                <th className="p-2 md:p-4">Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 md:p-4 border border-gray-900">adasd</td>
                <td className="p-2 md:p-4 border border-gray-900">asdasd</td>
                <td className="p-2 md:p-4 border border-gray-900">adasdasd</td>
                <td className="p-2 md:p-4 border border-gray-900">asdasdasd</td>
                <td className="p-2 md:p-4 border border-gray-900">adasdd</td>
                <td className="p-2 md:p-4 border border-gray-900">asdasdasd</td>
                <td className="p-2 md:p-4 border border-gray-900">adasdasd</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSchedModal;
