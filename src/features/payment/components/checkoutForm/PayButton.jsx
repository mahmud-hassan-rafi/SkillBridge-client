const PayButton = ({ loading, stripe }) => {
  return (
    <button
      disabled={!stripe || loading}
      className="w-full bg-black text-white py-2 rounded cursor-pointer"
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
};

export default PayButton;
