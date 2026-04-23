import React, { useCallback, useState } from "react";

const CompanyLogo = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnload = useCallback(() => {
    return setIsLoaded(true);
  }, [setIsLoaded]);

  return (
    <div className="w-20 md:w-28 h-auto">
      {!isLoaded && (
        <div className="w-full h-6 sm:h-8 md:h-10 lg:h-12 bg-gray-200 animate-pulse" />
      )}
      <img
        loading="lazy"
        src={src?.img}
        alt={src?.name}
        onLoad={handleOnload}
        className={`w-full h-auto ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default CompanyLogo;
