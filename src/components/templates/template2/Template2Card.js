import React from "react";
import { useSelector } from "react-redux";

const Template2Card = () => {
  const { templateData, html } = useSelector((state) => state.global);
  // console.log(html);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default Template2Card;
