import { configureStore } from "@reduxjs/toolkit";
import { windsApi } from "../api/windsApi";
import masterSlice from "./slices/masreSlice";

export const store = configureStore({
  reducer: {
    [windsApi.reducerPath]: windsApi.reducer,
    master: masterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(windsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
