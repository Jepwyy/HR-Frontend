import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Topbar = ({ open, setOpen }) => {
  return (
    <div className='bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between'>
      <div
        className={` cursor-pointer right-0 top-2 w-8 border-dark-purple
            rounded-full `}
      >
        <HiOutlineMenuAlt3
          size={26}
          className='cursor-pointer'
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
};

export default Topbar;
