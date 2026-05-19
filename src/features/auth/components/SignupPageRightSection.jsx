import { assets } from "@assets/assets";
import React from "react";

const SignupPageRightSection = () => {
  return (
    <div className="hidden lg:flex relative bg-gray-200/60 p-10 flex-col justify-around">
      {/* Top Graphic */}
      <div className="mt-15 flex justify-center object-cover">
        <img
          draggable={false}
          src={assets.signup_page_background_illustration}
          alt="illustration"
          className="w-full object-contain drop-shadow-2xl scale-150"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 mb-10">
        <h3 className="text-2xl font-bold text-slate-800">
          Unlock all features with a free account:
        </h3>

        <ul className="space-y-3 text-slate-700">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Access 10,000+ Courses
          </li>

          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Advanced Project Tools
          </li>

          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Build a Professional Portfolio
          </li>

          <li className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Connect with Community
          </li>
        </ul>
      </div>

      {/* Bottom Character */}
      <div className="absolute bottom-0 right-0">
        <img
          draggable={false}
          src={assets.signup_page_avater_illustration}
          alt="character"
          className="w-55 object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default SignupPageRightSection;
