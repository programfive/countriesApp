import React, { useMemo, useState } from "react";

const SelectOption = ({ value = "", active = false, updateValue, icon }) => {
  const handleChange = (e) => {
    e.preventDefault();
    updateValue(value);
    console.log(typeof value)
  };


  if (!icon) {
    icon = (
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
      </svg>
    );
  }

  return (
    <li
      className=" cursor-default dark:text-white text-gray-700  
       hover:text-gray-400 select-none relative py-2 pl-3 pr-9"
      onClick={handleChange}
    >
      <div className="flex items-center">
        <span className="ml-3 block font-normal truncate">{value}</span>
      </div>
      {active && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          {icon}
        </span>
      )}
    </li>
  );
};

const Select = ({
  name = "customSelect",
  value = "Filter by Region",
  options = [],
  icon,
}) => {
  const [state, setState] = useState({ value, showOptions: false });

  const handleClick = (e) => {
    e.preventDefault();

    setState((p) => ({ ...p, showOptions: !state.showOptions }));
  };

  const updateValue = (value) => {
    setState((p) => ({ ...p, showOptions: false, value }));
  };

  if (!icon) {
    icon = (
      <svg
        className={
          state.showOptions
            ? "h-5 w-5 text-gray-800 dark:text-white"
            : "h-5 w-5 text-gray-400"
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path>
      </svg>
    );
  }

  return (
    <div className=" relative  ">
      <input type="hidden" name={name} value={state.value} />
      <button
        type="button"
        className={
          state.showOptions
            ? "transition transition-all relative w-80 sm:w-full bg-gray-50 text-gray-700 dark:bg-DarkBlue dark:text-white  text-[1.4rem] rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default outline-none    "
            : "transition transition-all relative w-80 sm:w-full bg-gray-50 text-gray-700  dark:bg-DarkBlue dark:text-white text-[1.4rem]  rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default sm:text-xl"
        }
        onClick={handleClick}
      >
        <span className="flex items-center ">
          <span className="ml-3 block ">{state.value}</span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          {icon}
        </span>
      </button>
      {state.showOptions && (
        <div className="absolute mt-1 w-full  z-10 rounded-md bg-gray-50 dark:bg-DarkBlue  shadow-lg">
          <ul className=" rounded-md py-1 text-[1.2rem] bg-red-500   ring-opacity-5 overflow-auto  ">
            {options.map((option, idx) => {
              return (
                
                <SelectOption
                  key={idx}
                  value={option}
                  active={state.value === option}
                  updateValue={updateValue}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
