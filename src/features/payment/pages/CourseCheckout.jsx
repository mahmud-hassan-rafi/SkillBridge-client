import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import Loading from "@components/common/Loading";
import CheckoutForm from "@features/payment/components/checkoutForm/CheckoutForm";
import CourseCard from "../components/courseCard/CourseCard";
import { useAppContext } from "@hooks/ContextHook";
import { useParams } from "react-router-dom";
import CourseCardSkeleton from "@skeleton/course/CourseCardSkeleton";

let stripePromise;

try {
  stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
} catch (error) {
  console.log(error);
}

export default function CourseCheckout() {
  const { allCourses } = useAppContext();
  const { id } = useParams();

  const courseData = allCourses.find((course) => course._id === id);
  const clientSecret = useSelector((state) => state.payment.clientSecret);

  if (!clientSecret) {
    return <Loading />;
  }

  return (
    <div className="w-full p-6 sm:px-8 xl:px-16 bg-linear-to-b from-cyan-100/70">
      {clientSecret && (
        <div className="w-full flex max-[850px]:flex-col max-[850px]:items-center min-[850px]:gap-8 md:justify-around">
          <CourseCard courseData={courseData} />
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm id={id} />
          </Elements>
        </div>
      )}
    </div>
  );
}

// loader data use kora plan ache after building backend.
// export const CourseCheckoutLoader = async ({params}) => {
//   const {id} = params;
//   const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/courses/${id}`);

//   if (!res.ok) {
//     throw new Error("course loaded failed");
//   }

//   return res.json();
// }
