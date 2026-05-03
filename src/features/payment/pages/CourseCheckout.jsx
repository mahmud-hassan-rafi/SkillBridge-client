import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "@components/common/Loading";
import CheckoutForm from "@features/payment/components/checkoutForm/CheckoutForm";
import CourseCard from "../components/courseCard/CourseCard";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import CourseCardSkeleton from "@skeleton/course/CourseCardSkeleton";
import { useEffect, useState } from "react";
import { useAppContext } from "@hooks/ContextHook";
import { useCreatePaymentIntentMutation } from "../paymentApi";
import { useIsEnrolledQuery } from "@features/enrollement/enrollmentApi";

let stripePromise;

try {
  stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
} catch (error) {
  console.log(error);
}

export default function CourseCheckout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();
  const { course: courseData } = useLoaderData();
  const [createPaymentIntent, { isLoading: paymentIntentLoading }] =
    useCreatePaymentIntentMutation();

  const { data: isBuyedCourse, isLoading: isEnrolledCheckingTime } =
    useIsEnrolledQuery(id, {
      skip: !location?.state?.isAlreadyEnrolled,
    }) || false;

  const [clientSecret, setClientSecret] = useState(null);

  const { calculateActualPrice } = useAppContext();
  const coursePrice = calculateActualPrice(courseData);
  // if the course is already enrolled then navigate to player page.
  useEffect(() => {
    if (location?.state?.isAlreadyEnrolled || isBuyedCourse?.isEnrolled) {
      navigate(`/player/${id}`);
    }
  }, [navigate, isBuyedCourse, location?.state?.isAlreadyEnrolled, id]);

  // create payment intent when the component is mounted.
  useEffect(() => {
    (async () => {
      if (courseData) {
        const { clientSecret } = await createPaymentIntent({
          courseId: courseData._id,
          price: coursePrice,
        }).unwrap();
        setClientSecret(clientSecret);
      }
    })();
  }, []);

  if (paymentIntentLoading || !clientSecret | isEnrolledCheckingTime)
    return <Loading />;

  return (
    <div className="w-full p-6 sm:px-8 xl:px-16 bg-linear-to-b from-cyan-100/70">
      {clientSecret && (
        <div className="w-full flex max-[850px]:flex-col max-[850px]:items-center min-[850px]:gap-8 md:justify-around">
          <CourseCard courseData={courseData} />
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm id={id} courseData={courseData} />
          </Elements>
        </div>
      )}
    </div>
  );
}

// loader data use kora plan ache after building backend.
export const CourseCheckoutLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/courses/get/${id}`,
  );

  if (!res.ok) {
    throw new Error("course loaded failed");
  }

  return res.json();
};
