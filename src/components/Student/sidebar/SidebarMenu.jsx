import React from "react";
import { GoHome } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineContactPhone } from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { useNavbarContext } from "@hooks/ContextHook";

const menus = [
  {
    id: 1,
    name: "HOME",
    icon: GoHome,
    navigate: "/home",
    className: "size-5.5",
  },
  {
    id: 2,
    name: "BROWSE COURSES",
    icon: PiGraduationCap,
    navigate: "/course-list",
    className: "size-5.5",
  },
  {
    id: 3,
    name: "TECH ON SKILLBRIDGE",
    icon: LiaChalkboardTeacherSolid,
    navigate: "/become-instructor",
    className: "size-5.5",
  },
  {
    id: 4,
    navigate: "/contact",
    name: "CONTACT US",
    icon: MdOutlineContactPhone,
  },
  {
    id: 5,
    navigate: "/about",
    name: "ABOUT US",
    icon: BsInfoCircle,
  },
  {
    id: 6,
    navigate: "/register",
    name: "REGISTER",
    icon: LuUserRound,
  },
];

const SidebarMenu = () => {
  const { setIsOpenSidebar } = useNavbarContext();

  return (
    <div className="w-full">
      {menus.map((Menu) => (
        <NavLink
          to={Menu.navigate}
          onClick={() => setIsOpenSidebar(false)}
          className={({ isActive }) =>
            `w-full px-5 py-4 flex items-center justify-start text-xs font-semibold gap-4 border-b border-b-gray-300 ${isActive ? "text-blue-600/90" : "text-gray-700 hover:bg-black/5 transition"}`
          }
          key={Menu.id}
        >
          <Menu.icon
            className={Menu.className ? Menu.className : "text-[19px]"}
          />
          <p>{Menu.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarMenu;
