import { api } from "@services/api.js";
import { clearUser, setUser } from "./authSlice.js";

export const authApiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(setUser(data.user || data));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(setUser(data.user || data));
          }
        } catch (error) {
          console.log(error.message);
        }
      },
    }),

    loadUser: builder.query({
      query: () => "/auth/me",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(setUser(data.user || data));
          }
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["userAuth"],
    }),

    logout: builder.mutation({
      query: () => ({ url: "/auth/logout", method: "POST" }),
      async onQueryStarted(_, { dispatch }) {
        try {
          dispatch(clearUser());
        } catch (error) {
          console.log(error);
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
