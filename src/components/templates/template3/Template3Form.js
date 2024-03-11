/* eslint-disable @next/next/no-img-element */
import React, { useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setTemplateData } from "@/redux/features/globals/globalsSlice";
import { convertImageToBase64 } from "@/lib/globalServices";
import { AuthContext } from "@/components/context/AuthContext";
import TemplateFormContainer from "../TemplateFormContainer";

const Template3Form = () => {
  const { handleSave, saveIsLoading, setSaveIsLoading, handleSetHtmlCode } =
    useContext(AuthContext);
  const { tempResult } = useSelector((state) => state.global);
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  // stats
  const [stepId, setStepId] = useState(1);
  const [logo, setLogo] = useState(null);
  const [signature, setSignature] = useState(null);
  const [banner, setBanner] = useState(null);
  const [lhBg, setLhBg] = useState(null);

  const handleGenerate = async (data) => {
    if (!logo) {
      return;
    }
    if (!signature) {
      return;
    }
    if (stepId < 3) {
      setStepId(stepId + 1);
      return;
    }
    if (stepId === 3) {
      setSaveIsLoading(true);
      const url = await convertImageToBase64(logo);
      let bannerUrl = "";
      let lhBgUrl = "";
      if (banner) {
        bannerUrl = await convertImageToBase64(banner);
      }
      if (lhBg) {
        lhBgUrl = await convertImageToBase64(lhBg);
      }
      const signatureUrl = await convertImageToBase64(signature);

      await dispatch(
        setTemplateData({
          ...data,
          logo: url,
          banner: bannerUrl,
          signature: signatureUrl,
          letter_head_bg: lhBgUrl,
        })
      );
      await handleSetHtmlCode(
        {
          ...data,
          logo: url,
          signature: signatureUrl,
        },
        3
      );
      handleSave(3);
      // setLogo(null);
      // setBanner(null);
      // setLhBg(null);
      // setSignature(null);
    }
  };

  const handleValues = async () => {
    const { logo, banner, signature, letter_head_bg, ...other } =
      tempResult?.template;
    if (logo) {
      setLogo(logo);
    }
    if (banner) {
      setBanner(banner);
    }
    if (signature) {
      setSignature(signature);
    }
    if (letter_head_bg) {
      setLhBg(letter_head_bg);
    }
    for (const key in other) {
      const value = other[key];
      if (typeof value === "object") {
        for (const nkey in value) {
          const nvalue = value[nkey];
          setValue(`${key}.${nkey}`, nvalue);
        }
      } else {
        setValue(key, value);
      }
    }
  };

  useMemo(() => {
    if (tempResult) {
      handleValues();
    }
  }, [tempResult?.template]);
  return (
    <>
      <TemplateFormContainer
        register={register}
        handleSubmit={handleSubmit}
        handleGenerate={handleGenerate}
        setValue={setValue}
        watch={watch}
        control={control}
        errors={errors}
        saveIsLoading={saveIsLoading}
        stepId={stepId}
        setStepId={setStepId}
        logo={logo}
        setLogo={setLogo}
        setBanner={setBanner}
        banner={banner}
        setLhBg={setLhBg}
        lhBg={lhBg}
        setSignature={setSignature}
        signature={signature}
        company_vision={true}
        signatureInput={true}
      />
    </>
  );
};

export default Template3Form;
