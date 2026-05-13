import { useNavbarContext } from "@hooks/ContextHook";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useRef } from "react";
import { BsLaptop, BsPalette, BsWallet } from "react-icons/bs";
import { CgUser } from "react-icons/cg";
import { FcGraduationCap } from "react-icons/fc";
import { IoIosArrowDown } from "react-icons/io"; // down array
import {
  LuBriefcaseBusiness,
  LuCamera,
  LuDumbbell,
  LuFileCode2,
  LuHeartHandshake,
  LuMegaphone,
  LuMonitorCog,
  LuMusic2,
} from "react-icons/lu";
import { useNavigate } from "react-router-dom";

// minmax row 3 | height 200px max
const categories = [
  {
    id: 1,
    title: "Development",
    slug: "development",
    path: "/category/development",
    icon: LuFileCode2,
    description: "Web, mobile, backend & software development courses",
    totalCourses: 1250,
    featured: true,
  },
  {
    id: 2,
    title: "Business",
    slug: "business",
    path: "/category/business",
    icon: LuBriefcaseBusiness,
    description: "Business strategy, management & entrepreneurship",
    totalCourses: 840,
    featured: true,
  },
  {
    id: 3,
    title: "Finance & Accounting",
    slug: "finance-accounting",
    path: "/category/finance-accounting",
    icon: BsWallet,
    description: "Accounting, investment & financial analysis",
    totalCourses: 620,
    featured: false,
  },
  {
    id: 4,
    title: "IT & Software",
    slug: "it-software",
    path: "/category/it-software",
    icon: LuMonitorCog,
    description: "Networking, cybersecurity & IT certifications",
    totalCourses: 910,
    featured: true,
  },
  {
    id: 5,
    title: "Office Productivity",
    slug: "office-productivity",
    path: "/category/office-productivity",
    icon: BsLaptop,
    description: "Excel, Word, Google Workspace & productivity tools",
    totalCourses: 430,
    featured: false,
  },
  {
    id: 6,
    title: "Personal Development",
    slug: "personal-development",
    path: "/category/personal-development",
    icon: CgUser,
    description: "Communication, confidence & self improvement",
    totalCourses: 720,
    featured: false,
  },
  {
    id: 7,
    title: "Design",
    slug: "design",
    path: "/category/design",
    icon: BsPalette,
    description: "UI/UX, graphic design & creative skills",
    totalCourses: 880,
    featured: true,
  },
  {
    id: 8,
    title: "Marketing",
    slug: "marketing",
    path: "/category/marketing",
    icon: LuMegaphone,
    description: "Digital marketing, SEO & branding",
    totalCourses: 690,
    featured: true,
  },
  {
    id: 9,
    title: "Lifestyle",
    slug: "lifestyle",
    path: "/category/lifestyle",
    icon: LuHeartHandshake,
    description: "Cooking, travel & personal lifestyle topics",
    totalCourses: 310,
    featured: false,
  },
  {
    id: 10,
    title: "Photography",
    slug: "photography",
    path: "/category/photography",
    icon: LuCamera,
    description: "Photography, editing & videography",
    totalCourses: 280,
    featured: false,
  },
  {
    id: 11,
    title: "Health & Fitness",
    slug: "health-fitness",
    path: "/category/health-fitness",
    icon: LuDumbbell,
    description: "Workout, nutrition & healthy lifestyle",
    totalCourses: 390,
    featured: false,
  },
  {
    id: 12,
    title: "Music",
    slug: "music",
    path: "/category/music",
    icon: LuMusic2,
    description: "Music production, instruments & vocals",
    totalCourses: 210,
    featured: false,
  },
  {
    id: 13,
    title: "Teaching & Academics",
    slug: "teaching-academics",
    path: "/category/teaching-academics",
    icon: FcGraduationCap,
    description: "Teaching methods & academic subjects",
    totalCourses: 540,
    featured: false,
  },
];

const NavbarCategories = () => {
  const { isCategoryDropdownOpen, setIsCategoryDropdownOpen } =
    useNavbarContext();

  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback(() => {
    setIsCategoryDropdownOpen((prev) => !prev);
  }, [setIsCategoryDropdownOpen]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      e.preventDefault();
      if (!dropdownRef.current?.contains(e.target)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("scroll", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("scroll", handleOutsideClick);
    };
  }, [setIsCategoryDropdownOpen]);

  console.log(isCategoryDropdownOpen);

  return (
    <div
      className="relative hidden min-[1000px]:inline-block"
      ref={dropdownRef}
    >
      <button
        className="hover:bg-gray-700/5 cursor-pointer px-2.5 py-1 rounded"
        onClick={toggleDropdown}
      >
        Categories
        <IoIosArrowDown
          size={14}
          className={`inline-block ml-1 transition-transform duration-300 ${
            isCategoryDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isCategoryDropdownOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.275 }}
            animate={{ opacity: 100, zIndex: 50 }}
            exit={{ opacity: 0 }}
            className="absolute top-full mt-2 p-2.5 bg-white shadow-lg rounded min-w-160 w-auto max-w-200 max-h-50 overflow-hidden flex flex-col flex-wrap flex-1 text-sm z-9999"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="px-4 py-2 flex gap-2.5 hover:bg-gray-100 cursor-pointer w-1/3"
                  onClick={() => {
                    setIsCategoryDropdownOpen(false);
                    navigate(category.path);
                  }}
                >
                  <Icon size={16} className="inline-block" />
                  {category.title}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavbarCategories;
