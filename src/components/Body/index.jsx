import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
