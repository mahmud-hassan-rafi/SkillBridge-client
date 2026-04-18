import InsideButtonLoader from "@components/common/InsideButtonLoader";
import { useAppContext } from "@hooks/ContextHook";
import { useDeleteProfileMutation } from "@features/me/meApi";
import { errorNotify, successNotify } from "@utils/toast-notify/toastify";
import React from "react";

const DeleteAccountTab = ({ setClickOnDeleteAccount }) => {
  const [deleteAccount, { isLoading }] = useDeleteProfileMutation();
  const { setManageAccount } = useAppContext();

  async function handleUpdateEmailCTA() {
    try {
      const res = await deleteAccount().unwrap();

      setClickOnDeleteAccount(false);
      setManageAccount(false);
      successNotify(res.message);
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
      <div className="lg:ml-50 w-65 h-auto bg-white rounded-xl relative box-border p-4">
        <h2 className="text-base font-semibold">Are you sure?</h2>
        <p className="font-xs text-gray-900/90 font-light leading-5">
          you could recover your account later but you have to pay 3$ for
          service charges
        </p>
        <form
          className=" w-full flex gap-2 mt-3"
          onClick={(event) => event.preventDefault()}
        >
          <button
            alt=""
            className="w-1/2 px-4 py-2 rounded border text-sm cursor-pointer"
            onClick={() => setClickOnDeleteAccount(false)}
          >
            Cencel
          </button>
          <button
            className="w-1/2 py-2 rounded-sm bg-blue-600 text-white cursor-pointer font-semibold text-sm flex justify-center"
            onClick={handleUpdateEmailCTA}
          >
            {isLoading ? <InsideButtonLoader /> : "Yes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteAccountTab;
