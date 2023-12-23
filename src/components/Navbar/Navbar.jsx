import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { menuItems, userDropdownItems } from "./navbarData";
import UserSection from "./UserSection";

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isLoggedIn, setLoggedIn] = useState(true);
	const [isUserOpen, setUserOpen] = useState(false);

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

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
	}, [handleClickOutside]);

	return (
		<nav className="bg-white border-slate-200 dark:bg-slate-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link
					to="/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img
						src="/logo_i.png"
						className="h-8 rounded-full bg-indigo-700 p-[1px]"
						alt="Rockspot Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Rockspot™
					</span>
				</Link>
				<div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<UserSection
						isLoggedIn={isLoggedIn}
						isUserOpen={isUserOpen}
						toggleUserDropdown={toggleUserDropdown}
						userDropdownRef={userDropdownRef}
						userDropdownItems={userDropdownItems}
					/>
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
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						) : (
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>
				<div
					className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
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
