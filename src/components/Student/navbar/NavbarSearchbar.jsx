import React from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineReload } from "react-icons/ai"; // reload icon
import { motion } from "framer-motion";

const NavbarSearchbar = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <motion.div className="flex max-[550px]:hidden max-[1000px]:flex max-[1150px]:hidden items-center gap-2 px-3.5 py-2 border-2 rounded-full border-blue-400 bg-white w-55 sm:w-75 min-[1000px]:w-55 max-[1100px]:w-60 min-[1100px]:w-65 min-[1200px]:w-75">
      {/* icon */}
      {isLoading ? (
        <AiOutlineReload size={16} className="animate-spin" />
      ) : (
        <IoIosSearch size={20} />
      )}

      {/* input */}
      <motion.input
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        type="text"
        placeholder="Search for anything"
        className="outline-none text-sm placeholder:text-gray-600 placeholder:text-xs"
      />
    </motion.div>
  );
};

export default NavbarSearchbar;
