/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import bg from "../../assets/images/digital-cards/default.jpg";
import facebook from "../../assets/icons/social (1).png";
import instagram from "../../assets/icons/social (2).png";
import linkedin from "../../assets/icons/social (3).png";
import twitter from "../../assets/icons/social (4).png";
import QRCode from "react-qr-code";
import { CLIENT_URL } from "@/lib/global";
import { useSelector } from "react-redux";

const Card2 = () => {
  const { liveTempData } = useSelector((state) => state.global);
  return (
    <div>
      <div className="min-h-screen w-full relative">
        <Image src={bg} alt="" className="w-full h-full min-h-screen" />
        <div className="absolute top-0 w-full h-full pb-4">
          <div className="w-full h-fit relative">
            <div className="px-10 rounded-[38px] !rounded-t-none overflow-hidden ">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png"
                alt=""
                className="rounded-[38px] !rounded-t-none h-44 w-full shadow "
              />
            </div>
            <div className="rounded-[38px] bg-[#C79A04] min-h-[250px] h-fit mx-10 mt-8 p-4">
              <h1 className="text-xl font-bold uppercase text-center pt-16 text-gray-800">
                {liveTempData?.template?.name}
              </h1>
              <p className="text-center font-semibold text-sm text-gray-800">
                {liveTempData?.template?.designation}
              </p>

              <p className="text-white text-sm text-justify mt-4">
                {liveTempData?.template?.confidential}
              </p>
            </div>
            <div className="absolute top-[110px] w-full flex justify-center items-center overflow-hidden">
              <img
                src={liveTempData?.template?.logo}
                alt=""
                className="h-[150px] w-[150px] object-cover rounded-full border-[7px] border-gray-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 px-10 mt-12">
            {liveTempData?.template?.facebook && (
              <a
                href={liveTempData?.template?.facebook}
                target="_blank"
                className="flex items-center gap-4 w-full h-14 bg-gray-900 text-white rounded-3xl px-3"
              >
                <Image className="size-[40px]" src={facebook} alt="" />
                <p className="text-white uppercase text-sm">facebook</p>
              </a>
            )}
            {liveTempData?.template?.instagram && (
              <a
                href={liveTempData?.template?.instagram}
                target="_blank"
                className="flex items-center gap-4 w-full h-14 bg-gray-900 text-white rounded-3xl px-3"
              >
                <Image className="size-[40px]" src={instagram} alt="" />
                <p className="text-white uppercase text-sm">instagram</p>
              </a>
            )}
            {liveTempData?.template?.linkedin && (
              <a
                href={liveTempData?.template?.linkedin}
                target="_blank"
                className="flex items-center gap-4 w-full h-14 bg-gray-900 text-white rounded-3xl px-3"
              >
                <Image className="size-[40px]" src={linkedin} alt="" />
                <p className="text-white uppercase text-sm">linkedin</p>
              </a>
            )}
            {liveTempData?.template?.twitter && (
              <a
                href={liveTempData?.template?.twitter}
                target="_blank"
                className="flex items-center gap-4 w-full h-14 bg-gray-900 text-white rounded-3xl px-3"
              >
                <Image className="size-[40px]" src={twitter} alt="" />
                <p className="text-white uppercase text-sm">twitter</p>
              </a>
            )}

            <div className="flex flex-col justify-center items-center w-full mt-8">
              <h1 className="text-center font-semibold text-orange-600">
                Scan Me
              </h1>
              <div id="qrCode" className="p-1 bg-white">
                <QRCode
                  value={`${CLIENT_URL}/temps/${liveTempData?.template_link}`}
                  style={{ height: "150px", width: "150px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
