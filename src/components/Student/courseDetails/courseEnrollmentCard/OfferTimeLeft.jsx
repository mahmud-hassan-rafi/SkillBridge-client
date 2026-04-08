import { assets } from "@assets/assets";
import React from "react";

const OfferTimeLeft = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        loading="lazy"
        src={assets.time_left_clock_icon}
        alt="time_left_clock_icon"
      />
      <p className="font-medium">
        <span className="text-red-500">5 days</span> left to the price!
      </p>
    </div>
  );
};

export default OfferTimeLeft;
