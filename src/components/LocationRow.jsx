// src/components/LocationRow.jsx
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCaretDown } from "react-icons/fa";

const LocationRow = () => {
	const [userLocation, setUserLocation] = useState("Loading...");

	useEffect(() => {
		const getLocation = async () => {
			if (navigator.geolocation) {
				try {
					const position = await getCurrentPosition();
					const { latitude, longitude } = position.coords;

					const city = await getCityFromCoords(latitude, longitude);
					setUserLocation(city);
				} catch (error) {
					console.error("Error getting user location:", error);
					setUserLocation("Unable to determine location");
				}
			} else {
				setUserLocation("Geolocation is not supported by your browser");
			}
		};

		const getCurrentPosition = () => {
			return new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			});
		};
		const getCityFromCoords = async (latitude, longitude) => {
			const apiKey = import.meta.env.VITE_OPEN_CAGE_API_KEY;
			const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1&no_annotations=1`;

			try {
				const response = await fetch(apiUrl);
				const data = await response.json();

				if (data.results && data.results.length > 0) {
					const result = data.results[0];
					// const cityComponent = result.components.city;
					// const suburbComponent = result.components.suburb;
					const formattedAddress = result.formatted;
					// Use the city if available, otherwise use the suburb
					return (
						// cityComponent ||
						// suburbComponent ||
						formattedAddress ||
						"Unknown City"
					);
				} else {
					throw new Error("City not found");
				}
			} catch (error) {
				throw new Error("Error fetching city data");
			}
		};

		getLocation(); // Get location when the component mounts

		// Periodically update the location every 5 minutes
		const locationInterval = setInterval(getLocation, 5 * 60 * 1000);

		return () => {
			clearInterval(locationInterval); // Clear the interval on component unmount
		};
	}, []);

	return (
		<div className="flex flex-row p-2 items-center space-x-1 bg-slate-300 w-full lg:w-[600px] lg:h-13 rounded-2xl">
			<img
				src="/orchid.jpg"
				className="h-10 w-10 rounded-full bg-indigo-700"
				alt="Rockspot delivery"
			/>

			<div className="flex-1">
				<div className="sm:flex font-bold text-md items-center justify-between px-2 overflow-x-auto hide-scroll-bar">
					<div className="font-bold text-gray-400 text-sm">Deliver Now!</div>
					<div className="flex flex-row items-center text-sm justify-between">
						<div className="flex flex-row items-center">
							<FaMapMarkerAlt size={12} color="gray" />
							<span className="ml-1 whitespace-nowrap overflow-scroll hide-scroll-bar">
								{userLocation}
							</span>
						</div>

						<FaCaretDown className="ml-1" size={18} color="gray" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LocationRow;
