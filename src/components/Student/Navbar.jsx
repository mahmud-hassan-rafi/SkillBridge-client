import { assets } from "@assets/assets";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import ManageAccount from "./ManageAccount/ManageAccount";
import { useAppContext } from "@context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state?.auth);

  const isCourseListPath = location.pathname.includes("/course-list");
  const isLoginPath = location.pathname.includes("/login");
  const isSignUpPath = location.pathname.includes("/signup");

  const profilePictureRef = useRef();
  const [profilePosition, setProfilePosition] = useState(null);
  const [clickOnProfile, setClickOnProfile] = useState(false);

  const { manageAccount, setManageAccount } = useAppContext();
  // profile picture
  const onClickHandler = () => {
    const rect = profilePictureRef.current.getBoundingClientRect();

    setProfilePosition({
      top: rect.top,
      bottom: rect.bottom,
      right: rect.right,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      x: rect.x,
      y: rect.y,
    });
    setTimeout(() => setClickOnProfile((prev) => !prev), 200);
  };

  window.addEventListener("scroll", () => {
    setClickOnProfile(false);
  });

  return (
    <div
      className={`flex items-center justify-between px-2 xs:px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPath || isLoginPath || isSignUpPath
          ? "bg-white"
          : "bg-cyan-100/70"
      }`}
    >
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          navigate("/");
        }}
        draggable={false}
      />
      {/* desktop view */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        {auth?.isAuthenticated ? (
          <>
            <div className="flex items-center gap-5">
              <button
                onClick={() => navigate("/instructor/dashboard")}
                className="cursor-pointer"
              >
                {auth?.user?.role === "instructor"
                  ? "Instructor Dashboard"
                  : "Become Instructor"}
              </button>
              | <Link to="/my-enrollments">My Enrollments</Link>
            </div>
            <img
              src={auth?.user?.imageUrl}
              alt=""
              className="w-10 h-10 rounded-full ml-5 cursor-pointer shadow"
              onClick={onClickHandler}
              ref={profilePictureRef}
            />
          </>
        ) : (
          <Link
            to={"/login"}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </Link>
        )}
      </div>
      {clickOnProfile && (
        <Profile
          profilePosition={profilePosition}
          setClickOnProfile={setClickOnProfile}
          setManageAccount={setManageAccount}
        />
      )}
      {manageAccount && <ManageAccount />}
      {/* mobile view */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        {auth?.isAuthenticated ? (
          <div className="flex items-center text-xs xs:text-sm sm:text-base gap-2 sm:gap-3">
            <button
              onClick={() =>
                navigate(
                  `${
                    auth?.user?.role === "instructor"
                      ? "/instructor/dashboard"
                      : "/instructor"
                  }`
                )
              }
              className="cursor-pointer"
            >
              {auth?.user?.role === "instructor"
                ? "Instructor Dashboard"
                : "Become Instructor"}
            </button>
            | <Link to="/my-enrollments">My Enrollments</Link>
          </div>
        ) : (
          <Link to={"/login"}>
            <button>
              <img src={assets.user_icon} alt="" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
