import { assets } from "@assets/assets";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const instructor = useSelector((state) => state?.auth?.user);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 px-2 sm:px-4 md:px-8 lg:px-24 border-b border">
      <img
        loading="lazy"
        src={assets.logo}
        alt=""
        className="cursor-pointer w-28 h-10 object-center object-cover lg:w-32"
        onClick={() => navigate("/")}
      />
      <div className="flex gap-4 items-center">
        <p>Hi! {instructor?.fullname?.firstname}</p>
        <img
          loading="lazy"
          src={instructor?.imageUrl}
          className="w-10 h-10 rounded-full object-cover object-center"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
