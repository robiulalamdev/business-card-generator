import React from "react";
import Banner from "./Banner";
import PopularTemplates from "./PopularTemplates";
import useTicket from "@/lib/hooks/useTicket";
import { useRouter } from "next/router";

const HomeMain = () => {
  const { isLoading, ticket, isValid } = useTicket();
  return (
    <div>
      <Banner />
      <PopularTemplates />
    </div>
  );
};

export default HomeMain;
