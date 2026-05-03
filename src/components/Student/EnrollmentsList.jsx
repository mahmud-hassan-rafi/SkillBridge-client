import Enrollment from "@features/enrollement/components/Enrollment";
import uniqid from "uniqid";

const EnrollmentsList = ({ enrolledCourses }) => {
  return (
    <table className=" table-fixed w-full overflow-hidden border border-gray-500/20 mt-10">
      <thead className="text-gray-900 border-b border-gray-500/20 text-xs sm:text-sm text-left">
        <tr>
          <th className="px-2 sm:px-4 py-3 w-[55%] md:w-[40%] font-semibold">
            Course
          </th>

          <th className="hidden sm:table-cell px-2 sm:px-4 py-3 w-[20%] font-semibold">
            Duration
          </th>

          <th className="hidden md:table-cell px-2 sm:px-4 py-3 w-[20%] font-semibold">
            Completed
          </th>

          <th className="px-2 sm:px-4 py-3 w-[45%] sm:w-[25%] md:w-[20%] font-semibold text-right sm:text-left">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {enrolledCourses?.map((course) => (
          <Enrollment key={uniqid()} course={course} />
        ))}
      </tbody>
    </table>
  );
};

export default EnrollmentsList;
