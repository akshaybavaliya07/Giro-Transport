import React, { useState, useEffect, useRef } from "react";
import { NAV_ITEMS, NAV_LANGUAGES } from "../constants";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    code: "en",
    name: "En",
    flag: "https://flagcdn.com/us.svg",
  });

  const dropdownRef = useRef(null);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsDropdownOpen(false);
  };

  // close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 md:px-20 bg-white shadow-sm relative">
      {/* Mobile: menu + logo */}
      <div className="flex w-full items-center justify-between md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <img src="/logo.svg" alt="Giro Logo" className="h-9 w-auto" />
      </div>

      {/* Desktop navbar */}
      <div className="hidden md:flex justify-between items-center w-full">
        <img src="/logo.svg" alt="Giro Logo" className="h-10 w-auto" />

        <ul className="flex items-center space-x-10 font-semibold text-lg pl-24">
          {NAV_ITEMS.map((item, index) => (
            <li
              key={index}
              className="hover:text-[#4fa9db] cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-5 relative">
          <button className="border border-[#4fa9db] text-[#4fa9db] px-5 py-2 rounded-full font-semibold hover:bg-[#4fa9db] hover:text-white transition">
            Sign up
          </button>
          <button className="bg-[#4fa9db] text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
            Login
          </button>

          {/* Language selector */}
          <div className="relative z-50" ref={dropdownRef}>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 cursor-pointer select-none"
            >
              <img
                src={selectedLang.flag}
                alt={selectedLang.name}
                className="w-7 h-7 object-cover rounded-full border border-gray-200"
              />
              <span className="text-base text-gray-600 font-medium">
                {selectedLang.name}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-md border border-gray-100">
                {NAV_LANGUAGES.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => handleSelect(lang)}
                    className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    <img
                      src={lang.flag}
                      alt={lang.name}
                      className="w-6 h-6 object-cover rounded-full border border-gray-200"
                    />
                    <span className="text-gray-700 text-sm font-medium">
                      {lang.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 z-40 md:hidden">
          <ul className="flex flex-col items-start px-6 py-4 space-y-3 font-semibold text-base text-gray-700">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={index}
                className="hover:text-[#4fa9db] cursor-pointer transition w-full"
              >
                {item}
              </li>
            ))}
            <li className="hover:text-[#4fa9db] cursor-pointer transition w-full">
              Sign up
            </li>
            <li className="hover:text-[#4fa9db] cursor-pointer transition w-full">
              Login
            </li>

            {/* Language selector (mobile) */}
            <div className="relative w-full mt-2" ref={dropdownRef}>
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 cursor-pointer select-none"
              >
                <img
                  src={selectedLang.flag}
                  alt={selectedLang.name}
                  className="w-6 h-6 object-cover rounded-full border border-gray-200"
                />
                <span className="text-base text-gray-600 font-medium">
                  {selectedLang.name}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {isDropdownOpen && (
                <div className="mt-2 w-32 bg-white rounded-lg shadow-md border border-gray-100">
                  {NAV_LANGUAGES.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleSelect(lang)}
                      className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-6 h-6 object-cover rounded-full border border-gray-200"
                      />
                      <span className="text-gray-700 text-sm font-medium">
                        {lang.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
