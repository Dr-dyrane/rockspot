// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import BottomNavbar from "./components/BottomNavbar";

const App = () => {
	return (
		<Router>
			<div className="bg-slate-200 min-h-screen flex flex-col">
				<Navbar />
				<div className="flex-1 justify-center items-center text-indigo-700 font-bold text-center">
					<AppRoutes />
				</div>
				<Footer />
        <BottomNavbar />
			</div>
		</Router>
	);
};

export default App;
