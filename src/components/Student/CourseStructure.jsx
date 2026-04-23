import React from "react";
import Chapter from "./courseDetails/courseStructure/Chapter";
import uniqid from "uniqid";

const CourseStructure = ({
  courseData,
  setPlayerData,
  isBuyedCourse,
  scrollToVideoRef,
}) => {
  return (
    <div className="pt-8 text-gray-800">
      <h2 className="text-xl font-semibold">Course Structure</h2>
      <div className="pt-5">
        {courseData?.courseContent?.map((chapter, idx) => (
          <Chapter
            key={chapter._id || uniqid()}
            isBuyedCourse={isBuyedCourse}
            scrollToVideoRef={scrollToVideoRef}
            setPlayerData={setPlayerData}
            chapter={chapter}
            idx={idx}
            courseData={courseData}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(CourseStructure);
