// src/components/CartItem.jsx
import React from "react";

const CartItem = ({ item }) => {
	return (
		<div className="grid grid-cols-4 gap-4 text-sm sm:text-md md:text-lg lg:text-xl items-center border-b border-gray-300 py-2 w-full">
			<div className="col-span-1">
				{" "}
				<img
					src={item.image}
					alt={item.name}
					className="w-full h-16 sm:h-20 md:h-28 lg:h-40 object-cover rounded-lg"
				/>
			</div>
			<div className="col-span-2 text-left">
				<p className="font-bold">{item.name}</p>
			</div>{" "}
			<div className="col-span-1 text-right">
				<p className="text-indigo-700 font-bold">₦{item.price.toFixed(2)}</p>
			</div>
		</div>
	);
};

export default CartItem;
