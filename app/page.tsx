"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import AnimatedTitle from "./components/AnimatedTitle";
import Stats from "./components/Stats";
import Works from "./components/Works";

import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const arrowSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
  </svg>
);

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 1,
        when: "beforeChildren",
        delayChildren: 0.2,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      // transition: { delayChildren: 3, when: "afterChildren" },
    },
    hidden: {
      opacity: 0,
      y: -20,
      // transition: {},
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="main-container flex md:flex-row flex-col gap-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="main-info text-center flex flex-col gap-2 container  pt-20 text-theme"
        >
          <motion.div className="font-bold text-5xl text-center flex flex-col items-center">
            <motion.div variants={child} className="text-center">
              <AnimatedTitle text={`Yonatan`} />
            </motion.div>
            <motion.div variants={child} className="pl-14">
              <AnimatedTitle text={`Doanis`} />
            </motion.div>
          </motion.div>

          <motion.h6
            variants={child}
            className="mt-3 font-bold tracking-widest md:text-center"
          >
            MY AWESOME LINE
          </motion.h6>
          <motion.p
            variants={child}
            className="py-6 px-8  text-sm max-w-[80%] md:max-w-[80%] md:text-left mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam
            quas cupiditate error quam quod vero eos aliquid similique ratione.
          </motion.p>
        </motion.div>
        <div className="flex flex-row mx-auto justify-center items-center container">
          <div className="border-2 rounded-full bg-[#aaabad]">
            <Image
              width={500}
              height={500}
              alt="johnnybravo"
              src="/JohnnyBravo.png"
              className="p-1 rounded-full"
            ></Image>
          </div>
        </div>
      </div>
      <div>
        <div className="what-i-do headings flex flex-col mt-32 justify-center">
          <h6 className="text-theme text-4xl font-bold">What I do</h6>
          <div className="bg-body what-i-do container  rounded-lg mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 p-8">
              <div className="text flex flex-col text-theme gap-8 ">
                <div className="flex flex-col gap-2">
                  <h6 className="text-center text-lg font-bold tracking-tight">
                    FRONTEND
                  </h6>
                  <p className="px-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, fugit. Magnam sint ab, ullam, exercitationem
                    maiores temporibus incidunt labore doloribus eveniet facere
                    consectetur quis consequatur? Esse magni asperiores
                    assumenda cumque! Dolor, vel!
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-center text-lg font-bold tracking-tight">
                    DESIGN
                  </h6>
                  <p className="px-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos non, consequatur totam commodi eveniet ab
                    soluta! Facilis possimus laboriosam architecto.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-center text-lg font-bold tracking-tight">
                    OTHER FIELDS
                  </h6>
                  <p className="px-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores veritatis quam fugit! Corporis voluptatum explicabo
                    sunt iusto?
                  </p>
                </div>
                <button className="text-center my-10">
                  <span className="text-2xl font-bold py-3 px-7 rounded-full ease-in-out transition hover:text-white hover:bg-[#58595B]">
                    MY WORKS
                  </span>
                </button>
              </div>
              <div className="image"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-me mt-32  bg-body md:max-w-[90%] mx-auto rounded-lg p-5 text-theme">
        <h4 className="tracking-[0.6em] text-sm font-bold  text-center m-5">
          YONATAN DOANIS
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="left flex flex-col items-center">
            <div className="bg-theme rounded-lg p-4">
              <Image
                width={280}
                height={280}
                alt="my image"
                src="/bulbasor.png"
              ></Image>
            </div>
            <div className="evolution justify-center flex flex-col mt-12">
              <h6 className="text-center tracking-widest text-theme text-xl font-bold">
                EVOLUTION
              </h6>
              <div className="flex flex-col md:flex-row gap-4 items-center mt-6 ">
                <div className="image bg-theme rounded-full p-5 border-4 border-white cursor-pointer">
                  <Image
                    width={100}
                    height={100}
                    alt="evolution 1 image"
                    src="/bulbasor.png"
                  ></Image>
                </div>
                <div className="md:rotate-0 rotate-90">{arrowSvg}</div>
                <div className="image bg-theme rounded-full p-5 border-4 border-white cursor-pointer">
                  <Image
                    width={100}
                    height={100}
                    alt="evolution 1 image"
                    src="/evolution2.png"
                  ></Image>
                </div>
                <div className="md:rotate-0 rotate-90">{arrowSvg}</div>
                <div className="image bg-theme rounded-full p-5 border-4 border-white cursor-pointer">
                  <Image
                    width={100}
                    height={100}
                    alt="evolution 1 image"
                    src="/evolution3.png"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex flex-col items-center">
            <h6 className="text-lg md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              ratione autem quo!
            </h6>
            <div className="info grid grid-cols-2 gap-4 bg-theme p-5 text-xl rounded mt-4 w-full">
              <div className="grid grid-rows-3 gap-4 justify-center">
                <div className="flex flex-col gap-2 text-theme">
                  <h4 className="">Height</h4>
                  <h4>1.80</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="">Height</h4>
                  <h4>1.80</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="">Height</h4>
                  <h4>1.80</h4>
                </div>
              </div>
              <div className="grid grid-rows-3 gap-4 justify-center text-theme">
                <div className="flex flex-col gap-2">
                  <h4 className="">Height</h4>
                  <h4>1.80</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="">Height</h4>
                  <h4>1.80</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="">Height</h4>
                  <h4>1.80</h4>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl">Type</h4>
              <div className="flex flex-row gap-4">
                <div className="mt-2">
                  <button className="px-8 bg-[#9BCC50] rounded">Grass</button>
                </div>
                <div className="mt-2">
                  <button className="px-8 bg-[#B87EC8] rounded text-white">
                    Poison
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl">Weaknesses</h4>
              <div className="flex flex-row gap-4">
                <div className="mt-2">
                  <button className="px-8 bg-[#9BCC50] rounded">Grass</button>
                </div>
                <div className="mt-2">
                  <button className="px-8 bg-[#B87EC8] rounded text-white">
                    Poison
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stats />
      </div>
      <Works />
    </motion.div>
  );
}
