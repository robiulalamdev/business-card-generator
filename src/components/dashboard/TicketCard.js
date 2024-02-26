import React from "react";
import logo from "../../assets/brand/logo.png";
import Image from "next/image";
import QRCode from "react-qr-code";
import { CLIENT_URL } from "@/lib/global";
import moment from "moment";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  return (
    <Link href={`/templates/${ticket?._id}`} target="_blank">
      <div className="border border-blue-gray-400 h-fit cursor-pointer">
        <div className="bg-blue-gray-100 flex justify-center items-center w-full h-12">
          <Image
            src={logo}
            alt="logo"
            className="max-w-[70px] object-contain"
          />
        </div>
        <div className="w-full h-full bg-white px-2 pb-1">
          <h1 className="text-center font-bold uppercase text-blue-gray-500 pt-2">
            Ticket Information
          </h1>
          <div className="flex items-center gap-2 text-xs text-blue-gray-600 mt-3">
            <p className="w-[25px] text-blue-gray-900">Email</p>
            <p>:</p>
            <p className="break-all">{ticket?.email}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-gray-600">
            <p className="w-[25px] text-blue-gray-900">Code</p>
            <p>:</p>
            <p className="break-all">{ticket?.code}</p>
          </div>
          <div className="border-t border-spacing-72 border-dashed my-2 border-blue-gray-600"></div>
          <div id="qrCode" className="p-1 bg-white w-fit mx-auto mt-2">
            <QRCode
              value={`${CLIENT_URL}/templates/${ticket?._id}`}
              style={{ height: "80px", width: "80px" }}
            />
          </div>
          <small className="text-[10px] text-blue-gray-900">
            {moment(ticket?.createdAt).format("MMM DD YYYY")}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default TicketCard;
