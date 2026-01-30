import { assets } from "@assets/assets.js";
import React from "react";

const UpdateProfileTab = ({ setClickOnUpdateProfile }) => {
  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black/15">
      <div className="lg:ml-50 w-65 h-70 bg-white rounded-xl relative box-border p-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Update profile</h2>
          <img
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer"
            onClick={() => setClickOnUpdateProfile(false)}
          />
        </div>

        <form
          className=" w-full flex flex-col gap-2 mt-5"
          onClick={(event) => event.preventDefault()}
        >
          <input
            type="text"
            className="border border-gray-500/40 px-2.5 py-1.5 rounded outline-blue-600/50"
            placeholder="Firstname"
          />
          <input
            type="text"
            className="border border-gray-500/40 px-2.5 py-1.5 rounded outline-blue-600/50"
            placeholder="Lastname"
          />
          <button className="w-full py-2 rounded-sm bg-blue-600 text-white mt-2 cursor-pointer text-sm font-semibold">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileTab;
