import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  optionsActive: false,
  idEditingRow: null,
};

export const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    setActiveOptions: (state, action) => {
      state.optionsActive = action.payload;
    },
    setIdEditingRow: (state, action) => {
      state.optionsActive = action.payload;
    },
  },
});

export const { setActiveOptions, setIdEditingRow } = masterSlice.actions;

export default masterSlice.reducer;
