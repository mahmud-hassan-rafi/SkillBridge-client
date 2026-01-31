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
    updateProfile: builder.mutation({
      query: (updates) => ({
        url: "/me/profile",
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: ["User"],
    }),
    deleteProfile: builder.mutation({
      query: () => ({
        url: "/me/profile",
        method: "DELETE",
      }),
      invalidatesTags: ["userAuth"],
    }),
  }),
});

export const {
  useEnrolledCoursesQuery,
  useUpdateProfileMutation,
  useDeleteProfileMutation,
} = meApiEndpoints;
