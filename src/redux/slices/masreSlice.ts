import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  optionsActive: false,
  idEditingRow: 0,
  rowsData: [],
};

export const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    setActiveOptions: (state, action) => {
      state.optionsActive = action.payload;
    },
    setIdEditingRow: (state, action) => {
      state.idEditingRow = action.payload;
    },
    setRowsData: (state, action) => {
      state.rowsData = action.payload;
    },
  },
});

export const { setActiveOptions, setIdEditingRow, setRowsData } =
  masterSlice.actions;

export default masterSlice.reducer;
