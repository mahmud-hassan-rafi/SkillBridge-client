import { assets } from "@assets/assets.js";
import React from "react";

const UpdateEmailTab = ({ setClickOnUpdateEmail }) => {
  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black/15">
      <div className="lg:ml-50 w-65 h-40 bg-white rounded-xl relative box-border p-4">
        <div className="flex justify-between">
          <h2 className="text-base font-semibold">Update Email</h2>
          <img
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer"
            onClick={() => setClickOnUpdateEmail(false)}
          />
        </div>

        <form
          className=" w-full flex flex-col gap-2 mt-3"
          onClick={(event) => event.preventDefault()}
        >
          <input
            type="email"
            className="border border-gray-500/40 px-2.5 py-1.5 rounded outline-blue-600/50"
            placeholder="enter new email"
          />
          <button className="w-full py-2 rounded-sm bg-blue-600 text-white cursor-pointer font-semibold text-sm">
            Update Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmailTab;
