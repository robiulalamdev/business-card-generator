/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { templates } from "@/lib/datas/templates";
import { setLiveTempData } from "@/redux/features/globals/globalsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const LiveTempPhoneDesign = ({ data }) => {
  const [template, setTemplate] = useState(null);
  const dispatch = useDispatch();

  const handleGetData = () => {
    const template = templates.find(
      (tmp) => tmp._id === parseInt(data?.template_no)
    );
    dispatch(setLiveTempData(data));
    setTemplate(template);
  };

  useEffect(() => {
    handleGetData();
  }, [data]);

  return (
    <div className="flex justify-center items-center w-full h-fit my-16">
      {template && template?.small_code}
    </div>
  );
};

export default LiveTempPhoneDesign;
