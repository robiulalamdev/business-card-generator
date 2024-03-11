import {
  useCreateTicketMutation,
  useGetTicketsQuery,
} from "@/redux/features/ticket/ticketApi";
import { Button, Spinner } from "@material-tailwind/react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SpinnerCircularFixed } from "spinners-react";
import randomstring from "randomstring";
import useInputPattern from "@/lib/hooks/useInputPattern";
import LoginPopup from "@/components/shared/LoginPopup";
import DashboardLayout from "@/Layout/DashboardLayout";
import { AuthContext } from "@/components/context/AuthContext";
import CreateTicketPopup from "@/components/dashboard/CreateTicketPopup";
import Tickets from "@/components/dashboard/Tickets";

const DashboardHome = () => {
  const { user, refetch, isLoading } = useContext(AuthContext);
  const {
    data,
    isLoading: ticketLoading,
    refetch: ticketRefetch,
  } = useGetTicketsQuery();
  const [tickets, setTickets] = useState([]);
  const [open, setOpen] = useState(false);

  //   console.log(data);

  useMemo(() => {
    if (data?.data?.length > 0) {
      setTickets(data?.data);
    }
  }, [data]);

  const searchTicket = async (value) => {
    if (value) {
      const result = data?.data?.filter((ticket) =>
        ticket?.email.toLowerCase().includes(value.toLowerCase())
      );
      setTickets(result);
    } else {
      setTickets(data?.data);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen h-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <main className="h-full bg-gradient-to-br from-[#5bc6fc] to-BPM w-full overflow-y-auto font-open-sans">
        {!isLoading && user?._id ? (
          <div className="container pb-4">
            <div className="py-3 flex items-center gap-4">
              <input
                onChange={(e) => searchTicket(e.target.value)}
                type="search"
                className="w-full max-w-[400px] h-10 outline-none border border-gray-400 rounded bg-gray-50 px-2 text-sm 
                text-black placeholder:text-blue-gray-800 placeholder:text-sm"
                placeholder="Search Tickets"
              />
              <button
                onClick={() => setOpen(true)}
                className="shadow-none hover:shadow-none rounded bg-orange-700 text-current w-[100px] h-10 text-white text-sm p-0"
              >
                New Ticket
              </button>
            </div>
            <Tickets tickets={tickets} isLoading={ticketLoading} />
            <CreateTicketPopup open={open} close={setOpen} />
          </div>
        ) : (
          <LoginPopup open={true} />
        )}
      </main>
    </>
  );
};

export default DashboardHome;

DashboardHome.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
