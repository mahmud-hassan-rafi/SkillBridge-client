import { api } from "@services/api";
import { setEnrolledCourses } from "./meSlice";
import { errorNotify } from "@utils/toast-notify/toastify";

const meApiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    enrolledCourses: builder.query({
      query: () => "/me/enrollments",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(setEnrolledCourses(data?.enrolledCourses));
          }
        } catch (error) {
          errorNotify(error.message || error);
        }
      },
    }),
  }),
});

export const { useEnrolledCoursesQuery } = meApiEndpoints;
