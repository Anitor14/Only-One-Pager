import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect, useState } from "react";
import {
  germanFlag,
  netherlandFlag,
  englandFlag,
  franceFlag,
  italyFlag,
  spainFlag,
} from "../assets/images/flags";

const CountriesDropdown = () => {
  const { t } = useTranslation();
  const countries = [
    { name: "Deutsch", image: germanFlag, code: "de" },
    { name: "Nederlands", image: netherlandFlag, code: "du" },
    { name: "English", image: englandFlag, code: "en" },
    { name: "Français", image: franceFlag, code: "fr" },
    { name: "Español", image: spainFlag, code: "es" },
    { name: "Italiano", image: italyFlag, code: "it" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  let storedLanguage = localStorage.getItem("language");
  const matchingCountry = countries.find(
    (language) => language.code === storedLanguage
  );
  const [selected, setSelected] = useState(matchingCountry || countries[0]);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (language) => {
    i18next.changeLanguage(language);
    localStorage.setItem("language", language);
    let storedLanguage = localStorage.getItem("language");
    const matchingCountry = countries.find(
      (language) => language.code === storedLanguage
    );
    setSelected(matchingCountry);
    setIsOpen(false);
  };
  const getBrowserLanguage = async () => {
    if (!localStorage.getItem("language")) {
      console.log("we are here.");
      const userLanguage = navigator.language.split("-")[0];
      localStorage.setItem("language", userLanguage);
      storedLanguage = userLanguage;
      changeLanguage(userLanguage);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      getBrowserLanguage();
    } else if (localStorage.getItem("language")) {
      changeLanguage(localStorage.getItem("language"));
    }
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex gap-1.5 items-center max-sm:justify-center justify-start w-full p-2 border rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={toggleDropdown}
      >
        <span className="" />
        <img src={selected.image} alt={selected.name} className="w-5 h-5" />
        <span className="text-[0.875rem] text-gray-400  max-sm:hidden">
          {selected.name}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-gray-300 shadow-lg rounded-md">
          {countries.map((language) => (
            // console.log(language.code)
            <button
              key={language.name}
              type="button"
              className="flex items-center w-full mx-auto max-sm:justify-center justify-start sm:justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => changeLanguage(language.code)}
            >
              <img
                src={language.image}
                alt={language.name}
                className="w-auto h-6 mr-2"
              />
              <span className="text-[0.875rem] text-gray-400  max-sm:hidden">
                {language.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountriesDropdown;
