// MenuButton.js
import React from "react";
import { BsFillMenuButtonFill, BsFillMenuButtonWideFill } from "react-icons/bs";

const MenuButton = ({ isMenuOpen, toggleMenu }) => {
	return (
		<button
			data-collapse-toggle="navbar-cta"
			type="button"
			className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
			aria-controls="navbar-cta"
			aria-expanded="false"
			onClick={toggleMenu}
		>
			<span className="sr-only">Open main menu</span>
			{isMenuOpen ? (
				<BsFillMenuButtonWideFill size={20} />
			) : (
				<BsFillMenuButtonFill size={19} />
			)}
		</button>
	);
};

export default MenuButton;
