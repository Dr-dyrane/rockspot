// src/components/BottomNavbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	RiSearchFill,
	RiUser4Fill,
	RiSearchLine,
	RiUser4Line,
} from "react-icons/ri";
import { GoHome, GoHomeFill } from "react-icons/go";
import {
	AiOutlineShopping,
	AiFillShopping,
	AiOutlineQuestionCircle,
	AiFillQuestionCircle,
} from "react-icons/ai";
import { getCartItems } from "../../helpers/cartHelpers";

const navItems = [
	{
		outlineIcon: <GoHome size={24} />,
		filledIcon: <GoHomeFill size={24} />,
		text: "Home",
		to: "/",
	},
	{
		outlineIcon: <RiSearchLine size={24} />,
		filledIcon: <RiSearchFill size={24} />,
		text: "Search",
		to: "/search",
	},
	{
		outlineIcon: <AiOutlineShopping size={24} />,
		filledIcon: <AiFillShopping size={24} />,
		text: "Orders",
		to: "/orders",
	},
	{
		outlineIcon: <AiOutlineQuestionCircle size={24} />,
		filledIcon: <AiFillQuestionCircle size={24} />,
		text: "Support",
		to: "/support",
	},
	{
		outlineIcon: <RiUser4Line size={24} />,
		filledIcon: <RiUser4Fill size={24} />,
		text: "Profile",
		to: "/profile",
	},
];

const BottomNavbar = () => {
	const location = useLocation();
	const [cartItemCount, setCartItemCount] = useState(0);

	useEffect(() => {
		// Update cart item count when cart items change
		const updateCartItemCount = () => {
			const itemsInCart = getCartItems();
			setCartItemCount(itemsInCart.length);
		};

		// Initial update
		updateCartItemCount();

		// Listen for changes in cart items
		// You can modify this based on your actual cart management logic
		// For example, if you have an event that signals changes in the cart
		// you can subscribe to that event here
		const cartItemsChangeListener = setInterval(updateCartItemCount, 1000);

		// Cleanup interval when component unmounts
		return () => clearInterval(cartItemsChangeListener);
	}, []); // Run once on component mount

	return (
		<nav className="bg-white border-t border-slate-200 dark:bg-slate-800 dark:border-slate-700 fixed bottom-0 left-0 right-0 flex justify-around pt-3 pb-2">
			{navItems.map((item) => (
				<Link
					key={item.to}
					to={item.to}
					className="flex flex-col items-center text-indigo-700 dark:text-indigo-300 relative"
				>
					{location.pathname === item.to ? item.filledIcon : item.outlineIcon}
					<span className="text-xs mt-1">{item.text}</span>
					{item.text === "Orders" && cartItemCount > 0 && (
						<span className="absolute right-0.5 top-0.5 flex h-3 w-3 rounded-full">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-200 opacity-75"></span>
							<span className="inline-flex text-center justify-center items-center rounded-full h-3 w-3 bg-indigo-300">
								<div
									className="text-slate-800 font-bold"
									style={{ fontSize: "8px" }}
								>
									{cartItemCount}
								</div>
							</span>
						</span>
					)}
				</Link>
			))}
		</nav>
	);
};

export default BottomNavbar;
