// src/components/MenuCard.jsx
import React, { useState, useEffect } from "react";
import {
	PiPlusSquareBold,
	PiCheckSquareBold,
	PiMinusSquareBold,
	PiToggleRightFill,
	PiToggleLeftFill,
	PiPepperFill,
} from "react-icons/pi";
import {
	addToCart,
	removeFromCart,
	getCartItems,
	getOrderItems,
	modifyOrderOptions,
} from "../../helpers/cartHelpers";
import OptionsModal from "./OptionsModal";

const MenuCard = ({ shawarma }) => {
	const [showAddOrRemoveIcon, setShowAddOrRemoveIcon] = useState(false);
	const [addedToCart, setAddedToCart] = useState(false);
	const [removedFromCart, setRemovedFromCart] = useState(false);
	const [showOptionsModal, setShowOptionsModal] = useState(false);
	const [modifiedOptions, setModifiedOptions] = useState({
		spiciness: "normal",
		ketchup: "normal",
		barma: "normal",
		hotdog: false,
		hotdogQuantity: 0,
		quantity: 1,
	});

	// Helper function to generate a summary of modified options
	const generateOptionsSummary = () => {
		const { quantity, spiciness, ketchup, barma, hotdog, hotdogQuantity } =
			modifiedOptions;

		// Customize this string based on your preferences
		return `${quantity} ${shawarma.name} with ${spiciness} spice, ${
			ketchup === "normal" ? "ketchup" : "extra ketchup"
		}, ${barma === "normal" ? "barma" : "extra barma"}, ${
			hotdog ? "with hotdog" : "without hotdog"
		}${hotdog ? `, ${hotdogQuantity} hotdogs` : ""}`;
	};

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
				console.log("Updated orderData:", getOrderItems());
				setAddedToCart(true);
			} else {
				console.log("Removed from cart:", shawarma.name);
				removeFromCart(shawarma.id);
				console.log("Updated cartData:", getCartItems());
				console.log("Updated orderData:", getOrderItems());
				setRemovedFromCart(true);
			}
			setShowAddOrRemoveIcon(false);
		}
	};

	const handleToggleOptions = () => {
		setShowOptionsModal(!showOptionsModal);
	};

	const handleSaveOptions = () => {
		modifyOrderOptions(shawarma.id, modifiedOptions);
		console.log("Updated orderData:", getOrderItems());
		setShowOptionsModal(false);
	};

	const handleQuantityChange = (quantity) => {
		setModifiedOptions({ ...modifiedOptions, quantity });
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
			onMouseEnter={handleImageInteraction}
			onTouchStart={handleImageInteraction}
			onFocus={handleImageInteraction}
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
				{!isItemInCart && (
					<p className="mt-2 text-indigo-700/75 italic text-xs">
						"{shawarma.description}"
					</p>
				)}
				{isItemInCart && (
					<div className="flex flex-row items-center justify-between">
						<p className="italic font-normal text-xs">
							~ {generateOptionsSummary()} has been added to cart,{" "}
							<span className="font-bold">please customise your options</span>
						</p>
						<button
							className="ml-2 animate-pulse hover:animate-none"
							onClick={handleToggleOptions}
						>
							{showOptionsModal ? (
								<PiToggleRightFill size={36} />
							) : (
								<PiToggleLeftFill size={36} />
							)}
						</button>
					</div>
				)}
			</div>

			{/* Modal for customizing options */}
			{showOptionsModal && (
				<OptionsModal
					modifiedOptions={modifiedOptions}
					setModifiedOptions={setModifiedOptions}
					handleSaveOptions={handleSaveOptions}
					handleToggleOptions={handleToggleOptions}
					handleQuantityChange={handleQuantityChange}
				/>
			)}
		</div>
	);
};

export default MenuCard;
