import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:query" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
