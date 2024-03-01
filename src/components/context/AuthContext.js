import { temp1Html } from "@/lib/datas/generateHtml/temp1";
import { generateHtml } from "@/lib/datas/htmls";
import { templates } from "@/lib/datas/templates";
import { BASE_URL, SECRETE_TOKEN, TICKET_TOKEN_NAME } from "@/lib/global";
import {
  setGenerateStep,
  setHtml,
  setSelectedTmp,
  setTempResult,
  setTicket,
} from "@/redux/features/globals/globalsSlice";
import { useGetTicketByTokenQuery } from "@/redux/features/ticket/ticketApi";
import { useUserQuery } from "@/redux/features/user/userApi";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data, refetch, isLoading } = useUserQuery();
  const [token, setToken] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem(TICKET_TOKEN_NAME)
      : null
  );

  const { data: ticket, refetch: ticketRefetch } =
    useGetTicketByTokenQuery(token);

  const [user, setUser] = useState(null);
  const [ticketLoading, setTicketLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const handleSetHtmlCode = async (template) => {
    const html = await generateHtml(
      ticket?.template?.template,
      parseInt(template?._id)
    );
    await dispatch(setHtml(html));
  };

  useEffect(() => {
    setTicketLoading(true);
    if (ticket?.data) {
      dispatch(setTicket(ticket?.data));
    }
    if (ticket?.template) {
      const template = templates.find(
        (tm) => tm._id === parseInt(ticket?.template?.template_no)
      );
      if (template) {
        dispatch(setSelectedTmp(template));
        handleSetHtmlCode(template);
      }
      dispatch(setTempResult(ticket?.template));
      dispatch(setGenerateStep(2));
    }
    setTicketLoading(false);
  }, [ticket]);

  const logout = async () => {
    localStorage.removeItem(SECRETE_TOKEN);
    setUser(null);
    refetch();
  };

  const contextValue = {
    user,
    setUser,
    refetch,
    isLoading,
    logout,
    ticketLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
