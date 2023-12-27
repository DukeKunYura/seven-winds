import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IRows,
  IRowSendData,
  IRowUpdateData,
  IRowResponse,
} from "../interfaces/interfaces";

//const eID = import.meta.env.VITE_EID;

export const windsApi = createApi({
  reducerPath: "windsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://185.244.172.108:8081/v1/outlay-rows/entity/113777`,
  }),
  endpoints: (builder) => ({
    // получение всех строк
    getRows: builder.query<IRows, void>({
      query: () => `/row/list`,
    }),
    // создание новой строки
    createRow: builder.query<IRowResponse, IRowSendData>({
      query: (row) => ({
        url: `/row/create`,
        method: "POST",
        body: row,
      }),
    }),
    // редактирвание строки
    editRow: builder.query<IRowResponse, [IRowUpdateData, number]>({
      query: ([row, id = null]) => ({
        url: `/row/${id}/update`,
        method: "POST",
        body: row,
      }),
    }),
    // удаление строки
    deleteRow: builder.query<void, number>({
      query: (id) => ({
        url: `/row/${id}/delete`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetRowsQuery,
  useCreateRowQuery,
  useEditRowQuery,
  useDeleteRowQuery,
} = windsApi;
