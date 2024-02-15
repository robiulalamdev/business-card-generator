import TicketForm from "@/components/commons/TicketForm";
import AllTemplates from "@/components/templates/AllTemplates";
import TemplateCard from "@/components/templates/TemplateCard";
import TemplateMain from "@/components/templates/TempleteMain";
import { templates } from "@/lib/datas/templates";
import useTicket from "@/lib/hooks/useTicket";
import React from "react";
import { useSelector } from "react-redux";

const TemplatesPage = () => {
  const { ticket, selectedTmp, generateStep, templateData, html, tempResult } =
    useSelector((state) => state.global);
  console.log(selectedTmp);
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
