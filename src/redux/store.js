import { configureStore } from "@reduxjs/toolkit";
import toggleSidebarReducer from "./features/toggleSidebarSlice";

export const store = configureStore({
  reducer: {
    toggleSide: toggleSidebarReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
