import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export function UseDarkMode() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="flex outline-none items-center justify-center gap-2 p-4 rounded-3xl text-xl dark:text-gray-50 text-gray-700 font-medium "
      onClick={handleThemeSwitch}
    >
      <FontAwesomeIcon icon={faMoon} />
      <p className="sm:hidden">Dark Mode</p>
    </button>
  );
}
