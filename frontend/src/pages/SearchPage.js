import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchArticles, setCurrentPage } from "../redux/searchSlice";
import NewsList from "../components/NewsList";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const SearchPage = () => {
  const { query } = useParams(); // Get the dynamic query from the URL
  const dispatch = useDispatch();
  const { articles, loading, currentPage } = useSelector(
    (state) => state.search
  );

  // Fetch articles for the current query on load
  useEffect(() => {
    dispatch(searchArticles({ query, page: currentPage }));
  }, [dispatch, query, currentPage]);

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
      <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="my-4 font-bold">Results for "{query}"</h1>
        {articles.length === 0 ? (
          <div>No Articles found!</div>
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

export default SearchPage;
