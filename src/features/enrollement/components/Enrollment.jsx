import { useAppContext } from "@hooks/ContextHook";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Line } from "rc-progress";
import uniqid from "uniqid";

const Enrollment = ({ course }) => {
  const { calculateCourseDuration, calculateNoOfLectures } = useAppContext();
  const totalLectures = calculateNoOfLectures(course);
  const [completedLectures, setCompletedLectures] = useState(0);
  const navigate = useNavigate();

  const isCourseCompleted =
    completedLectures > 0 && completedLectures === totalLectures;

  const courseCompleteProgressPercent =
    Math.floor((completedLectures / totalLectures) * 100) || 0;

  console.log(courseCompleteProgressPercent);
  return (
    <tr key={uniqid()} className="border-b border-gray-500/20">
      <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 ">
        <img
          loading="lazy"
          src={course?.courseThumbnail?.url}
          alt=""
          className="w-14 sm:w-24 md:w-28"
        />
        <div className="flex-1">
          <p className="mb-1 max-sm:text-sm">{course?.courseTitle}</p>
          <Line
            strokeWidth={2}
            percent={courseCompleteProgressPercent}
            className="bg-gray-300 rounded-full"
            strokeColor={`${
              courseCompleteProgressPercent >= 100 ? "#00af00" : "#26A5B0"
            }`}
          />
        </div>
      </td>
      <td className="px-4 py-3 max-sm:hidden">
        {calculateCourseDuration(course)}
      </td>
      <td className="px-4 py-3 max-sm:hidden">
        {completedLectures && `${completedLectures} / ${totalLectures}`}{" "}
        <span>Lectures</span>
      </td>
      <td className="px-4 py-3 max-sm:text-right">
        <button
          className={`px-3 sm:px-5 py-1.5 sm:py-2 max-sm:text-xs text-white ${
            isCourseCompleted ? " bg-green-600" : " bg-blue-600"
          }`}
          onClick={() => navigate("/player/" + course._id)}
        >
          {isCourseCompleted ? "Completed" : "On-Going"}
        </button>
      </td>
    </tr>
  );
};

export default Enrollment;
