import { generateHtml } from "@/lib/datas/htmls";
import { templates } from "@/lib/datas/templates";
import { SECRETE_TOKEN, TICKET_TOKEN_NAME } from "@/lib/global";
import {
  setGenerateStep,
  setHtml,
  setOpenChooseTempModal,
  setOpenTempForm,
  setSelectedTmp,
  setTempResult,
  setTicket,
} from "@/redux/features/globals/globalsSlice";
import { useCreateTemplateMutation } from "@/redux/features/template/templateApi";
import { useGetTicketByTokenQuery } from "@/redux/features/ticket/ticketApi";
import { useUserQuery } from "@/redux/features/user/userApi";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data, refetch, isLoading } = useUserQuery();

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem(TICKET_TOKEN_NAME)
      : null;

  const { data: ticketData, refetch: ticketRefetch } =
    useGetTicketByTokenQuery(token);

  const { selectedTmp, generateStep, templateData, ticket } = useSelector(
    (state) => state.global
  );
  const [createTemplate] = useCreateTemplateMutation();

  const [user, setUser] = useState(null);
  const [ticketLoading, setTicketLoading] = useState(true);
  const [saveIsLoading, setSaveIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const handleSetHtmlCode = async (template, id) => {
    const html = await generateHtml(template, parseInt(id));
    await dispatch(setHtml(html));
  };

  const handleTemp = async () => {
    if (ticketData?.data) {
      await dispatch(setTicket(ticketData?.data));
    }
    if (ticketData?.template) {
      const template = await templates.find(
        (tm) => tm._id === parseInt(ticketData?.template?.template_no)
      );
      if (template) {
        await dispatch(setSelectedTmp(template));
        await handleSetHtmlCode(ticketData?.template?.template, template?._id);
      }
      await dispatch(setTempResult(ticketData?.template));
      await dispatch(setGenerateStep(2));
    }
    setTimeout(() => {
      setTicketLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setTicketLoading(true);
    handleTemp();

    return () => {
      setTicketLoading(false);
    };
  }, [ticketData]);

  const logout = async () => {
    localStorage.removeItem(SECRETE_TOKEN);
    setUser(null);
    refetch();
  };

  /// post template
  const handleSave = async (template_no) => {
    if (templateData) {
      const options = {
        data: {
          template: templateData,
          template_no: template_no,
          email: ticket?.email,
        },
      };
      const result = await createTemplate(options);
      if (result?.data?.success) {
        toast.success("Business Card Save Success");
        dispatch(setTempResult(result?.data?.data));
        dispatch(setGenerateStep(2));
        dispatch(setOpenChooseTempModal(false));
        dispatch(setOpenTempForm(false));
      } else {
        toast.error("Business Card Save Failed");
      }
    } else {
      toast.error("Something went wrong, please try again");
    }
    setSaveIsLoading(false);
  };

  const logOutTicket = async () => {
    localStorage.removeItem(TICKET_TOKEN_NAME);
    window.location.reload();
  };

  const contextValue = {
    user,
    setUser,
    refetch,
    isLoading,
    logout,
    ticketLoading,
    ticketRefetch,
    setTicketLoading,

    // template
    setSaveIsLoading,
    saveIsLoading,
    handleSave,
    handleSetHtmlCode,
    logOutTicket,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
