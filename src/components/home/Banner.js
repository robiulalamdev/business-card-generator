/* eslint-disable @next/next/no-img-element */
import { Button } from "@material-tailwind/react";
import React from "react";
import img from "../../assets/images/banner.png";
import Image from "next/image";
import Link from "next/link";

import img1 from "../../assets/images/home/img1.png";
import img2 from "../../assets/images/home/img2.png";

const Banner = () => {
  return (
    // <>
    //   <div
    //     className="w-full bg-[#475DF1] "
    //     // style={{
    //     //   backgroundImage: `url(${bg.src})`,
    //     //   backgroundRepeat: "no-repeat",
    //     //   backgroundPosition: "center",
    //     // }}
    //   >
    //     <div className="container w-full min-h-[500px] flex flex-col md:flex-row md:justify-around gap-8 items-center pb-8 md:pb-0">
    //       <img
    //         className="max-w-[450px] w-full h-full object-contain rounded-[12px]"
    //         src={img1.src}
    //         alt=""
    //       />
    //       <img
    //         className="max-w-[420px] object-contain rounded-[12px]"
    //         src={img2.src}
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </>
    <div className="bg-[#475DF1]">
      <div className="container w-full min-h-[400px] grid md:grid-cols-2 gap-8 items-center pb-4 md:pb-0">
        <Image
          className="max-w-[500px] object-contain w-full h-full"
          src={img}
          alt=""
        />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-[35px] font-semibold font-open-sans text-white leading-[32px] md:leading-[42px] text-center md:text-left">
            DISCOVER THE WORLD OF BUSINESS BRANDING SERVICES
          </h1>
          <p className="text-white font-light text-base md:text-xl lg:text-2xl mt-4 md:mt-8 text-center md:text-left">
            Make a personalized business card with 9,650+ professional templates
            that fit any need.
          </p>

          <Button
            className="rounded shadow-none hover:shadow-none h-12 mt-8 text-white bg-gradient-to-r from-yellow-700 to-pink-500
          hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-700 transition-all ease-in duration-500"
          >
            Create your own business card
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
