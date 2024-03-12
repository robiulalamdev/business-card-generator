/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "../../../assets/icons/custom-template/logo.png";
import phone from "../../../assets/icons/custom-template/phone.png";
import email from "../../../assets/icons/custom-template/email.png";
import website from "../../../assets/icons/custom-template/website.png";
import address from "../../../assets/icons/custom-template/address.png";

import fb from "../../../assets/icons/custom-template/facebook.png";
import ins from "../../../assets/icons/custom-template/instagram.png";
import pint from "../../../assets/icons/custom-template/pinterest.png";
import { useSelector } from "react-redux";

const JSXTemplate5 = () => {
  const { tempResult } = useSelector((state) => state.global);
  return (
    <div className="w-fit px-[10px] py-[10px] max-w-[515px] min-h-[250px]">
      <div className="flex items-center mt-[10px]">
        <div className="h-full pr-2 min-w-[140px] max-w-[140px] max-h-[100px] overflow-hidden">
          <h1 className="font-bold font-montserrat text-[#db6b27] break-words">
            {tempResult?.template?.name}
          </h1>
          <p className="text-[#000000] font-montserrat text-[13px] pt-[1px] m-0 break-words">
            CEO
          </p>
        </div>
        <div className="w-full h-full pl-4 border-l-[2px] border-[#d3d1d3]">
          <div className="flex items-center gap-2">
            <img
              src={phone.src}
              alt=""
              width="12"
              height="12"
              className="object-contain"
            />
            <a
              href={`tel:${tempResult?.template?.phone}`}
              target="_blank"
              className="text-[#000000] font-montserrat text-[13px]"
            >
              {tempResult?.template?.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={email.src}
              alt=""
              width="12"
              height="12"
              className="object-contain"
            />
            <a
              href={`mailto:${tempResult?.template?.email}`}
              target="_blank"
              className="text-[#000000] font-montserrat text-[13px]"
            >
              {tempResult?.template?.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={website.src}
              alt=""
              width="12"
              height="12"
              className="object-contain"
            />
            <a
              href={`${tempResult?.template?.website}`}
              target="_blank"
              className="text-[#000000] font-montserrat text-[13px]"
            >
              {tempResult?.template?.website}
            </a>
          </div>
          <div className="flex items-start gap-2">
            <img
              src={address.src}
              alt=""
              width="12"
              height="12"
              className="object-contain mt-[4px]"
            />
            <p className="text-[#000000] font-montserrat !text-[13px] break-words">
              {tempResult?.template?.address}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-[5px]">
            <a href={`${tempResult?.template?.facebook}`} target="_blank">
              <img
                src={fb.src}
                alt=""
                height="20"
                width="20"
                className="object-contain min-w-[20px]"
              />
            </a>
            <a href={`${tempResult?.template?.instagram}`} target="_blank">
              <img
                src={ins.src}
                alt=""
                height="20"
                width="20"
                className="object-contain min-w-[20px]"
              />
            </a>
            <a href={`${tempResult?.template?.pinterest}`} target="_blank">
              <img
                src={pint.src}
                alt=""
                height="20"
                width="20"
                className="object-contain min-w-[20px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[7px]">
        <p className="m-0 font-montserrat font-normal text-center text-[12px] text-white bg-[#db6b27] p-[5px] break-words">
          {tempResult?.template?.company_vision}
        </p>
      </div>
      <div
        className="mt-[7px]"
        style={{
          fontFamily: "Arial, Helvetica Neue ,Sans-serif",
        }}
      >
        <p className="text-[11px] font-normal text-justify text-[#3c3b3b] font-montserrat break-words">
          <strong className="text-[#636363] font-bold">Confidential: </strong>{" "}
          {tempResult?.template?.confidential}
        </p>
      </div>
    </div>
  );
};

export default JSXTemplate5;
