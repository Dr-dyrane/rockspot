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
    <div className="space-y-2">
      <div>
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
          <option value="less">Less</option>
          <option value="normal">Normal</option>
          <option value="extra">Extra</option>
        </select>
      </div>

      <div>
        {/* Quantity field with increase and decrease buttons */}
        <label className="flex text-indigo-700 text-md font-bold mb-2 flex-row items-center">
          <span>
            <PiCirclesThreeFill color="" className="mr-2" />
          </span>
          Quantity
        </label>
        <div className="flex items-center">
          <input
            type="number"
            className="w-full p-2 border rounded-xl text-sm italic pl-4"
            value={modifiedOptions.quantity}
            onChange={(e) => handleDecreaseQuantity(e)}
          />

          <div className="ml-2 text-sm">
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
