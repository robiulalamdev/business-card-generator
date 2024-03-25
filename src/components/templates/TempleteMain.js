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
import { Button, Dialog, Drawer } from "@material-tailwind/react";
import html2canvas from "html2canvas";
import React, { useContext, useState } from "react";
import QRCode from "react-qr-code";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { toast } from "sonner";
import { SpinnerCircularFixed } from "spinners-react";
import { dcards } from "@/lib/datas/digital-cards";
import Image from "next/image";
import TemplateSidebar from "./TemplateSidebar";
import LetterHead from "../template_preview/LetterHead";
import TemplateReview from "../template_preview/TemplateReview";
import BannerReview from "../template_preview/BannerReview";
import { AuthContext } from "../context/AuthContext";
import Link from "next/link";
import { iClose, iMenu } from "@/lib/icons/icons";

const TemplateMain = () => {
  const { user, logout } = useContext(AuthContext);
  const [sendSourceCode, { isLoading: sourceLoading }] =
    useSendSourceCodeMutation();
  const [updateTempById, { isLoading: updateLoading }] =
    useUpdateTempByIdMutation();
  const { selectedTmp, generateStep, html, tempResult, ticket, templateTab } =
    useSelector((state) => state.global);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
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
        setOpen(true);
      } else {
        toast.error("Something went wrong!");
      }
    });
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
        <div className="flex justify-between w-full bg-gradient-to-br from-[#5bc6fc] to-BPM">
          {generateStep === 2 && (
            <>
              <div className="hidden lg:block">
                <TemplateSidebar />
              </div>
              <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                className="bg-white"
              >
                <div className="relative">
                  <div
                    onClick={() => setOpenDrawer(!openDrawer)}
                    className="text-primary p-1 hover:bg-primary/10 rounded cursor-pointer w-fit absolute top-2 right-2"
                  >
                    {iClose}
                  </div>
                  <TemplateSidebar />
                </div>
              </Drawer>
            </>
          )}

          <div className="w-full flex-grow h-screen flex flex-col justify-between max-w-[1400px] mx-auto px-[8px]">
            <div className="flex justify-between h-[80px] items-center w-full">
              <div
                onClick={() => setOpenDrawer(!openDrawer)}
                className="lg:hidden text-white p-1 hover:bg-black rounded cursor-pointer"
              >
                {iMenu}
              </div>
              <div className="hidden lg:block"></div>
              {user && user?._id && (
                <Link href="/dashboard">
                  <button
                    className={`w-[120px] md:w-[200px] h-8 md:h-9 flex items-center justify-center px-2  rounded bg-gray-50 hover:bg-gray-200`}
                  >
                    <span className="text-primary text-[12px] leading-[22px font-semibold font-open-sans">
                      Dashboard
                    </span>
                  </button>
                </Link>
              )}
            </div>
            <div className="overflow-y-auto w-full h-full flex-grow max-h-full">
              {selectedTmp && generateStep === 1 && (
                <div className="flex justify-center items-center w-full h-full mt-[350px] md:mt-0">
                  <>{selectedTmp?.tmp_form}</>
                </div>
              )}
              {selectedTmp && generateStep === 2 && (
                <div className="flex flex-col justify-center items-center h-screen">
                  {templateTab === 0 && <TemplateReview />}
                  {templateTab === 1 && <BannerReview />}

                  {templateTab === 2 && <LetterHead data={tempResult} />}

                  {templateTab === 3 && (
                    <>
                      <div className="bg-white p-5 w-full max-w-[800px] rounded z-50 mt-[200px] md:mt-0">
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
        </div>
      )}

      <Dialog
        open={open}
        handler={() => setOpen(false)}
        size="xs"
        className="p-0"
      >
        <div className="w-full h-full min-h-[200px] max-h-[400px] overflow-y-auto bg-white p-2 md:p-5 rounded">
          <h1 className="text-center font-bold font-open-sans text-primary leading-5 text-base">
            Important Instructions and Resources for Email Signature and
            Branding Materials
          </h1>

          <p
            className="font-open-sans text-sm mt-3"
            style={{ color: "rgb(13, 13, 13)" }}
          >
            You are all set now. Check your email for instructions on how to use
            the email signature. We have also attached the letterhead in A4 size
            and the social media cover image in JPG format for you to download.
            If you need custom-made designs, please contact us at
            info@logoinhours.com. Additionally, if you require a website, any
            mobile apps, or applications, feel free to reach out to us. We also
            specialize in fixing{" "}
            <a
              href="https://www.fixwebsiteissues.com/"
              target="_blank"
              className="font-bold text-primary"
            >
              <i>website errors</i>
            </a>{" "}
            and optimizing SEO for websites and Google Maps, ensuring 100%
            satisfaction. For any further branding or{" "}
            <a
              href="https://anygraphicstoday.com/"
              target="_blank"
              className="font-bold text-primary"
            >
              <i>graphic design</i>
            </a>{" "}
            needs, visit our website at Any Graphics Today or{" "}
            <a
              href="https://www.logoinhours.com/"
              target="_blank"
              className="font-bold text-primary"
            >
              <i>Logo In Hours LLC</i>
            </a>{" "}
          </p>
          <div className="flex justify-end">
            <Button
              onClick={() => setOpen(false)}
              className="w-[70px] h-8 rounded bg-primary text-white font-open-sans p-0 shadow-none hover:shadow-none normal-case font-normal"
            >
              OK
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default TemplateMain;
