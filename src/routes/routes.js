// routes/routes.js
import Home from "../pages/Home";

// Define a functional component to use the hook
const RouteConfig = () => {
	// initiate hooks and pass as props

	const routes = [
		{
			path: "/",
			element: Home,
			props: {
				//Add props if available
			},
		},
		// Add more routes as needed
	];

	return routes;
};

export default RouteConfig;
