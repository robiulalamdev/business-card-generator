/* eslint-disable react-hooks/exhaustive-deps */
import { templates } from "@/lib/datas/templates";
import { CLIENT_URL } from "@/lib/global";
import { setSelectedTmp } from "@/redux/features/globals/globalsSlice";
import {
  useCreateTemplateMutation,
  useSendSourceCodeMutation,
} from "@/redux/features/template/templateApi";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import html2canvas from "html2canvas";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { toast } from "sonner";
import { SpinnerCircularFixed } from "spinners-react";

const TemplateMain = () => {
  const { query } = useRouter();
  const [sendSourceCode] = useSendSourceCodeMutation();
  const [createTemplate, { isLoading: saveLoading }] =
    useCreateTemplateMutation();
  const { selectedTmp, generateStep, templateData, html } = useSelector(
    (state) => state.global
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState("");
  const dispatch = useDispatch();

  const handleGetData = () => {
    const template = templates.find((tmp) => tmp._id === parseInt(query.id));
    dispatch(setSelectedTmp(template));
    setIsLoading(false);
  };
  useMemo(() => {
    setIsLoading(true);
    handleGetData();
  }, [query?.id]);

  const handleDownloadImage = async () => {
    const element = document.getElementById("print"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "downloaded-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTmpUrl = async () => {
    const element = document.getElementById("print");

    if (element) {
      const canvas = await html2canvas(element);
      const imageUrl = canvas.toDataURL("image/jpg");
      return imageUrl;
    }
    return null;
  };

  const handleSave = async () => {
    const url = await handleTmpUrl();
    const options = {
      data: { template_img: url, template: templateData },
    };
    const result = await createTemplate(options);
    if (result?.data?.success) {
      toast.success("Business Card Save Success");
      setIsSaved(`${CLIENT_URL}/temps/${result?.data?.data?.template_link}`);
    } else {
      toast.error("Business Card Save Success");
    }
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      toast.success("Business Card URL Copied!");
    } catch (err) {}
    document.body.removeChild(textArea);
  };

  const { handleSubmit, register, reset } = useForm();
  const handleSourceCode = async (data) => {
    const options = {
      data: { email: data?.email, html: html },
    };
    const result = await sendSourceCode(options);
    if (result?.data?.success) {
      reset();
      toast.success("Source Code send to email");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="container h-screen ">
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <ScaleLoader color="#4A51D3" />
        </div>
      ) : (
        <div className="mt-8 min-h-[500px] max-w-[1200px] shadow border rounded-md mx-auto py-5 px-2">
          {selectedTmp && (
            <h1 className="text-center text-xl font-semibold uppercase mb-4">
              {selectedTmp?.name}
            </h1>
          )}
          {selectedTmp && generateStep === 1 && <>{selectedTmp?.tmp_form}</>}
          {selectedTmp && generateStep === 2 && (
            <>
              <div className="flex justify-center">
                <div id="print">{selectedTmp?.template}</div>
              </div>
              {isSaved && (
                <div className="flex justify-center items-center gap-4 mt-4">
                  <div className="text-xs min-h-[40px] w-fit max-w-[800px] bg-black text-gray-300 px-2 flex items-center rounded">
                    {isSaved}
                  </div>
                  <Button
                    onClick={() => copyToClipboard(isSaved)}
                    className="bg-primary h-10 w-14 flex justify-center items-center shadow-none hover:shadow-none text-white text-xs rounded"
                  >
                    <small>Copy</small>
                  </Button>
                </div>
              )}
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  onClick={() => handleDownloadImage()}
                  size="sm"
                  className="rounded shadow-none hover:shadow-none h-10 text-white bg-gradient-to-r from-blue-700 to-primary
          hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500"
                >
                  Download
                </Button>
                {!isSaved && (
                  <Button
                    onClick={() => handleSave()}
                    className="rounded shadow-none hover:shadow-none h-10 text-white bg-gradient-to-r from-yellow-700 to-pink-500
          hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-700 transition-all ease-in duration-500 flex justify-center items-center gap-2"
                  >
                    {saveLoading && (
                      <SpinnerCircularFixed
                        size={30}
                        thickness={150}
                        speed={450}
                        color="white"
                        secondaryColor="gray"
                      />
                    )}
                    Generate Link
                  </Button>
                )}

                <div>
                  <Popover>
                    <PopoverHandler>
                      <Button
                        size="sm"
                        className="rounded shadow-none hover:shadow-none h-10 text-white bg-gradient-to-r from-blue-700 to-primary
          hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500"
                      >
                        Get Source Code
                      </Button>
                    </PopoverHandler>
                    <PopoverContent>
                      <form onSubmit={handleSubmit(handleSourceCode)}>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          required
                          placeholder="Enter Email"
                          className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
                        />
                        <Button
                          size="sm"
                          type="submit"
                          className="rounded shadow-none hover:shadow-none h-10 text-white bg-gradient-to-r from-blue-700 to-primary
          hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 mt-2"
                        >
                          Submit
                        </Button>
                      </form>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TemplateMain;
