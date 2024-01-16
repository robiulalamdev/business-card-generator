/* eslint-disable @next/next/no-img-element */
import { Button } from "@material-tailwind/react";
import React from "react";
import img from "../../assets/images/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-gradient-to-t from-primary to-[#3FBCE7]">
      <div className="container w-full min-h-[500px] grid md:grid-cols-2 gap-8 items-center">
        <Image
          className="max-w-[600px] object-contain w-full h-full"
          src={img}
          alt=""
        />
        <div>
          <h1 className="text-4xl font-semibold font-inter text-white leading-[42px]">
            Free business card creator to make an impression
          </h1>
          <p className="text-white font-light text-2xl mt-8">
            Make a personalized business card with 9,650+ professional templates
            that fit any need.
          </p>
          <Link href="/templates">
            <Button
              className="rounded shadow-none hover:shadow-none h-12 mt-8 text-white bg-gradient-to-r from-yellow-700 to-pink-500
          hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-700 transition-all ease-in duration-500"
            >
              Create your own business card
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
