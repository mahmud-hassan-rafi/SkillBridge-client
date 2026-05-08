import { useNavbarContext } from "@hooks/ContextHook";
import React from "react";
import { NavLink } from "react-router-dom";
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
import { FcGraduationCap } from "react-icons/fc";
import { BsLaptop, BsPalette, BsWallet } from "react-icons/bs";
import { CgUser } from "react-icons/cg";

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

const SidebarCategories = () => {
  const { setIsOpenSidebar } = useNavbarContext();

  return (
    <div className={"w-full overflow-y-auto h-full"}>
      {categories.map((Menu) => (
        <NavLink
          to={Menu.path}
          onClick={() => setIsOpenSidebar(false)}
          className={({ isActive }) =>
            ` w-full px-5 py-4 flex items-center justify-start text-sm font-medium gap-4 border-b border-b-gray-300 hover:bg-black/5 transition ${isActive ? "text-cyan-800/90" : "text-gray-700"}`
          }
          key={Menu.id}
        >
          <Menu.icon className={"text-[19px]"} />
          <p>{Menu.title}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarCategories;
