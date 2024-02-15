/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TemplateSmall3 = () => {
  const { liveTempData } = useSelector((state) => state.global);
  return (
    <div id="print" className="bg-blue-50 border-2 p-2">
      <img src={liveTempData?.template?.signature} width="155"></img>
      <table
        width="495"
        border="0"
        cellspacing="0"
        cellpadding="0"
        borderSpacing="0"
        style={{
          width: "495px",
          fontFamily: "'Montserrat', sans-serif",
          msoLineHeightRule: "exactly",
          borderCollapse: "collapse",
          WebkitTextSizeAdjust: "none",
          minWidth: "495px",
        }}
      >
        <tr>
          <td width="400" style={{ margin: "0 auto" }}>
            <table
              border="0"
              cellspacing="0"
              cellpadding="0"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <tr>
                <td
                  width="320"
                  style={{
                    lineHeight: "12pt",
                    paddingBottom: "4px",
                    borderBottom: "1px dotted #db6b27",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  valign="middle"
                >
                  <a
                    href="https://www.fixwebsiteissues.com/"
                    style={{
                      textDecoration: "none",
                      textAlign: "center",
                      marginBottom: "10px",
                    }}
                    target="_blank"
                  >
                    <img
                      moz-do-not-send="true"
                      border="0"
                      width="165"
                      src={liveTempData?.template?.logo}
                      alt="photo"
                    />
                  </a>
                  <p style={{ margin: "0", textAlign: "center" }}>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "16px",
                        color: "#db6b27",
                        fontWeight: "bold",
                      }}
                    >
                      {liveTempData?.template?.name}
                    </span>
                  </p>
                  <p
                    style={{
                      fontWeight: "normal",
                      fontSize: "13px",
                      margin: "0",
                      paddingTop: "1px",
                      color: "#000000",
                      textAlign: "center",
                    }}
                  >
                    {liveTempData?.template?.designation}
                  </p>
                </td>
              </tr>
            </table>

            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <tr
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <td
                  width="320"
                  style={{
                    lineHeight: "14pt",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px",
                    color: "#000000",
                    paddingTop: "3px",
                  }}
                >
                  <p style={{ margin: "0", fontSize: "13px" }}>
                    <img
                      moz-do-not-send="true"
                      border="0"
                      width="12"
                      height="12"
                      src="https://i.ibb.co/x8Z5QXw/pphone.png"
                      style={{ verticalAlign: "middle", display: "inline" }}
                    />
                    &nbsp;&nbsp;
                    <a
                      href={`tel:+${liveTempData?.template?.phone}`}
                      target="_blank"
                      style={{
                        color: "#000000",
                        textDecoration: "none",
                        display: "inline",
                      }}
                    >
                      +{liveTempData?.template?.phone}
                    </a>
                  </p>
                  <p style={{ margin: "0", fontSize: "13px" }}>
                    <img
                      moz-do-not-send="true"
                      border="0"
                      width="12"
                      height="12"
                      src="https://i.ibb.co/zbFn7SR/gmail.png"
                      style={{ verticalAlign: "middle", display: "inline" }}
                    />
                    &nbsp;&nbsp;
                    <a
                      href={`mailto:${liveTempData?.template?.email}`}
                      target="_blank"
                      style={{
                        color: "#000000",
                        textDecoration: "none",
                        display: "inline",
                      }}
                    >
                      {liveTempData?.template?.email}
                    </a>
                  </p>
                  <p style={{ margin: "0", fontSize: "13px" }}>
                    <img
                      moz-do-not-send="true"
                      border="0"
                      width="12"
                      height="12"
                      src="https://i.ibb.co/xz1yNcH/website.png"
                      style={{ verticalAlign: "middle", display: "inline" }}
                    />
                    &nbsp;&nbsp;
                    <a
                      href={liveTempData?.template?.website}
                      target="_blank"
                      style={{
                        color: "#000000",
                        textDecoration: "none",
                        display: "inline",
                      }}
                    >
                      {liveTempData?.template?.website}
                    </a>
                  </p>
                  <p style={{ margin: "0", fontSize: "13px" }}>
                    <img
                      moz-do-not-send="true"
                      border="0"
                      width="12"
                      height="12"
                      src="https://i.imgur.com/BNojrbl.png"
                      style={{ verticalAlign: "middle", display: "inline" }}
                    />
                    &nbsp;&nbsp; {liveTempData?.template?.address}
                  </p>

                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style={{ paddingTop: "5px", paddingBottom: "15px" }}>
                        <p
                          style={{
                            margin: "0",
                            textAlign: "left",
                            display: "flex",
                          }}
                        >
                          <a
                            style={{ textDecoration: "none", color: "white" }}
                            href="https://www.facebook.com/fixwebsiteerrors"
                            target="_blank"
                          >
                            <img
                              src="https://i.imgur.com/YozPtoW.png"
                              height="20"
                              width="20"
                            />
                          </a>
                          &nbsp;
                          <a
                            style={{ textDecoration: "none", color: "white" }}
                            href="https://www.instagram.com/fixwebsiteissue/"
                            target="_blank"
                          >
                            <img
                              src="https://i.imgur.com/JcFgrq2.png"
                              height="20"
                              width="20"
                            />
                          </a>
                          &nbsp;
                          <a
                            style={{ textDecoration: "none", color: "white" }}
                            href="https://www.pinterest.com/fixwebsiteissue/"
                            target="_blank"
                          >
                            <img
                              src="https://i.imgur.com/gGTZtSH.png"
                              height="20"
                              width="20"
                            />
                          </a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table
        border="0"
        cellpadding="0"
        style={{
          width: "495px",
          fontFamily: "'Montserrat', sans-serif",
          minWidth: "495px",
        }}
      >
        <tr>
          <td valign="top" width="495">
            <p
              style={{
                margin: "0",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "normal",
                fontSize: "12px",
                textAlign: "center",
                color: "#ffffff",
                backgroundColor: "#db6b27",
                padding: "5px",
              }}
            >
              {liveTempData?.template?.title}
            </p>
          </td>
        </tr>
      </table>

      <table
        border="0"
        cellpadding="0"
        style={{
          width: "495px",
          fontFamily: "Arial, Helvetica Neue ,Sans-serif",
        }}
      >
        <tr>
          <td valign="top" width="495" style={{ paddingTop: "7px" }}>
            <p
              style={{
                margin: "0",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "normal",
                fontSize: "9px",
                textAlign: "justify",
                lineHeight: "13px",
                color: "#636363",
              }}
            >
              <strong style={{ color: "#636363" }}> Confidential: </strong>{" "}
              {liveTempData?.template?.confidential}
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TemplateSmall3;
