/* eslint-disable @next/next/no-img-element */
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
import { SpinnerCircularFixed } from "spinners-react";

const TemplateMain = () => {
  const [sendSourceCode, { isLoading: sourceLoading }] =
    useSendSourceCodeMutation();
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

  const printBanner = async () => {
    const element = document.getElementById("bannerContainer"),
      canvas = await html2canvas(element),
      data = canvas.toDataURL("image/jpg"),
      link = document.createElement("a");

    link.href = data;
    link.download = "downloaded-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  const printLatterHead = async () => {
    const element = document.getElementById("latterHead"),
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
          <div className="flex items-start w-full h-full">
            <div className="mt-32 hidden md:block">
              <div className="border rounded bg-gray-100 flex justify-center items-center h-[600px] w-[300px] fixed left-10 ">
                <h1 className="font-semibold text-gray-600">AD Here</h1>
              </div>
            </div>
            <div className="mt-8 pb-5 w-full flex-grow">
              {selectedTmp && generateStep === 1 && (
                <>{selectedTmp?.tmp_form}</>
              )}
              {selectedTmp && generateStep === 2 && (
                <>
                  <div id="print" className="">
                    {selectedTmp?.template}
                  </div>

                  <div className="mt-8">
                    <div
                      id="bannerContainer"
                      className="min-w-[600px] max-w-[600px] min-h-[600px] max-h-[600px] rounded-md bg-orange-600 mx-auto shadow shadow-gray-300 overflow-hidden"
                    >
                      {tempResult?.template?.banner ? (
                        <div className="relative min-w-[600px] min-h-[600px] max-h-[600px]">
                          <img
                            src={tempResult?.template?.banner}
                            alt=""
                            className="min-w-[600px] max-w-[600px] min-h-[600px] max-h-[600px] object-cover"
                          />
                          <div className="flex justify-center items-center absolute top-0 w-full h-full">
                            <img
                              src={tempResult?.template?.logo}
                              alt=""
                              className="h-[80px] w-[80px] object-cover rounded-full"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className=" w-full h-full flex justify-center items-center">
                          <h1 className="text-sm font-semibold text-gray-600">
                            Banner Here
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h1 className="text-center font-bold mb-4">Latter Head</h1>
                    <div
                      id="latterHead"
                      className="max-w-[600px] mx-auto bg-purple-100 border-4 rounded-3xl py-4 "
                    >
                      <div className="flex justify-center items-center">
                        <img
                          src={tempResult?.template?.logo}
                          alt=""
                          className="h-[80px] w-[80px] object-cover rounded-full"
                        />
                      </div>

                      <div className="mt-44 flex items-center justify-center gap-4 px-4">
                        <a
                          href={`tel:+${tempResult?.template?.footer?.contact_no}`}
                          target="_blank"
                        >
                          <p className="font-bold hover:text-blue-600">
                            +{tempResult?.template?.footer?.contact_no}
                          </p>
                        </a>
                        <LIveTempFooter data={tempResult?.template?.footer} />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full mt-8">
                    <div id="qrCode" className="p-1">
                      <QRCode
                        value={`${CLIENT_URL}/temps/${tempResult?.template_link}`}
                        style={{ height: "150px", width: "150px" }}
                      />
                    </div>
                  </div>

                  <div className="mt-8">
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
                    <div className="flex justify-center items-center gap-4 mt-4">
                      <Button
                        onClick={printLatterHead}
                        size="sm"
                        className="rounded-sm shadow-none hover:shadow-none h-8  bg-purple-600 text-xs text-current text-white"
                      >
                        Download Latter Head
                      </Button>
                      <Button
                        onClick={downloadQRCode}
                        size="sm"
                        className="rounded-sm shadow-none hover:shadow-none h-8  bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
                      >
                        Download QRCode
                      </Button>
                      <Button
                        onClick={() => printBanner()}
                        size="sm"
                        className="rounded-sm shadow-none hover:shadow-none h-8  bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
                      >
                        Download Banner
                      </Button>
                      <Button
                        onClick={() => handleSourceCode()}
                        size="sm"
                        className="rounded-sm shadow-none hover:shadow-none h-8 text-white bg-blue-600 flex justify-center items-center gap-3"
                      >
                        {sourceLoading && (
                          <SpinnerCircularFixed
                            size={22}
                            thickness={150}
                            speed={450}
                            color="white"
                            secondaryColor="gray"
                          />
                        )}
                        Get Source Code
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="mt-32 hidden md:block">
              <div className="border rounded bg-gray-100 flex justify-center items-center h-[600px] w-[300px]  fixed right-10 ">
                <h1 className="font-semibold text-gray-600">AD Here</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TemplateMain;
