import { configureStore } from "@reduxjs/toolkit";
import headlinesReducer from "./headlinesSlice";
import searchReducer from "./searchSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    headlines: headlinesReducer,
    search: searchReducer,
    filter: filterReducer,
  },
});

export default store;
