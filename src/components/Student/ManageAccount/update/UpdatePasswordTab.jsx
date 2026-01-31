import { assets } from "@assets/assets";
import InsideButtonLoader from "@components/common/InsideButtonLoader";
import { useUpdateProfileMutation } from "@features/me/meApi";
import { errorNotify, successNotify } from "@utils/toast-notify/toastify";
import React, { useState } from "react";

const UpdatePasswordTab = ({ setClickOnUpdatePassword }) => {
  const [updatePassword, { isLoading }] = useUpdateProfileMutation();
  const [updatedPasswordData, setUpdatedPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  async function handleUpdatePasswordCTA() {
    const updates = {};

    if (updatedPasswordData.oldPassword.length > 0) {
      updates["oldPassword"] = updatedPasswordData.oldPassword;
    }
    if (updatedPasswordData.newPassword.length > 0) {
      updates["newPassword"] = updatedPasswordData.newPassword;
    }

    try {
      if (Object.keys(updates).length > 0) {
        const res = await updatePassword(updates).unwrap();

        setClickOnUpdatePassword(false);
        successNotify(res.message);
      }
    } catch (error) {
      if (error?.data?.errors) {
        error?.data?.errors.map((err) => {
          errorNotify(err?.msg || err);
        });
      } else {
        errorNotify(error?.data?.message || error?.message || error);
      }
    }
  }

  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-black/15">
      <div className="lg:ml-50 w-65 min-h-55 bg-white rounded-xl relative box-border p-4">
        <div className="flex justify-between">
          <h2 className="text-base font-semibold">Update Password</h2>
          <img
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer"
            onClick={() => setClickOnUpdatePassword(false)}
          />
        </div>

        <form
          className=" w-full flex flex-col gap-2 mt-5"
          onClick={(event) => event.preventDefault()}
        >
          <input
            type="text"
            value={updatedPasswordData.oldPassword}
            className="border border-gray-500/40 px-2.5 py-1.5 rounded outline-blue-600/50"
            placeholder="old password"
            onChange={(event) => {
              setUpdatedPasswordData((prev) => ({
                ...prev,
                oldPassword: event.target.value,
              }));
            }}
          />
          <input
            type="text"
            value={updatedPasswordData.newPassword}
            className="border border-gray-500/40 px-2.5 py-1.5 rounded outline-blue-600/50"
            placeholder="new password"
            onChange={(event) => {
              setUpdatedPasswordData((prev) => ({
                ...prev,
                newPassword: event.target.value,
              }));
            }}
          />
          <button
            className="w-full py-2 rounded-sm bg-blue-600 text-white mt-2 cursor-pointer text-sm font-semibold flex justify-center"
            onClick={handleUpdatePasswordCTA}
          >
            {isLoading ? <InsideButtonLoader /> : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordTab;
