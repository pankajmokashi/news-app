import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;

// Search articles
export const searchArticles = createAsyncThunk(
  "news/searchArticles",
  async ({ query, page = 1, language = "en", limit = 10 }) => {
    console.log(query, page, language);
    const response = await axios.get(
      `${BASE_URL}/api/search?q=${query}&lang=${language}&page=${page}&limit=${limit}`
    );
    return response.data.articles;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
    articles: [],
    loading: false,
    error: null,
    currentPage: 1,
  },
  reducers: {
    setSearchvalue: (state, action) => {
      state.searchValue = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchArticles.fulfilled, (state, action) => {
        state.loading = false;
        if (state.currentPage === 1) {
          state.articles = action.payload;
        } else {
          state.articles = [...state.articles, ...action.payload]; // Append search results on Show More
        }
      })
      .addCase(searchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchvalue, setCurrentPage } = searchSlice.actions;
export default searchSlice.reducer;
