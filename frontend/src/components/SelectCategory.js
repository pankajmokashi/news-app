import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/filterSlice";

const categories = [
  { name: "General", code: "general" },
  { name: "World", code: "world" },
  { name: "Business", code: "business" },
  { name: "Sports", code: "sports" },
  { name: "Science", code: "science" },
  { name: "Health", code: "health" },
  { name: "Technology", code: "technology" },
  { name: "Entertainment", code: "entertainment" },
];

function SelectCategory() {
  const { category } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <ul className="flex flex-wrap">
      {categories.map((item) => (
        <li
          key={item.code}
          onClick={() => dispatch(setCategory(item.code))}
          className={`text-sm md:text-base px-4 py-1 cursor-pointer ${
            category === item.code ? "bg-slate-200 rounded-md" : ""
          }`}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default SelectCategory;
