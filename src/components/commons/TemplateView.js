import React from "react";
import { useSelector } from "react-redux";

const TemplateView = () => {
  const { html } = useSelector((state) => state.global);
  return (
    <iframe
      id="print"
      style={{
        height: "300px",
        width: "520px",
        margin: "0 auto",
      }}
      srcDoc={html}
    ></iframe>
  );
};

export default TemplateView;
