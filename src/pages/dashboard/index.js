import {
  useCreateTicketMutation,
  useGetTicketsQuery,
} from "@/redux/features/ticket/ticketApi";
import { Button, Spinner } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
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
  const [open, setOpen] = useState(false);

  //   console.log(data);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen h-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <main className="h-full bg-teal-50/50 w-full">
        {!isLoading && user?._id ? (
          <div className="container pb-4">
            <div className="py-3 flex items-center gap-4">
              <input
                type="search"
                className="w-full max-w-[400px] h-10 outline-none border border-blue-gray-600 rounded bg-blue-gray-100 px-2 text-sm text-black placeholder:text-blue-gray-600 placeholder:text-sm"
                placeholder="Search Tickets"
              />
              <button
                onClick={() => setOpen(true)}
                className="shadow-none hover:shadow-none rounded bg-orange-700 text-current w-[100px] h-10 text-white text-sm p-0"
              >
                New Ticket
              </button>
            </div>
            <Tickets tickets={data?.data} isLoading={ticketLoading} />
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
