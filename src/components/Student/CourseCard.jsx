import { assets } from "@assets/assets";
import { useAppContext } from "@hooks/ContextHook";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const [loaded, setLoaded] = useState(false);
  const { currency, calculateAvarageRating } = useAppContext();

  const handleOnload = useCallback(() => {
    setLoaded(true);
  }, [setLoaded]);

  return (
    <Link
      to={"/course/" + course._id}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg flex flex-col"
    >
      {
        <div className="relative h-auto">
          {!loaded && <div className="w-full bg-gray-200 animate-pulse h-35" />}

          <img
            loading="lazy"
            onLoad={handleOnload}
            className={`w-full h-min max-h-40 object-cover object-center ${loaded ? "opacity-100" : "opacity-0"}`}
            src={course.courseThumbnail?.url}
            alt=""
          />
        </div>
      }
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
                loading="lazy"
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
        {course.coursePrice > 0 ? (
          <p className="text-gray-800 text-base text-semibold">
            {currency}
            {(
              course.coursePrice -
              (course.discount * course.coursePrice) / 100
            ).toFixed(2)}
          </p>
        ) : (
          <p className="text-gray-800 text-base text-semibold">Free</p>
        )}
      </div>
    </Link>
  );
};

export default CourseCard;
