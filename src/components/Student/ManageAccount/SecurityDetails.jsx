import React, { useState } from "react";
import { BsFillLaptopFill } from "react-icons/bs";
import { assets } from "@assets/assets";
import { useAppContext } from "@context/AppContext";
import UpdatePasswordTab from "./update/UpdatePasswordTab";
import DeleteAccountTab from "./update/DeleteAccountTab";

const SecurityDetails = () => {
  const { setManageAccount } = useAppContext();
  const [clickOnUpdatePassword, setClickOnUpdatePassword] = useState(false);
  const [clickOnDeleteAccount, setClickOnDeleteAccount] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex px-3 sm:px-5 w-full justify-between items-center">
        <h2 className=" text-lg font-semibold">Security</h2>
        <img
          src={assets.cross_icon}
          alt=""
          className="size-3 cursor-pointer"
          onClick={() => setManageAccount(false)}
        />
      </div>

      {/* desktop view */}
      {/* password */}
      <div className="grid grid-cols-[35%_65%] gap-2 w-full p-5 items-center">
        <h4 className="text-sm font-medium">Password</h4>
        <span>
          <button
            className=" text-sm font-medium cursor-pointer"
            onClick={() => setClickOnUpdatePassword(true)}
          >
            Set password
          </button>
        </span>
      </div>
      {clickOnUpdatePassword && (
        <UpdatePasswordTab
          setClickOnUpdatePassword={setClickOnUpdatePassword}
        />
      )}

      {/* active devices */}
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
          <button
            className="text-sm font-medium cursor-pointer text-red-800/70"
            onClick={() => setClickOnDeleteAccount(true)}
          >
            Delete account
          </button>
        </span>
      </div>
      {clickOnDeleteAccount && (
        <DeleteAccountTab setClickOnDeleteAccount={setClickOnDeleteAccount} />
      )}
    </div>
  );
};

export default SecurityDetails;
