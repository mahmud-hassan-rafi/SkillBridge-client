import React from "react";
import ProfileDetails from "./ProfileDetails";
import SecurityDetails from "./SecurityDetails";
import { assets } from "@assets/assets";
import { useAppContext } from "@context/AppContext";

const Details = ({ clickedOn }) => {
  const { setManageAccount } = useAppContext();

  return (
    <div className="md:min-w-[73%] min-w-[90%] py-5 relative">
      <img
        src={assets.cross_icon}
        alt=""
        className="absolute top-5 right-5 size-3 cursor-pointer"
        onClick={() => setManageAccount(false)}
      />
      {clickedOn === "profile" ? <ProfileDetails /> : <SecurityDetails />}
    </div>
  );
};

export default Details;
