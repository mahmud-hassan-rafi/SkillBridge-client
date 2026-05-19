import { assets } from "@assets/assets";
import React from "react";

const LoginPageRightSection = () => {
  return (
    <div className="hidden lg:flex relative flex-col justify-between bg-linear-to-br from-slate-100 via-slate-200 to-slate-300 px-10 py-15 overflow-hidden">
      <div className="mt-15 flex justify-center object-cover">
        <img
          draggable={false}
          src={assets.signup_page_background_illustration}
          alt="illustration"
          className="w-full object-contain drop-shadow-2xl scale-150"
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70  px-4 py-2 text-sm font-medium text-slate-700 shadow-sm mb-5">
          🚀 &nbsp; 12,000+ Active Learners
        </div>

        <h3 className="text-3xl font-bold text-slate-800 leading-snug">
          Learn, Build &
          <br />
          Grow With Skillbridge
        </h3>

        <p className="text-slate-600 mt-4 leading-relaxed">
          Join students and instructors worldwide building real-world skills
          through modern interactive learning.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="rounded-2xl bg-white/70  p-4 shadow-sm">
            <h4 className="text-2xl font-bold text-slate-800">10K+</h4>

            <p className="text-xs text-slate-500 mt-1">Courses Viewed</p>
          </div>

          <div className="rounded-2xl bg-white/70  p-4 shadow-sm">
            <h4 className="text-2xl font-bold text-slate-800 flex gap-1 items-center">
              <img
                src={assets.star}
                alt="star"
                className="inline-block size-5"
              />{" "}
              4.9
            </h4>

            <p className="text-xs text-slate-500 mt-1">Student Rating</p>
          </div>

          <div className="rounded-2xl bg-white/70  p-4 shadow-sm">
            <h4 className="text-2xl font-bold text-slate-800">850+</h4>

            <p className="text-xs text-slate-500 mt-1">Instructors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageRightSection;
