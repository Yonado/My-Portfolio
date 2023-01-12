"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";

const lightMode = (
  <svg viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g
        clip-path="url(#a)"
        stroke="#000000"
        stroke-width="1.5"
        stroke-miterlimit="10"
      >
        {" "}
        <path
          d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
          stroke-linecap="round"
        ></path>{" "}
        <path
          d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          fill="#000000"
          fill-opacity=".16"
        ></path>{" "}
        <path d="M12 19v4M12 1v4" stroke-linecap="round"></path>{" "}
      </g>{" "}
      <defs>
        {" "}
        <clipPath id="a">
          {" "}
          <path fill="#ffffff" d="M0 0h24v24H0z"></path>{" "}
        </clipPath>{" "}
      </defs>{" "}
    </g>
  </svg>
);
const darkMode = (
  <svg
    fill="#ffffff"
    viewBox="0 0 35 35"
    data-name="Layer 2"
    id="Layer_2"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ffffff"
    stroke-width="0.00035"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path>
    </g>
  </svg>
);
const worksIcon = (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#58595b"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g clip-path="url(#clip0_901_1141)">
        {" "}
        <path
          d="M12 13H15M12 16H20M12 20H20M12 24H20M21 7V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V24C1 24 1 25 2 25H3M26 27H30C30.553 27 31 26.553 31 26V4C31 3.447 30.553 3 30 3H24M26 30C26 30.553 25.553 31 25 31H7C6.447 31 6 30.553 6 30V8C6 7.447 6.447 7 7 7H25C25.553 7 26 7.447 26 8V30Z"
          stroke="#8f8f8f"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>{" "}
      <defs>
        {" "}
        <clipPath id="clip0_901_1141">
          {" "}
          <rect width="32" height="32" fill="white"></rect>{" "}
        </clipPath>{" "}
      </defs>{" "}
    </g>
  </svg>
);
const resumeIcon = (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g clip-path="url(#clip0_901_2595)">
        {" "}
        <path
          d="M1 31C1 31 1.687 27.379 2 26C2.208 25.083 3 23 11 22C11 22 12 25 16 25C20 25 21 22 21 22C29 23 29.792 25.021 30 26C30.294 27.384 31 31 31 31M10 11C10 14.866 13 18 16 18C19 18 22 14.866 22 11M8 30V31M24 30V31M6 8H23C23 4.134 19.866 1 16 1C12.134 1 9 4.134 9 8"
          stroke="#8f8f8f"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>{" "}
      <defs>
        {" "}
        <clipPath id="clip0_901_2595">
          {" "}
          <rect width="32" height="32" fill="white"></rect>{" "}
        </clipPath>{" "}
      </defs>{" "}
    </g>
  </svg>
);

const hamMenu = (
  <svg
    fill="#787878"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#787878"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <title></title>{" "}
      <g data-name="menu " id="menu_">
        {" "}
        <path d="M29,6H3A1,1,0,0,0,3,8H29a1,1,0,0,0,0-2Z"></path>{" "}
        <path d="M3,17H16a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path>{" "}
        <path d="M25,24H3a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z"></path>{" "}
      </g>{" "}
    </g>
  </svg>
);

const Navbar = () => {
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((previous) => {
      switcher({ theme: previous ? themes.light : themes.dark });
      return !previous;
    });
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setToggleMenu(false));
  return (
    <nav className="">
      <div
        className={`overlay ${
          toggleMenu
            ? "fixed top-0 left-0 h-full w-full bg-blend-overlay bg-[#00000080]"
            : ""
        }`}
      >
        <div className="hidden md:flex text-lg text-theme w-full flex-1 pr-6">
          <div className="p-2 md:p-8 flex justify-between gap-10 flex-1">
            <div className="logo">
              <Link href="/">
                <h4>Yonatan Doanis</h4>
              </Link>
            </div>
            <div className="flex flex-row justify-between flex-1  items-center">
              <div className="gap-4 flex text-sm">
                <Link href="/">yonatan.doanis@gmail.com</Link>
                <button className="w-4 h-4" onClick={toggleDarkMode}>
                  {currentTheme === "light" ? lightMode : darkMode}
                </button>
              </div>
              <div className="links gap-4 flex text-sm ">
                <Link className="flex items-center gap-2" href="/works">
                  <span className="w-4 h-4">{worksIcon}</span>
                  <h4>Works</h4>
                </Link>
                <Link className="flex items-center gap-2" href="/">
                  <span className="w-4 h-4">{resumeIcon}</span>
                  <h4>Resume</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-nav text-theme flex justify-between p-2 md:hidden items-center">
        <div className="mobile-logo flex-col">
          <Link href="/">
            <h4>Yonatan Doanis</h4>
          </Link>
        </div>
        <div
          className="mobile-darkmode w-6 h-6 cursor-pointer"
          onClick={toggleDarkMode}
        >
          {currentTheme === "light" ? lightMode : darkMode}
        </div>
        <div className="mobile-menu">
          <div
            className={` w-8 h-8 z-20 scale-x-[-1]
              ${toggleMenu ? "opacity-0" : `block transition cursor-pointer`}
`}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {hamMenu}
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={`open-mobile-menu ease-in-out duration-300
        ${
          toggleMenu
            ? "translate-x-0 fixed top-0 right-0 left-0 h-full w-[66vw] bg-theme text-theme z-20 drop-shadow-2xl"
            : "-translate-x-full opacity-0 top-0 right-0 left-0 h-full w-[70vw] "
        }`}
      >
        <div
          className={`${
            toggleMenu
              ? "flex flex-col justify-between sticky top-0 w-full h-screen gap-0 pt-14 p-6 text-theme"
              : "hidden"
          }`}
        >
          <div className="flex flex-col gap-4 ">
            <Link
              className="flex items-center gap-4"
              href="/works"
              onClick={() => setToggleMenu(false)}
            >
              <span className="w-6 h-6">{worksIcon}</span>
              <h4>Works</h4>
            </Link>
            <Link
              className="flex items-center gap-4"
              href="/"
              onClick={() => setToggleMenu(false)}
            >
              <span className="w-6 h-6">{resumeIcon}</span>
              <h4>Resume</h4>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="/">Github</Link>
            <Link href="/">Linkedin</Link>
            <Link href="/">Whatsapp</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export default Navbar;
