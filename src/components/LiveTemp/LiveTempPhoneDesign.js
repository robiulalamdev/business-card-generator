/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { dcards } from "@/lib/datas/digital-cards";
import { setLiveTempData } from "@/redux/features/globals/globalsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const LiveTempPhoneDesign = ({ data }) => {
  const [digitalCard, setDigitalCard] = useState(null);
  const dispatch = useDispatch();
  const handleGetData = () => {
    const result = dcards.find((dc) => dc._id === parseInt(data?.dcard_id));
    dispatch(setLiveTempData(data));
    setDigitalCard(result);
  };

  useEffect(() => {
    handleGetData();
  }, [data]);

  console.log(digitalCard);

  return (
    <>
      <div className="max-w-[500px] mx-auto w-full min-h-screen h-full">
        {digitalCard && digitalCard?.component}
      </div>
    </>
  );
};

export default LiveTempPhoneDesign;
