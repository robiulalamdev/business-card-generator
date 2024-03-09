import TicketForm from "@/components/commons/TicketForm";
import { AuthContext } from "@/components/context/AuthContext";
import AllTemplates from "@/components/templates/AllTemplates";
import TemplateMain from "@/components/templates/TempleteMain";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FallingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";

const TemplatesPage = () => {
  const { ticketLoading } = useContext(AuthContext);
  const { ticket, selectedTmp } = useSelector((state) => state.global);
  const router = useRouter();
  console.log(router.query);
  // console.log(selectedTmp);
  return (
    <>
      {!ticketLoading && ticket ? (
        <>{selectedTmp ? <TemplateMain /> : <AllTemplates />}</>
      ) : (
        <TicketForm navigate={false} />
      )}

      {ticketLoading && (
        <div className="flex justify-center items-center h-screen absolute top-0 bg-white w-full">
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
