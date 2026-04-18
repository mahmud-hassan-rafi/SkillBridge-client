import React from "react";
import Student from "./enrollment/Student";
import CourseTitle from "./enrollment/CourseTitle";

const EnrollmentRow = ({ idx, item }) => {
  return (
    <tr key={idx} className="border-b border-gray-500/20 ">
      {/* index */}
      <td className="px-4 py-3 font-semibold text-center hidden sm:table-cell">
        {idx + 1}
      </td>
      <Student item={item} />
      {/* course title */}
      <CourseTitle item={item} />
      {/* enrollment date */}
      <td className="px-4 py-3 truncate">
        <abbr
          title={new Date(item?.createdAt).toLocaleDateString()}
          className="flex items-center gap-x-3 sm:gap-x-2 md:gap-x-3 decoration-transparent hover:decoration-gray-500/50 cursor-default"
        >
          {new Date(item?.createdAt).toLocaleDateString()}
        </abbr>
      </td>
    </tr>
  );
};

export default EnrollmentRow;
