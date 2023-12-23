// src/components/LocationRow.jsx
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCaretDown } from "react-icons/fa";

const LocationRow = () => {
	const [userLocation, setUserLocation] = useState("Loading...");

	useEffect(() => {
		// Use Geolocation API to get the user's location
		navigator.geolocation.getCurrentPosition(
			(position) => {
				// For simplicity, using a placeholder message
				setUserLocation("current location");
			},
			(error) => {
				console.error("Error getting user location:", error);
				setUserLocation("Unable to determine location");
			}
		);
	}, []); // Run the effect only once when the component mounts

	return (
		<div className="flex flex-row p-1 items-center space-x-1 bg-slate-300 w-full rounded-2xl">
			<img
				src="/orchid.jpg"
				className="h-10 w-10 rounded-full bg-indigo-700"
				alt="Rockspot delivery"
			/>

			<div className="flex-1">
				<div className="flex flex-row font-bold text-md items-center justify-between px-2">
					<div className="font-bold text-gray-400 text-sm">Deliver Now!</div>
					<div className="flex flex-row items-center text-small">{userLocation}<FaCaretDown className="ml-1" size={18} color="indigo" /></div>
					
				</div>
			</div>
		</div>
	);
};

export default LocationRow;
