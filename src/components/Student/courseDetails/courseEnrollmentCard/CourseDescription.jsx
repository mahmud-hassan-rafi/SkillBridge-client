import React from "react";

const CourseDescription = () => {
  return (
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
  );
};

export default CourseDescription;
