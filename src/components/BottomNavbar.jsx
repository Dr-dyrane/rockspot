// src/components/BottomNavbar.jsx
import React from "react";
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

	return (
		<nav className="bg-white border-t border-slate-200 fixed bottom-0 left-0 right-0 flex justify-around pt-3 pb-2">
			{navItems.map((item) => (
				<Link
					key={item.to}
					to={item.to}
					className="flex flex-col items-center text-indigo-700"
				>
					{location.pathname === item.to ? item.filledIcon : item.outlineIcon}
					<span className="text-xs mt-1">{item.text}</span>
				</Link>
			))}
		</nav>
	);
};

export default BottomNavbar;
