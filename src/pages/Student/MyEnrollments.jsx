import { useAppContext } from "@context/AppContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Line } from "rc-progress";
import Footer from "@components/Student/Footer";

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration } = useAppContext();
  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 3, totalLectures: 3 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 3 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 4, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 6 },
  ]);
  const navigate = useNavigate();

  const isCourseCompleted = (idx) => {
    return (
      progressArray[idx] &&
      progressArray[idx]?.lectureCompleted === progressArray[idx]?.totalLectures
    );
  };
  const couseCompleteProgressPercent = (idx) => {
    return (
      Math.floor(
        (progressArray[idx]?.lectureCompleted /
          progressArray[idx]?.totalLectures) *
          100
      ) || 0
    );
  };

  return (
    <>
      <div className="md:px-36 px-8 py-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border border-gray-500/20 mt-10">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {enrolledCourses?.map((course, idx) => (
              <tr key={idx} className="border-b border-gray-500/20">
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 ">
                  <img
                    src={course?.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24 md:w-28"
                  />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>
                    <Line
                      strokeWidth={2}
                      percent={couseCompleteProgressPercent(idx)}
                      className="bg-gray-300 rounded-full"
                      strokeColor={`${
                        couseCompleteProgressPercent(idx) >= 100
                          ? "#00af00"
                          : "#26A5B0"
                      }`}
                    />
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {progressArray[idx] &&
                    `${progressArray[idx].lectureCompleted} / ${progressArray[idx].totalLectures}`}{" "}
                  <span>Lectures</span>
                </td>
                <td className="px-4 py-3 max-sm:text-right">
                  <button
                    className={`px-3 sm:px-5 py-1.5 sm:py-2 max-sm:text-xs text-white ${
                      isCourseCompleted(idx) ? " bg-green-600" : " bg-blue-600"
                    }`}
                    onClick={() => navigate("/player/" + course._id)}
                  >
                    {isCourseCompleted(idx) ? "Completed" : "On-Going"}
                    {/* {console.log("index -", idx, "-", isCourseCompleted(idx))} */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MyEnrollments;
