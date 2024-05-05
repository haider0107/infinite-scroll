import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const jobDataSlice = createSlice({
  name: "jobData",
  initialState,
  reducers: {
    addJobs: (state, action) => {
      state.push(...action.payload);
    },
    filterJobByLocation: (state, action) => {
      return state.filter((job) => job.location === action.payload);
    },
    filterJobByExpericance: (state, action) => {
      return state.filter((job) => job.minExp === action.payload);
    },
    filterJobByCompany: (state, action) => {
      return state.filter((job) => job.companyName === action.payload);
    },
    filterJobByRoles: (state, action) => {
      return state.filter((job) => job.jobRole === action.payload);
    },
    filterJobBySalary: (state, action) => {
      return state.filter((job) => job.minJdSalary === action.payload);
    },
    removeJob: (state, action) => {
      return state.filter((job) => job.jdUid !== action.payload);
    },
  },
});

export const {
  addJobs,
  removeJob,
  filterJobByLocation,
  filterJobByExpericance,
  filterJobByCompany,
  filterJobByRoles,
  filterJobBySalary,
} = jobDataSlice.actions;

export default jobDataSlice.reducer;
