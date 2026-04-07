import { assets } from "@assets/assets";
import React from "react";

const CallToActions = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-home-heading-small font-semibold text-gray-800 ">
        Learn Anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 text-sm md:text-base">
        Sunt porro, nemo harum asperiores sed facilis vitae, dignissimos
        excepturi quidem adipisci voluptate.
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        <button className="px-5 sm:px-10 py-3 rounded-md text-sm sm:text-base text-white bg-blue-600">
          Get Started
        </button>
        <button className="flex gap-2 items-center text-sm sm:text-base">
          Learn more{" "}
          <img
            loading="lazy"
            className="mt-1"
            src={assets.arrow_icon}
            alt="arrow_icon"
          />
        </button>
      </div>
    </div>
  );
};

export default CallToActions;
