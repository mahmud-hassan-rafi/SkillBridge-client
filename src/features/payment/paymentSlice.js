import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientSecret: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setClientSecret: (state, action) => {
      state.clientSecret = action.payload;
    },
    clearClientSecret: (state) => {
      state.clientSecret = "";
    },
  },
});

export const { setClientSecret, clearClientSecret } = paymentSlice.actions;

export default paymentSlice.reducer;
