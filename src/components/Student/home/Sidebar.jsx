// import React from "react";
// import { Link } from "react-router-dom";

// const SidebarOnMobileView = ({ setClickOnMenubar, menubarPosition, auth }) => {
//   const menubarContent = [
//     {
//       menu: "My Enrollments",
//       route: "/my-enrollments",
//     },
//     {
//       menu: "Become Instructor",
//       route: `${
//         auth?.user?.role === "instructor"
//           ? "/instructor/dashboard"
//           : "/become-instructor"
//       }`,
//     },
//   ];

//   return (
//     <div
//       className="fixed inset-0 bg-black/5 z-50"
//       onClick={() => {
//         setClickOnMenubar(false);
//       }}
//     >
//       <div
//         className="fixed flex flex-col justify-start items-start bg-white min-w-50 h-auto rounded-xl shadow "
//         style={{ top: menubarPosition.bottom + 10, left: menubarPosition.left }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {menubarContent.map((item, idx) => {
//           return (
//             <Link
//               key={idx}
//               to={item.route}
//               className="p-4 w-full border-b border-b-gray-200/70 hover:bg-black/5 transition-colors"
//               onClick={() => setClickOnMenubar(false)}
//             >
//               {item.menu}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SidebarOnMobileView;

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavbarContext } from "@hooks/ContextHook";
import Searchbox from "../sidebar/SearchBox";
import SidebarMenu from "../sidebar/SidebarMenu";
import SidebarMenuTab from "../sidebar/SidebarMenuTab";
import SidebarCategories from "../sidebar/SidebarCategories";

const overlayVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const sidebarVariants = {
  closed: {
    x: -300,
  },
  open: {
    x: 0,
  },
};

const availableTab = {
  MENU: "menu",
  CATEGORIES: "categories",
};

const Sidebar = () => {
  const { isOpenSidebar, setIsOpenSidebar } = useNavbarContext();
  const [selectedTab, setSelectedTab] = useState(availableTab.MENU);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "");
  }, []);

  const handleSidebarClose = useCallback(() => {
    setIsOpenSidebar(false);
  }, [setIsOpenSidebar]);

  return (
    <motion.div
      variants={overlayVariants}
      initial="closed"
      animate={isOpenSidebar ? "open" : "closed"}
      className="fixed top-0 bg-black/10 h-screen w-full z-999999"
      onClick={handleSidebarClose}
    >
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isOpenSidebar ? "open" : "closed"}
        exit={"closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-75 h-screen bg-white py-6 pb-30"
        onClick={(event) => event.stopPropagation()}
      >
        <Searchbox />
        <SidebarMenuTab
          availableTab={availableTab}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === availableTab.MENU && <SidebarMenu />}
        {selectedTab === availableTab.CATEGORIES && <SidebarCategories />}
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
