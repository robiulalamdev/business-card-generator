import { iMenu } from "@/lib/icons/icons";
import { IconButton } from "@material-tailwind/react";
import React from "react";

const Header = () => {
  return (
    <div className="h-[80px] w-full bg-primary shadow-sm shadow-gray-900">
      <div className="container h-full w-full  text-white flex justify-between items-center">
        <h1 className="text-white text-base font-semibold uppercase leading-[22px]">
          Business Card Generator
        </h1>
        <IconButton size="sm" className="bg-transparent">
          {iMenu}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
