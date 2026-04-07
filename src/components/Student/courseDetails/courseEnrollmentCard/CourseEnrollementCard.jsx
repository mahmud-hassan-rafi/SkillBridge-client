import { useCreatePaymentIntentMutation } from "@features/payment/paymentApi";
import { errorNotify } from "@utils/toast-notify/toastify";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import Ratings from "./Ratings";
import Price from "./Price";
import CourseDescription from "./courseDescription";
import OfferTimeLeft from "./OfferTimeLeft";

const CourseEnrollementCard = (
  { playerData, courseData, isAlreadyEnrolled },
  ref,
) => {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  const enrollmentCheckup = isAlreadyEnrolled
    ? "Already Enrolled"
    : "Enroll now";

  const [createPaymentIntent, { isLoading }] = useCreatePaymentIntentMutation();

  const handleEnrollment = useCallback(async () => {
    try {
      const data = await createPaymentIntent({
        courseId: courseData._id,
        price: courseData.coursePrice,
      }).unwrap();
      console.log(data);
      navigate("/course/enroll/" + courseData._id);
    } catch {
      errorNotify("check internet connection");
    }
  }, [navigate, createPaymentIntent, courseData]);

  return (
    <div
      className="max-w-106 z-10 shadow-[0_4px_15px_2px] shadow-[rgba(0,0,0,0.1)] rounded-t
md:rounded-none overflow-hidden bg-white min-w-75 sm:min-w-105"
    >
      {playerData ? (
        <YouTube
          videoId={playerData?.videoId}
          opts={{ playerVars: { autoplay: 1 } }}
          iframeClassName="w-full aspect-video"
        />
      ) : (
        <div className="w-full h-auto">
          {!imgLoaded && (
            <div className="w-full h-60 bg-gray-200 animate-pulse" />
          )}

          <img
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            src={courseData?.courseThumbnail}
            ref={ref}
            className={`w-full h-auto ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            alt=""
          />
        </div>
      )}
      <div className="p-5">
        {/* offer time left */}
        <OfferTimeLeft />

        {/* price row */}
        <Price courseData={courseData} />

        {/* ratings */}
        <Ratings courseData={courseData} />

        {/* enroll now button */}
        <button
          className="md:mt-6 mt-4 w-full h-12 rounded bg-blue-600
text-white font-medium"
          onClick={handleEnrollment}
        >
          {!isLoading ? enrollmentCheckup : "Processing..."}
        </button>
        {/* course description */}
        <CourseDescription />
      </div>
    </div>
  );
};

export default CourseEnrollementCard;
