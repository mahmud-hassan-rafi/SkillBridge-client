import React from "react";

const CourseStructureSkeleton = () => {
  return (
    <div className="w-full max-w-100 flex flex-col gap-1 pt-8">
      <h2 className="bg-gray-200 h-6 w-35 animate-pulse mb-2"></h2>

      <div className="bg-gray-200 h-12 w-full animate-pulse" />
      <div className="bg-gray-200 h-12 w-full animate-pulse" />
      <div className="bg-gray-200 h-12 w-full animate-pulse" />
    </div>
  );
};

export default CourseStructureSkeleton;
