import baseApi from "./baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    getUserByEmail: builder.query({
      query: (email) => `/user/${email}`,
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByEmailQuery } = usersApi;
