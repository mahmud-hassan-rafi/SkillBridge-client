import React from "react";
import { useSelector } from "react-redux";
import { IoMdSettings } from "react-icons/io";
import { PiSignOut } from "react-icons/pi";
import { useAppContext } from "@context/AppContext";

const Profile = ({ setClickOnProfile, profilePosition, setManageAccount }) => {
  const user = useSelector((state) => state.auth?.user);
  const { capitalize } = useAppContext();

  return (
    <div
      className={`z-20 fixed flex flex-col justify-center items-start bg-white min-w-50 md:min-w-80 h-auto rounded-xl shadow`}
      style={{
        top: profilePosition.bottom,
        left: profilePosition.x,
        transform: "translateX(-90%) translateY(5%)",
      }}
      onClick={() => setClickOnProfile(false)}
    >
      {/* profile */}
      <div className="flex items-center gap-4 border-b border-b-gray-200/70 p-3 hover:bg-gray-300/20 w-full cursor-pointer transition-colors">
        <span className="flex w-[15%] items-center justify-center">
          <img
            src={user?.imageUrl}
            alt=""
            className="profile_image rounded-full"
          />
        </span>
        <span className="flex flex-col w-[85%]">
          <h2 className="text-base font-normal text-gray-900/70">
            {capitalize(user?.fullname.firstname)}{" "}
            {capitalize(user?.fullname.lastname)}
          </h2>
          <p className="text-sm text-gray-900/60"> {user?.email} </p>
        </span>
      </div>

      {/* manage accounts */}
      <div
        className="flex items-center gap-4 border-b border-b-gray-200/70 px-3 py-4 hover:bg-gray-300/20 w-full cursor-pointer transition-colors"
        onClick={() => {
          setManageAccount(true);
          console.log("click on manage account");
        }}
      >
        <span className="flex w-[15%] items-center justify-center">
          <IoMdSettings className="h-5 w-5 text-gray-800/80 " />
        </span>
        <span className="flex flex-col w-[85%]">
          <h2 className="text-base font-normal text-gray-900/70">
            Manage account
          </h2>
        </span>
      </div>

      {/* signout */}
      <div className="flex items-center gap-4 px-3 py-4 hover:bg-gray-300/20 w-full cursor-pointer transition-colors">
        <span className="flex w-[15%] items-center justify-center">
          <PiSignOut className="h-5 w-5 text-gray-800/80 " />
        </span>
        <span className="flex flex-col w-[85%]">
          <h2 className="text-base font-normal text-gray-900/70">Sign out</h2>
        </span>
      </div>
    </div>
  );
};

export default Profile;
