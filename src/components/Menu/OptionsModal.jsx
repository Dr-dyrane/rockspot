// A new component for rendering the options modal
import React, { useEffect, useRef } from "react";
import { PiToggleRightFill } from "react-icons/pi";
import OptionsForm from "./OptionsForm";

const OptionsModal = ({
	modifiedOptions,
	setModifiedOptions,
	handleSaveOptions,
	handleToggleOptions,
	handleQuantityChange,
	shawarmaPrice,
}) => {
	const handleIncreaseQuantity = () => {
		const newQuantity = Math.min(modifiedOptions.quantity + 1, 10);
		handleQuantityChange(newQuantity);
	};

	const handleDecreaseQuantity = () => {
		const newQuantity = Math.max(modifiedOptions.quantity - 1, 1);
		handleQuantityChange(newQuantity);
	};
	// Calculate modified price based on quantity and hotdog options
	const calculateModifiedPrice = () => {
		let modifiedPrice = shawarmaPrice * modifiedOptions.quantity;

		if (modifiedOptions.hotdog) {
			let hotdogQuantity =
				modifiedOptions.quantity * modifiedOptions.hotdogQuantity;
			modifiedPrice += hotdogQuantity * 500;
		}

		return modifiedPrice;
	};

	const modalRef = useRef(null);

	// Close the modal when clicking outside the div with bg-white/90
	const handleCloseModal = (e) => {
		if (!modalRef.current.contains(e.target)) {
			handleToggleOptions();
		}
	};

	useEffect(() => {
		// Attach the event listener when the component mounts
		document.addEventListener("mousedown", handleCloseModal);

		// Detach the event listener when the component unmounts
		return () => {
			document.removeEventListener("mousedown", handleCloseModal);
		};
	}, [handleToggleOptions]);

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
			<div
				ref={modalRef}
				className="bg-white/90 p-6 rounded-xl space-y-2 relative"
			>
				{/* Render the OptionsForm component */}
				<OptionsForm
					modifiedOptions={modifiedOptions}
					setModifiedOptions={setModifiedOptions}
					handleIncreaseQuantity={handleIncreaseQuantity}
					handleDecreaseQuantity={handleDecreaseQuantity}
				/>

				{/* Display the calculated modified price */}
				<div className="text-indigo-700 text-sm font-bold mt-2">
					Total Price: ₦{calculateModifiedPrice()}
				</div>

				{/* Repeat similar logic for other options */}
				{/* ... (customize the form fields) */}
				{/* <div className="flex flex-row space-x-2 text-sm">
					<button
						className="mt-2 border border-rose-500 hover:border-0 text-rose-600 hover:bg-rose-500 hover:text-white py-2 px-4 rounded-lg w-full"
						onClick={handleToggleOptions}
					>
						Close
					</button>
					<button
						className="mt-2 border text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded-lg w-full"
						onClick={handleSaveOptions}
					>
						Save
					</button>
				</div> */}

				<button
					className="absolute top-0 right-2"
					onClick={handleToggleOptions}
				>
					<PiToggleRightFill
						size={36}
						color=""
						className="text-gray-500 hover:text-rose-500"
					/>
				</button>
			</div>
		</div>
	);
};

export default OptionsModal;
