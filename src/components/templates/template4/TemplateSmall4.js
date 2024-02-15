/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TemplateSmall4 = () => {
  const { liveTempData } = useSelector((state) => state.global);

  return (
    <div>
      <div id="print" className="bg-blue-50 border-2 p-2">
        <div className="flex flex-col items-center w-full gap-2">
          <img
            src={liveTempData?.template?.logo}
            alt=""
            className="size-[80px] rounded-full object-cover"
          />
          <div className="w-full">
            <h1 className="font-bold uppercase text-center text-orange-600">
              {liveTempData?.template?.name}
            </h1>
            <p className="text-xs text-center">
              {liveTempData?.template?.designation}
            </p>

            <div className="w-full">
              <tr>
                <td
                  width="320"
                  style={{
                    lineHeight: "14pt",
                    fontSize: "13px",
                    color: "#000000",
                    paddingTop: "3px",
                  }}
                >
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      moz-do-not-send="true"
                      border="0"
                      width="12"
                      height="12"
                      src="https://i.ibb.co/x8Z5QXw/pphone.png"
                      style={{ verticalAlign: "middle" }}
                    />
                    &nbsp;&nbsp;
                    <a
                      href={`tel:+${liveTempData?.template?.phone}`}
                      target="_blank"
                      style={{ color: "#000000", textDecoration: "none" }}
                    >
                      +{liveTempData?.template?.phone}
                    </a>
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      moz-do-not-send="true"
                      border="0"
                      width="12"
                      height="12"
                      src="https://i.ibb.co/zbFn7SR/gmail.png"
                      style={{ verticalAlign: "middle" }}
                    />
                    &nbsp;&nbsp;
                    <a
                      href={`mailto:${liveTempData?.template?.email}`}
                      target="_blank"
                      style={{ color: "#000000", textDecoration: "none" }}
                    >
                      {liveTempData?.template?.email}
                    </a>
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      moz-do-not-send="true"
                      border="0"
                      width="12"
                      height="12"
                      src="https://i.ibb.co/xz1yNcH/website.png"
                      style={{ verticalAlign: "middle" }}
                    />
                    &nbsp;&nbsp;
                    <a
                      href={liveTempData?.template?.website}
                      target="_blank"
                      style={{ color: "#000000", textDecoration: "none" }}
                    >
                      {liveTempData?.template?.website}
                    </a>
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "13px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      moz-do-not-send="true"
                      border="0"
                      width="12"
                      height="12"
                      src="https://i.imgur.com/BNojrbl.png"
                      style={{ verticalAlign: "middle" }}
                    />
                    &nbsp;&nbsp;
                    {liveTempData?.template?.address}
                  </p>
                </td>
              </tr>
              <div
                className="w-full"
                style={{
                  backgroundColor: "#434f68",
                  borderBottom: "3px solid #db6b27",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "50px",
                  marginTop: "15px",
                }}
              >
                <div
                  width="250"
                  style={{
                    padding: "5px 0px 3px 10px",
                    verticalAlign: "middle",
                    backgroundColor: "#434f68",
                  }}
                >
                  <p style={{ color: "white" }}>
                    {liveTempData?.template?.title}
                  </p>
                </div>
                <div
                  style={{
                    padding: "5px 20px 3px 0",
                    verticalAlign: "middle",
                    backgroundColor: "#434f68",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href={liveTempData?.template?.facebook}
                    target="_blank"
                  >
                    <img
                      src="https://i.imgur.com/YozPtoW.png"
                      height="20"
                      width="20"
                    />{" "}
                  </a>
                  &nbsp;
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href={liveTempData?.template?.instagram}
                    target="_blank"
                  >
                    <img
                      src="https://i.imgur.com/JcFgrq2.png"
                      height="20"
                      width="20"
                    />{" "}
                  </a>
                  &nbsp;
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href={liveTempData?.template?.pinterest}
                    target="_blank"
                  >
                    <img
                      src="https://i.imgur.com/gGTZtSH.png"
                      height="20"
                      width="20"
                    />{" "}
                  </a>
                </div>
              </div>

              <div style={{ paddingTop: "7px" }}>
                <p
                  style={{
                    margin: 0,
                    fontWeight: "normal",
                    fontSize: "9px",
                    textAlign: "justify",
                    lineHeight: "13px",
                    color: "#636363",
                  }}
                >
                  <strong style={{ color: "#636363" }}> Confidential: </strong>
                  {liveTempData?.template?.confidential}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSmall4;
