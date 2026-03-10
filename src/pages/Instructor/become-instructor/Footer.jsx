import { useInstructorOnBoardingContext } from "@context/InstructorOnBoarding.context";
import React from "react";

const Footer = () => {
  const {
    handleClickOnboardingContinue,
    handleClickOnboardingPrevious,
    becomeInstructorOnboardingStep,
    loading,
  } = useInstructorOnBoardingContext();

  return (
    <div className="sticky bottom-0 h-18 z-100 shadow-[0_-2px_10px_rgba(0,0,0,0.15)] w-full bg-white overflow-hidden flex items-center">
      <div className="w-full flex justify-between items-center px-[clamp(8px,3vw+0.5rem,72px)]">
        {becomeInstructorOnboardingStep > 1 && (
          <button
            className={`text-purple-700 px-4 py-1.5 border border-purple-700 rounded-md hover:bg-black/5 cursor-pointer`}
            onClick={handleClickOnboardingPrevious}
          >
            Previous
          </button>
        )}
        <button
          className={`text-white px-4 py-2 border bg-purple-700 rounded-md hover:bg-purple-800 cursor-pointer`}
          disabled={loading || becomeInstructorOnboardingStep === 3}
          onClick={handleClickOnboardingContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Footer;
