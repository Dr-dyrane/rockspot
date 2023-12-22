// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";

export default function App() {
	return (
		<Router>
			<div className="bg-slate-200 min-h-screen flex justify-center items-center text-indigo-700 font-bold text-center">
				<AppRoutes />
			</div>
		</Router>
	);
}
