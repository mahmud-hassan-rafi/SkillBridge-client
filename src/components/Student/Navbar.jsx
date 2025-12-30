import { assets } from "@assets/assets";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isCourseListPath = location.pathname.includes("/course-list");
  const isLoginPath = location.pathname.includes("/login");
  const isSignUpPath = location.pathname.includes("/signup");
  const navigate = useNavigate();
  const auth = useSelector((state) => state?.auth);
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
        ) : (
          <Link
            to={"/login"}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </Link>
        )}

        <img
          src={auth?.user?.imageUrl}
          alt=""
          className="w-10 h-10 rounded-full ml-5 cursor-pointer"
        />
      </div>
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
