import React from "react";
import { useSelector } from "react-redux";
import { BsFillLaptopFill } from "react-icons/bs";
import { FaMobileScreen } from "react-icons/fa6";

const SecurityDetails = () => {
  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="flex flex-col">
      <h2 className="ml-5 text-lg font-semibold">Security</h2>

      {/* desktop view */}
      {/* password */}
      <div className="grid grid-cols-[35%_65%] gap-2 w-full p-5 items-center">
        <h4 className="text-sm font-medium">Password</h4>
        <span>
          <button className=" text-sm font-medium cursor-pointer">
            Set password
          </button>
        </span>
      </div>

      {/* email addresses */}
      <div className="grid grid-cols-[35%_65%] gap-2 w-full p-5 items-start">
        <h4 className="text-sm font-medium">Active Devices</h4>
        <div className="flex flex-col gap-1 items-start">
          <div className="flex gap-1 items-center">
            <BsFillLaptopFill className="size-5" />
            <p className="ml-1 text-sm font-normal ">Windows</p>
            <span className="py-0.5 px-1 rounded bg-blue-100/80 text-[10px]">
              This devices
            </span>
          </div>
          <div>
            <p className="text-[13px] text-gray-800/70">
              Crveme 132.0.0.0 <br />
              103.21.132.10 (Pane, IN) <br />
              Today at 5:47PM
            </p>
          </div>
        </div>
      </div>

      {/* delete accounts */}
      <div className="grid grid-cols-[35%_65%] gap-2 w-full p-5 items-center">
        <h4 className="text-sm font-medium">Delete account</h4>
        <span>
          <button className="text-sm font-medium cursor-pointer text-red-800/70">
            Delete account
          </button>
        </span>
      </div>

      {/* mobile view ⬇ */}
    </div>
  );
};

export default SecurityDetails;
