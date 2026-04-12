import { useAppContext } from "@hooks/ContextHook";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LuUserRoundPen } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { assets } from "@assets/assets";
import UpdateProfileTab from "./update/UpdateProfileTab";
import UpdateEmailTab from "./update/UpdateEmailTab";
import { FaPenToSquare } from "react-icons/fa6";

const ProfileDetails = () => {
  const user = useSelector((state) => state.auth?.user);
  const { capitalize, setManageAccount } = useAppContext();
  const [clickOnUpdateProfile, setClickOnUpdateProfile] = useState(false);
  const [clickOnUpdateEmail, setClickOnUpdateEmail] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* title */}
      <div className="flex px-3 sm:px-5 w-full justify-between items-center">
        <h2 className=" text-lg font-semibold">Profile details</h2>
        <img
          loading="lazy"
          src={assets.cross_icon}
          alt=""
          className="size-3 cursor-pointer mr-1"
          onClick={() => setManageAccount(false)}
        />
      </div>

      {/* profile */}
      <div className="grid grid-cols-[1fr_auto] max-sm:grid-rows-[30px_1fr] sm:grid-cols-[150px_1fr_auto] gap-2 w-full p-3 sm:p-5 items-center overflow-hidden">
        <h4 className="text-sm font-medium">Profile</h4>
        <span className="hidden sm:flex gap-3 items-center min-w-0">
          <img
            loading="lazy"
            src={user?.imageUrl}
            alt=""
            className="profile_image rounded-full shrink-0"
          />
          <h6 className="text-sm font-medium truncate">
            {capitalize(user.fullname?.firstname)}{" "}
            {capitalize(user.fullname?.lastname)}
          </h6>
        </span>
        <span
          className="flex items-center gap-1.5 cursor-pointer shrink-0"
          onClick={() => setClickOnUpdateProfile(true)}
        >
          <LuUserRoundPen className="text-lg text-gray-700/70 font-medium cursor-pointer" />
          <p className="max-lg:hidden font-medium text-xs text-gray-900/70 whitespace-nowrap">
            Update profile
          </p>
        </span>
        {clickOnUpdateProfile && (
          <UpdateProfileTab setClickOnUpdateProfile={setClickOnUpdateProfile} />
        )}

        <span className="flex sm:hidden gap-3 items-center min-w-0 col-span-2">
          <img
            loading="lazy"
            src={user?.imageUrl}
            alt=""
            className="size-10 rounded-full shrink-0"
          />
          <h6 className="text-sm font-medium min-w-0 truncate">
            {capitalize(user.fullname?.firstname)}{" "}
            {capitalize(user.fullname?.lastname)}
          </h6>
        </span>
      </div>

      {/* email addresses */}
      <div className="grid grid-cols-[1fr_auto] max-sm:grid-rows-[30px_1fr] sm:grid-cols-[150px_1fr_auto] gap-2 w-full p-3 sm:p-5 items-center overflow-hidden">
        <h4 className="text-sm font-medium">Email addresses</h4>
        <span className="hidden sm:flex flex-col gap-3 items-start min-w-0">
          <span className="flex gap-1 items-center min-w-0">
            <p className="text-xs font-normal text-gray-800 truncate">
              {user?.email}
            </p>
            <span className="py-0.5 px-1 rounded bg-blue-100/80 text-xs shrink-0">
              primary
            </span>
          </span>

          <button className="flex gap-1 items-center text-sm cursor-pointer min-w-0 shrink-0">
            <FiPlus className="text-base font-normal shrink-0" /> Add email
            addresses
          </button>
        </span>
        <FaPenToSquare
          className="text-base text-gray-700/60 font-light cursor-pointer shrink-0"
          onClick={() => setClickOnUpdateEmail(true)}
        />
        {clickOnUpdateEmail && (
          <UpdateEmailTab setClickOnUpdateEmail={setClickOnUpdateEmail} />
        )}

        <span className="flex sm:hidden flex-col gap-3 items-start col-span-2">
          <span className="flex gap-1 items-center min-w-0">
            <p className="text-xs font-normal text-gray-800 truncate">
              {user?.email}
            </p>
            <span className="py-0.5 px-1 rounded bg-blue-100/80 text-xs shrink-0">
              primary
            </span>
          </span>

          <button className="flex gap-1 items-center text-sm cursor-pointer">
            <FiPlus className="text-base font-normal shrink-0" /> Add email
            addresses
          </button>
        </span>
      </div>

      {/* connected accounts */}
      <div className="grid grid-cols-[1fr_auto] max-sm:grid-rows-[30px_1fr] sm:grid-cols-[150px_1fr_auto] gap-2 w-full p-3 sm:p-5 items-center overflow-hidden">
        <h4 className="text-sm font-medium min-w-0">Connected accounts</h4>
        <span className="hidden sm:flex flex-col gap-3 items-start min-w-0">
          <button className="flex gap-1 items-center text-sm cursor-pointer px-3 py-2 border border-gray-300/70 rounded shrink-0">
            <FcGoogle className="text-base font-normal shrink-0" /> Connect to
            Google
          </button>
        </span>
        <HiOutlineDotsHorizontal className="text-lg text-gray-700/70 font-medium cursor-pointer shrink-0" />

        <span className="flex sm:hidden flex-col gap-3 items-start col-span-2">
          <button className="flex gap-1 items-center text-sm cursor-pointer px-3 py-2 border border-gray-300/70 rounded">
            <FcGoogle className="text-base font-normal shrink-0" /> Connect to
            Google
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProfileDetails;
