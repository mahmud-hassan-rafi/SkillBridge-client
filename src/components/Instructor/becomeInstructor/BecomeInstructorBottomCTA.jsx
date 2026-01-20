import React from "react";
import { useNavigate } from "react-router-dom";

const BecomeInstructorBottomCTA = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-gray-200/70 md:justify-center items-center max-md:p-6 sm:p-10 md:p-20 md:w-full sm:h-1/3 h-[26%] md:h-full flex flex-col gap-2`}
    >
      <h2 className="ml-1 text-[clamp(1.5rem,3vw+1rem,3rem)] leading-home-heading-large text-center font-medium text-black/85 w-full">
        Become an instructor today
      </h2>
      <p className="text-gray-900 lg:text-xl max-sm:text-base sm:text-lg font-light mb-5">
        Join one of the world’s largest online learning marketplaces.
      </p>
      <button
        className="bg-purple-800/90 text-white rounded-md w-70 cursor-pointer py-2"
        onClick={() => navigate("onboarding/teaching-experience")}
      >
        Get Started
      </button>
    </div>
  );
};

export default BecomeInstructorBottomCTA;
