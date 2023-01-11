"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedTitle = ({ text }) => {
  const characters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.8 * 1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 80,
        stiffness: 1000,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 1000,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      style={{ display: "flex", gap: "0px" }}
      animate="visible"
      className="font-bold text-5xl text-center"
    >
      {characters.map((character, index) => (
        <motion.span variants={child} key={index}>
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTitle;
