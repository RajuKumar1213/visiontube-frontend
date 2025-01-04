import { configureStore } from "@reduxjs/toolkit";
import toggleSidebarReducer from "./features/toggleSidebarSlice";
import authReducer from "./features/authSlice";
import progressReducer from "./features/progressSlice";

export const store = configureStore({
  reducer: {
    toggleSide: toggleSidebarReducer,
    auth: authReducer,
    progress: progressReducer,
  },
});
