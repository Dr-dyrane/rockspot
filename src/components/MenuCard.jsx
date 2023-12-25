// src/components/MenuCard.jsx
import React, { useState, useEffect } from "react";
import {
	PiPlusSquareBold,
	PiCheckSquareBold,
	PiMinusSquareBold,
} from "react-icons/pi";
import {
	addToCart,
	removeFromCart,
	getCartItems,
} from "../helpers/cartHelpers";

const MenuCard = ({ shawarma }) => {
	const [showAddOrRemoveIcon, setShowAddOrRemoveIcon] = useState(false);
	const [addedToCart, setAddedToCart] = useState(false);
	const [removedFromCart, setRemovedFromCart] = useState(false);

	useEffect(() => {
		let timeout;
		if (addedToCart) {
			timeout = setTimeout(() => {
				setAddedToCart(false);
				setShowAddOrRemoveIcon(true);
			}, 2000);
		} else if (removedFromCart) {
			timeout = setTimeout(() => {
				setRemovedFromCart(false);
				setShowAddOrRemoveIcon(true);
			}, 2000);
		}
		return () => clearTimeout(timeout);
	}, [addedToCart, removedFromCart]);

	const handleImageInteraction = () => {
		setShowAddOrRemoveIcon(true);
	};

	const handleButtonClick = () => {
		if (showAddOrRemoveIcon) {
			if (!isItemInCart) {
				console.log("Added to cart:", shawarma.name);
				addToCart(shawarma);
                console.log("Updated cartData:", getCartItems());
				setAddedToCart(true);
			} else {
				console.log("Removed from cart:", shawarma.name);
				removeFromCart(shawarma.id);
                console.log("Updated cartData:", getCartItems());
				setRemovedFromCart(true);
			}
			setShowAddOrRemoveIcon(false);
		}
	};

	const handleMouseLeave = () => {
		setTimeout(() => {
			setShowAddOrRemoveIcon(false);
		}, 1000);
	};

	const isItemInCart = getCartItems().some((item) => item.id === shawarma.id);

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
				{showAddOrRemoveIcon && (
					<div className="absolute inset-0 flex items-center justify-center">
						<button
							onClick={handleButtonClick}
							className={`${
								isItemInCart
									? "text-red-500/70 hover:bg-red-500/50 hover:text-red-200/70"
									: "text-white/70 hover:bg-green-500/50"
							} text-5xl bg-slate-300/50 rounded-xl p-2 focus:outline-none animate-pulse`}
						>
							{isItemInCart ? <PiMinusSquareBold /> : <PiPlusSquareBold />}
						</button>
					</div>
				)}
				{addedToCart && (
					<div className="absolute inset-0 flex items-center justify-center">
						<PiCheckSquareBold className="text-white/50 text-6xl bg-green-500/50 rounded-xl p-2 hover:bg-green-500/50 focus:outline-none animate-pulse" />
					</div>
				)}
				{removedFromCart && (
					<div className="absolute inset-0 flex items-center justify-center">
						<PiCheckSquareBold className="text-white/50 text-6xl bg-red-500/50 rounded-xl p-2 hover:bg-red-500/50 focus:outline-none animate-pulse" />
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
