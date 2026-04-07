import { assets } from "@assets/assets";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/instructor/dashboard",
      icon: assets.home_icon,
    },
    {
      name: "Add Course",
      path: "/instructor/add-course",
      icon: assets.add_icon,
    },
    {
      name: "My Courses",
      path: "/instructor/my-courses",
      icon: assets.my_course_icon,
    },
    {
      name: "Student Enrolled",
      path: "/instructor/student-enrolled",
      icon: assets.person_tick_icon,
    },
  ];
  return (
    <div className="md:w-64 bg-white border-r md:min-h-[87.5vh] text-base text-gray-500 flex flex-col">
      {menuItems?.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          end={item.path === "/instructor"}
          className={({ isActive }) =>
            `flex items-center gap-4 p-4 transition-colors ${
              isActive
                ? "bg-indigo-50 border-r-[6px] border-indigo-500/90 text-black/80"
                : "text-gray-900/80 hover:bg-gray-100"
            }`
          }
        >
          <img loading="lazy" src={item.icon} alt="" className="w-6 h-6" />
          <p className="md:block hidden text-center">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
