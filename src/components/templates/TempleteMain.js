/* eslint-disable react-hooks/exhaustive-deps */
import { templates } from "@/lib/datas/templates";
import { CLIENT_URL } from "@/lib/global";
import { setSelectedTmp } from "@/redux/features/globals/globalsSlice";
import {
  useCreateTemplateMutation,
  useSendSourceCodeMutation,
} from "@/redux/features/template/templateApi";
import { Button } from "@material-tailwind/react";
import html2canvas from "html2canvas";
import React, { useMemo, useState } from "react";
import QRCode from "react-qr-code";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { toast } from "sonner";

const TemplateMain = ({ ticket, templateNo }) => {
  const [sendSourceCode] = useSendSourceCodeMutation();

  const { selectedTmp, generateStep, templateData, html, tempResult } =
    useSelector((state) => state.global);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const handleGetData = () => {
    const template = templates.find((tmp) => tmp._id === templateNo);
    dispatch(setSelectedTmp(template));
    setIsLoading(false);
  };
  useMemo(() => {
    setIsLoading(true);
    handleGetData();
  }, [templateNo]);

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

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      toast.success("Template URL Copied!");
    } catch (err) {}
    document.body.removeChild(textArea);
  };

  const handleSourceCode = async () => {
    const options = {
      data: { email: ticket?.email, html: html },
    };
    const result = await sendSourceCode(options);
    if (result?.data?.success) {
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
              <div className="flex justify-center items-center w-full mt-5">
                <QRCode
                  value={`${CLIENT_URL}/temps/${tempResult?.template_link}`}
                  style={{ height: "150px", width: "150px" }}
                />
              </div>
              {tempResult?.template_link && (
                <div className="flex justify-center items-center gap-4 mt-4">
                  <div className="text-xs min-h-[40px] w-fit max-w-[800px] bg-black text-gray-300 px-2 flex items-center rounded">
                    {`${CLIENT_URL}/temps/${tempResult?.template_link}`}
                  </div>
                  <Button
                    onClick={() =>
                      copyToClipboard(
                        `${CLIENT_URL}/temps/${tempResult?.template_link}`
                      )
                    }
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
                <Button
                  onClick={() => handleDownload(tempResult?.banner)}
                  size="sm"
                  className="rounded shadow-none hover:shadow-none h-10 text-white bg-gradient-to-r from-blue-700 to-primary
          hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500"
                >
                  Download Banner
                </Button>

                <Button
                  onClick={() => handleSourceCode()}
                  size="sm"
                  className="rounded shadow-none hover:shadow-none h-10 text-white bg-gradient-to-r from-blue-700 to-primary
          hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500"
                >
                  Get Source Code
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TemplateMain;
