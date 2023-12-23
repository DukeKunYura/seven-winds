import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLink: "home",
};

export const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
  },
});

export const { setActiveLink } = masterSlice.actions;

export default masterSlice.reducer;
