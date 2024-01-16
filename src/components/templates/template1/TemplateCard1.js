/* eslint-disable @next/next/no-img-element */
import { iCall, iEmail, iLocation, iUser } from "@/lib/icons/templateIcons";
import React from "react";
const img =
  "https://www.freeiconspng.com/thumbs/logo-design/3d-link-logo-brand-design-png-image-12.png";

const TemplateCard1 = ({ cardData }) => {
  // console.log(cardData);
  return (
    <div className="grid grid-cols-2 max-w-[386px] w-full min-h-[220px]">
      <div className="w-full h-full bg-blue-gray-50/35 flex items-center gap-1 px-1 border-t-2 border-l-2 border-b-2 border-green-600">
        <img
          className="size-[40px]"
          src={URL.createObjectURL(cardData?.logo) || img}
          alt=""
        />
        <h1 className="text-sm font-semibold text-black text-nowrap uppercase">
          {cardData?.company_name || "Company NAME"}
        </h1>
      </div>
      <div className="bg-[#020A1F] flex items-center">
        <div className="grid grid-cols-1 gap-y-[8px] relative -left-[13px]">
          <div className="flex items-start gap-2">
            <div className="text-white size-[25px] bg-green-600 flex justify-center items-center rounded-full">
              {iUser}
            </div>
            <div className="border-b-[3px] border-green-600 pb-1">
              <h1 className="text-white uppercase font-normal">
                {cardData?.author || "Kurt Willer"}
              </h1>
              <p className="text-xs text-gray-300 font-light">
                {cardData?.designation || "Executive CEO"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-white size-[25px] bg-green-600 flex justify-center items-center rounded-full">
              {iCall}
            </div>
            <div className="border-b-[3px] border-green-600 pb-1">
              <h1 className="text-white text-[12px] font-normal">
                {cardData?.phone_primary || "+ 000 111 222 555 555"}
              </h1>
              <p className="text-white text-[12px] font-normal">
                {cardData?.phone_secondary || "+ 777 333 222 555 555"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-white size-[25px] bg-green-600 flex justify-center items-center rounded-full">
              {iEmail}
            </div>
            <div className="border-b-[3px] border-green-600 pb-1">
              <h1 className="text-white text-[12px] font-normal">
                {cardData?.email_primary || "companyname@mail.com"}
              </h1>
              <p className="text-white text-[12px] font-normal">
                {cardData?.email_secondary || "companyname@mail.com"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-white size-[25px] bg-green-600 flex justify-center items-center rounded-full">
              {iLocation}
            </div>
            <div className="border-b-[3px] border-green-600 pb-1">
              <p className="text-white text-[12px] font-normal">
                {cardData?.address ||
                  "123 Main Street, City," + <br /> + "State"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard1;

/*

<div className="grid grid-cols-2 max-w-[386px] w-full min-h-[220px]">
      <div className="w-full h-full bg-blue-gray-50/35 flex items-center gap-1 px-1 border-t-2 border-l-2 border-b-2 border-green-600">
        <img className="size-[40px]" src={img} alt="" />
        <h1 className="text-sm font-semibold text-black text-nowrap uppercase">
          Company NAME
        </h1>
      </div>
      <div className="bg-[#020A1F] flex items-center">
        <div className="grid grid-cols-1 gap-y-[8px] relative -left-[13px]">
          <div className="flex items-start gap-2">
            <div className="text-white size-[25px] bg-green-600 flex justify-center items-center rounded-full">
              {iUser}
            </div>
            <div className="border-b-[3px] border-green-600 pb-1">
              <h1 className="text-white uppercase font-normal">Kurt Willer</h1>
              <p className="text-xs text-gray-300 font-light">Executive CEO </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-white size-[25px] bg-green-600 flex justify-center items-center rounded-full">
              {iCall}
            </div>
            <div className="border-b-[3px] border-green-600 pb-1">
              <h1 className="text-white text-[12px] font-normal">
                + 000 111 222 555 555
              </h1>
              <p className="text-white text-[12px] font-normal">
                + 777 333 222 555 555
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-white size-[25px] bg-green-600 flex justify-center items-center rounded-full">
              {iEmail}
            </div>
            <div className="border-b-[3px] border-green-600 pb-1">
              <h1 className="text-white text-[12px] font-normal">
                companyname@mail.com
              </h1>
              <p className="text-white text-[12px] font-normal">
                companyname@mail.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-white size-[25px] bg-green-600 flex justify-center items-center rounded-full">
              {iLocation}
            </div>
            <div className="border-b-[3px] border-green-600 pb-1">
              <p className="text-white text-[12px] font-normal">
                123 Main Street, City, <br /> State
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
*/
