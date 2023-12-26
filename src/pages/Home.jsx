// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import ShawarmaCard from "../components/Home/ShawarmaCard";
import CategoryCard from "../components/Home/CategoryCard";
import LocationRow from "../components/Home/LocationRow";
import SearchBar from "../components/SearchBar";
import { categories, featuredShawarmas } from "../data/shawarmaData";
import Rating from "../components/Home/Rating";

const Home = () => {
	const rating = 4.95;
	const reviews = 73;
	const createInfiniteLoop = (items) => {
		const loopedItems = [];
		for (let i = 0; i < 10; i++) {
			// Adjust the loop count as needed
			loopedItems.push(...items);
		}
		return loopedItems;
	};

	// Create infinite loops of categories and featuredShawarmas
	const infiniteCategories = createInfiniteLoop(categories);
	const infiniteFeaturedShawarmas = createInfiniteLoop(featuredShawarmas);
	return (
		<div className="p-4 flex flex-col items-center justify-center relative">
			<div className="w-full text-slate-100 text-start font-semibold text-4xl sm:text-5xl p-5 md:py-8 bg-hero bg-cover h-60 sm:h-[425px] lg:w-[640px] block justify-center absolute top-0 start-0 lg:z-20">
				<p>
					Shawarma <br className="md:hidden" />
					Your Way
				</p>
				<p className="italic text-xs hidden md:block w-80 my-8 font-normal">
					"culinary masterpiece, bursting with flavors that transport your taste
					buds. Each bite is a journey of delight, making it the ultimate go-to
					for shawarma enthusiasts!"
				</p>

				<div className="flex items-start flex-col mt-5">
					<div className="flex">
						<Rating rating={rating} reviews={reviews} />
					</div>
				</div>
			</div>
			<div className="hidden lg:block bg-hero h-[425px] lg:w-[707px] xl:w-[640px] justify-center absolute top-0 right-0"></div>
			<div className="hidden xl:block bg-hero h-[425px] w-[640px] justify-center absolute top-0 right-[640px] z-10"></div>

			<div className="w-full lg:flex-row mt-60 sm:mt-[425px] lg:mt-[340px] z-30 flex flex-col space-x-0 lg:justify-between lg:space-x-2">
				<LocationRow />
				<SearchBar placeholder="Search for Shawarma..." />
			</div>
			<div className="mt-8 relative">
				<h2 className="flex text-2xl font-bold mb-4 items-center justify-start">
					Categories
				</h2>
				<p className="text-start text-xs sm:text-sm mb-4 opacity-80 font-medium italic">
					Explore a variety of mouth-watering shawarmas in different categories.
				</p>
				<div className="justify-center space-x-2 items-center py-2 flex mt-4 max-w-sm sm:max-w-[640px] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl overflow-x-scroll hide-scroll-bar">
					{infiniteCategories.map((category, index) => (
						<div key={`${category.id}-${index}`} className="py-1 inline-block">
							<CategoryCard category={category} />
						</div>
					))}
					<div className="flex items-center absolute right-0 top-1 text-xs font-medium">
						<Link
							to="/menu"
							className="bg-transparent border-[1px] border-indigo-700 text-indigo-700 px-2.5 py-1.5 rounded-3xl hover:bg-indigo-700 hover:text-white focus:outline-none focus:border-indigo-800 focus:ring focus:ring-indigo-200"
						>
							See Menu
						</Link>
					</div>
				</div>
			</div>

			<div className="flex flex-col mt-8 relative">
				<h2 className="flex text-2xl font-bold mb-4 items-center justify-start">
					Featured Shawarmas
				</h2>
				<p className="text-start text-xs m:text-sm opacity-80 mb-4 font-medium italic">
					Indulge in our signature shawarmas, carefully crafted for a delightful
					experience.
				</p>
				<div className="flex items-center justify-center space-x-2 py-1 max-w-sm sm:max-w-[640px] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto overflow-scroll hide-scroll-bar">
					{infiniteFeaturedShawarmas.map((shawarma, index) => (
						<div
							key={`${shawarma.id}-${index}`}
							className="inline-block py-2 px-0.5 h-64 hover:animate-pulse"
						>
							{/* Added 'animate-bounce' for subtle bouncing animation */}
							<ShawarmaCard shawarma={shawarma} />
						</div>
					))}
					<div className="flex items-center absolute right-0 top-1 text-xs font-medium">
						<Link
							to="/menu"
							className="bg-transparent border-[1px] border-indigo-700 text-indigo-700 px-2.5 py-1.5 rounded-3xl hover:bg-indigo-700 hover:text-white focus:outline-none focus:border-indigo-800 focus:ring focus:ring-indigo-200"
						>
							See Menu
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
