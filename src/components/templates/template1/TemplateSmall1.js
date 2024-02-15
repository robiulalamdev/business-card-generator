/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { CLIENT_URL } from "@/lib/global";
import { iLocation, iMail, iPhone, iWeb } from "@/lib/icons/icons";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const TemplateSmall1 = () => {
  const { liveTempData } = useSelector((state) => state.global);

  return (
    <div id="print" className="p-1">
      <div className="bg-black h-fit pb-4 rounded-md">
        <div className="relative h-[200px]">
          <div className="absolute top-2 left-2 bg-white p-3">
            <img
              className="max-w-[150px] object-contain"
              src={liveTempData?.template?.signature}
            />
          </div>

          <div className="rounded-t-md overflow-hidden max-h-[180px]">
            <img
              src="https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image"
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-7 w-full flex justify-center items-center">
            <img
              src={liveTempData?.template?.logo}
              alt=""
              className="h-[100px] w-[100px] object-cover rounded-full border-2 border-white"
            />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-center font-extrabold font-inter text-white">
            {liveTempData?.template?.name}
          </h1>
          <p className="text-center text-sm font-semibold font-inter text-orange-600">
            {liveTempData?.template?.designation}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 mt-8 ml-6 md:ml-20">
          <a
            href={`tel:+${liveTempData?.template?.phone}`}
            target="_blank"
            className="flex items-center gap-2 text-white h-fit"
          >
            <div className="text-orange-600">{iPhone}</div>
            <p>+{liveTempData?.template?.phone}</p>
          </a>

          <a
            href={`mailto:${liveTempData?.template?.email}`}
            target="_blank"
            className="flex items-center gap-2 text-white h-fit"
          >
            <div className="text-orange-600">{iMail}</div>
            <p>{liveTempData?.template?.email}</p>
          </a>

          <a
            href={liveTempData?.template?.website}
            target="_blank"
            className="flex items-center gap-2 text-white h-fit"
          >
            <div className="text-orange-600">{iWeb}</div>
            <p>{liveTempData?.template?.website}</p>
          </a>

          <p className="flex items-center gap-2 text-white h-fit">
            <div className="text-orange-600">{iLocation}</div>
            <p>{liveTempData?.template?.address}</p>
          </p>
        </div>
        <div className="mt-8 flex justify-center items-center gap-2">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.facebook.com/fixwebsiteerrors"
            target="_blank"
          >
            <img src="https://i.imgur.com/YozPtoW.png" height="25" width="25" />
          </a>
          &nbsp;
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.instagram.com/fixwebsiteissue/"
            target="_blank"
          >
            <img src="https://i.imgur.com/JcFgrq2.png" height="25" width="25" />
          </a>
          &nbsp;
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.pinterest.com/fixwebsiteissue/"
            target="_blank"
          >
            <img src="https://i.imgur.com/gGTZtSH.png" height="25" width="25" />
          </a>
        </div>
        <div className="mt-8 overflow-hidden">
          <p
            style={{
              margin: "0",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "normal",
              fontSize: "12px",
              textAlign: "center",
              color: "#ffffff",
              backgroundColor: "#db6b27",
              padding: "5px",
            }}
          >
            {liveTempData?.template?.title}
          </p>
        </div>

        <div className="mt-3 px-4">
          <p
            style={{
              margin: "0",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "normal",
              fontSize: "9px",
              lineHeight: "13px",
            }}
            className="text-gray-400"
          >
            <strong style={{ color: "orange" }}> Confidential: </strong>{" "}
            {liveTempData?.template?.confidential}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-8">
          <h1 className="text-center font-semibold text-orange-600">Scan Me</h1>
          <div id="qrCode" className="p-1 bg-white">
            <QRCode
              value={`${CLIENT_URL}/temps/${liveTempData?.template_link}`}
              style={{ height: "150px", width: "150px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSmall1;
