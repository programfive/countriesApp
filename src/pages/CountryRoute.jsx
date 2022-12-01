import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";

export function CountryRoute({ countries }) {
  const params = useParams();
  const navigate = useNavigate();

  let name,
    flagImg,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

  countries.forEach((country) => {
    if (country.alpha3Code === params.countryCode) {
      name = country.name;
      flagImg = country.flag;
      nativeName = country.nativeName;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
      topLevelDomain = country.topLevelDomain;

      country.currencies.forEach((currency) => {
        currencies.push(currency.name);
      });
      country.languages.forEach((language) => {
        languages.push(language.name);
      });
      country.borders?.forEach((border) => {
        borders.push(border);
      });
    }
  });
  const onBack = () => navigate("/");

  return (
    <div className="max-w-7xl  w-full  m-auto p-3 ">
      <div className="mt-10">
        <button
          onClick={onBack}
          className="dark:bg-gray-700 bg-gray-50 p-3 rounded-lg shadow-lg flex items-center justify-center gap-2 w-32 text-gray-700 dark:text-gray-50 "
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
      </div>

      {/**content country */}

      <div className="flex  justify-center items-center mt-16 mb-16 lsm:flex-col ">
        <div className="max-w-xl w-full shadow-lg ">
          <img
            src={flagImg}
            alt={name}
            className="w-full h-full object-cover shadow-ls"
          />
        </div>

        <div className=" w-full p-12  max-w-[650px] sm:p-3 ">
          <h2 className="text-2xl dark:text-gray-50 text-gray-700 font-bold ">
            {name}
          </h2>
          <div className="  flex justify-between w-full mt-8 mb-8  sm:flex-col">
            {/**left */}
            <div>
              <p className="text-lg  font-bold text-gray-700 dark:text-gray-50   ">
                Native Name:{" "}
                <strong
                  className="dark:text-gray-300 font-medium
                 "
                >
                  {nativeName}
                </strong>
              </p>
              <p className="text-lg font-bold text-gray-700 dark:text-gray-50   ">
                Population:{" "}
                <strong
                  className="dark:text-gray-300 font-medium
                 "
                >
                  {population}
                </strong>
              </p>
              <p className="text-lg font-bold text-gray-700 dark:text-gray-50   ">
                Region:{" "}
                <strong
                  className="dark:text-gray-300 font-medium
                 "
                >
                  {region}
                </strong>
              </p>
              <p className="text-lg font-bold text-gray-700 dark:text-gray-50   ">
                Sub region:{" "}
                <strong
                  className="dark:text-gray-300 font-medium
                 "
                >
                  {subregion}
                </strong>
              </p>
              <p className="text-lg font-bold text-gray-700 dark:text-gray-50   ">
                Capital:{" "}
                <strong
                  className="dark:text-gray-300 font-medium
                 "
                >
                  {capital}
                </strong>
              </p>
            </div>
            {/**left */}
            <div>
              <p className="text-lg font-bold text-gray-700 dark:text-gray-50   ">
                Top Level Domain:{" "}
                <strong
                  className="dark:text-gray-300 font-medium
                 "
                >
                  {topLevelDomain}
                </strong>
              </p>
              <div className="text-lg font-bold text-gray-700 dark:text-gray-50   ">
                Currencies:{" "}
                {currencies.map((currency, index) => {
                  if (currencies.indexOf(currency) !== currency) {
                    return (
                      <span
                        key={index}
                        className="dark:text-gray-300  text-gray-600 font-light"
                      >
                        {`${currency} `}
                      </span>
                    );
                  }
                })}
              </div>
              <p className="text-lg font-bold text-gray-700 dark:text-gray-50   ">
                Languages:{" "}
                {languages.map((language, index) => {
                  if (languages.indexOf(language) !== language) {
                    return (
                      <span
                        key={index}
                        className="dark:text-gray-300  text-gray-600 font-light "
                      >
                        {`${language} `}
                      </span>
                    );
                  }
                })}
              </p>
            </div>
          </div>

          <div className="flex gap-3  justify-start items-center flex-wrap">
            <h2 className="text-lg text-gray-700 dark:text-gray-50 font-bold">
              Border Countries:
            </h2>
            {borders.length ? (
              borders.map((border) => {
                return (
                  <div
                    key={border}
                    className="flex justify-center  items-center dark:bg-DarkBlue p-2 w-[60px] dark:text-gray-50  rounded-sm shadow-lg"
                  >
                    <p>{border}</p>
                  </div>
                );
              })
            ) : (
              <h1 className="text-lg font-light dark:text-gray-400 text-gray-600 ">
                No borders
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
