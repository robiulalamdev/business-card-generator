/* eslint-disable @next/next/no-img-element */
import React from "react";
import QRCode from "react-qr-code";
import { CLIENT_URL } from "@/lib/global";
import { useSelector } from "react-redux";
import { iLocation, iMail, iPhone, iWeb } from "@/lib/icons/icons";

const Card2 = () => {
  const { liveTempData } = useSelector((state) => state.global);
  return (
    <div className="bg-white h-full pb-4 border-4 ">
      <div className="relative h-[200px]">
        <div className="rounded-t-md overflow-hidden max-h-[180px] border-b-2">
          <img
            src={liveTempData?.template?.banner}
            alt="image"
            className="object-cover w-full h-full min-h-[180px]"
          />
        </div>
        <div className="absolute -bottom-10 w-full flex justify-center items-center">
          <img
            src={liveTempData?.template?.logo}
            alt=""
            className="h-[120px] w-[120px] object-cover rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div className="mt-14">
        <h1 className="text-center font-extrabold font-inter text-black">
          {liveTempData?.template?.name}
        </h1>
        <p className="text-center text-sm font-semibold font-inter text-black">
          {liveTempData?.template?.designation}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 mt-8 ml-6 md:ml-20">
        <a
          href={`tel:+${liveTempData?.template?.phone}`}
          target="_blank"
          className="flex items-center gap-2 text-black font-semibold text-sm h-fit"
        >
          <div className="text-black">{iPhone}</div>
          <p>+{liveTempData?.template?.phone}</p>
        </a>

        <a
          href={`mailto:${liveTempData?.template?.email}`}
          target="_blank"
          className="flex items-center gap-2 text-black font-semibold text-sm h-fit"
        >
          <div className="text-black">{iMail}</div>
          <p>{liveTempData?.template?.email}</p>
        </a>

        <a
          href={liveTempData?.template?.website}
          target="_blank"
          className="flex items-center gap-2 text-black font-semibold text-sm h-fit"
        >
          <div className="text-black">{iWeb}</div>
          <p>{liveTempData?.template?.website}</p>
        </a>

        <p className="flex items-center gap-2 text-black font-semibold text-sm h-fit">
          <div className="text-black">{iLocation}</div>
          <p>{liveTempData?.template?.address}</p>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full mt-8">
        <h1 className="text-center font-semibold text-black">Scan Me</h1>
        <div id="qrCode" className="p-1 bg-white">
          <QRCode
            value={`${CLIENT_URL}/temps/${liveTempData?.template_link}`}
            style={{ height: "150px", width: "150px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card2;
