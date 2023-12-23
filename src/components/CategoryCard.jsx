// src/components/CategoryCard.jsx
import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-slate-100 ml-20 sm:ml-2 rounded-lg p-4 w-32 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={category.image}
        alt={category.name}
        className="w-24 h-24 object-cover mx-auto mb-2 rounded-lg"
      />
      <p className="text-end italic">{category.name}</p>
    </div>
  );
};

export default CategoryCard;
