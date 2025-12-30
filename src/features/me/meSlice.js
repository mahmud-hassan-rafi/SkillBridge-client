import { createSlice } from "@reduxjs/toolkit";

const meSlice = createSlice({
  name: "me",
  initialState: {
    enrolledCourses: [],
  },
  reducers: {
    setEnrolledCourses: (state, action) => {
      state.enrolledCourses = action.payload;
    },
  },
});

export const { setEnrolledCourses } = meSlice.actions;
export default meSlice.reducer;
