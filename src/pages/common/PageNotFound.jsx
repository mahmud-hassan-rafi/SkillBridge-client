import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-red-500 font-bold">
        404 | Page not found
      </h1>
      <Link
        to={"/"}
        className="text-base md:text-lg lg:text-xl text-green-500 font-normal "
      >
        redirect ro home ➡
      </Link>
    </div>
  );
};

export default PageNotFound;
