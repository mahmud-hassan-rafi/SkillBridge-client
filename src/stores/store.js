import { configureStore } from "@reduxjs/toolkit";
import { api } from "@services/api.js";
import authReducer from "@features/auth/authSlice.js";
import meReducer from "@features/me/meSlice.js";

export const store = configureStore({
  name: "SkillBridgeStore",
  reducer: {
    auth: authReducer,
    me: meReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (gDM) => gDM().concat(api.middleware),
});
