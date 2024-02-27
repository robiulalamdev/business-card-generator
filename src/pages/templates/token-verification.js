import TicketForm from "@/components/commons/TicketForm";
import AllTemplates from "@/components/templates/AllTemplates";
import TemplateMain from "@/components/templates/TempleteMain";
import React from "react";
import { useSelector } from "react-redux";

const TemplatesPage = () => {
  const { ticket, selectedTmp } = useSelector((state) => state.global);
  // console.log(selectedTmp);
  console.log("ticket: ", ticket);
  return (
    <>
      {ticket ? (
        <>{selectedTmp ? <TemplateMain /> : <AllTemplates />}</>
      ) : (
        <TicketForm />
      )}
    </>
  );
};

export default TemplatesPage;
