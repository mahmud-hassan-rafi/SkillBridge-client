import ScrollToTop from "@components/common/ScrollToTop";
import Navbar from "@components/Student/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayoutStudent = () => {
  return (
    <>
      <ScrollToTop />
      <div className="text-default min-w-screen min-h-screen bg-white">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayoutStudent;
