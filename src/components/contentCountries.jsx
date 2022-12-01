import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CardCountries } from "./cardCountries";
import {
  ApiRestCountries,
  searchApiCountries,
  regionApiCountries,
} from "../services/apiRestCountries";
import UseLoading from "./useLoading";
import { useNavigate } from "react-router-dom";

export function ContentCountries({ countries, setCountries }) {
  const [loading, setLoading] = useState(false);
  const countriesInputRef = useRef();
  const regionRef = useRef();
  const notFound = countries.status || countries.message;
  const navigate = useNavigate();
  const continents = [
    "Filter by Region",
    "americas",
    "africa",
    "asia",
    "europe",
    "oceania",
  ];

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const getApiData = async () => {
    let data = await ApiRestCountries();
    setLoading(false);
    setCountries(data);
  };

  const getSearchApiCountries = async (name) => {
    let response = await searchApiCountries(name);
    setCountries(response);
  };
  useEffect(() => {
    getApiData();
    setLoading(true);
  }, []);

  const countriesSearch = () => {
    const searchValue = countriesInputRef.current.value;
    if (searchValue.trim()) {
      getSearchApiCountries(searchValue);
    } else {
      getApiData();
    }
  };

  const getCountriesRegion = async (name) => {
    const data = await regionApiCountries(name);
    setCountries(data);
  };

  const countriesRegion = (region) => {
    if (region === "Filter by Region") {
      getApiData();
    } else {
      getCountriesRegion(region);
    }
  };

  const SelectOption = ({ value = "", active = false, updateValue, icon }) => {
    const handleChange = (e) => {
      e.preventDefault();
      updateValue(value);
      countriesRegion(value);
    };

    return (
      <li
        className=" cursor-default dark:text-white text-gray-700  
         hover:text-gray-400 select-none relative py-2 pl-3 pr-9"
        onClick={handleChange}
      >
        <div className="flex items-center">
          <span className="ml-3 block font-normal truncate">{value}</span>
        </div>
      </li>
    );
  };

  const Select = ({
    name = "customSelect",
    value = "",
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
            <span className="ml-3 block ">Filter by Region</span>
          </span>
        </button>
        {state.showOptions && (
          <div className="absolute mt-1 w-full  z-10 rounded-md bg-gray-50 dark:bg-DarkBlue  shadow-lg">
            <ul className=" rounded-md py-1 text-[1.2rem]  ring-opacity-5 overflow-auto  ">
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

  const showDetails = (code) => {
    navigate(`/${code}`);
  };
  return (
    <div className=" mt-8 m-auto w-full ">
      <form
        onSubmit={onSubmit}
        className="max-w-7xl w-full m-auto flex flex-row justify-between items-center p-3 sm:flex-col sm:gap-y-4"
      >
        <div className="flex items-center  dark:bg-DarkBlue shadow-lg text-xl rounded-lg bg-gray-50 sm:w-full w-96 ">
          <div className="flex justify-center items-center ml-5">
            <FontAwesomeIcon
              icon={faSearch}
              className="  dark:text-gray-50 text-gray-700 "
            />
          </div>

          <input
            ref={countriesInputRef}
            type="search"
            onChange={countriesSearch}
            placeholder="Search for country..."
            className="p-4 text-[1.4rem] w-full outline-none bg-transparent rounded-r-lg dark:text-gray-50 text-500 "
          />
        </div>

        <div className="shadow-lg sm:w-full">
          <Select options={continents} />
        </div>
      </form>

      <div className="mt-10 p-3 flex flex-wrap gap-5">
        <div className="flex flex-wrap gap-10 m-auto justify-center items-center">
          {!notFound ? (
            loading ? (
              <UseLoading />
            ) : (
              countries.map((country) => {
                return (
                  <CardCountries
                    key={country.alpha3Code}
                    code={country.alpha3Code}
                    name={country.name}
                    capital={country.capital}
                    population={countries.population}
                    region={country.region}
                    flag={country.flag}
                    showDetails={showDetails}
                  />
                );
              })
            )
          ) : (
            <h2 className="text-2xl dark:text-gray-50 text-gray-700  ">
              No Countries found...
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
