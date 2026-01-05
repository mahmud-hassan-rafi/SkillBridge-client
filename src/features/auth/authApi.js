import { api } from "@services/api.js";
import { clearUser, setUser } from "./authSlice.js";
import { errorNotify, successNotify } from "@utils/toast-notify/toastify.js";

export const authApiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    loadUser: builder.query({
      query: () => "/auth/me",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(setUser(data.user || data));
            console.log("it's rendering");
          }
        } catch {
          dispatch(clearUser());
        }
      },
      providesTags: ["userAuth", "User"],
    }),

    logout: builder.mutation({
      query: () => ({ url: "/auth/logout", method: "POST" }),
      async onQueryStarted(_, { dispatch }) {
        try {
          dispatch(clearUser());
          successNotify("Signout success");
        } catch (error) {
          errorNotify(
            error?.error?.data?.message ||
              error?.data?.message ||
              error?.message ||
              error
          );
        }
      },
      invalidatesTags: ["userAuth"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLoadUserQuery,
  useLogoutMutation,
} = authApiEndpoints;
