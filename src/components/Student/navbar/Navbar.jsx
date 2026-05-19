import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import Profile from "../Profile";
import ManageAccount from "../ManageAccount/ManageAccount";
import { useAppContext, useNavbarContext } from "@hooks/ContextHook";
import { CgMenu } from "react-icons/cg";

import NavbarIfNotLoggedIn from "./NavbarIfNotLoggedIn";
import NavbarIfLoggedIn from "./NavbarIfLoggedIn";
import NavbarCategories from "./NavbarCategories";
import NavbarLogo from "./NavbarLogo";
import NavbarBrowseCourses from "./NavbarBrowseCourses";
import NavbarSearchbar from "./NavbarSearchbar";
import NavbarTechOnSkillbridge from "./NavbarTechOnSkillbridge";

const Navbar = () => {
  const auth = useSelector((state) => state?.auth);
  const location = useLocation();

  const isCourseListPath = location.pathname.includes("/course-list");
  const isLoginPath = location.pathname.includes("/login");
  const isSignUpPath = location.pathname.includes("/register");
  const isBecomeInstructorPath =
    location.pathname.includes("/become-instructor");

  const [clickOnProfile, setClickOnProfile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menubarRef = useRef();
  // const [menubarPosition, setMenubarPosition] = useState(null);
  const { setIsOpenSidebar } = useNavbarContext();
  // profile picture
  const [profilePosition, setProfilePosition] = useState(null);
  const { manageAccount, setManageAccount } = useAppContext();

  useEffect(() => {
    const handleListener = () => {
      setClickOnProfile(false);
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach listener
    document.addEventListener("scroll", handleListener, true);

    return () => document.removeEventListener("scroll", handleListener);
  }, [setIsOpenSidebar]);

  return (
    <nav
      id="navbar"
      className="w-full border-b border-gray-500 sticky top-0 z-99999 bg-white"
    >
      <div
        className={`w-full transition-colors duration-300 ${
          isCourseListPath ||
          isLoginPath ||
          isSignUpPath ||
          isBecomeInstructorPath ||
          isScrolled
            ? "bg-white"
            : "bg-cyan-100/70"
        }`}
      >
        <div
          className={`w-full max-w-7xl flex items-center justify-between mx-auto px-4 sm:px-10 md:px-14 text-sm  py-4 `}
        >
          {/* menubar for mobile view */}
          <div
            className={`min-[1000px]:hidden flex items-center ${isScrolled ? "max-[550px]:w-20 w-auto" : "max-[550px]:w-20 w-35"}`}
            ref={menubarRef}
          >
            <CgMenu
              className="size-5 cursor-pointer text-gray-700/80 stroke-1"
              onClick={() => setIsOpenSidebar((prev) => !prev)}
            />
            <NavbarLogo
              className={isScrolled ? "max-[550px]:hidden" : "hidden"}
            />
          </div>
          {/* logo */}
          <NavbarLogo
            className={
              isScrolled ? "max-[550px]:inline-block max-[1000px]:hidden" : ""
            }
          />
          {/* desktop view | navigation */}
          <div className="flex gap-8 items-center">
            {/* categories */}
            <NavbarCategories />
            {/* browse courses */}
            <NavbarBrowseCourses />
            {/* searchbar*/}
            {isScrolled && <NavbarSearchbar />}
            {/* teach on skillbridge */}
            <NavbarTechOnSkillbridge auth={auth} />
            {/* about */}
            {!isScrolled && (
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  ` max-[1200px]:hidden p-2.5 ${isActive ? "text-blue-800/90 cursor-default" : "text-gray-800  hover:underline cursor-pointer"}`
                }
              >
                About us
              </NavLink>
            )}
            {!isScrolled && (
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  ` max-[1200px]:hidden p-2.5 ${isActive ? "text-blue-800/90 cursor-default" : "text-gray-800  hover:underline cursor-pointer"}`
                }
              >
                Contact us
              </NavLink>
            )}
          </div>
          {/* desktop view  */}{" "}
          <div className="flex items-center gap-5 text-gray-800">
            {auth?.isAuthenticated ? (
              <NavbarIfLoggedIn
                auth={auth}
                setClickOnProfile={setClickOnProfile}
                setProfilePosition={setProfilePosition}
              />
            ) : (
              <NavbarIfNotLoggedIn />
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
