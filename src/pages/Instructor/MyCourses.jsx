import Loading from "@components/common/Loading";
import { useAppContext } from "@context/AppContext";
import React, { useEffect, useState } from "react";

const MyCourses = () => {
  const { allCourses, currency } = useAppContext();
  const [courses, setCourses] = useState(null);

  // fetching courses
  useEffect(() => {
    setCourses(allCourses);
  }, [allCourses]);

  return courses ? (
    <div className="flex flex-col h-screen items-start justify-between md:p-8 md:pb-0 p-4 pt-10 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">My Courses</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="table-fixed md:table-auto w-full overflow-x-auto md:overflow-hidden">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">
                  All Courses
                </th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate ">
                  Published On
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-500 text-sm">
              {courses?.map((course) => {
                return (
                  <tr key={course._id} className="border-b border-gray-500/20">
                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                      <img
                        src={course.courseThumbnail}
                        alt="Course Image"
                        className="w-16"
                      />
                      <span className="truncate hidden md:block">
                        {course.courseTitle}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      {currency}{" "}
                      {Math.floor(
                        course.enrolledStudents.length *
                          (course.coursePrice -
                            (course.discount * course.coursePrice) / 160)
                      )}
                    </td>

                    <td className="px-4 py-3">
                      {" "}
                      {course.enrolledStudents.length}{" "}
                    </td>

                    <td className="px-4 py-3">
                      {new Date(course.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
