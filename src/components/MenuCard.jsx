// src/components/MenuCard.jsx
import React, { useState } from "react";
import { PiPlusSquareBold } from "react-icons/pi";

const MenuCard = ({ shawarma }) => {
	const [showAddIcon, setShowAddIcon] = useState(false);

	const handleImageInteraction = () => {
		setShowAddIcon(true);
	};

	const handleAddClick = () => {
		// Implement add functionality
		console.log("Added to cart!");
	};
	const handleMouseLeave = () => {
		setTimeout(() => {
			setShowAddIcon(false);
		}, 500); // Adjust the delay as needed
	};

	return (
		<div
			className="rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
			onMouseLeave={handleMouseLeave}
		>
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
							className="text-white/70 text-5xl bg-slate-300/50 rounded-xl p-2 hover:bg-green-500/50 focus:outline-none animate-pulse"
						>
							<PiPlusSquareBold />
						</button>
					</div>
				)}
			</div>
			<div className="p-4">
				<div className="flex justify-between items-center">
					<p className="text-md font-bold">{shawarma.name}</p>
					<p className="text-md font-black text-indigo-700">
						~₦{shawarma.price}
					</p>
				</div>
				<p className="mt-2 text-indigo-700/75 italic text-xs">
					"{shawarma.description}"
				</p>
			</div>
		</div>
	);
};

export default MenuCard;
