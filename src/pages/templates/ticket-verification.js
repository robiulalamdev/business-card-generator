import TicketForm from "@/components/commons/TicketForm";
import { AuthContext } from "@/components/context/AuthContext";
import AllTemplates from "@/components/templates/AllTemplates";
import TemplateMain from "@/components/templates/TempleteMain";
import React, { useContext } from "react";
import { FallingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";

const TemplatesPage = () => {
  const { ticketLoading } = useContext(AuthContext);
  const { ticket, selectedTmp } = useSelector((state) => state.global);
  // console.log(selectedTmp);
  // console.log("ticket: ", ticket);
  return (
    <>
      {ticket ? (
        <>{selectedTmp ? <TemplateMain /> : <AllTemplates />}</>
      ) : (
        <TicketForm />
      )}

      {ticketLoading && !ticket && (
        <div className="flex justify-center items-center h-screen">
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </div>
      )}
    </>
  );
};

export default TemplatesPage;
