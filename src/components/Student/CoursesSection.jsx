import { useAppContext } from "@context/AppContext";
import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } = useAppContext();

  return (
    <div className="py-16 md:px-16 lg:px-24 xl:px-40 px-6">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3 px-2">
        Descover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>
      <div className="grid px-4 md:px-0 md:my-16 my-10 gap-4 grid-cols-auto">
        {/* Course card */}
        {allCourses.slice(0, 4).map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
      <Link
        to={"/course-list"}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
