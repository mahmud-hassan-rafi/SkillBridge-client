import { assets } from "@assets/assets";
import { useAppContext } from "@context/AppContext";
import { useCreatePaymentIntentMutation } from "@features/payment/paymentApi";
import React from "react";
import { useNavigate } from "react-router-dom";

const CourseEnrollementCard = (
  { playerData, courseData, isAlreadyEnrolled },
  ref,
) => {
  const navigate = useNavigate();
  const {
    calculateAvarageRating,
    currency,
    calculateCourseDuration,
    calculateNoOfLectures,
  } = useAppContext();

  const [createPaymentIntent] = useCreatePaymentIntentMutation();

  const handleEnrollment = async () => {
    try {
      const data = await createPaymentIntent({
        courseId: courseData._id,
        price: courseData.coursePrice,
      }).unwrap();
      console.log(data);
      navigate("/course/enroll/" + courseData._id);
    } catch (error) {
      console.error("Error creating payment intent:", error);
    }
  };

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
        <img src={courseData?.courseThumbnail} ref={ref} alt="" />
      )}
      <div className="p-5">
        <div className="flex items-center gap-2">
          <img src={assets.time_left_clock_icon} alt="time_left_clock_icon" />
          <p className="font-medium">
            <span className="text-red-500">5 days</span> left to the price!
          </p>
        </div>
        <div className="flex gap-3 items-center pt-2">
          <p className="md:text-4xl text-2xl to-gray-800 font-semibold">
            {currency}
            {(
              courseData?.coursePrice -
              (courseData?.discount * courseData?.coursePrice) / 100
            ).toFixed(2)}
          </p>
          <p className="md:text-lg text-gray-500 line-through">
            {currency}
            {courseData?.coursePrice}
          </p>
          <p className="md:text-lg text-gray-500">
            {courseData?.discount}% off!
          </p>
        </div>
        {/* ratings */}
        <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
          <div className="flex items-center gap-1">
            <img src={assets.star} alt="star" />
            <p>({calculateAvarageRating(courseData)})</p>
          </div>

          <div className="h-4 w-px bg-gray-500/30"></div>
          {/* total duration */}
          <div className="flex items-center gap-1">
            <img src={assets.time_clock_icon} alt="time_clock_icon" />
            <p>{calculateCourseDuration(courseData)}</p>
          </div>

          <div className="h-4 w-px bg-gray-500/30"></div>
          {/* total lessons */}
          <div className="flex items-center gap-1">
            <img src={assets.lesson_icon} alt="lesson_icon" />
            <p>{calculateNoOfLectures(courseData)} lessons</p>
          </div>
        </div>
        <button
          className="md:mt-6 mt-4 w-full py-3 rounded bg-blue-600
text-white font-medium"
          onClick={handleEnrollment}
        >
          {isAlreadyEnrolled ? "Already Enrolled" : "Enroll now"}
        </button>
        <div className="pt-6">
          <p className="md:text-x1 text-lg font-medium text-gray-800">
            What's in the course?{" "}
          </p>
          <ul
            className="ml-4 pt-2 text-sm md:text-default list-disc
            text-gray-500"
          >
            <li>Lifetime access with free updates.</li>
            <li>Step-by-step, hands-dn project guidance.</li>
            <li>Downloadable resources and source code.</li>
            <li>Quizzes to test your knowledge.</li>
            <li>Certificate of completion.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollementCard;
