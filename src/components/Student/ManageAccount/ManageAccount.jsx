import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Details from "./Details";

const ManageAccount = () => {
  const [clickedOn, setClickedOn] = useState("profile");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed z-20 inset-0 bg-black/70 flex items-center justify-center">
      <div
        className="bg-white rounded-lg flex md:min-w-[60vw] md:h-[90vh] z-25 "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* manage account navbar */}
        <Sidebar clickedOn={clickedOn} setClickedOn={setClickedOn} />

        {/* manage account details */}
        <Details clickedOn={clickedOn} />
      </div>
    </div>
  );
};

export default ManageAccount;
