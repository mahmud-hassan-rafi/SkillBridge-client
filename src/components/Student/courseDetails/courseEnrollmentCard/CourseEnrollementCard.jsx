import { errorNotify } from "@utils/toast-notify/toastify";
import React, { forwardRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import Ratings from "./Ratings";
import Price from "./Price";
import CourseDescription from "./CourseDescription";
import OfferTimeLeft from "./OfferTimeLeft";

const CourseEnrollementCard = forwardRef(
  ({ playerData, courseData, isAlreadyEnrolled }, ref) => {
    const navigate = useNavigate();
    const [imgLoaded, setImgLoaded] = useState(false);

    const enrollmentCheckup = isAlreadyEnrolled
      ? "Already Enrolled"
      : "Enroll now";

    const handleEnrollment = useCallback(async () => {
      try {
        navigate("/course/enroll/" + courseData._id, {
          state: { isAlreadyEnrolled },
        });
      } catch {
        errorNotify("check internet connection");
      }
    }, [navigate, courseData, isAlreadyEnrolled]);

    return (
      <div
        className="max-w-106 z-10 shadow-[0_4px_15px_2px] shadow-[rgba(0,0,0,0.1)] rounded-t
md:rounded-none overflow-hidden bg-white min-w-75 sm:min-w-105"
        ref={ref}
      >
        {playerData ? (
          <YouTube
            videoId={playerData?.videoId}
            opts={{ playerVars: { autoplay: 1 } }}
            onError={() => console.log("error")}
            iframeClassName="w-full aspect-video"
          />
        ) : (
          <div className="w-full h-auto">
            {!imgLoaded && (
              <div className="w-full h-40 md:h-60 bg-gray-200 animate-pulse" />
            )}

            <img
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              src={courseData?.courseThumbnail?.url}
              className={`w-full h-auto max-h-60 object-cover  object-center ${imgLoaded ? "opacity-100" : "opacity-0"}`}
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
            {enrollmentCheckup}
          </button>
          {/* course description */}
          <CourseDescription />
        </div>
      </div>
    );
  },
);

export default CourseEnrollementCard;
