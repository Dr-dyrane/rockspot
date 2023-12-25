// src/components/CategoryCard.jsx
import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="relative rounded-xl w-32 h-32 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={category.image}
        alt={category.name}
        className="w-32 h-32 object-cover mx-auto mb-2 rounded-xl"
      />
      <p className="p-1 absolute inset-0 flex items-end justify-center text-white text-sm font-semibold">{category.name}</p>
    </div>
  );
};

export default CategoryCard;
