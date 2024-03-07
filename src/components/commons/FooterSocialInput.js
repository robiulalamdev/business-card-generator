import useInputPattern from "@/lib/hooks/useInputPattern";
import React from "react";

const FooterSocialInput = ({ register, setValue, watch, errors }) => {
  const { handleNumber } = useInputPattern();
  return (
    <div className="grid grid-cols-1 gap-2 col-span-2">
      <div className="">
        <label
          className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
          htmlFor=""
        >
          Contact No
        </label>
        <input
          {...register("footer.contact_no", { required: false })}
          type="text"
          onInput={handleNumber}
          required={false}
          placeholder="Enter Contact No"
          className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
        />
      </div>
      <div className="">
        <label
          className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
          htmlFor=""
        >
          Facebook
        </label>
        <input
          {...register("footer.facebook", { required: false })}
          type="text"
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
          type="text"
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
          type="text"
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
          type="text"
          required={false}
          placeholder="Enter URL"
          className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
        />
      </div>
    </div>
  );
};

export default FooterSocialInput;
