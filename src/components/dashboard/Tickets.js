import React from "react";
import TicketCard from "./TicketCard";

const Tickets = ({ tickets, isLoading }) => {
  return (
    <>
      {tickets?.length > 0 ? (
        <div className="grid grid-cols-6 gap-4">
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
