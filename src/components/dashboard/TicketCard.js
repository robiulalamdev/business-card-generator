import React from "react";
import logo from "../../assets/brand/logo.png";
import Image from "next/image";
import QRCode from "react-qr-code";
import { CLIENT_URL } from "@/lib/global";
import moment from "moment";
import Link from "next/link";
import { iTrash, iView } from "@/lib/icons/icons";
import { useRemoveTicketMutation } from "@/redux/features/ticket/ticketApi";
import { toast } from "sonner";

const TicketCard = ({ ticket }) => {
  const [removeTicket, { isLoading }] = useRemoveTicketMutation();

  const handleRemove = async () => {
    const options = {
      data: {},
      id: ticket?._id,
    };

    const result = await removeTicket(options);
    if (result?.data?.success) {
      toast.success("Ticket Remove Success!");
    } else {
      toast.error("Ticket Remove Failed!");
    }
  };
  return (
    <>
      <div className="border border-blue-gray-400 h-fit cursor-pointer ">
        <div className="bg-blue-gray-100 flex justify-center items-center w-full h-12">
          <Image
            src={logo}
            alt="logo"
            className="max-w-[70px] object-contain"
          />
        </div>
        <div className="w-full h-full bg-white">
          <div className="px-2 w-full h-full">
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
            <div className="border-t border-dashed my-2 border-blue-gray-600"></div>
            <div id="qrCode" className="p-1 bg-white  w-fit mx-auto mt-2">
              <QRCode
                value={`${CLIENT_URL}/templates/${ticket?._id}`}
                style={{ height: "70px", width: "70px" }}
              />
            </div>
          </div>
          <div className="flex items-end justify-between">
            <small className="text-[10px] text-blue-gray-900 pb-1 pl-2">
              {moment(ticket?.createdAt).format("MMM DD YYYY")}
            </small>
            <div className="grid grid-cols-2">
              <div
                onClick={() => handleRemove()}
                className="hover:text-red-600 w-5 h-5 hover:bg-red-50 bg-red-200 flex justify-center items-center"
              >
                {iTrash}
              </div>
              <Link href={`/templates/${ticket?._id}`} target="_blank">
                <div className="hover:text-orange-600 w-5 h-5 hover:bg-orange-50 bg-orange-200 flex justify-center items-center">
                  {iView}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
