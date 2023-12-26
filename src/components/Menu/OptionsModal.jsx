// A new component for rendering the options modal
import React from "react";
import { PiPepperFill, PiToggleRightFill } from "react-icons/pi";

const OptionsModal = ({
	modifiedOptions,
	setModifiedOptions,
	handleSaveOptions,
	handleToggleOptions,
}) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
			<div className="bg-gray-200 p-6 rounded-xl relative">
				{/* ... (option form fields) */}
				<label className="flex text-indigo-700 text-md font-bold mb-2 flex-row items-center">
					<span>
						<PiPepperFill color="red" className="mr-2" />
					</span>
					Spiciness
				</label>
				<select
					className="w-full p-2 border rounded-xl text-sm italic"
					value={modifiedOptions.spiciness}
					onChange={(e) =>
						setModifiedOptions({
							...modifiedOptions,
							spiciness: e.target.value,
						})
					}
				>
					<option value="normal">Normal</option>
					<option value="extra">Extra</option>
					{/* Add more options as needed */}
				</select>

				{/* Repeat similar logic for other options */}
				{/* ... (customize the form fields) */}

				<button
					className="mt-4 bg-indigo-600 text-white py-1 px-4 rounded-lg w-full"
					onClick={handleSaveOptions}
				>
					Save
				</button>
				<button
					className="absolute top-2 right-2"
					onClick={handleToggleOptions}
				>
					<PiToggleRightFill size={36} />
				</button>
			</div>
		</div>
	);
};

export default OptionsModal;
