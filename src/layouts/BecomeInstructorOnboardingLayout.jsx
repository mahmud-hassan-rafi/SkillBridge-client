import Footer from "@components/Instructor/onBoarding/Footer";
import Navbar from "@components/Instructor/onBoarding/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const BecomeInstructorOnboardingLayout = () => {
  return (
    <div className="text-base min-h-screen bg-white ">
      <Navbar />
      <div className="px-4 sm:px-8 md:px-16 flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default BecomeInstructorOnboardingLayout;
