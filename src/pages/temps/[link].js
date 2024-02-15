/* eslint-disable @next/next/no-img-element */
import LIveTempFooter from "@/components/LiveTemp/LIveTempFooter";
import LiveBanner from "@/components/LiveTemp/LiveBanner";
import LiveTempHeader from "@/components/LiveTemp/LiveTempHeader";
import LiveTempLogo from "@/components/LiveTemp/LiveTempLogo";
import LiveTempPhoneDesign from "@/components/LiveTemp/LiveTempPhoneDesign";
import { CLIENT_URL } from "@/lib/global";
import { iDown } from "@/lib/icons/icons";
import { useGetTemplateQuery } from "@/redux/features/template/templateApi";
import { Button } from "@material-tailwind/react";
import html2canvas from "html2canvas";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import QRCode from "react-qr-code";
import { ScaleLoader } from "react-spinners";

const TemplateDetails = () => {
  const { query } = useRouter();
  const { data, refetch, isLoading } = useGetTemplateQuery(query?.link);

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
    <div className="container h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <ScaleLoader color="#4A51D3" />
        </div>
      ) : (
        <div className="w-full h-full">
          <LiveTempHeader data={data?.data} />
          <LiveTempLogo logo={data?.data?.template?.logo} />
          <LiveTempPhoneDesign data={data?.data} />
          <LiveBanner banner={data?.data?.template?.banner} />
          <LIveTempFooter data={data?.data?.template?.footer} />

          <div className="grid md:grid-cols-4 items-start mt-5 pb-5">
            <div></div>
            <div className="border border-black p-4 col-span-2 w-full relative">
              <div className="flex justify-center items-center w-full">
                <div id="qrCode" className="p-1">
                  <QRCode
                    value={`${CLIENT_URL}/temps/${data?.data?.template_link}`}
                    style={{ height: "150px", width: "150px" }}
                  />
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-fit h-fit flex justify-center items-center">
                <Button
                  onClick={() => downloadQRCode()}
                  className="rounded-sm shadow-none hover:shadow-none h-8 bg-primary p-0 w-14 flex justify-center items-center text-xs text-current text-white"
                >
                  {iDown}
                </Button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateDetails;
