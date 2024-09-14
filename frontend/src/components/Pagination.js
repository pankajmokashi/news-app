import React from "react";

const Pagination = ({ handleShowMore }) => {
  return (
    <div className="mt-8 flex items-center justify-center">
      <button
        onClick={handleShowMore}
        className="px-6 py-3 text-gray-800 bg-slate-200 rounded font-semibold hover:text-gray-500 hover:bg-slate-100 "
      >
        Show More
      </button>
    </div>
  );
};

export default Pagination;
