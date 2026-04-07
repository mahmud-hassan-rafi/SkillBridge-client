import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoMdSettings } from "react-icons/io";
import { PiSignOut } from "react-icons/pi";
import { useAppContext } from "@context/AppContext";
import { useLogoutMutation } from "@features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdDone } from "react-icons/md";

const Profile = ({ setClickOnProfile, profilePosition, setManageAccount }) => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const [clickOnLogout, setClickOnLogout] = useState(false);
  const user = useSelector((state) => state.auth?.user);
  const { capitalize } = useAppContext();

  return (
    <div
      className="fixed z-19 inset-0 bg-black/5"
      onClick={() => setClickOnProfile(false)}
    >
      <div
        className={`z-20 fixed flex flex-col justify-center items-start bg-white min-w-80 h-auto rounded-xl shadow`}
        style={{
          top: profilePosition.bottom,
          left: profilePosition.x,
          transform: "translateX(-90%) translateY(5%)",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* profile */}
        <div className="flex items-center gap-4 border-b border-b-gray-200/70 p-3  w-full transition-colors">
          <span className="flex w-[15%] items-center justify-center">
            <img loading="lazy"
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
          className="flex items-center gap-4 border-b border-b-gray-200/70 px-3 py-4 hover:bg-black/5 w-full cursor-pointer transition-colors"
          onClick={() => {
            setManageAccount(true);
            setClickOnProfile(false);
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
        <div
          className="w-full"
          onClick={() => {
            setClickOnLogout(true);
          }}
        >
          {clickOnLogout ? (
            // wanted to logout
            <div className="flex items-center gap-5 px-5 w-full py-4">
              <span className="px-5 text-lg font-light text-gray-800/80">
                Are you sure?
              </span>
              <span className="flex gap-5">
                {/* tick icon */}
                <MdDone
                  className="size-5 text-green-800/80 cursor-pointer rounded-full hover:bg-black/5"
                  onClick={() => {
                    logout();
                    setClickOnProfile(false);
                    navigate("/");
                  }}
                />
                {/* cross icon */}
                <RxCross2
                  className="size-5 text-red-600/80 cursor-pointer rounded-full hover:bg-black/5"
                  onClick={(event) => {
                    event.stopPropagation();
                    setClickOnLogout(false);
                  }}
                />
              </span>
            </div>
          ) : (
            // logout tab
            <div className=" flex items-center gap-4 px-3 py-4 w-full cursor-pointer transition-colors hover:bg-black/5">
              <span className="flex w-[15%] items-center justify-center ">
                <PiSignOut className="h-5 w-5 text-gray-800/80 " />
              </span>
              <span className="flex flex-col w-[85%]">
                <h2 className="text-base font-normal text-gray-900/70">
                  Sign out
                </h2>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
