/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { templates } from "@/lib/datas/templates";
import { CLIENT_URL } from "@/lib/global";
import {
  setLiveTempData,
  setSelectedTmp,
  setTempResult,
} from "@/redux/features/globals/globalsSlice";
import {
  useCreateTemplateMutation,
  useSendSourceCodeMutation,
  useUpdateTempByIdMutation,
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
import { dcards } from "@/lib/datas/digital-cards";
import Image from "next/image";
import TemplateSidebar from "./TemplateSidebar";
import { useReactToPrint } from "react-to-print";
import LetterHead from "../template_preview/LetterHead";

const TemplateMain = () => {
  const [sendSourceCode, { isLoading: sourceLoading }] =
    useSendSourceCodeMutation();
  const [updateTempById, { isLoading: updateLoading }] =
    useUpdateTempByIdMutation();
  const {
    selectedTmp,
    generateStep,
    templateData,
    html,
    tempResult,
    ticket,
    templateTab,
  } = useSelector((state) => state.global);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
    var iframe = document.getElementById("print");
    html2canvas(iframe.contentDocument.body).then(async function (canvas) {
      var dataURL = canvas.toDataURL();
      const options = {
        data: { email: ticket?.email, html: html, temp_img: dataURL },
      };
      const result = await sendSourceCode(options);
      if (result?.data?.success) {
        toast.success("Source Code send to email");
      } else {
        toast.error("Something went wrong!");
      }
    });
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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

  const handleChooseDcard = async (id) => {
    let { dcard_id, ...other } = tempResult;
    const options = {
      data: { dcard_id: id },
      id: tempResult?._id,
    };
    const result = await updateTempById(options);
    if (result?.data?.success) {
      dispatch(setTempResult({ ...other, dcard_id: id }));
      toast.success("Digital Card Choose Success");
    } else {
      toast.error("Digital Card Choose Failed");
    }
  };

  // console.log(tempResult);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <ScaleLoader color="#4A51D3" />
        </div>
      ) : (
        <div className="flex justify-between w-full bg-purple-50/65">
          {generateStep === 2 && <TemplateSidebar />}

          <div className="w-full flex-grow h-screen overflow-y-auto">
            <div className="bg-white my-4 w-fit mx-auto">
              {selectedTmp && generateStep === 1 && (
                <>{selectedTmp?.tmp_form}</>
              )}
            </div>
            {selectedTmp && generateStep === 2 && (
              <div className="flex flex-col justify-center items-center h-screen">
                {templateTab === 0 && (
                  <div className="flex flex-col items-end gap-4">
                    <div ref={componentRef} className="bg-white">
                      {selectedTmp?.template}
                    </div>
                    <Button
                      onClick={() => handlePrint()}
                      size="sm"
                      className="rounded-sm shadow-none hover:shadow-none h-8 bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
                    >
                      Download
                    </Button>
                  </div>
                )}
                {templateTab === 1 && (
                  <div className="flex flex-col items-end gap-4 ">
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
                    <Button
                      onClick={() => printBanner()}
                      size="sm"
                      className="rounded-sm shadow-none hover:shadow-none h-8 bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
                    >
                      Download
                    </Button>
                  </div>
                )}

                {templateTab === 2 && <LetterHead data={tempResult} />}

                {templateTab === 3 && (
                  <>
                    <div className="opacity-0 absolute z-10">
                      <iframe
                        id="print"
                        style={{
                          height: "400px",
                          width: "600px",
                          margin: "0 auto",
                        }}
                        srcDoc={html}
                      ></iframe>
                    </div>
                    <div className="bg-white p-5 w-full max-w-[800px] rounded z-50">
                      <h1 className="text-left font-bold mb-2 text-black">
                        Choose Digital Card
                      </h1>
                      <div className="w-full h-fit grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {dcards.map((dCard, index) => (
                          <div
                            onClick={() => handleChooseDcard(dCard?._id)}
                            key={index}
                            className={`flex items-center justify-center  h-[150px] cursor-pointer ${
                              tempResult?.dcard_id === dCard?._id
                                ? "border-2 border-blue-600 shadow-md shadow-gray-500"
                                : "border-2 hover:border-2 hover:border-blue-600 hover:shadow-md shadow-gray-500 duration-150"
                            }`}
                          >
                            <Image
                              src={dCard?.thumbnail}
                              className="w-full object-contain h-full"
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col items-center gap-4 mt-8">
                        <div id="qrCode" className="p-1">
                          <QRCode
                            value={`${CLIENT_URL}/temps/${tempResult?.template_link}`}
                            style={{ height: "150px", width: "150px" }}
                          />
                        </div>
                        <Button
                          onClick={() => downloadQRCode()}
                          size="sm"
                          className="rounded-sm shadow-none hover:shadow-none h-8 bg-gradient-to-r from-blue-700 to-primary
                  hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 transition-all ease-in duration-500 text-xs text-current text-white"
                        >
                          Download
                        </Button>
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
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TemplateMain;
