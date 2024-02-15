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
          <LiveTempPhoneDesign data={data?.data} />
        </div>
      )}
    </div>
  );
};

export default TemplateDetails;
