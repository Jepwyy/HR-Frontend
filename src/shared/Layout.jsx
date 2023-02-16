import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <div className="">
        <Sidebar />
      </div>

      <div className="overflow-hidden w-screen">
        <div className="flex flex-col flex-1 ">
          <Topbar />
        </div>
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
