import ScrollToTop from "@components/common/ScrollToTop";
import Footer from "@components/Student/Footer";
import Navbar from "@components/Student/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayoutStudent = () => {
  return (
    <>
      <ScrollToTop />
      <div className="relative text-default min-w-screen min-h-screen bg-white">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayoutStudent;
