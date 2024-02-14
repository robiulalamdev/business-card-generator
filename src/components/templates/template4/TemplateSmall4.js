import { temp3HtmlSmall } from "@/lib/datas/generateHtml/temp3";
import { temp4HtmlSmall } from "@/lib/datas/generateHtml/temp4";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TemplateSmall4 = () => {
  const { liveTempData } = useSelector((state) => state.global);
  const [code, setCode] = useState(null);

  const getCode = async () => {
    const result = await temp4HtmlSmall(liveTempData?.template);
    setCode(result);
  };

  useEffect(() => {
    getCode();
  }, [liveTempData]);

  console.log(liveTempData);

  return (
    <iframe
      id="print"
      style={{
        height: "500px",
        width: "520px",
        margin: "0 auto",
      }}
      srcDoc={code}
    ></iframe>
  );
};

export default TemplateSmall4;
