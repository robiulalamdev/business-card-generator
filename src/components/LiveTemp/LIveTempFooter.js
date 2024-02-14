/* eslint-disable @next/next/no-img-element */
import React from "react";
import facebook from "../../assets/icons/social (1).png";
import instagram from "../../assets/icons/social (2).png";
import linkedin from "../../assets/icons/social (3).png";
import twitter from "../../assets/icons/social (4).png";
import Image from "next/image";

const LIveTempFooter = ({ data }) => {
  console.log(data);
  return (
    <div className="flex justify-center items-center gap-3 flex-wrap mt-4">
      {data?.facebook && (
        <a href={data?.facebook} target="_blank">
          <Image className="size-[40px]" src={facebook} alt="" />
        </a>
      )}
      {data?.instagram && (
        <a href={data?.instagram} target="_blank">
          <Image className="size-[40px]" src={instagram} alt="" />
        </a>
      )}
      {data?.linkedin && (
        <a href={data?.linkedin} target="_blank">
          <Image className="size-[40px]" src={linkedin} alt="" />
        </a>
      )}
      {data?.twitter && (
        <a href={data?.twitter} target="_blank">
          <Image className="size-[40px]" src={twitter} alt="" />
        </a>
      )}
    </div>
  );
};

export default LIveTempFooter;
