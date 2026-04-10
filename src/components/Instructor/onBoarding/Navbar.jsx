import { assets } from "@assets/assets";
import { useInstructorOnBoardingContext } from "@hooks/ContextHook";
import { Line } from "rc-progress";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const {
    becomeInstructorOnboardingStep,
    becomeInstructorOnboardingStepPercentange,
  } = useInstructorOnBoardingContext();

  if (window.location.pathname === "/become-instructor") {
    return null;
  }

  return (
    <div className="sticky top-0 h-20 z-100 shadow w-full bg-white overflow-hidden flex flex-col items-center">
      <div className="w-full h-[90%] gap-1 px-[clamp(8px,3vw+0.5rem,72px)] items-center grid grid-cols-[auto_auto_1fr] ">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-28 h-10 object-center object-cover lg:w-32 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/");
          }}
        />
        <hr className="w-px h-full bg-black/20" />
        <span className="flex justify-between items-center px-4 md:px-8">
          <p className="text-[clamp(18px,3vw,24px)] font-light text-black/80">
            Step <span>{becomeInstructorOnboardingStep}</span> of 3
          </p>
          <button
            className="p-2 hover:bg-black/10 text-purple-700 font-medium cursor-pointer"
            onClick={() => navigate("/")}
          >
            Exit
          </button>
        </span>
      </div>

      <Line
        strokeWidth={0.4}
        percent={becomeInstructorOnboardingStepPercentange}
        className="bg-gray-300 rounded-full w-full absolute bottom-0"
        strokeColor={`${"oklch(49.6% 0.265 301.924)"}`}
      />
    </div>
  );
};

export default Navbar;
