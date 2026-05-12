import React from "react";
import { Link } from "react-router-dom";
import { LuUserRound } from "react-icons/lu";

const NavbarIfNotLoggedIn = () => {
  return (
    <>
      {/* login | register */}
      <div className="max-md:hidden text-sm flex items-center justify-end gap-4 max-[550px]:w-20 w-35">
        <Link to={"/login"}>Login</Link>
        <Link
          to={"/register"}
          className="py-1.5 rounded-md bg-blue-600 px-2.5 text-white"
        >
          Register
        </Link>
      </div>
      <Link to={"/login"} className="md:hidden w-20 flex gap-1 justify-end">
        <LuUserRound size={18} className="text-gray-700/80" />
        <span className="">Login</span>
      </Link>
    </>
  );
};

export default NavbarIfNotLoggedIn;
