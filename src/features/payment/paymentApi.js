import { api } from "@services/api";
import { clearClientSecret, setClientSecret } from "./paymentSlice";

export const paymentApiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "/stripe/create-payment-intent",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          if (res.data.clientSecret) {
            dispatch(setClientSecret(res.data.clientSecret));
          }
        } catch (error) {
          console.log(error);
          dispatch(clearClientSecret());
        }
      },
    }),
  }),
});

export const { useCreatePaymentIntentMutation } = paymentApiEndpoints;
