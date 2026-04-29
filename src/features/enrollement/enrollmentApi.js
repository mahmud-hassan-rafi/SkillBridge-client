import { api } from "@services/api";

const enrollmentApiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getEnrollments: builder.query({
      query: () => "/enrollment/my-enrollments",
    }),
  }),
});

export const { useGetEnrollmentsQuery } = enrollmentApiEndpoints;
