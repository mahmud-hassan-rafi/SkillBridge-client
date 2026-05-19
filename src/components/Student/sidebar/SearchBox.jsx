import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Searchbox = () => {
  return (
    <div className="w-full px-6 flex gap-1.5 justify-between items-center">
      <input
        type="text"
        placeholder="Search for courses"
        className="placeholder-gray-800/80 w-[95%] text-base font-medium outline-0 pb-0.5 text-gray-700"
      />
      <IoSearchOutline size={22} className="text-gray-700" />
    </div>
  );
};

export default Searchbox;
