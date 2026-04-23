import { assets } from "@assets/assets";
import Loading from "@components/common/Loading";
import CourseTitle from "@components/Instructor/enrollment/CourseTitle";
import Student from "@components/Instructor/enrollment/Student";
import { useDashboardQuery } from "@features/course/courseApi";
import { useAppContext } from "@hooks/ContextHook";
import React from "react";

const Dashboard = () => {
  const { currency } = useAppContext();
  const { data, isLoading } = useDashboardQuery();
  const [isImgLoaded, setIsImgLoaded] = React.useState({
    patients_icon: false,
    appointments_icon: false,
    earning_icon: false,
  });

  const priceAfterDiscount = (price, discount) => {
    return Number((price - price * (discount / 100)).toFixed(2));
  };

  const totalEarnings = data?.dashboard?.latestEnrollments?.reduce(
    (acc, enrollment) => {
      const earnings = priceAfterDiscount(
        enrollment.course.coursePrice,
        enrollment.course.discount,
      );
      return acc + earnings;
    },
    0,
  );

  if (isLoading) return <Loading />;

  // if (isError) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <p className="text-red-500">Error: {error?.data?.message}</p>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-10 pb-0">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5 px-7 md:px-0 items-center">
          {/* 1st div */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-full md:w-59 rounded-md">
            <div className="w-14 h-14 relative">
              {!isImgLoaded.patients_icon && (
                <div className="absolute inset-0 size-full bg-gray-200 animate-pulse" />
              )}
              <img
                loading="lazy"
                src={assets.patients_icon}
                alt="patients_icon"
                className="size-full"
                onLoad={() =>
                  setIsImgLoaded((prev) => ({ ...prev, patients_icon: true }))
                }
              />
            </div>
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {data?.dashboard?.latestEnrollments?.length || 0}
              </p>
              <p className="text-base text-gray-500">Total Enrollements</p>
            </div>
          </div>

          {/* 2nd div */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-full md:w-56 rounded-md">
            <div className="w-14 h-14 relative">
              {!isImgLoaded.appointments_icon && (
                <div className="absolute inset-0 size-full bg-gray-200 animate-pulse" />
              )}
              <img
                loading="lazy"
                src={assets.appointments_icon}
                className="size-full"
                alt="appointments_icon"
                onLoad={() =>
                  setIsImgLoaded((prev) => ({
                    ...prev,
                    appointments_icon: true,
                  }))
                }
              />
            </div>
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {data?.dashboard?.totalCourse || 0}
              </p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>

          {/* 3rd div */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-full md:w-56 rounded-md">
            <div className="w-14 h-14 relative">
              {!isImgLoaded.earning_icon && (
                <div className="absolute inset-0 size-full bg-gray-200 animate-pulse" />
              )}
              <img
                loading="lazy"
                src={assets.earning_icon}
                className="size-full"
                alt="earning_icon"
                onLoad={() =>
                  setIsImgLoaded((prev) => ({ ...prev, earning_icon: true }))
                }
              />
            </div>
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {currency}
                {totalEarnings || 0}
              </p>
              <p className="text-base text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>

        {/* latest enrollments histories */}
        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>
          {data?.dashboard?.latestEnrollments?.length > 0 ? (
            <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
              <table className="table-fixed md:table-auto w-full overflow-hidden">
                <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-center w-10 hidden sm:table-cell">
                      #
                    </th>
                    <th className="px-4 py-3 font-semibold w-[30%]">Student</th>
                    <th className="px-4 py-3 font-semibold w-[60%]">
                      Course Title
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-500">
                  {data?.dashboard?.latestEnrollments?.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-500/20 ">
                      <td className="px-4 py-3 font-semibold text-center hidden sm:table-cell">
                        {idx + 1}
                      </td>
                      {/* student name */}
                      <Student item={item} />
                      {/* course title */}
                      <CourseTitle item={item} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600 font-medium ">No enrollments yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
