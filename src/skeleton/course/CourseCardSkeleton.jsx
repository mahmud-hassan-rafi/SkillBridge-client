import React from "react";
import uniqid from "uniqid";

const CourseCardSkeleton = ({ length = 4 }) => {
  return (
    <div className="w-full grid md:my-16 my-10 gap-4 grid-cols-auto">
      {Array.from({ length }).map(() => (
        <div key={uniqid()} className="bg-gray-100 pb-6 rounded-lg h-70 w-full">
          <div className="w-full h-1/2 bg-black/5 animate-pulse" />
          <div className="p-3">
            <p className="w-full h-6 bg-black/10 animate-pulse mb-3" />
            <p className="w-2/3 h-6 bg-black/10 animate-pulse mb-1.5" />
            <p className="w-2/3 h-6 bg-black/10 animate-pulse mb-1.5" />
            <p className="w-1/3 h-6 bg-black/10 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCardSkeleton;
