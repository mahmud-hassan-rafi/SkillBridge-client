import { assets } from "@assets/assets";
import { useAppContext } from "@context/AppContext";
import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateAvarageRating } = useAppContext();

  return (
    <Link
      to={"/course/" + course._id}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
    >
      <img className="w-full" src={course.courseThumbnail} alt="" />
      <div className="p-3 text-left">
        <h3 className="font-semibold text-base line-clamp-2">
          {course.courseTitle}
        </h3>
        <p className="text-gray-500">Mahmud Hassan</p>
        <div className="flex items-center space-x-2">
          <p>{calculateAvarageRating(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, idx) => (
              <img
                className="w-3.5 h-3.5"
                key={idx}
                src={
                  Math.floor(calculateAvarageRating(course)) > idx
                    ? assets.star
                    : assets.star_blank
                }
                alt=""
              />
            ))}
          </div>
          <p className="text-gray-500">({course?.courseRatings?.length})</p>
        </div>
        <p className="text-gray-800 text-base text-semibold">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
