import { dummyStudentEnrolled } from "@assets/assets";
import Loading from "@components/common/Loading";
import React, { useState } from "react";

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] =
    useState(dummyStudentEnrolled);

  return enrolledStudents ? (
    <div className="flex flex-col h-screen items-start md:p-8 md:pb-0 p-4 pt-10 pb-0">
      <h2 className="pb-4 text-lg font-medium">Students Enrollments</h2>
      <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
        <table className="table-fixed md:table-auto w-full overflow-hidden">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">
                #
              </th>
              <th className="px-4 py-3 font-semibold">Student Name</th>
              <th className="px-4 py-3 font-semibold">CourseTitle</th>
              <th className="px-4 py-3 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-500">
            {enrolledStudents?.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-500/20 ">
                <td className="px-4 py-3 font-semibold text-center hidden sm:table-cell">
                  {idx + 1}
                </td>
                <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                  <img
                    src={item?.student?.imageUrl}
                    alt="student_img"
                    className="w-9 h-9 rounded-full object-cover bg-center"
                  />
                  <span className="truncate">{item?.student?.name}</span>
                </td>
                <td className="px-4 py-3 truncate">{item?.courseTitle}</td>
                <td className="px-4 py-3 truncate">
                  {new Date(item?.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StudentsEnrolled;
