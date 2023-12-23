// UserSection.js
import React from "react";
import { Link } from "react-router-dom";

const UserSection = ({
	isLoggedIn,
	isUserOpen,
	toggleUserDropdown,
	userDropdownRef,
	userDropdownItems,
}) => {
	return (
		<div>
			{isLoggedIn ? (
				<>
					<button
						className="flex text-sm bg-slate-800 rounded-full md:me-0 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-600"
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
							isUserOpen ? "block" : "hidden"
						} absolute my-4 right-2 text-base list-none bg-white divide-y divide-slate-100 rounded-lg shadow dark:bg-slate-700 dark:divide-slate-600`}
						id="user-dropdown"
						ref={userDropdownRef}
					>
						<div className="px-4 py-3">
							<span className="block text-sm text-slate-900 dark:text-white">
								Bonnie Green
							</span>
							<span className="block text-sm text-slate-500 truncate dark:text-slate-400">
								name@flowbite.com
							</span>
						</div>
						<ul className="py-2" aria-labelledby="user-menu-button">
							{userDropdownItems.map((item) => (
								<li key={item.to}>
									<Link
										to={item.to}
										className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 dark:text-slate-200 dark:hover:text-white"
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
						className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
					>
						Get started
					</button>
				</Link>
			)}
		</div>
	);
};

export default UserSection;
