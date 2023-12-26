// src/components/Rating.jsx
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ rating, reviews }) => {
  const integerPart = Math.floor(rating);
  const decimalPart = rating % 1;
  const stars = [];

  // Fill the integer part
  for (let i = 0; i < integerPart; i++) {
    stars.push(<FaStar key={i} size={18} color="#FFAE42" />);
  }

  // Fill the decimal part
  if (decimalPart > 0) {
    stars.push(<FaStarHalfAlt key={integerPart} size={18} color="#FFAE42" />);
  }

  // Add empty stars if needed
  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaStar key={integerPart + i + 1} size={18} color="gray" />);
  }

  return (
    <div className="flex items-start flex-col">
      <div className="flex">{stars}</div>
      <div className="flex flex-row items-center justify-center mt-2">
        <p className="text-sm font-bold text-white">
          {rating}
        </p>
        <span className="w-1 h-1 mx-1.5 rounded-full bg-gray-400"></span>
        <a
          href="/reviews"
          className="text-sm font-medium  underline hover:no-underline text-white"
        >
          {`${reviews} reviews`}
        </a>
      </div>
    </div>
  );
};

export default Rating;
