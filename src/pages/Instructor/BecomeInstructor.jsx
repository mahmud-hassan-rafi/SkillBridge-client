import { assets } from "@assets/assets";
import ScrollToTop from "@components/common/ScrollToTop";
import BecomeInstructorBottomCTA from "@components/Instructor/becomeInstructor/BecomeInstructorBottomCTA";
import GlobalImpact from "@components/Instructor/becomeInstructor/GlobalImpact";
import ReasonToStart from "@components/Instructor/becomeInstructor/ReasonToStart";
import Footer from "@components/Student/Footer";
import Navbar from "@components/Student/navbar/Navbar";
import React from "react";
import { useNavigate } from "react-router-dom";

const BecomeInstructor = () => {
  const navigate = useNavigate();

  return (
    <div className="text-base min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          <div
            className={`h-[80vh] sm:h-[90vh] w-full flex flex-col-reverse justify-end md:relative`}
          >
            <div
              className={`md:absolute left-[clamp(30px,8vw+1rem,100px)] md:justify-center max-md:p-6 md:w-85 sm:h-1/3 h-[26%] md:h-full flex flex-col gap-2`}
            >
              <h2 className="ml-1 text-[clamp(1.5rem,3vw+1rem,3rem)] leading-home-heading-large font-medium text-black/85 md:w-[80%] lg:w-full">
                Come teach <span>with us</span>
              </h2>
              <p className="text-gray-900 text-[19px] font-light">
                Become an instructor and change lives{" "}
                <span>— including your own</span>
              </p>
              <button
                className="bg-purple-800/90 text-white rounded-md w-full cursor-pointer py-2"
                onClick={() => navigate("onboarding/teaching-experience")}
              >
                Get Started
              </button>
            </div>
            <img
              src={assets.become_instructor_billboard}
              alt=""
              className="h-2/3 md:h-full w-full object-cover lg:md:object-[45%_center] md:object-[55%_center] sm:object-[100%_center] [440px]:object-[90%_center] object-[72%_center]"
            />
          </div>
          <ReasonToStart />
          <GlobalImpact />
          <BecomeInstructorBottomCTA />
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default BecomeInstructor;
