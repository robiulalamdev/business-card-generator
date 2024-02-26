import { BASE_URL, SECRETE_TOKEN } from "@/lib/global";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = `Bearer ${localStorage.getItem(SECRETE_TOKEN)}`;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["templates", "users", "tickets"],
  endpoints: () => ({}),
});
