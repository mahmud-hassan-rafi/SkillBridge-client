import React from "react";
import { NavLink } from "react-router-dom";

const NavbarTechOnSkillbridge = ({ auth }) => {
  return (
    <NavLink
      to={
        auth?.user?.role === "instructor"
          ? "/instructor/dashboard"
          : "/become-instructor"
      }
      className={({ isActive }) =>
        `hidden min-[1000px]:inline-block p-2.5 ${isActive ? "text-blue-800/90 cursor-default" : "text-gray-800  hover:underline cursor-pointer"}`
      }
    >
      Tech on Skillbridge
    </NavLink>
  );
};

export default NavbarTechOnSkillbridge;
