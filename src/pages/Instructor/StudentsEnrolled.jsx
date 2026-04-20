import Loading from "@components/common/Loading";
import EnrollmentRow from "@components/Instructor/EnrollmentRow";
import { useInstructorEnrollmentListQuery } from "@features/course/courseApi";
import React from "react";
import uniqid from "uniqid";

const StudentsEnrolled = () => {
  const { data: enrolledStudents, isLoading } =
    useInstructorEnrollmentListQuery();

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col h-screen items-start md:p-8 md:pb-0 p-4 pt-10 pb-0">
      <h2 className="pb-4 text-lg font-medium">Students Enrollments</h2>
      {enrolledStudents?.enrollments?.length > 0 ? (
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="table-fixed md:table-auto w-full overflow-hidden">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold text-center hidden w-10 sm:table-cell">
                  #
                </th>
                <th className="px-4 py-3 font-semibold w-1/4">Student</th>
                <th className="px-4 py-3 font-semibold w-1/2">Course Title</th>
                <th className="px-4 py-3 font-semibold w-24 sm:w-32">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {enrolledStudents?.enrollments?.map((item, idx) => (
                <EnrollmentRow key={uniqid()} item={item} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 font-medium ">No enrollments yet</p>
      )}
    </div>
  );
};

export default StudentsEnrolled;
