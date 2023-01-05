"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

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
        <div className="hidden md:flex text-lg text-gray-600 w-full flex-1 pr-6">
          <div className="p-2 md:p-8 flex justify-between gap-10 flex-1">
            <div className="logo">
              <h4>Yonatan Doanis</h4>
            </div>
            <div className="flex flex-row justify-between flex-1  items-center">
              <div className="gap-4 flex text-sm">
                <Link href="/">yonatan.doanis@gmail.com</Link>
                <button>DM</button>
              </div>
              <div className="links gap-4 flex text-sm ">
                <Link className="flex items-center gap-2" href="/">
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

      <div className="mobile-nav flex justify-between p-2 md:hidden items-center">
        <div className="mobile-logo flex-col">
          <h4>Yonatan Doanis</h4>
        </div>
        <div className="mobile-darkmode">
          <div>Dark Mode</div>
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
            ? "translate-x-0 fixed top-0 right-0 left-0 h-full w-[66vw] bg-[#F2F0EE] z-20 drop-shadow-2xl"
            : "-translate-x-full opacity-0 top-0 right-0 left-0 h-full w-[70vw] "
        }`}
      >
        <div
          className={`${
            toggleMenu
              ? "flex flex-col justify-between sticky top-0 w-full h-screen gap-0 pt-14 p-6 text-gray-600"
              : "hidden"
          }`}
        >
          <div className="flex flex-col gap-4 ">
            <Link className="flex items-center gap-4" href="/">
              <span className="w-6 h-6">{worksIcon}</span>
              <h4>Works</h4>
            </Link>
            <Link className="flex items-center gap-4" href="/">
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
