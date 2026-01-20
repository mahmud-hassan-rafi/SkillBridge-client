import Footer from "@components/Instructor/Footer";
import Navbar from "@components/Instructor/Navbar";
import Sidebar from "@components/Instructor/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const InstructorLayout = () => {
  return (
    <div className="text-base min-h-screen bg-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorLayout;
