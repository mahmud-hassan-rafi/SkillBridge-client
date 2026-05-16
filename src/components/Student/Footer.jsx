import { assets } from "@assets/assets";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-16 lg:px-24 xl:px-36 w-full">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 xl:gap-32 py-10 border-b border-white/10">
        <div className="flex flex-col md:items-start items-center w-full">
          <img
            loading="lazy"
            src={assets.logo_dark}
            alt="logo_dark"
            className="w-25 md:w-30 max-w-30 h-8 object-cover object-center scale-110"
          />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="flex flex-col items-center w-full">
          <ul className="flex md:flex-col w-full max-w-md items-center md:items-start justify-between text-sm text-white/80 md:space-y-2 md:w-23">
            <h2 className="max-md:hidden font-semibold text-white text-lg mb-0 md:mb-4 group:flex group:items-center">
              Skillbridge
            </h2>
            <li>
              <Link to="/home" className="hover:text-gray-100 group">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-100 group">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-100 group">
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="hover:text-gray-100 group"
              >
                Terms of use
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-gray-100 group">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80 text-left">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-500/30 bg-gray-800 text-gray-500
placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
            />
            <button className=" bg-blue-600 w-24 h-9 text-white rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2026 © SkillBridge. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
