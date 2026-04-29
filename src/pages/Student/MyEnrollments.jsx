import React from "react";

import Footer from "@components/Student/Footer";
import EnrollmentsList from "@components/Student/EnrollmentsList";
import Loading from "@components/common/Loading";
import { useGetEnrollmentsQuery } from "@features/enrollement/enrollmentApi";

const MyEnrollments = () => {
  const { data, isLoading } = useGetEnrollmentsQuery() || [];

  const enrolledCourses = React.useMemo(() => data?.courses || [], [data]);

  return !isLoading ? (
    <>
      <div className="md:px-36 px-8 py-10 min-h-[91vh]">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        {enrolledCourses?.length > 0 ? (
          <EnrollmentsList enrolledCourses={enrolledCourses} />
        ) : (
          <div className="w-full flex items-center justify-center mt-5">
            <h4 className="text-[clamp(16px,2vw+0.3rem,22px)] text-gray-700/60">
              No course available
            </h4>
          </div>
        )}
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default React.memo(MyEnrollments);
