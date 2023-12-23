// src/pages/Home.jsx
import React from "react";
import ShawarmaCard from "../components/ShawarmaCard";
import CategoryCard from "../components/CategoryCard";
import LocationRow from "../components/LocationRow";
import SearchBar from "../components/SearchBar";

const Home = () => {
	const categories = [
		{
			id: 1,
			name: "Chicken",
			image:
				"https://images.pexels.com/photos/4728230/pexels-photo-4728230.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			id: 2,
			name: "Beef",
			image:
				"https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			id: 3,
			name: "Combo",
			image:
				"https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			id: 4,
			name: "Kebab",
			image:
				"https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			id: 5,
			name: "Beef",
			image:
				"https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		// Add more categories as needed
	];

	const featuredShawarmas = [
		{
			id: 1,
			name: "Spicy Chicken Shawarma",
			price: 1500,
			image:
				"https://images.pexels.com/photos/4728230/pexels-photo-4728230.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			id: 2,
			name: "Classic Beef Shawarma",
			price: 1500,
			image:
				"https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			id: 3,
			name: "Chicken Beef Shawarma",
			price: 2000,
			image:
				"https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		// Add more featured shawarmas as needed
	];

	return (
		<div className="p-4 flex flex-col items-center justify-center">
			<LocationRow />

			<SearchBar placeholder="Search for Shawarma..." />

			<div className="justify-center items-center p-1 grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-[8.5rem] mt-8 max-w-sm sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl overflow-x-scroll hide-scroll-bar">
				{categories.map((category) => (
					<CategoryCard key={category.id} category={category} />
				))}
			</div>

			<div className="flex flex-col items-center justify-center mt-8">
				<h2 className="text-2xl font-semibold mb-4">Featured Shawarmas</h2>
				<div className="flex items-center justify-center space-x-2 p-1 max-w-sm sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto overflow-x-scroll hide-scroll-bar">
					{featuredShawarmas.map((shawarma) => (
						<div key={shawarma.id} className="inline-block p-2 h-64">
							<ShawarmaCard shawarma={shawarma} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
