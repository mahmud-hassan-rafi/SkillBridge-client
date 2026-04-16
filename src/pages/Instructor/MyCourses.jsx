import CourseRow from "@components/Instructor/dashboard/CourseRow";
import { useInstructorCoursesQuery } from "@features/course/courseApi";
import MyCoursesSkeleton from "@skeleton/instructor/MyCoursesSkeleton";
import React from "react";

const MyCourses = () => {
  const {
    data: courses,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInstructorCoursesQuery();

  return (
    <div className="flex flex-col h-screen items-start justify-between md:p-6 lg:p-8 md:pb-0 p-4 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">My Courses</h2>
        {isFetching || isLoading ? (
          <MyCoursesSkeleton />
        ) : isError ? (
          <p className="text-gray-700">{error?.data?.message}</p>
        ) : (
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className="table-fixed md:table-auto w-full overflow-x-auto md:overflow-hidden">
              <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                <tr>
                  <th className="max-sm:w-20 px-2 sm:px-4  py-3 font-semibold truncate">
                    Courses
                  </th>
                  <th className="max-sm:w-20 px-2 sm:px-4 py-3 font-semibold truncate">
                    Earnings
                  </th>
                  <th className="px-2 sm:px-4 py-3 font-semibold truncate">
                    Students
                  </th>
                  <th className="max-sm:w-21.5 px-2 sm:px-4 py-3 font-semibold truncate ">
                    Published On
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-500 text-sm">
                {courses?.courses?.map((course) => {
                  return <CourseRow key={course._id} course={course} />;
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
