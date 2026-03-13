import { CardCvcElement } from "@stripe/react-stripe-js";

const CardCvcField = ({ fieldError, onChange, inputBaseClass }) => {
  return (
    <div className="flex flex-col gap-1.5 w-1/2">
      <label className="text-base text-gray-500">CVC</label>

      <div className={inputBaseClass(fieldError)}>
        <CardCvcElement className="w-full" onChange={onChange} />
      </div>

      {fieldError && (
        <div className="min-h-5">
          <p className="text-red-500 text-sm">invalid CVC.</p>
        </div>
      )}
    </div>
  );
};

export default CardCvcField;
