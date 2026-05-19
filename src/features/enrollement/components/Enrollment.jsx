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

  return (
    <tr key={uniqid()} className="border-b border-gray-500/20 align-middle">
      <td className="px-2 sm:px-4 py-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            loading="lazy"
            src={course?.courseThumbnail?.url}
            alt=""
            className="w-14 sm:w-20 md:w-24 lg:w-28 shrink-0 rounded"
          />

          <div className="min-w-0 flex-1">
            <p className="mb-2 text-xs sm:text-sm md:text-base truncate">
              {course?.courseTitle}
            </p>

            <Line
              strokeWidth={2}
              percent={courseCompleteProgressPercent}
              className="bg-gray-300 rounded-full"
              strokeColor={`${
                courseCompleteProgressPercent >= 100 ? "#00af00" : "#26A5B0"
              }`}
            />
          </div>
        </div>
      </td>

      <td className="hidden sm:table-cell px-2 sm:px-4 py-3 text-xs sm:text-sm">
        {calculateCourseDuration(course)}
      </td>

      <td className="hidden md:table-cell px-2 sm:px-4 py-3 text-xs sm:text-sm">
        {completedLectures && `${completedLectures} / ${totalLectures}`}
        <span className="ml-1">Lectures</span>
      </td>

      <td className="px-2 sm:px-4 py-3 text-right sm:text-left">
        <button
          className={`px-2 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm text-white whitespace-nowrap rounded ${
            isCourseCompleted ? "bg-green-600" : "bg-blue-600"
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
