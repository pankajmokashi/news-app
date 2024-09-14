import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";
import SearchQuery from "./SearchQuery";
import SelectCategory from "./SelectCategory";

const Header = ({ onCategoryChange }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <header className="sticky top-0 bg-white z-10">
      <nav className="px-4 sm:px-8 py-2 shadow">
        <div className="flex items-center justify-between h-8">
          <h1
            className="font-bold text-xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            ACONEWS
          </h1>
          <div className="hidden sm:block">
            <SearchQuery />
          </div>
          <MenuDrawer onCategoryChange={onCategoryChange} />
        </div>
        {location === "/" && (
          <div className="mx-auto mt-2 justify-center hidden sm:flex">
            <SelectCategory />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
