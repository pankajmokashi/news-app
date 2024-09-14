import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;

// Fetch headlines from the backend
export const fetchHeadlines = createAsyncThunk(
  "news/fetchHeadlines",
  async ({
    category = "general",
    country = "us",
    lang = "en",
    page = 1,
    limit = 10,
  }) => {
    const response = await axios.get(
      `${BASE_URL}/api/headlines?category=${category}&country=${country}&lang=${lang}&page=${page}&limit=${limit}`
    );
    return response.data.articles;
  }
);

const headlinesSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    loading: false,
    error: null,
    currentPage: 1,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeadlines.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeadlines.fulfilled, (state, action) => {
        state.loading = false;
        if (state.currentPage === 1) {
          state.articles = action.payload;
        } else {
          state.articles = [...state.articles, ...action.payload]; // Append articles on Show More
        }
      })
      .addCase(fetchHeadlines.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, appendArticles, setSearchMode } =
  headlinesSlice.actions;
export default headlinesSlice.reducer;
