import React from "react";
import TicketCard from "./TicketCard";

const Tickets = ({ tickets, isLoading }) => {
  return (
    <>
      {tickets?.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {tickets?.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} />
          ))}
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <h1>No Tickets</h1>
        </div>
      )}
    </>
  );
};

export default Tickets;
