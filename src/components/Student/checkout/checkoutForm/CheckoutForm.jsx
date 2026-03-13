import {
  useStripe,
  useElements,
  CardNumberElement,
} from "@stripe/react-stripe-js";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CardNumberField from "./CardNumberField";
import CardExpiryField from "./CardExpiryField";
import CardCvcField from "./CardCvcField";
import PayButton from "./PayButton";

const CheckoutForm = () => {
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

  const handleCardChange = (event) => {
    setEmptyInput((prev) => ({ ...prev, cardNumber: !event.complete }));
    setFieldErrors((prev) => ({ ...prev, cardNumber: !event.complete }));

    if (event.brand !== "unknown") {
      setCardBrand(event.brand);
    } else {
      setCardBrand(null);
    }
  };

  const handleSubmit = async (e) => {
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
    } else if (paymentIntent?.status === "succeeded") {
      navigate("/course/enroll/payment-success");
    }

    setLoading(false);
  };

  const inputBaseClass = (hasError) =>
    `w-full border px-4 py-2.5 flex items-center gap-1 ${
      hasError ? "border-red-500" : "border-gray-500/80"
    } rounded`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-80">
      <CardNumberField
        fieldError={fieldErrors.cardNumber}
        cardBrand={cardBrand}
        onChange={handleCardChange}
        inputBaseClass={inputBaseClass}
      />

      <div className="flex gap-4 w-full">
        <CardExpiryField
          fieldError={fieldErrors.cardExpiry}
          onChange={(event) => {
            setEmptyInput((prev) => ({
              ...prev,
              cardExpiry: !event.complete,
            }));
            setFieldErrors((prev) => ({
              ...prev,
              cardExpiry: !event.complete,
            }));
          }}
          inputBaseClass={inputBaseClass}
        />

        <CardCvcField
          fieldError={fieldErrors.cardCvc}
          onChange={(event) => {
            setEmptyInput((prev) => ({
              ...prev,
              cardCvc: !event.complete,
            }));
            setFieldErrors((prev) => ({
              ...prev,
              cardCvc: !event.complete,
            }));
          }}
          inputBaseClass={inputBaseClass}
        />
      </div>

      <PayButton loading={loading} stripe={stripe} />
    </form>
  );
};

export default CheckoutForm;
