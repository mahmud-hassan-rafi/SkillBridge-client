import { assets } from "@assets/assets.js";
import React from "react";
const Footer = () => {
  return (
    <footer
      className="flex md:flex-row flex-col-reverse
  items-center justify-between text-left w-full px-8 border-t"
    >
      {/* left side of the footer */}
      <div className="flex items-center gap-4">
        <img
          loading="lazy"
          className="hidden md:block w-20"
          src={assets.logo}
          alt="logo"
        />
        {/* varticle line */}
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p
          className="py-4 text-center text-xs md:text-sm
    text-gray-500"
        >
          Copyright 2026 © SkillBrigde. All Right Reserved.
        </p>
      </div>

      {/* right side of the footer */}
      <div className="flex items-center gap-3 max-md:mt-4">
        <a href="#">
          <img loading="lazy" src={assets.facebook_icon} alt="facebook_icon" />
        </a>
        <a href="#">
          <img loading="lazy" src={assets.twitter_icon} alt="twitter_icon" />
        </a>
        <a href="#">
          <img
            loading="lazy"
            src={assets.instagram_icon}
            alt="instagram_icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
