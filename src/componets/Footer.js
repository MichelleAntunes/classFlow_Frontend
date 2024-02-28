import React from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex gap-10 items-center justify-center align-middle px-5 py-10 md:px-48">
      <div className="text-center font-raleway text-[10px] text-[#757575] justify-self-end">
        ©2024 CLASFLOW - Developed by Michelle Antunes
      </div>
      <div className=" flex gap-5 text-xl">
        <a
          href="https://github.com/MichelleAntunes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt className="fill-[#bababa] cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/michelle-antunes-868b24156/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="fill-[#bababa] cursor-pointer" />
        </a>
      </div>
      <div className="text-center font-raleway text-[10px] text-[#757575] justify-self-end">
        Version 1.0.0
      </div>
    </div>
  );
};

export default Footer;
