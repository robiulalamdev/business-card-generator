import { temp1HtmlSmall } from "@/lib/datas/generateHtml/temp1";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TemplateSmall1 = () => {
  const { liveTempData } = useSelector((state) => state.global);
  const [code, setCode] = useState(null);

  const getCode = async () => {
    const result = await temp1HtmlSmall(liveTempData?.template);
    setCode(result);
  };

  useEffect(() => {
    getCode();
  }, [liveTempData]);

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

export default TemplateSmall1;
