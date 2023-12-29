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
      //console.log(action.payload);
      state.idEditingRow = action.payload;
      console.log(state.idEditingRow);
    },
    setRowsData: (state, action) => {
      state.rowsData = action.payload;
    },
  },
});

export const { setActiveOptions, setIdEditingRow, setRowsData } =
  masterSlice.actions;

export default masterSlice.reducer;
