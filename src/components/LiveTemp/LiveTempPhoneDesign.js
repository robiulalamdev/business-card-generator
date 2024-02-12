/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const LiveTempPhoneDesign = ({ data }) => {
  return (
    <div className="flex justify-center items-center w-full h-fit my-16">
      <>
        <div>
          <table
            width="495"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style={{
              width: "495px",
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "exactly",
              borderCollapse: "collapse",
              WebkitTextSizeAdjust: "none",
              minWidth: "495px",
            }}
          >
            <tr>
              <td
                width="175"
                valign="middle"
                style={{
                  textAlign: "left",
                  borderRight: "2px solid #d3d1d3",
                  paddingLeft: "2px",
                }}
              >
                <a
                  href="https://www.fixwebsiteissues.com/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <img
                    src={data?.template?.logo}
                    alt="photo"
                    width="165"
                    border="0"
                  />
                </a>
              </td>
              <td width="320" style={{ paddingLeft: "10px" }}>
                <table border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td
                      width="320"
                      style={{
                        lineHeight: "12pt",
                        paddingBottom: "4px",
                        borderBottom: "1px dotted #db6b27",
                      }}
                      valign="middle"
                    >
                      <p style={{ margin: "0" }}>
                        <span
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "16px",
                            color: "#db6b27",
                            fontWeight: "bold",
                          }}
                        >
                          {data?.template?.name}
                        </span>
                      </p>
                      <p
                        style={{
                          fontWeight: "normal",
                          fontSize: "13px",
                          margin: "0",
                          paddingTop: "1px",
                          color: "#000000",
                        }}
                      >
                        {data?.template?.designation}
                      </p>
                    </td>
                  </tr>
                </table>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td
                      width="320"
                      style={{
                        lineHeight: "14pt",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "13px",
                        color: "#000000",
                        paddingTop: "3px",
                      }}
                    >
                      <p style={{ margin: "0", fontSize: "13px" }}>
                        <img
                          src="https://i.ibb.co/x8Z5QXw/pphone.png"
                          width="12"
                          height="12"
                          style={{ verticalAlign: "middle", display: "inline" }}
                        />
                        &nbsp;&nbsp;
                        <a
                          href={`tel:+${data?.template?.phone}`}
                          target="_blank"
                          style={{
                            color: "#000000",
                            textDecoration: "none",
                            display: "inline",
                          }}
                        >
                          +{data?.template?.phone}
                        </a>
                      </p>
                      <p style={{ margin: "0", fontSize: "13px" }}>
                        <img
                          src="https://i.ibb.co/zbFn7SR/gmail.png"
                          width="12"
                          height="12"
                          style={{ verticalAlign: "middle", display: "inline" }}
                        />
                        &nbsp;&nbsp;
                        <a
                          href={`mailto:${data?.template?.email}`}
                          target="_blank"
                          style={{
                            color: "#000000",
                            textDecoration: "none",
                            display: "inline",
                          }}
                        >
                          {data?.template?.email}
                        </a>
                      </p>
                      <p style={{ margin: "0", fontSize: "13px" }}>
                        <img
                          src="https://i.ibb.co/xz1yNcH/website.png"
                          width="12"
                          height="12"
                          style={{ verticalAlign: "middle", display: "inline" }}
                        />
                        &nbsp;&nbsp;
                        <a
                          href={data?.template?.website}
                          target="_blank"
                          style={{
                            color: "#000000",
                            textDecoration: "none",
                            display: "inline",
                          }}
                        >
                          {data?.template?.website}
                        </a>
                      </p>
                      <p style={{ margin: "0", fontSize: "13px" }}>
                        <img
                          src="https://i.imgur.com/BNojrbl.png"
                          width="12"
                          height="12"
                          style={{ verticalAlign: "middle", display: "inline" }}
                        />
                        &nbsp;&nbsp;
                        {data?.template?.address}
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td
                            style={{ paddingTop: "5px", paddingBottom: "5px" }}
                          >
                            <p
                              style={{
                                margin: "0",
                                textAlign: "left",
                                display: "flex",
                              }}
                            >
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
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
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
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
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
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
              fontFamily: "Montserrat, sans-serif",
              minWidth: "495px",
            }}
          >
            <tr>
              <td valign="top" width="495">
                <p
                  style={{
                    margin: "0",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "normal",
                    fontSize: "12px",
                    textAlign: "center",
                    color: "#ffffff",
                    backgroundColor: "#db6b27",
                    padding: "5px",
                  }}
                >
                  {data?.template?.title}
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
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "normal",
                    fontSize: "9px",
                    textAlign: "justify",
                    lineHeight: "13px",
                    color: "#636363",
                  }}
                >
                  <strong style={{ color: "#636363" }}> Confidential: </strong>{" "}
                  {data?.template?.confidential}
                </p>
              </td>
            </tr>
          </table>
        </div>
      </>
    </div>
  );
};

export default LiveTempPhoneDesign;
