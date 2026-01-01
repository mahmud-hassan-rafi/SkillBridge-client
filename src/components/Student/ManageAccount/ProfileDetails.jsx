import { useAppContext } from "@context/AppContext";
import React from "react";
import { useSelector } from "react-redux";
import { LuUserRoundPen } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const ProfileDetails = () => {
  const user = useSelector((state) => state.auth?.user);
  const { capitalize } = useAppContext();

  return (
    <div className="flex flex-col">
      <h2 className="ml-5 text-lg font-semibold">Profile details</h2>

      {/* desktop view */}
      {/* profile */}
      <div className="grid grid-cols-[30%_60%_10%] lg:grid-cols-[30%_50%_20%] gap-2 w-full p-5 items-center">
        <h4 className="text-sm font-medium">Profile</h4>
        <span className="flex gap-3 items-center">
          <img
            src={user?.imageUrl}
            alt=""
            className="profile_image rounded-full"
          />
          <h6 className="text-sm font-medium">
            {capitalize(user.fullname?.firstname)}{" "}
            {capitalize(user.fullname?.lastname)}
          </h6>
        </span>
        <span className="flex items-center gap-1.5 max-lg:ml-auto max-lg:mr-5 cursor-pointer">
          <LuUserRoundPen className="text-lg text-gray-700/70 font-medium cursor-pointer" />
          <p className="max-lg:hidden font-medium text-xs text-gray-900/70">
            Update profile
          </p>
        </span>
      </div>

      {/* email addresses */}
      <div className="grid grid-cols-[30%_60%_10%] gap-2 w-full p-5 items-start">
        <h4 className="text-sm font-medium">Email addresses</h4>
        <span className="flex flex-col gap-3 items-start">
          <span className="flex gap-1 items-center">
            <p className="text-xs font-normal text-gray-800">{user?.email}</p>
            <span className="py-0.5 px-1 rounded bg-blue-100/80 text-xs">
              primary
            </span>
          </span>

          <button className="flex gap-1 items-center text-sm cursor-pointer">
            <FiPlus className="text-base font-normal" /> Add email addresses
          </button>
        </span>
        <HiOutlineDotsHorizontal className="text-lg text-gray-700/70 font-medium cursor-pointer ml-auto mr-5" />
      </div>

      {/* connected accounts */}
      <div className="grid grid-cols-[30%_60%_10%] gap-2 w-full p-5 items-center">
        <h4 className="text-sm font-medium">Connected accounts</h4>
        <span className="flex flex-col gap-3 items-start">
          <button className="flex gap-1 items-center text-sm cursor-pointer px-3 py-2 border border-gray-300/70 rounded">
            <FcGoogle className="text-base font-normal" /> Connect to Google
          </button>
        </span>
        <HiOutlineDotsHorizontal className="text-lg text-gray-700/70 font-medium cursor-pointer ml-auto mr-5" />
      </div>

      {/* mobile view ⬇ */}
    </div>
  );
};

export default ProfileDetails;
