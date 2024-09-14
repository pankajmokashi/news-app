import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines, setCurrentPage } from "../redux/headlinesSlice";
import NewsList from "../components/NewsList";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, loading, currentPage } = useSelector(
    (state) => state.headlines
  );
  const { category, country, lang } = useSelector((state) => state.filter);

  // Fetch headlines on initial load
  useEffect(() => {
    dispatch(fetchHeadlines({ category, country, lang, page: currentPage }));
  }, [dispatch, category, country, lang, currentPage]);

  const handleShowMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {articles.length === 0 ? (
          <div>
            No Articles found! Please try to select countries and their
            associated languages.
          </div>
        ) : (
          <>
            <NewsList articles={articles} />
            <Pagination handleShowMore={handleShowMore} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
