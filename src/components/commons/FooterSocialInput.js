import React from "react";

const FooterSocialInput = ({ register, setValue, watch, errors }) => {
  return (
    <div className="grid grid-cols-1 gap-2 col-span-2">
      <div className="">
        <label
          className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
          htmlFor=""
        >
          Facebook
        </label>
        <input
          {...register("footer.facebook", { required: false })}
          type="url"
          required={false}
          placeholder="Enter URL"
          className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
        />
      </div>
      <div className="">
        <label
          className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
          htmlFor=""
        >
          Twitter
        </label>
        <input
          {...register("footer.twitter", { required: false })}
          type="url"
          required={false}
          placeholder="Enter URL"
          className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
        />
      </div>
      <div className="">
        <label
          className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
          htmlFor=""
        >
          Linkedin
        </label>
        <input
          {...register("footer.linkedin", { required: false })}
          type="url"
          required={false}
          placeholder="Enter URL"
          className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
        />
      </div>
      <div className="">
        <label
          className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
          htmlFor=""
        >
          Instagram
        </label>
        <input
          {...register("footer.instagram", { required: false })}
          type="url"
          required={false}
          placeholder="Enter URL"
          className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
        />
      </div>
    </div>
  );
};

export default FooterSocialInput;
