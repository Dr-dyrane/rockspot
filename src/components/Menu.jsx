import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ to, label }) => {
	const location = useLocation();

	return (
		<li>
			<Link
				to={to}
				className={`block py-2 px-3 md:p-0 ${
					location.pathname === to
						? "text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:dark:text-indigo-500"
						: "text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-indigo-700 md:dark:hover:text-indigo-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
				}`}
				aria-current={location.pathname === to ? "page" : undefined}
			>
				{label}
			</Link>
		</li>
	);
};

export default Menu;
