import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { menuItems, userDropdownItems } from "./navbarData";
import UserSection from "./UserSection";
import MenuButton from "./MenuButton";
import Logo from "../Logo";

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isLoggedIn, setLoggedIn] = useState(true);
	const [isUserOpen, setUserOpen] = useState(false);
	const [navbarOpacity, setNavbarOpacity] = useState(1);

	const menuRef = useRef(null);
	const userDropdownRef = useRef(null);

	const toggleMenu = (event) => {
		event.stopPropagation(); // Stop the event from propagating
		setMenuOpen(!isMenuOpen);
		setUserOpen(false);
	};

	const toggleUserDropdown = (event) => {
		event.stopPropagation();
		if (isLoggedIn) {
			setUserOpen(!isUserOpen);
		}
	};

	const handleClickOutside = (event) => {
		if (
			!menuRef?.current?.contains(event.target) &&
			!userDropdownRef?.current?.contains(event.target)
		) {
			setMenuOpen(false);
			setUserOpen(false);
		}
	};

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		// Adjust opacity based on the scroll position
		if (window.scrollY > 400){
			setMenuOpen(false);
		}
		const maxScroll = isMenuOpen ? 2000 : 200; // Adjust this value based on when you want the opacity to start changing
		const opacity = Math.min(1, 1 - scrollPosition / maxScroll);
		setNavbarOpacity(opacity);
	};
	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		window.addEventListener("scroll", handleScroll);
	}, [handleClickOutside]);

	return (
		<nav
			className="bg-white dark:bg-slate-900 sticky top-0 z-50"
			style={{ opacity: navbarOpacity }}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Logo disabled={false} />
				<div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<UserSection
						isLoggedIn={isLoggedIn}
						isUserOpen={isUserOpen}
						toggleUserDropdown={toggleUserDropdown}
						userDropdownRef={userDropdownRef}
						userDropdownItems={userDropdownItems}
					/>
					<MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
				</div>
				<div
					className={`items-center justify-between w-full md:flex md:w-auto md:order-1 absolute right-0 top-[71px] p-4 bg-slate-900 rounded-b-xl opacity-95 ${
						isMenuOpen ? "block" : "hidden"
					}`}
					id="navbar-cta"
					ref={menuRef}
				>
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700">
						{menuItems.map((item) => (
							<Menu key={item.to} to={item.to} label={item.label} />
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
