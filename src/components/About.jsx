import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_PARA1, ABOUT_PARA2, ABOUT_PARA3 } from "../constants";

const About = () => {
  return (
    <div className="border-b pb-4 border-white">
      <h2 className="my-20 text-center text-4xl ">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap justify-between pb-4">
        <div className="w-full flex justify-center lg:w-1/2 lg:p-8 xl:w-[40%]">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center items-center lg:p-0 lg:justify-center flex-col pt-12">
            <p className="my-1 indent-8 leading-relaxed max-w-xl py-1 text-justify">
              {ABOUT_PARA1}
            </p>
            <p className="my-1 indent-8 leading-relaxed max-w-xl py-1 text-justify">
              {ABOUT_PARA2}
            </p>
            <p className="my-1 indent-8 leading-relaxed max-w-xl py-1 text-justify">
              {ABOUT_PARA3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
