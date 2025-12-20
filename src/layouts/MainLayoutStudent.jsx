import Navbar from "@components/Student/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const MainLayoutStudent = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default MainLayoutStudent;
