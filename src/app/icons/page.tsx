"use client";

import React, { useState } from "react";
import Insta_1 from "../../../public/insta-1.svg";
import Insta_2 from "../../../public/insta-2.svg";
import Linkedin_1 from "../../../public/linkedin-1.svg";
import Linkedin_2 from "../../../public/linkedin-2.svg";
import Twitter_1 from "../../../public/twitter-1.svg";
import Twitter_2 from "../../../public/twitter-2.svg";
import Github_1 from "../../../public/github-1.svg";
import Github_2 from "../../../public/github-2.svg";
import Discord_1 from "../../../public/discord-1.svg";
import Discord_2 from "../../../public/discord-2.svg";
import Image from "next/image";

const SocialMediaTransition: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleToggle = (): void => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="relative  w-fit h-fit space-y-3">
        <h1 className="uppercase">Follow us</h1>
        <div className="flex items-center">

        <button
          onClick={handleToggle}
          className={`absolute align-top text-4xl  md:text-7xl text-white  transition-transform duration-500 ease-in-out ${
            visible ? "-rotate-45" : "rotate-0"
          }`}
          >
          +
        </button>
        <div
          className={`flex space-x-7 align-middle items-center transition-transform duration-[2.8s] ease-in-out ${
            visible ? "translate-x-10 delay-100" : "translate-x-5 opacity-0"
          } ml-7`}
          >
          <a href="#" className="p-1 bg-white rounded-2xl  ">
            <div className="group transition-all  ease-in-out  ">
              <Image
                priority
                src={Insta_1}
                alt="Insta"
                className={` size-7 md:size-10 group-hover:hidden rounded-lg   `}
                />
              <Image
                priority
                src={Insta_2}
                alt="Insta"
                className={`size-7 md:size-10 group-hover:block hidden rounded-lg `}
                />
            </div>
          </a>
          <a href="#" className="p-1 bg-white rounded-2xl  ">
            <div className="group transition-all duration-700 ease-in-out delay-200 ">
              <Image
                priority
                src={Linkedin_1}
                alt="Insta"
                className={`size-7 md:size-10  group-hover:hidden rounded-lg  `}
                />
              <Image
                priority
                src={Linkedin_2}
                alt="Insta"
                className={`size-7 md:size-10  group-hover:block hidden rounded-lg `}
                />
            </div>
          </a>
          <a href="#" className="p-1 bg-white rounded-2xl  ">
            <div className="group transition-all duration-700 ease-in-out delay-200 ">
              <Image
                priority
                src={Twitter_1}
                alt="Insta"
                className={`size-7 md:size-10 group-hover:hidden rounded-lg  `}
                />
              <Image
                priority
                src={Twitter_2}
                alt="Insta"
                className={`size-7 md:size-10 group-hover:block hidden rounded-lg `}
                />
            </div>
          </a>
          <a href="#" className="p-1 bg-white rounded-2xl  ">
            <div className="group transition-all duration-700 ease-in-out delay-200 ">
              <Image
                priority
                src={Github_1}
                alt="Insta"
                className={`size-7 md:size-10 group-hover:hidden rounded-lg  `}
                />
              <Image
                priority
                src={Github_2}
                alt="Insta"
                className={`size-7 md:size-10 group-hover:block hidden rounded-lg `}
                />
            </div>
          </a>
          <a href="#" className="p-1 bg-white rounded-2xl  ">
            <div className="group transition-all duration-700 ease-in-out delay-200 ">
              <Image
                priority
                src={Discord_1}
                alt="Insta"
                className={`size-7 md:size-10 group-hover:hidden rounded-lg  `}
                />
              <Image
                priority
                src={Discord_2}
                alt="Insta"
                className={`size-7 md:size-10 group-hover:block hidden rounded-lg `}
                />
            </div>
          </a>
        </div>
                </div>
      </div>
    </>
  );
};

export default SocialMediaTransition;
