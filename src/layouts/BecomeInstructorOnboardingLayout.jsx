import Footer from "@pages/Instructor/become-instructor/Footer";
import Navbar from "@pages/Instructor/become-instructor/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const BecomeInstructorOnboardingLayout = () => {
  return (
    <div className="text-base min-h-screen bg-white ">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default BecomeInstructorOnboardingLayout;
