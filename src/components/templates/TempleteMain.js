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
import React, { useMemo, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { toast } from "sonner";
import LiveBanner from "../LiveTemp/LiveBanner";
import LiveTempLogo from "../LiveTemp/LiveTempLogo";
import LIveTempFooter from "../LiveTemp/LIveTempFooter";

const TemplateMain = () => {
  const [sendSourceCode] = useSendSourceCodeMutation();
  const { selectedTmp, generateStep, templateData, html, tempResult, ticket } =
    useSelector((state) => state.global);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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

  const base64toBlob = (base64Data) => {
    const byteString = atob(base64Data.split(",")[1]);
    const mimeString = base64Data.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const downloadStringImage = (imageData, fileName) => {
    const blob = base64toBlob(imageData);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName || "image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
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

  const downloadQRCode = async () => {
    const element = document.getElementById("qrCode"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "downloaded-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="container h-screen">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-full">
            <ScaleLoader color="#4A51D3" />
          </div>
        ) : (
          <div className="mt-8 pb-5">
            {selectedTmp && generateStep === 1 && <>{selectedTmp?.tmp_form}</>}
            {selectedTmp && generateStep === 2 && (
              <>
                <LiveTempLogo logo={tempResult?.template?.logo} />
                <>
                  <div className="grid md:grid-cols-4 items-start">
                    <div className="flex flex-col items-end justify-end w-full px-4">
                      <h1 className="font-semibold">Template</h1>
                      <Button
                        onClick={() => handleDownloadImage()}
                        size="sm"
                        className="rounded-sm shadow-none hover:shadow-none h-8  bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
                      >
                        Download
                      </Button>
                    </div>
                    <div
                      id="print"
                      className="border-x border-t border-black p-4 col-span-2"
                    >
                      {selectedTmp?.template}
                    </div>
                    <div></div>
                  </div>
                </>

                <LiveBanner banner={tempResult?.template?.banner} />
                <LIveTempFooter data={tempResult?.template?.footer} />
                <div className="grid md:grid-cols-4 items-start">
                  <div className="flex flex-col items-end justify-end w-full px-4">
                    <h1 className="font-semibold">QR Code</h1>
                    <Button
                      onClick={downloadQRCode}
                      size="sm"
                      className="rounded-sm shadow-none hover:shadow-none h-8  bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
                    >
                      Download
                    </Button>
                  </div>
                  <div className="border border-black p-4 col-span-2">
                    <div className="flex justify-center items-center w-full ">
                      <div id="qrCode" className="p-1">
                        <QRCode
                          value={`${CLIENT_URL}/temps/${tempResult?.template_link}`}
                          style={{ height: "150px", width: "150px" }}
                        />
                      </div>
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
                        onClick={() => handleSourceCode()}
                        size="sm"
                        className="rounded shadow-none hover:shadow-none h-10 text-white bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500"
                      >
                        Get Source Code
                      </Button>
                    </div>
                  </div>

                  <div></div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TemplateMain;
