import { configureStore } from "@reduxjs/toolkit";
import toggleSidebarReducer from "./features/toggleSidebarSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    toggleSide: toggleSidebarReducer,
    auth: authReducer,
  },
});
