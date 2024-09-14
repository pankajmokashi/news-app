import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/headlinesSlice";
import { useNavigate } from "react-router-dom";

function SearchQuery() {
  const { searchValue } = useSelector((state) => state.search);
  const [value, setvalue] = useState(searchValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (value) {
      dispatch(setCurrentPage(1));
      navigate(`/${value}`);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="search"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        placeholder="Search news..."
        className="text-sm w-56 md:w-72 px-2 py-1 border rounded outline-none "
      />
      <button
        onClick={handleSearch}
        className="text-sm px-3 py-1 border rounded"
      >
        Search
      </button>
    </div>
  );
}

export default SearchQuery;
