import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  optionsActive: false,
};

export const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    setActiveOptions: (state, action) => {
      state.optionsActive = action.payload;
    },
  },
});

export const { setActiveOptions } = masterSlice.actions;

export default masterSlice.reducer;
