import {
  useStripe,
  useElements,
  CardNumberElement,
} from "@stripe/react-stripe-js";

import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CardNumberField from "./CardNumberField";
import CardExpiryField from "./CardExpiryField";
import CardCvcField from "./CardCvcField";
import PayButton from "./PayButton";
import PaymentSkeleton from "@skeleton/PaymentSkeleton";

const CheckoutForm = ({ id, courseData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const clientSecret = useSelector((state) => state.payment.clientSecret);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [cardBrand, setCardBrand] = useState(null);

  const [emptyInput, setEmptyInput] = useState({
    cardNumber: true,
    cardExpiry: true,
    cardCvc: true,
  });

  const [fieldErrors, setFieldErrors] = useState({
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false,
  });

  const handleCardChange = useCallback((event) => {
    setEmptyInput((prev) => ({ ...prev, cardNumber: !event.complete }));
    setFieldErrors((prev) => ({ ...prev, cardNumber: !event.complete }));

    if (event.brand !== "unknown") {
      setCardBrand(event.brand);
    } else {
      setCardBrand(null);
    }
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!stripe || !elements) return;

      const newFieldErrors = {
        cardNumber: emptyInput.cardNumber,
        cardExpiry: emptyInput.cardExpiry,
        cardCvc: emptyInput.cardCvc,
      };

      setFieldErrors(newFieldErrors);

      const hasErrors = Object.values(newFieldErrors).some(Boolean);
      if (hasErrors) return;

      setLoading(true);

      const cardNumber = elements.getElement(CardNumberElement);

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardNumber,
            billing_details: {
              name: `${user?.fullname?.firstname ?? ""} ${
                user?.fullname?.lastname ?? ""
              }`.trim(),
              email: user?.email,
            },
          },
        },
      );

      if (error) {
        console.error(error);

        if (error.code === "payment_intent_unexpected_state") {
          return navigate(`/course/${id}`, { replace: true });
        }
      } else if (paymentIntent?.status === "succeeded") {
        navigate("/course/enroll/payment-success", { replace: true });
      }

      setLoading(false);
    },
    [emptyInput, user, navigate, clientSecret, elements, stripe, id],
  );

  const inputBaseClass = (hasError) =>
    `w-full border px-4 py-2.5 flex items-center gap-1 ${
      hasError ? "border-red-500" : "border-gray-500/80"
    } rounded`;

  if (!elements || !stripe) return <PaymentSkeleton />;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-106 w-full space-y-4 min-w-75 sm:min-w-100 bg-white p-4 rounded h-min min-[850px]:shadow"
    >
      <h2 className="text-[clamp(22px,1vw+0.5rem,26px)] font-semibold">
        Card Details
      </h2>
      <CardNumberField
        fieldError={fieldErrors.cardNumber}
        cardBrand={cardBrand}
        onChange={handleCardChange}
        inputBaseClass={inputBaseClass}
      />

      <div className="flex gap-4 w-full">
        <CardExpiryField
          fieldError={fieldErrors.cardExpiry}
          setEmptyInput={setEmptyInput}
          setFieldErrors={setFieldErrors}
          inputBaseClass={inputBaseClass}
        />

        <CardCvcField
          fieldError={fieldErrors.cardCvc}
          inputBaseClass={inputBaseClass}
          setEmptyInput={setEmptyInput}
          setFieldErrors={setFieldErrors}
        />
      </div>

      <PayButton loading={loading} stripe={stripe} courseData={courseData} />
    </form>
  );
};

export default CheckoutForm;
