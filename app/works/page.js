"use client";

import { Link } from "@mui/material";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const showInfo = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

const Works = () => {
  return (
    <AnimatePresence>
      <motion.div
        key="works"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: "easeInOut", duration: 30 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <h6 className=" mb-8 font-bold text-2xl text-[#58595B]">My Works</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-600 p-4 rounded-lg">
          <div className="col-1 grid grid-rows-3 gap-4">
            <Link href="/">
              <motion.div
                initial="initial"
                whileHover="hover"
                className="rounded-lg relative w-full h-full"
              >
                <img className="" src="/segalwines.png" alt="" />
                <motion.div
                  variants={showInfo}
                  className="absolute py-4 px-8 w-full bg-gray-700 bg-opacity-75 bottom-0 z-50 text-white"
                >
                  Segal Wines Concept Site
                </motion.div>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div
                initial="initial"
                whileHover="hover"
                className="rounded-lg relative w-full h-full"
              >
                <img className=" object-cover" src="/kawaiken.png" alt="" />
                <motion.div
                  variants={showInfo}
                  className="absolute py-4 px-8 w-full bg-gray-700 bg-opacity-75 bottom-0 z-50 text-white"
                >
                  Kawaiken
                </motion.div>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div
                initial="initial"
                whileHover="hover"
                className="rounded-lg relative w-full h-full"
              >
                <img
                  className=" object-cover"
                  src="/timefortshirt.png"
                  alt=""
                />
                <motion.div
                  variants={showInfo}
                  className="absolute py-4 px-8 w-full bg-gray-700 bg-opacity-75 bottom-0 z-50 text-white"
                >
                  Time for T Shirt
                </motion.div>
              </motion.div>
            </Link>
          </div>
          <div className="col-2 grid grid-rows-3 gap-4 ">
            <Link href="/">
              <motion.div
                initial="initial"
                whileHover="hover"
                className="rounded-lg relative w-full h-full"
              >
                <img className="" src="/colgate.png" alt="" />
                <motion.div
                  variants={showInfo}
                  className="absolute py-4 px-8 w-full bg-gray-700 bg-opacity-75 bottom-0 z-50 text-white"
                >
                  Colgate Concept Site
                </motion.div>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div
                initial="initial"
                whileHover="hover"
                className="rounded-lg relative w-full h-full"
              >
                <img className="" src="/rentatool.png" alt="" />
                <motion.div
                  variants={showInfo}
                  className="absolute py-4 px-8 w-full bg-gray-700 bg-opacity-75 bottom-0 z-50 text-white"
                >
                  Colgate Concept Site
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Works;
