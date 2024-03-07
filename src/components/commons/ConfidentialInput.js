import { iCheck, iTick } from "@/lib/icons/icons";
import React, { useEffect, useState } from "react";
const items = [
  "Intended for the recipient(s) only. if received in error, notify the sender, and delete immediately. Views expressed are the author's; the company is not liable for email viruses, security, or content errors. Verify with hard copy if necessary.",
  "Intended for the recipient(s) only; if received in error, notify the sender, and delete immediately. Views expressed are the author's; the company is not liable for email viruses, security, or content errors. Verify with hard copy if necessary.",
];

const ConfidentialInput = ({ register, watch, setValue }) => {
  const [open, setOpen] = useState(false);
  const value = watch("confidential");

  const handleText = () => {
    if (!open) {
      setOpen(true);
      setValue("confidential", "");
    }
  };

  useEffect(() => {
    if (items[0] !== value && items[1] !== value) {
      setOpen(true);
    } else if (items[0] === value || items[1] === value) {
      setOpen(false);
    }
  }, [value]);
  return (
    <div className="col-span-2">
      <label
        className="text-xs sm:text-sm font-semibold uppercase leading-[26px] block"
        htmlFor=""
      >
        Confidential
      </label>
      <div className="grid grid-cols-1 gap-2">
        {items.map((item, index) => (
          <div
            onClick={() => {
              setValue("confidential", item);
              setOpen(false);
            }}
            key={index}
            className={`flex items-center max-w-full h-fit rounded-md shadow cursor-pointer ${
              value === item ? "bg-primary text-white" : ""
            }`}
          >
            <div
              className={`min-w-[50px] max-w-[50px] flex justify-center items-center min-h-12`}
            >
              {value === item ? iTick : iCheck}
            </div>
            <p className="flex-grow text-xs p-1">{item}</p>
          </div>
        ))}
        <div
          onClick={() => handleText()}
          className={`flex items-center max-w-full h-fit rounded-md shadow cursor-pointer ${
            open ? "bg-primary text-white" : ""
          }`}
        >
          <div
            className={`min-w-[50px] max-w-[50px] flex justify-center items-center min-h-12`}
          >
            {open ? iTick : iCheck}
          </div>
          <p className="flex-grow text-xs p-1">Custom</p>
        </div>
      </div>
      <div className="mt-2">
        <textarea
          {...register("confidential", { required: true })}
          required
          placeholder="Enter Confidential"
          className={`w-full h-[150px] outline-none border border-black p-2 rounded text-sm ${
            open ? "block" : "hidden"
          }`}
        ></textarea>
      </div>
    </div>
  );
};

export default ConfidentialInput;
