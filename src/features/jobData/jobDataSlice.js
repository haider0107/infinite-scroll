import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const jobDataSlice = createSlice({
  name: "jobData",
  initialState,
  reducers: {
    addJobs: (state, action) => {
      state.push(...action.payload);
    },
    removeJob: (state, action) => {
      state = state.filter((job) => job.jdUid !== action.payload);
    },
  },
});

export const { addJobs, removeJob } = jobDataSlice.actions;

export default jobDataSlice.reducer;
