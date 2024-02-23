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
        <div className="rounded-t-md overflow-hidden max-h-[250px] border-b-2">
          <img
            src="https://t4.ftcdn.net/jpg/05/31/79/69/360_F_531796938_Gww8GsUSycc78QiaR5seCzl9RW1gr6vU.jpg"
            alt="image"
            className="object-cover w-full h-full min-h-[250px]"
          />
        </div>
        <div className="absolute -bottom-32 w-full flex justify-center items-center">
          <img
            src={liveTempData?.template?.logo}
            alt=""
            className="h-[160px] w-[160px] object-cover rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div className="mt-36">
        <h1 className="text-center font-extrabold font-inter text-black text-xl">
          {liveTempData?.template?.name}
        </h1>
        <p className="text-center text-sm font-semibold font-inter text-black">
          {liveTempData?.template?.designation}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 mt-8 ml-6 md:ml-16">
        <a
          href={`tel:+${liveTempData?.template?.phone}`}
          target="_blank"
          className="flex items-center gap-2 text-black font-semibold text-sm h-fit"
        >
          <div className="text-white bg-black w-[35px] h-[35px] rounded-full p-1 flex justify-center items-center">
            {iPhone}
          </div>
          <p>+{liveTempData?.template?.phone}</p>
        </a>

        <a
          href={`mailto:${liveTempData?.template?.email}`}
          target="_blank"
          className="flex items-center gap-2 text-black font-semibold text-sm h-fit"
        >
          <div className="text-white bg-black w-[35px] h-[35px] rounded-full p-1 flex justify-center items-center">
            {iMail}
          </div>
          <p>{liveTempData?.template?.email}</p>
        </a>

        <a
          href={liveTempData?.template?.website}
          target="_blank"
          className="flex items-center gap-2 text-black font-semibold text-sm h-fit"
        >
          <div className="text-white bg-black w-[35px] h-[35px] rounded-full p-1 flex justify-center items-center">
            {iWeb}
          </div>
          <p>{liveTempData?.template?.website}</p>
        </a>

        <p className="flex items-center gap-2 text-black font-semibold text-sm h-fit">
          <div className="text-white bg-black w-[35px] h-[35px] rounded-full p-1 flex justify-center items-center">
            {iLocation}
          </div>
          <p>{liveTempData?.template?.address}</p>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full mt-16">
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
