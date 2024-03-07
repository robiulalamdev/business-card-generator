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
          Email
        </label>
        <input
          {...register("footer.email", { required: false })}
          type="email"
          required={false}
          placeholder="Enter Email"
          className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
        />
      </div>
      <div className="">
        <label
          className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
          htmlFor=""
        >
          Website (optional)
        </label>
        <input
          {...register("footer.website", { required: false })}
          type="text"
          required={false}
          placeholder="Enter Website URL"
          className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
        />
      </div>
      <div className="">
        <label
          className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
          htmlFor=""
        >
          Address (optional)
        </label>
        <input
          {...register("footer.address", { required: false })}
          type="text"
          required={false}
          placeholder="Enter Address"
          className="w-full h-[42px] outline-none border border-black px-2 rounded text-sm"
        />
      </div>
    </div>
  );
};

export default FooterSocialInput;
