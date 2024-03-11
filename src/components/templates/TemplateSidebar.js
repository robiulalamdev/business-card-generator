import { setTemplateTab } from "@/redux/features/globals/globalsSlice";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import Link from "next/link";

const tabs = ["Review Template", "Banner", "Letter Head", "Digital Cards"];

const TemplateSidebar = () => {
  const { user, logout, logOutTicket } = useContext(AuthContext);
  const { templateTab } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  return (
    <div className="bg-white max-w-[300px] min-w-[240px] flex flex-col justify-between w-full h-screen pb-8 shadow border-r border-primary">
      <div>
        <h1 className="mt-32 mx-6 font-bold text-xl text-black border-b font-open-sans">
          Information
        </h1>
        <div className="px-8 grid grid-cols-1 gap-2 mt-4">
          {tabs.map((tab, index) => (
            <button
              onClick={() => dispatch(setTemplateTab(index))}
              key={index}
              className={`w-full h-10 font-normal normal-case font-open-sans flex items-center justify-start px-2 rounded ${
                templateTab === index
                  ? "bg-primary !text-white"
                  : "hover:!bg-primary/50"
              }`}
            >
              <span className="text-[12px] font-semibold">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {user && user?._id && (
        <div className="mx-6 mt-[50px]">
          <button
            onClick={() => logOutTicket()}
            className={`w-full h-10 flex items-center justify-center px-2  rounded bg-red-600 hover:bg-red-700`}
          >
            <span className="text-white text-[12px] font-semibold font-open-sans">
              Ticket Logout
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplateSidebar;
