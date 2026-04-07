import { assets } from "@assets/assets";
import { useAppContext } from "@context/AppContext";
import React from "react";

const Ratings = ({ courseData }) => {
  const {
    calculateAvarageRating,
    calculateCourseDuration,
    calculateNoOfLectures,
  } = useAppContext();

  return (
    <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
      <div className="flex items-center gap-1">
        <img loading="lazy" src={assets.star} alt="star" />
        <p>({calculateAvarageRating(courseData)})</p>
      </div>

      <div className="h-4 w-px bg-gray-500/30"></div>
      {/* total duration */}
      <div className="flex items-center gap-1">
        <img
          loading="lazy"
          src={assets.time_clock_icon}
          alt="time_clock_icon"
        />
        <p>{calculateCourseDuration(courseData)}</p>
      </div>

      <div className="h-4 w-px bg-gray-500/30"></div>
      {/* total lessons */}
      <div className="flex items-center gap-1">
        <img loading="lazy" src={assets.lesson_icon} alt="lesson_icon" />
        <p>{calculateNoOfLectures(courseData)} lessons</p>
      </div>
    </div>
  );
};

export default Ratings;
