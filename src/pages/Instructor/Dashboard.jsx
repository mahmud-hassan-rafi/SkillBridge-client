import { assets, dummyDashboardData } from "@assets/assets";
import Loading from "@components/common/Loading";
import { useAppContext } from "@context/AppContext";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const { currency } = useAppContext();
  const [dashboardData, setDashboardData] = useState(null);

  // for fetching the dummy dashboard data;
  useEffect(() => {
    (async () => {
      setDashboardData(dummyDashboardData);
    })();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-10 pb-0">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5 px-7 md:px-0 items-center">
          {/* 1st div */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-full md:w-59 rounded-md">
            <img src={assets.patients_icon} alt="patients_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData?.enrolledStudentsData.length}
              </p>
              <p className="text-base text-gray-500">Total Enrollements</p>
            </div>
          </div>

          {/* 2nd div */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-full md:w-56 rounded-md">
            <img src={assets.appointments_icon} alt="appointments_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData?.totalCourses}
              </p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>

          {/* 3rd div */}
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-full md:w-56 rounded-md">
            <img src={assets.earning_icon} alt="earning_icon" />
            <div>
              <p className="text-2xl font-medium text-gray-600">
                {currency}
                {dashboardData?.totalEarnings}
              </p>
              <p className="text-base text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>

        {/* latest enrollments histories */}
        <div>
          <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className="table-fixed md:table-auto w-full overflow-hidden">
              <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">
                    #
                  </th>
                  <th className="px-4 py-3 font-semibold">Student Name</th>
                  <th className="px-4 py-3 font-semibold">CourseTitle</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500">
                {dashboardData?.enrolledStudentsData?.map((item, idx) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
