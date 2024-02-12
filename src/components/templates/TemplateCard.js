/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TemplateCard = ({ template }) => {
  return (
    // <Link href={`/templates/${template?._id}`}>
    <div className="w-full h-full group hover:-translate-y-5 duration-300 cursor-pointer hover:border hover:border-primary">
      <Image className="w-full border" src={template.img} alt="" />
    </div>
    // </Link>
  );
};

export default TemplateCard;
