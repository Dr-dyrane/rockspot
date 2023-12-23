import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="w-full mt-4">
      <div className="relative flex items-center">
        <input
          type="text"
          className="w-full border text-sm rounded-xl pl-10 pr-8 py-3 lg:py-5 focus:outline-none focus:border-indigo-500"
          placeholder={placeholder}
        />
        <FaSearch className="absolute top-4 lg:top-5 left-3 text-gray-500" />
        <FaFilter className="absolute top-4 lg:top-5 right-3 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
