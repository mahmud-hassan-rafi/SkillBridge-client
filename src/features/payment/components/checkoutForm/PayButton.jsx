import { useAppContext } from "@hooks/ContextHook";

const PayButton = ({ loading, stripe, courseData }) => {
  const { calculateActualPrice } = useAppContext();
  console.log("state of loading", loading);

  return (
    <button
      type="submit"
      disabled={!stripe || loading}
      className="w-full bg-black text-white py-2 rounded cursor-pointer"
    >
      {loading ? "Processing..." : `Pay $${calculateActualPrice(courseData)}`}
    </button>
  );
};

export default PayButton;
