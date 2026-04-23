import CourseDescription from "@components/Student/courseDetails/courseEnrollmentCard/CourseDescription";
import OfferTimeLeft from "@components/Student/courseDetails/courseEnrollmentCard/OfferTimeLeft";
import Price from "@components/Student/courseDetails/courseEnrollmentCard/Price";
import Ratings from "@components/Student/courseDetails/courseEnrollmentCard/Ratings";
import React, { useState } from "react";

const CourseCard = ({ courseData }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className="max-w-106 z-10 min-[850px]:shadow-[0_4px_15px_2px] min-[850px]:shadow-[rgba(0,0,0,0.1)] rounded-t
    md:rounded-none overflow-hidden bg-white min-w-75 sm:min-w-90 lg:min-w-105"
    >
      <div className="w-full h-auto">
        {!imgLoaded && (
          <div className="w-full h-60 bg-gray-200 animate-pulse" />
        )}

        <img
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          src={courseData?.courseThumbnail}
          className={`w-full h-auto transition ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          alt=""
        />
      </div>
      <div className="p-5">
        {/* offer time left */}
        <OfferTimeLeft />

        {/* price row */}
        <Price courseData={courseData} />

        {/* ratings */}
        <Ratings courseData={courseData} />

        {/* course description */}
        <CourseDescription />
      </div>
    </div>
  );
};

export default CourseCard;
