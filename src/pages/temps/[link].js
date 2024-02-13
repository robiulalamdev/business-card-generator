/* eslint-disable @next/next/no-img-element */
import LIveTempFooter from "@/components/LiveTemp/LIveTempFooter";
import LiveTempHeader from "@/components/LiveTemp/LiveTempHeader";
import LiveTempPhoneDesign from "@/components/LiveTemp/LiveTempPhoneDesign";
import { CLIENT_URL } from "@/lib/global";
import { useGetTemplateQuery } from "@/redux/features/template/templateApi";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import QRCode from "react-qr-code";
import { ScaleLoader } from "react-spinners";

const TemplateDetails = () => {
  const { query } = useRouter();
  const { data, refetch, isLoading } = useGetTemplateQuery(query?.link);

  //   useEffect(() => {
  //     refetch();
  //   }, [query.id]);
  // console.log(data);
  return (
    <div className="container h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <ScaleLoader color="#4A51D3" />
        </div>
      ) : (
        <div className="w-full h-full">
          <LiveTempHeader data={data?.data} />
          <div className="flex justify-center items-center mt-16">
            {data?.data?.template?.logo ? (
              <div className="flex justify-center items-center">
                <img
                  src={data?.data?.template?.logo}
                  alt=""
                  className="max-w-[200px] object-contain"
                />
              </div>
            ) : (
              <div className="border bg-gray-100 w-full max-w-[400px] h-[200px] flex justify-center items-center">
                <h1 className="text-sm font-semibold text-gray-600">
                  Logo Here
                </h1>
              </div>
            )}
          </div>
          <LiveTempPhoneDesign data={data?.data} />
          <div className="flex justify-center items-center w-full mt-5">
            <QRCode
              value={`${CLIENT_URL}/temps/${data?.data?.template_link}`}
              style={{ height: "150px", width: "150px" }}
            />
          </div>
          <div className="flex justify-center items-center mt-16">
            {data?.data?.template?.banner ? (
              <div className="flex justify-center items-center">
                <img
                  src={data?.data?.template?.banner}
                  alt=""
                  className="max-w-[800px] max-h-[300px] object-contain"
                />
              </div>
            ) : (
              <div className="border bg-gray-100 w-full max-w-[800px] max-h-[300px] flex justify-center items-center">
                <h1 className="text-sm font-semibold text-gray-600">
                  Banner Here
                </h1>
              </div>
            )}
          </div>
          <LIveTempFooter data={data?.data} />
        </div>
      )}
    </div>
  );
};

export default TemplateDetails;
