// src/components/ShawarmaCard.jsx
import React from "react";

const ShawarmaCard = ({ shawarma }) => {
	return (
		<div className="rounded-lg w-48 h-auto">
			<img
				src={shawarma.image} // Assuming images are in a folder named 'images'
				alt={shawarma.name}
				className="w-48 h-48 object-cover rounded-lg mb-2 shadow-md transform hover:scale-105 hover:shadow-lg transition-shadow duration-300 ease-in-out"
			/>
			<div className="flex flex-row justify-between items-center">
				<p className="text-center text-gray-600 mr-2">₦{shawarma.price}</p>
				<p className="text-center font-semibold text-xs italic">{shawarma.name}</p>
			</div>
		</div>
	);
};

export default ShawarmaCard;
