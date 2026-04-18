import React, { useCallback, useState } from "react";
import { assets } from "@assets/assets";
import uniqid from "uniqid";

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
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnload = useCallback(() => {
    return setIsLoaded(true);
  }, [setIsLoaded]);

  return (
    <div className="pt-16">
      <p className="text-base text-gray-500">Trusted by learners from</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
        {srcList.map((src) => (
          <div key={uniqid()} className="w-20 md:w-28 h-auto">
            {!isLoaded && (
              <div className="w-full h-6 sm:h-8 md:h-10 lg:h-12 bg-gray-200 animate-pulse" />
            )}
            <img
              loading="lazy"
              src={src.img}
              alt={src.name}
              onLoad={handleOnload}
              className={`w-full h-auto ${isLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
