import React from "react";
import { BiLogoMongodb } from "react-icons/bi";
import { DiFirebase, DiMongodb, DiMysql } from "react-icons/di";
import { FaCss3, FaGithub, FaHtml5, FaJava, FaNodeJs } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { LiaNodeJs } from "react-icons/lia";
import {
  RiFirebaseFill,
  RiGitBranchFill,
  RiGitBranchLine,
  RiJavaLine,
  RiJavascriptLine,
  RiReactjsFill,
  RiReactjsLine,
} from "react-icons/ri";
import { TbSql } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-white border-b pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-[#00d8ff]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaFlutter className="text-7xl text-[#45d2fd]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-[#539e42]" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-[#e76f01]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiFirebaseFill className="text-7xl text-[#ffca2e]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiGitBranchFill className="text-7xl text-[#f03c2d]" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
