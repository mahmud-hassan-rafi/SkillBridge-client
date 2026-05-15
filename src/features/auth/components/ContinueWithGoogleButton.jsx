import { infoNotify } from "@utils/toast-notify/toastify";
import React from "react";

const ContinueWithGoogleButton = () => {
  return (
    <button
      type="button"
      onClick={() => infoNotify("coming soon...")}
      className="w-full h-10 rounded border border-slate-300 bg-white hover:bg-slate-50 transition-all flex items-center justify-center gap-3 font-medium text-slate-700 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500"
    >
      <img
        draggable={false}
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="google"
        className="w-5 h-5"
      />
      Continue with Google
    </button>
  );
};

export default ContinueWithGoogleButton;
