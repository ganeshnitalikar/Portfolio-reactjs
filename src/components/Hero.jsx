import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.png";
import { motion } from "motion/react";
import resume from "../assets/resume.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Ganesh_Nitalikar_Resume.pdf";
    link.click(); //
  };
  return (
    <div className="border-b border-white  pb-4 lg:mb-36">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.25)}
              initial="hidden"
              animate="visible"
              className="pb-16 font-thin text-6xl tracking-tight lg:text-6xl"
            >
              Ganesh Nitalikar
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Front end Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-justify tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              type="button"
              onClick={handleResumeDownload}
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4"
            >
              See Resume
            </motion.button>
          </div>
        </div>
        <div className="w-full  lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl"
              src={profilePic}
              alt="Ganesh_Profile_Pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
