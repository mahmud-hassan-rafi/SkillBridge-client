import React from "react";

const SignupPageSectionDivider = () => {
  return (
    <div className="relative py-1">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-200"></div>
      </div>

      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-xs uppercase text-slate-400">
          or continue with
        </span>
      </div>
    </div>
  );
};

export default SignupPageSectionDivider;
