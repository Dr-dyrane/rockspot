import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isLoggedIn, setLoggedIn] = useState(true);
	const [isUserOpen, setUserOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
		setUserOpen(false);
	};

	const toggleUserDropdown = () => {
		if (isLoggedIn) {
			setUserOpen(!isUserOpen);
		}
	};

	const menuItems = [
		{ to: "/", label: "Home" },
		{ to: "/menu", label: "Menu" },
		{ to: "/services", label: "Services" },
		{ to: "/contact", label: "Contact" },
	];

	const userDropdownItems = [
		{ to: "/dashboard", label: "Dashboard" },
		{ to: "/settings", label: "Settings" },
		{ to: "/earnings", label: "Earnings" },
		{ to: "/sign-out", label: "Sign out" },
	];

	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link
					to="/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img src="/logo.svg" className="h-8 rounded" alt="Rockspot Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Rockspot
					</span>
				</Link>
				<div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<div>
						{isLoggedIn ? (
							<>
								<button
									className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
									type="button"
									id="user-menu-button"
									aria-expanded={isUserOpen}
									data-dropdown-toggle="user-dropdown"
									data-dropdown-placement="bottom"
									onClick={toggleUserDropdown}
								>
									<span className="sr-only">Open user menu</span>
									<img
										className="w-8 h-8 rounded-full"
										src="/logo.png"
										alt="user photo"
									/>
								</button>
								{/* User dropdown menu */}
								<div
									className={`z-50 ${
										isUserOpen ? "" : "hidden"
									} absolute my-4 right-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
									id="user-dropdown"
								>
									<div className="px-4 py-3">
										<span className="block text-sm text-gray-900 dark:text-white">
											Bonnie Green
										</span>
										<span className="block text-sm text-gray-500 truncate dark:text-gray-400">
											name@flowbite.com
										</span>
									</div>
									<ul className="py-2" aria-labelledby="user-menu-button">
										{userDropdownItems.map((item) => (
											<li key={item.to}>
												<Link
													to={item.to}
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
												>
													{item.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</>
						) : (
							<Link to="/login">
								<button
									type="button"
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Get started
								</button>
							</Link>
						)}
					</div>
					<button
						data-collapse-toggle="navbar-cta"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
				>
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
