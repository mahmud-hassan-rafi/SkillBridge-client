import { CardExpiryElement } from "@stripe/react-stripe-js";

const CardExpiryField = ({ fieldError, onChange, inputBaseClass }) => {
  return (
    <div className="flex flex-col gap-1.5 w-1/2">
      <label className="text-base text-gray-500">Expiry Date</label>

      <div className={inputBaseClass(fieldError)}>
        <CardExpiryElement className="w-full" onChange={onChange} />
      </div>

      {fieldError && (
        <div className="min-h-5">
          <p className="text-red-500 text-sm">invalid expiry date.</p>
        </div>
      )}
    </div>
  );
};

export default CardExpiryField;
