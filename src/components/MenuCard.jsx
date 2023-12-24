// src/components/MenuCard.jsx
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const MenuCard = ({ shawarma }) => {
  const [showAddIcon, setShowAddIcon] = useState(false);

  const handleImageInteraction = () => {
    setShowAddIcon(true);
  };

  const handleAddClick = () => {
    // Implement add functionality
    console.log("Added to cart!");
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
      <div
        className="relative cursor-pointer"
        onMouseEnter={handleImageInteraction}
        onTouchStart={handleImageInteraction}
        onFocus={handleImageInteraction}
      >
        <img
          src={shawarma.image}
          alt={shawarma.name}
          className="w-full h-48 object-cover"
        />
        {showAddIcon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handleAddClick}
              className="text-white text-3xl bg-indigo-500 rounded-full p-2 hover:bg-indigo-600 focus:outline-none"
            >
              <AiOutlinePlusCircle />
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">{shawarma.name}</p>
          <p className="text-lg text-indigo-700">₦{shawarma.price}</p>
        </div>
        <p className="mt-2 text-gray-600">{shawarma.description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
