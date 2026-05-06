import { api } from "@services/api";

const enrollmentApiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getEnrollments: builder.query({
      query: () => "/enrollment/my-enrollments",
      providesTags: ["Enrollment"],
    }),
    isEnrolled: builder.query({
      query: (courseId) => `/enrollment/is-enrolled/${courseId}`,
      providesTags: ["Enrollment"],
    }),
  }),
});

export const { useGetEnrollmentsQuery, useIsEnrolledQuery } =
  enrollmentApiEndpoints;
