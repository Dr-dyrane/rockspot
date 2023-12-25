// src/components/Orders.jsx
import React, { useState } from "react";
import { getCartItems } from "../helpers/cartHelpers";
import OngoingOrders from "../components/OngoingOrders";
import CompletedOrders from "../components/CompletedOrders";
import { Link } from "react-router-dom";
import { MdNextPlan } from "react-icons/md";
import { IoChevronBackCircle } from "react-icons/io5";

const Orders = () => {
	const [view, setView] = useState("ongoing"); // Default view is "ongoing"

	const cartItems = getCartItems();

	return (
		<div className="container mx-auto mt-4 p-4 relative">
			<h2 className="text-2xl font-bold mb-4">Your Orders</h2>
			<Link to="/menu" className="top-5 left-4 absolute">
				<IoChevronBackCircle size={32} />
			</Link>
			<div className="mb-4 bg-slate-300 rounded-lg flex flex-row p-1">
				<button
					className={`mr-4 px-4 py-2 rounded-lg w-full ${
						view === "ongoing" ? "bg-indigo-600 text-white" : ""
					}`}
					onClick={() => setView("ongoing")}
				>
					Ongoing
				</button>
				<button
					className={`px-4 py-2 rounded-lg w-full ${
						view === "completed" ? "bg-indigo-600 text-white" : ""
					}`}
					onClick={() => setView("completed")}
				>
					Completed
				</button>
			</div>
			{view === "ongoing" ? (
				<>
					<OngoingOrders cartItems={cartItems} />{" "}
					{cartItems.length !== 0 && (
						<Link to="/checkout">
							<p className="mt-10 items-center justify-end p-2 italic font-bold flex flex-row text-lg">
								Proceed to checkout{" "}
								<span>
									<MdNextPlan size={24} className="ml-5" />
								</span>
							</p>
						</Link>
					)}
				</>
			) : (
				<CompletedOrders cartItems={cartItems} />
			)}
		</div>
	);
};

export default Orders;
