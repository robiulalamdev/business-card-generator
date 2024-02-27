import React from "react";
import { useSelector } from "react-redux";

const TemplateView = () => {
  const { html } = useSelector((state) => state.global);
  console.log(html);
  return (
    <iframe
      style={{
        height: "400px",
        width: "600px",
        margin: "0 auto",
      }}
      srcDoc={html}
    ></iframe>
  );
};

export default TemplateView;
