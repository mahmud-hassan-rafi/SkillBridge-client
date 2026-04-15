import React from "react";

const CourseTitle = ({ item }) => {
  return (
    <td className="px-4 py-3 ">
      <abbr
        title={item?.course?.courseTitle}
        className="flex items-center gap-x-3 sm:gap-x-2 md:gap-x-3 decoration-transparent hover:decoration-gray-500/50 cursor-default truncate"
      >
        {item?.course?.courseTitle}
      </abbr>
    </td>
  );
};

export default CourseTitle;
