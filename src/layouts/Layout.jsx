import React from "react";
import { Outlet } from "react-router-dom";
import { useNavbarContext } from "@hooks/ContextHook";
import { AnimatePresence } from "framer-motion";
import Sidebar from "@components/Student/home/Sidebar";
import useOnlineStatus from "@hooks/useOnlineStatus";
import OfflineBanner from "@components/common/OfflineBanner";

const Layout = () => {
  const isOffline = useOnlineStatus();
  const { isOpenSidebar } = useNavbarContext();

  return (
    <>
      {isOffline && <OfflineBanner />}
      <AnimatePresence>{isOpenSidebar && <Sidebar />}</AnimatePresence>
      <Outlet />
    </>
  );
};

export default Layout;
