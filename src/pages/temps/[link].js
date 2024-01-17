/* eslint-disable @next/next/no-img-element */
import { useGetTemplateQuery } from "@/redux/features/template/templateApi";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import { ScaleLoader } from "react-spinners";

const TemplateDetails = () => {
  const { query } = useRouter();
  const { data, refetch, isLoading } = useGetTemplateQuery(query?.link);

  //   useEffect(() => {
  //     refetch();
  //   }, [query.id]);
  console.log(data);
  return (
    <div className="container h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <ScaleLoader color="#4A51D3" />
        </div>
      ) : (
        <div className="flex justify-center mt-8">
          <img src={data?.data?.template_img} alt="" />
        </div>
      )}
    </div>
  );
};

export default TemplateDetails;
