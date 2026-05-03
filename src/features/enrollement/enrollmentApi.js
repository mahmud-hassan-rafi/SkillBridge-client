import { api } from "@services/api";

const enrollmentApiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getEnrollments: builder.query({
      query: () => "/enrollment/my-enrollments",
    }),
    isEnrolled: builder.query({
      query: (courseId) => `/enrollment/is-enrolled/${courseId}`,
    }),
  }),
});

export const { useGetEnrollmentsQuery, useIsEnrolledQuery } =
  enrollmentApiEndpoints;
