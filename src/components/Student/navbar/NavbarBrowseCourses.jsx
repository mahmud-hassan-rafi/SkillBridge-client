import React from "react";
import { NavLink } from "react-router-dom";

const NavbarBrowseCourses = () => {
  return (
    <NavLink
      to={"/course-list"}
      className={({ isActive }) =>
        `hidden min-[1000px]:inline-block p-2.5 ${isActive ? "text-blue-800/90 cursor-default" : "text-gray-800  hover:underline cursor-pointer"}`
      }
    >
      Browse Courses
    </NavLink>
  );
};

export default NavbarBrowseCourses;
