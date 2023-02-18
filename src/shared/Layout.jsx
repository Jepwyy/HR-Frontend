import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-row h-screen">
      <div className="">
        <Sidebar open={open} setOpen={setOpen} />
      </div>

      <div className="overflow-hidden w-screen">
        <div className="flex flex-col flex-1 ">
          <Topbar open={open} setOpen={setOpen} />
        </div>
        <div className="flex-1 p-0 min-h-0 bg-white h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
