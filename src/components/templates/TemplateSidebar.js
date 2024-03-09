import { setTemplateTab } from "@/redux/features/globals/globalsSlice";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import Link from "next/link";

const tabs = ["Review Template", "Banner", "Letter Head", "Digital Cards"];

const TemplateSidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const { templateTab } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  return (
    <div className="bg-white w-[350px] h-screen shadow">
      <h1 className="mt-32 mx-6 font-bold text-xl text-black border-b">
        Information
      </h1>
      <div className="px-8 grid grid-cols-1 gap-2 mt-4">
        {tabs.map((tab, index) => (
          <button
            onClick={() => dispatch(setTemplateTab(index))}
            key={index}
            className={`w-full h-10 flex items-center justify-start px-2  rounded-md ${
              templateTab === index ? "bg-purple-50" : "hover:bg-purple-50"
            }`}
          >
            <span className="text-black text-sm leading-[22px font-bold">
              {tab}
            </span>
          </button>
        ))}
      </div>

      {user && user?._id && (
        <div className="mx-6 mt-[50px]">
          <Link href="/dashboard">
            <button
              className={`w-full h-10 flex items-center justify-center px-2  rounded bg-primary`}
            >
              <span className="text-white text-sm leading-[22px font-bold">
                Dashboard
              </span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TemplateSidebar;
