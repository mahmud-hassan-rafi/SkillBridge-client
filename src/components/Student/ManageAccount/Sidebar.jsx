import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const ManageAccountNavbar = ({ clickedOn, setClickedOn }) => {
  return (
    <div className="md:w-[27%] min-w-15 bg-gray-200/60 md:p-4 flex flex-col gap-2">
      <div className="hidden md:flex flex-col mb-4">
        <h2 className="text-2xl font-semibold">Account</h2>
        <h4 className="text-sm text-gray-700/70">Manage your account info</h4>
      </div>
      <div className="flex flex-col">
        <span
          onClick={() => setClickedOn("profile")}
          className={`flex gap-3 w-full p-2 max-md:py-3 items-center max-md:justify-center rounded  ${
            clickedOn === "profile"
              ? "bg-black/10 cursor-default"
              : "text-gray-900/70 cursor-pointer"
          }`}
        >
          <FaUserCircle className="text-2xl md:text-sm" />
          <p className="text-sm hidden md:flex">Profile</p>
        </span>
        <span
          onClick={() => setClickedOn("security")}
          className={`flex gap-3 w-full p-2 max-md:py-3 items-center max-md:justify-center rounded ${
            clickedOn === "security"
              ? "bg-black/10 cursor-default"
              : "text-gray-900/70 cursor-pointer"
          }`}
        >
          <MdOutlineSecurity className="text-2xl md:text-sm" />
          <p className="text-sm hidden md:flex">Security</p>
        </span>
      </div>
    </div>
  );
};

export default ManageAccountNavbar;
