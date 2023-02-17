import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

// pages
import Topbar from "./Topbar";

import logo from "../assets/images/logo.png";

const Sidebar = ({ open, setOpen }) => {
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Employee List", link: "/employee-list", icon: AiOutlineUser },
    { name: "Schedule", link: "/schedule", icon: FiMessageSquare },
    {
      name: "Attendance",
      link: "/attendance",
      icon: TbReportAnalytics,
      // margin: true,
    },
    { name: "Payroll", link: "/payroll", icon: FiFolder },
    { name: "Archive", link: "/archive", icon: FiShoppingCart },
    { name: "Logout", link: "/", icon: RiSettings4Line },
  ];

  // const [open, setOpen] = useState(true);

  return (
    <div>
      <div className='flex gap-6'>
        <div
          className={`bg-[#0e0e0e] min-h-screen ${
            open ? "md:w-72 w-60" : "w-16"
          }  duration-500 text-gray-100 px-4`}
        >
          <div
            className={` cursor-pointer right-0 top-2 w-8 border-dark-purple
            rounded-full `}
          >
            <HiMenuAlt3
              size={26}
              className='cursor-pointer'
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className='flex gap-x-4 items-center justify-center'>
            <img
              src={logo}
              className={` cursor-pointer w-40 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </div>
          <div className='mt-2 flex flex-col gap-4 relative'>
            {menus?.map((menu, i) => (
              <NavLink
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                }   group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>
                  {React.createElement(menu?.icon, {
                    size: "20",
                    color: "white",
                  })}
                </div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={` whitespace-pre text-white duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
