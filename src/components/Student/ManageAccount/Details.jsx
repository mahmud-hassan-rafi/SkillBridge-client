import React from "react";
import ProfileDetails from "./ProfileDetails";
import SecurityDetails from "./SecurityDetails";

const Details = ({ clickedOn }) => {
  return (
    <div className=" py-5">
      {clickedOn === "profile" ? <ProfileDetails /> : <SecurityDetails />}
    </div>
  );
};

export default Details;
