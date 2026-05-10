import { NavbarContext } from "./Context";
import React from "react";

export const NavbarContextProvider = ({ children }) => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] =
    React.useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  const value = {
    isCategoryDropdownOpen,
    setIsCategoryDropdownOpen,
    isOpenSidebar,
    setIsOpenSidebar,
  };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};

{
  /*
            {clickOnMenubar && (
            <Sidebar
              isOpenSidebar={clickOnMenubar}
              setIsOpenSidebar={setClickOnMenubar}
            />
          )}
  */
}
