import Link from "next/link";
import React from "react";
import { DescriptionOutlinedIcon } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex text-lg text-gray-700 w-full flex-1">
        <div className="p-2 md:p-8 md:py-16 flex justify-between gap-10 flex-1">
          <div className="logo">
            <h4>Yonatan Doanis</h4>
          </div>
          <div className="flex flex-row justify-between flex-1  items-center">
            <div className="gap-4 flex text-sm">
              <Link href="/">yonatan.doanis@gmail.com</Link>
              <button>dark mode</button>
            </div>
            <div className="links gap-4 flex ">
              <Link href="/">Works</Link>
              <Link href="/">Resume</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
