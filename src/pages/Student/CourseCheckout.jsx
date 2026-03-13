import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import Loading from "@components/common/Loading";
import CheckoutForm from "@components/Student/checkout/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

export default function CourseCheckout() {
  const clientSecret = useSelector((state) => state.payment.clientSecret);
  console.log(clientSecret);

  if (!clientSecret) {
    return <Loading />;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 flex flex-col items-center justify-center">
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
