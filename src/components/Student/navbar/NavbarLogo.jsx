import { assets } from "@assets/assets";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLogo = ({ className }) => {
  const navigate = useNavigate();

  return (
    <img
      loading="lazy"
      src={assets.logo}
      alt="Logo"
      className={`w-28 h-10 object-center object-cover lg:w-32 cursor-pointer ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        navigate("/");
      }}
      draggable={false}
    />
  );
};

export default NavbarLogo;
