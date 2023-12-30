import React from "react";
import {
	PiPepperFill,
	PiCirclesThreeFill,
	PiCaretUpFill,
	PiCaretDownFill,
} from "react-icons/pi";

const OptionsForm = ({
	modifiedOptions,
	setModifiedOptions,
	handleIncreaseQuantity,
	handleDecreaseQuantity,
}) => {
	return (
		<div className="space-y-2 mt-4">
			<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
				<div className="flex flex-row space-x-2">
					{/* Spiciness */}
					<div className="flex flex-row items-center space-x-2">
						<label className="text-indigo-700 text-xs font-bold">
							Spiciness
						</label>
						<select
							className="w-full md:w-auto p-[3px] rounded-md text-xs italic"
							value={modifiedOptions.spiciness}
							onChange={(e) =>
								setModifiedOptions({
									...modifiedOptions,
									spiciness: e.target.value,
								})
							}
						>
							<option value="less">Less</option>
							<option value="normal">Normal</option>
							<option value="extra">Extra</option>
						</select>
					</div>
					{/* Ketchup */}
					<div className="flex flex-row items-center space-x-2">
						<label className="text-indigo-700 text-xs font-bold">Ketchup</label>
						<select
							className="w-full md:w-auto p-[3px] rounded-md text-xs italic"
							value={modifiedOptions.ketchup}
							onChange={(e) =>
								setModifiedOptions({
									...modifiedOptions,
									ketchup: e.target.value,
								})
							}
						>
							<option value="less">Less</option>
							<option value="normal">Normal</option>
							<option value="extra">Extra</option>
						</select>
					</div>
				</div>
			</div>

			{/* Barma */}
			<div className="flex flex-row items-center space-x-2">
				<label className="text-indigo-700 text-xs font-bold">Barma</label>
				<select
					className="w-full md:w-auto p-[3px] rounded-md text-xs italic"
					value={modifiedOptions.barma}
					onChange={(e) =>
						setModifiedOptions({
							...modifiedOptions,
							barma: e.target.value,
						})
					}
				>
					<option value="less">Less</option>
					<option value="normal">Normal</option>
					<option value="extra">Extra</option>
				</select>
			</div>
			<div className="flex flex-row space-x-4">
				{/* Hotdog */}
				<div className="flex flex-row items-center space-x-2">
					<label className="text-indigo-700 text-xs font-bold">Hotdog</label>
					<select
						className="w-full md:w-auto p-[3px] rounded-md text-xs italic"
						value={modifiedOptions.hotdog ? "true" : "false"}
						onChange={(e) =>
							setModifiedOptions({
								...modifiedOptions,
								hotdog: e.target.value === "true",
							})
						}
					>
						<option value="false">No</option>
						<option value="true">Yes</option>
					</select>
				</div>
				{/* Hotdog Quantity */}
				{modifiedOptions.hotdog && (
					<div className="flex flex-row items-center space-x-2">
						<label className="text-indigo-700 text-xs font-bold">Number of Hotdogs</label>
						<div className="flex items-center">
							<input
								type="number"
								className="w-full md:w-auto p-[3px] rounded-md text-xs italic pl-4"
								value={modifiedOptions.hotdogQuantity}
								onChange={(e) =>
									setModifiedOptions({
										...modifiedOptions,
										hotdogQuantity: parseInt(e.target.value),
									})
								}
								min="1"
								max="4"
							/>
							<div className="ml-2 text-xs">
								<button
									className=""
									onClick={() =>
										setModifiedOptions({
											...modifiedOptions,
											hotdogQuantity: modifiedOptions.hotdogQuantity + 1,
										})
									}
								>
									<PiCaretUpFill />
								</button>
								<button
									className=""
									onClick={() =>
										setModifiedOptions({
											...modifiedOptions,
											hotdogQuantity: Math.max(
												1,
												modifiedOptions.hotdogQuantity - 1
											),
										})
									}
								>
									<PiCaretDownFill />
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
			{/* Quantity */}
			<div className="flex flex-row items-center space-x-4">
				<label className="text-indigo-700 text-xs font-bold">
					Total Quantity
				</label>
				<div className="flex items-center">
					<input
						type="number"
						className="w-full md:w-auto p-[3px] border rounded-md text-xs italic pl-4"
						value={modifiedOptions.quantity}
						onChange={(e) => handleDecreaseQuantity(e)}
						min="1"
						max="10"
					/>
					<div className="ml-2 text-xs">
						<button className="" onClick={handleIncreaseQuantity}>
							<PiCaretUpFill />
						</button>
						<button className="" onClick={handleDecreaseQuantity}>
							<PiCaretDownFill />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OptionsForm;
