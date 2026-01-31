import { assets } from "@assets/assets.js";
import InsideButtonLoader from "@components/common/InsideButtonLoader";
import { useUpdateProfileMutation } from "@features/me/meApi";
import { errorNotify, successNotify } from "@utils/toast-notify/toastify";
import React, { useState } from "react";

const UpdateProfileTab = ({ setClickOnUpdateProfile }) => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [updatedProfileData, setUpdatedProfileData] = useState({
    firstname: "",
    lastname: "",
  });

  async function handleUpdateProfileCTA() {
    const updates = {};

    if (updatedProfileData.firstname.length > 0) {
      updates["firstname"] = updatedProfileData.firstname;
    }
    if (updatedProfileData.lastname.length > 0) {
      updates["lastname"] = updatedProfileData.lastname;
    }

    try {
      if (Object.keys(updates).length > 0) {
        const res = await updateProfile(updates).unwrap();

        setClickOnUpdateProfile(false);
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
          <h2 className="text-base font-semibold">Update profile</h2>
          <img
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer"
            onClick={() => setClickOnUpdateProfile(false)}
          />
        </div>

        <form
          className=" w-full flex flex-col gap-2 mt-5"
          onClick={(event) => event.preventDefault()}
        >
          <input
            type="text"
            value={updatedProfileData.firstname}
            className="border border-gray-500/40 px-2.5 py-1.5 rounded outline-blue-600/50"
            placeholder="Firstname"
            onChange={(e) => {
              setUpdatedProfileData((prev) => {
                return { ...prev, firstname: e.target.value };
              });
            }}
          />
          <input
            type="text"
            value={updatedProfileData.lastname}
            className="border border-gray-500/40 px-2.5 py-1.5 rounded outline-blue-600/50"
            placeholder="Lastname"
            onChange={(e) => {
              setUpdatedProfileData((prev) => {
                return { ...prev, lastname: e.target.value };
              });
            }}
          />
          <button
            disabled={isLoading}
            className="w-full py-2 rounded-sm bg-blue-600 text-white mt-2 cursor-pointer text-sm font-semibold flex justify-center"
            onClick={handleUpdateProfileCTA}
          >
            {isLoading ? <InsideButtonLoader /> : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileTab;
