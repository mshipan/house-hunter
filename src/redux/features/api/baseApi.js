import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_baseApi,
  }),
  tagTypes: ["Users"],
  endpoints: () => ({}),
});

export default baseApi;
