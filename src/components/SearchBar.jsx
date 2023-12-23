// src/components/SearchBar.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="w-full max-w-md mt-4">
      <div className="relative">
        <input
          type="text"
          className="w-full border rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:border-indigo-500"
          placeholder={placeholder}
        />
        <FaSearch className="absolute top-3.5 left-3 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
