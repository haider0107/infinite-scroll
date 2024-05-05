import { configureStore } from "@reduxjs/toolkit";

import jobDataReducer from "../features/jobData/jobDataSlice";

export const store = configureStore({
  reducer: jobDataReducer,
});
