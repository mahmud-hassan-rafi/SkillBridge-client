import React from "react";

const SidebarMenuTab = ({ selectedTab, setSelectedTab, availableTab }) => {
  const activeSelectedTabClass =
    "relative bg-blue-900/10 text-black/80 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-blue-600/70";

  return (
    <div className="flex h-12.5 w-full mt-5 text-sm">
      <span
        className={`h-full w-1/2 font-bold flex items-center justify-center cursor-default ${selectedTab === availableTab.MENU ? activeSelectedTabClass : " bg-gray-300/30 text-gray-900/80"}`}
        onClick={() => setSelectedTab(availableTab.MENU)}
      >
        MENU
      </span>
      <span
        className={`h-full w-1/2 font-bold flex items-center justify-center cursor-default ${selectedTab === availableTab.CATEGORIES ? activeSelectedTabClass : " bg-gray-300/30 text-gray-900/80"}`}
        onClick={() => setSelectedTab(availableTab.CATEGORIES)}
      >
        CATEGORIES
      </span>
    </div>
  );
};

export default React.memo(SidebarMenuTab);
