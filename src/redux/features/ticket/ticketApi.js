import { api } from "../../api/apiSlice";

const ticketApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTicket: builder.mutation({
      query: ({ data }) => ({
        url: `/tickets/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tickets"],
    }),

    removeTicket: builder.mutation({
      query: ({ id }) => ({
        url: `/tickets/${id}`,
        method: "DELETE",
        body: {},
      }),
      invalidatesTags: ["tickets"],
    }),

    getTickets: builder.query({
      query: () => `/tickets`,
      providesTags: ["tickets"],
    }),

    getTicketById: builder.query({
      query: (id) => `/tickets/${id}`,
      providesTags: ["tickets"],
    }),

    getTicketByToken: builder.query({
      query: (token) => `/tickets/ticket-info/${token}`,
      providesTags: ["tickets"],
    }),
  }),
});

export const {
  useCreateTicketMutation,
  useGetTicketsQuery,
  useGetTicketByIdQuery,
  useRemoveTicketMutation,
  useGetTicketByTokenQuery,
} = ticketApi;
