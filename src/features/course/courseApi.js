import { api } from "@services/api";

const courseApiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: "/courses/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Course"],
    }),
    instructorCourses: builder.query({
      query: () => "/courses/get-instructor-courses",
      providesTags: ["Course"],
    }),
    instructorEnrollmentList: builder.query({
      query: () => "/courses/get-enrollments",
    }),
    dashboard: builder.query({
      query: () => "/courses/dashboard",
      providesTags: ["Course"],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useInstructorCoursesQuery,
  useInstructorEnrollmentListQuery,
  useDashboardQuery,
} = courseApiEndpoints;
