// src/pages/Menu.jsx
import React from "react";
import { Link } from "react-router-dom";
import { categories, featuredShawarmas } from "../data/shawarmaData";
import MenuCard from "../components/MenuCard";
import SearchBar from "../components/SearchBar";

const Menu = () => {
	return (
		<div className="p-4 max-w-screen-xl mx-auto relative">
			<div className="w-full text-slate-900 text-start font-bold text-4xl sm:text-5xl p-5 md:py-8 bg-menu bg-cover h-60 sm:h-[425px] lg:w-[640px] block justify-center absolute top-0 start-0 lg:z-20">
				<p className="flex flex-col items-center md:items-start p-2 my-8 bg-slate-100/45 rounded-xl">
					~ OUR MENU ~ <br className="md:hidden" />
					<span className="text-2xl sm:text-3xl font-medium md:ml-[35%]">
						Your Gateway To Ecstacy
					</span>
				</p>
				<p className="items-center italic text-xs hidden md:block my-4 font-medium p-4 bg-slate-100/80 rounded-xl">
					Indulge in a culinary journey as you explore our diverse menu
					featuring mouth-watering shawarmas in various categories, each crafted
					to perfection. Discover signature delights and delightful combinations
					that promise to elevate your shawarma experience at every bite
				</p>
			</div>
			<div className="hidden lg:block bg-menu h-[425px] lg:w-[707px] xl:w-[640px] justify-center absolute top-0 right-0"></div>
			<div className="hidden xl:block bg-menu h-[425px] w-[640px] justify-center absolute top-0 right-[640px] z-10"></div>

			<div className="w-full mb-6 mt-60 sm:mt-[425px] z-30">
				<SearchBar placeholder="Search for Shawarma..." />
			</div>

			{/* Featured Shawarmas */}
			<section>
				<h2 className="text-2xl font-bold mb-4">Featured Shawarmas</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
					{featuredShawarmas.map((shawarma) => (
						<div key={shawarma.id} className="p-1.5">
							<MenuCard shawarma={shawarma} />
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Menu;
