// routes/appRoutes.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import RouteConfig from "./routes"; // Renamed to avoid naming conflicts

const AppRoutes = () => {
	const routesConfig = RouteConfig();
	return (
		<Routes>
			{routesConfig.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.element {...route.props} />} // Use JSX element instead of string
				/>
			))}
		</Routes>
	);
};

export default AppRoutes;
