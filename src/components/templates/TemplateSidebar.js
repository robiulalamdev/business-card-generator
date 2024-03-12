import { setTemplateTab } from "@/redux/features/globals/globalsSlice";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import logo from "../../assets/brand/logo.png";
import Image from "next/image";

const tabs = ["Review Template", "Banner", "Letter Head", "Digital Cards"];

const TemplateSidebar = () => {
  const { user, logOutTicket } = useContext(AuthContext);
  const { templateTab } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  return (
    <div className="bg-white max-w-[300px] min-w-[240px] md:flex flex-col justify-between items-center w-full h-screen pb-8 shadow border-r border-primary hidden md:inline-block">
      <div className="w-full mt-[20px]">
        <Image
          src={logo}
          alt="logo"
          className="max-w-[120px] object-contain mx-auto"
        />
        <div className="px-8 grid grid-cols-1 gap-2 mt-[80px] w-full">
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
              <span className="text-[12px] font-semibold font-open-sans">
                {tab}
              </span>
            </button>
          ))}
        </div>
      </div>

      {user && user?._id && (
        <div className="px-6 mt-[50px] w-full">
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
