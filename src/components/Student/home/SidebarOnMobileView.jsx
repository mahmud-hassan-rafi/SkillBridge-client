import React from "react";
import { Link } from "react-router-dom";

const SidebarOnMobileView = ({ setClickOnMenubar, menubarPosition, auth }) => {
  const menubarContent = [
    {
      menu: "My Enrollments",
      route: "/my-enrollments",
    },
    {
      menu: "Become Instructor",
      route: `${
        auth?.user?.role === "instructor"
          ? "/instructor/dashboard"
          : "/become-instructor"
      }`,
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/5 z-50"
      onClick={() => {
        setClickOnMenubar(false);
      }}
    >
      <div
        className="fixed flex flex-col justify-start items-start bg-white min-w-50 h-auto rounded-xl shadow "
        style={{ top: menubarPosition.bottom + 10, left: menubarPosition.left }}
        onClick={(e) => e.stopPropagation()}
      >
        {menubarContent.map((item, idx) => {
          return (
            <Link
              key={idx}
              to={item.route}
              className="p-4 w-full border-b border-b-gray-200/70 hover:bg-black/5 transition-colors"
              onClick={() => setClickOnMenubar(false)}
            >
              {item.menu}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarOnMobileView;
