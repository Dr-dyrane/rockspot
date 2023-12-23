// src/components/ShawarmaCard.jsx
import React from "react";

const ShawarmaCard = ({ shawarma }) => {
	return (
		<div className="bg-slate-100 rounded-lg p-4 shadow-md w-48 transform hover:scale-105 hover:shadow-lg transition-shadow duration-300 ease-in-out">
			<img
				src={shawarma.image} // Assuming images are in a folder named 'images'
				alt={shawarma.name}
				className="w-40 h-40 object-cover rounded-lg mb-2"
			/>
			<div className="flex flex-row">
				<p className="text-center text-gray-600">₦{shawarma.price}</p>
				<p className="text-center font-semibold text-xs italic">{shawarma.name}</p>
			</div>
		</div>
	);
};

export default ShawarmaCard;
