import { useAppContext } from "@hooks/ContextHook";
import React, { useState } from "react";

const CourseRow = ({ course }) => {
  const { currency } = useAppContext();
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <tr key={course._id} className="border-b border-gray-500/20">
      <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
        <abbr
          title={course.courseTitle}
          className="flex items-center gap-x-3 sm:gap-x-2 md:gap-x-3 decoration-transparent hover:decoration-gray-500/50 cursor-default"
        >
          <div className="w-18 h-10 relative">
            {!imgLoaded && (
              <div className="size-full absolute inset-0 bg-gray-200/80 rounded animate-pulse " />
            )}
            {course.courseThumbnail.url && (
              <img
                src={course.courseThumbnail.url}
                alt="course thumbnail"
                loading="lazy"
                className="size-full object-cover object-center"
                onLoad={() => setImgLoaded(true)}
              />
            )}
          </div>
          <span className="truncate hidden md:block">{course.courseTitle}</span>
        </abbr>
      </td>

      <td className="px-4 py-3 ">
        {currency} {course.earnings}
      </td>

      <td
        className="max-sm:w-12 px-2 sm:px-4 py-3 text-center
      "
      >
        {course.enrollments}
      </td>

      <td className=" px-2 sm:px-4 py-3 truncate">
        {new Date(course.createdAt).toLocaleDateString()}
      </td>
    </tr>
  );
};

export default CourseRow;
