import { useState } from "react";
import { ChevronDown } from "lucide-react";



export default function MeasurementDropdown(measurements) {
  const [selected, setSelected] = useState(measurements.measurements[0]);
  const [isOpen, setIsOpen] = useState(false);
  console.log(measurements.measurements);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className=" w-64">
      <button
        onClick={toggleDropdown}
        className=" flex justify-between items-center bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        {selected}
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>
      {isOpen && (
        <ul className="overflow-hidden  mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {measurements?.measurements?.map((measurement, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(measurement);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {measurement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
