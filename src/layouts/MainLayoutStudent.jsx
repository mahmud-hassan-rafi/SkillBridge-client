import Navbar from "@components/Student/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayoutStudent = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayoutStudent;
