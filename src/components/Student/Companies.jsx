import React from "react";
import { assets } from "@assets/assets";
import uniqid from "uniqid";
import CompanyLogo from "./home/CompanyLogo";

const srcList = [
  {
    img: assets.microsoft_logo,
    name: "microsoft_logo",
  },
  {
    img: assets.walmart_logo,
    name: "walmart_logo",
  },
  {
    img: assets.accenture_logo,
    name: "accenture_logo",
  },
  {
    img: assets.adobe_logo,
    name: "adobe_logo",
  },
  {
    img: assets.paypal_logo,
    name: "paypal_logo",
  },
];

const Companies = () => {
  return (
    <div className="pt-16">
      <p className="text-base text-gray-500">Trusted by learners from</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
        {srcList.map((src) => (
          <CompanyLogo key={uniqid()} src={src} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
