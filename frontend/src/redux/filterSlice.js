import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "general",
  lang: "en",
  country: "us",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { setCurrentArticle, setCategory, setLanguage, setCountry } =
  filterSlice.actions;
export default filterSlice.reducer;
