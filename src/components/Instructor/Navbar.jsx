import { assets } from "@assets/assets";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-4 px-2 sm:px-4 md:px-8 lg:px-24 border-b border">
      <img
        src={assets.logo}
        alt=""
        className="cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex gap-4 items-center">
        <p>Hi! Developer</p>
        <img src={assets.profile_img} className="profile_image" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
