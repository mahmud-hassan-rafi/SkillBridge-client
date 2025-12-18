import { assets } from "@assets/assets.js";
import React from "react";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 md:pt-36 px-7 md:px-0 space-y-7 text-center bg-linear-to-b from-cyan-100/70">
      <h1
        className="text-home-heading-small
  leading-home-heading-small
  md:text-home-heading-large
  md:leading-home-heading-large relative font-bold text-gray-800 max-w-3xl mx-auto "
      >
        Empower your future with the courses designed to{" "}
        <span className="text-blue-600">fit your choice.</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>
      {/* description for desktop screen */}
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        We bring together world class instructors, cutting-edge curriculum, and
        hands-on learning to help you achieve your goals.
      </p>
      {/* description for mobile screen */}
      <p className="md:hidden text-gray-500 max-w-sm mx-auto ">
        We bring together world class instructors to help you achieve your
        goals.
      </p>
      <Searchbar />
    </div>
  );
};

export default Hero;
