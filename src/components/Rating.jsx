// src/components/Rating.jsx
import React from "react";
import { FaStar } from "react-icons/fa6";

const Rating = ({ rating, reviews }) => {
  // Round the rating to the nearest half
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <div className="flex items-start flex-col">
      <div className="flex flex-rw">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            size={18}
            color={index + 0.5 <= roundedRating ? "yellow" : "gray"}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center mt-2">
        <p className="text-sm font-bold text-gray-900 dark:text-white">
          {roundedRating}
        </p>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a
          href="/reviews"
          className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
        >
          {`${reviews} reviews`}
        </a>
      </div>
    </div>
  );
};

export default Rating;
