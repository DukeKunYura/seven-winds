import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRows, IRow } from "../interfaces/interfaces";

const eID = import.meta.env.VITE_EID;

export const windsApi = createApi({
  reducerPath: "windsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IRows, void>({
      query: () => `/row/list`,
    }),
    getPostById: builder.query<IRow, number>({
      query: (id) => `posts${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = windsApi;
