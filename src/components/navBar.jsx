import React from "react";
import Select from "./select";
import { UseDarkMode } from "./useDarkMode";

export function NavBar() {
  return (
    <nav className="bg-gray-50 h-20  dark:bg-DarkBlue shadow-lg  ">
      <div className="flex h-20 justify-between items-center max-w-7xl m-auto pl-3 pr-3">
        <h1 className="dark:text-gray-50 text-3xl font-bold text-gray-700 sms:text-[22px]">
          Where in the world?
        </h1>
        <UseDarkMode />
      </div>
    </nav>
  );
}
