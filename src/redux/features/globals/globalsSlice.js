import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticket: null,
  selectedTmp: null,
  templateData: null,
  templateSmallData: null,
  html: null,
  generateStep: 1,
  tempResult: null,
  liveTempData: null,
};

const globalsSlice = createSlice({
  name: "Global slice",
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.ticket = action.payload;
    },
    setSelectedTmp: (state, action) => {
      state.selectedTmp = action.payload;
    },
    setTemplateData: (state, action) => {
      state.templateData = action.payload;
    },
    setHtml: (state, action) => {
      state.html = action.payload;
    },
    setGenerateStep: (state, action) => {
      state.generateStep = action.payload;
    },
    setTempResult: (state, action) => {
      state.tempResult = action.payload;
    },
    setTemplateSmallData: (state, action) => {
      state.templateSmallData = action.payload;
    },
    setLiveTempData: (state, action) => {
      state.liveTempData = action.payload;
    },
  },
});

export const {
  setTicket,
  setSelectedTmp,
  setTemplateData,
  setHtml,
  setGenerateStep,
  setTempResult,
  setTemplateSmallData,
  setLiveTempData,
} = globalsSlice.actions;

export default globalsSlice.reducer;
