import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-6 mt-5">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ganesh Nitalikar. All rights
          reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/ganeshnitalikar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ganeshnitalikar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/GaneshCodeZZZ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
