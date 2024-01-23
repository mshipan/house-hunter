import baseApi from "./baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
