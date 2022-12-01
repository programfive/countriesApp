import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { NavBar } from "./components/navBar";
import { UseDarkMode } from "./components/useDarkMode";
import { ContentCountries } from "./components/contentCountries";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { CountryRoute } from "./pages/CountryRoute";
import { useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ContentCountries
                countries={countries}
                setCountries={setCountries}
              />
            }
          />
          <Route
            path="/:countryCode"
            element={<CountryRoute countries={countries} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
