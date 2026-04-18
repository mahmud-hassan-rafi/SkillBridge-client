import { assets } from "@assets/assets.js";
import InsideButtonLoader from "@components/common/InsideButtonLoader";
import { useUpdateProfileMutation } from "@features/me/meApi";
import { errorNotify, successNotify } from "@utils/toast-notify/toastify";
import React, { useState } from "react";

const UpdateEmailTab = ({ setClickOnUpdateEmail }) => {
  const [updatedEmailData, setUpdatedEmailData] = useState("");
  const [updateEmail, { isLoading }] = useUpdateProfileMutation();

  async function handleUpdateEmailCTA() {
    const updates = {};

    if (updatedEmailData.length > 0) {
      updates["email"] = updatedEmailData;
    }

    try {
      if (Object.keys(updates).length > 0) {
        const res = await updateEmail(updates).unwrap();

        setClickOnUpdateEmail(false);
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
      <div className="lg:ml-50 w-65 h-40 bg-white rounded-xl relative box-border p-4">
        <div className="flex justify-between">
          <h2 className="text-base font-semibold">Update Email</h2>
          <img
            src={assets.cross_icon}
            alt=""
            className="cursor-pointer"
            onClick={() => setClickOnUpdateEmail(false)}
          />
        </div>

        <form
          className=" w-full flex flex-col gap-2 mt-3"
          onClick={(event) => event.preventDefault()}
        >
          <input
            type="email"
            value={updatedEmailData}
            className="border border-gray-500/40 px-1.5 py-2.5 rounded outline-blue-600/50 text-sm"
            placeholder="enter new email"
            onChange={(e) => setUpdatedEmailData(e.target.value)}
          />
          <button
            className="w-full py-2 rounded-sm bg-blue-600 text-white cursor-pointer font-semibold text-sm flex justify-center"
            onClick={handleUpdateEmailCTA}
          >
            {isLoading ? <InsideButtonLoader /> : "Update Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmailTab;
