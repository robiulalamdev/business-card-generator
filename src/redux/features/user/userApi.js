import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ data }) => ({
        url: `/users/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    login: builder.mutation({
      query: ({ data }) => ({
        url: `/users/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    user: builder.query({
      query: () => `/users/user-info/me`,
      providesTags: ["users"],
    }),

    userById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["users"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useUserQuery,
  useUserByIdQuery,
} = userApi;
