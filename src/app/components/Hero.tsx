"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-start min-h-screen pt-16 font-sans"
    >
      {/* Strap */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-13.5 h-24 bg-[#1E40FF]" />

      {/* Hook */}
      <div className="z-20 relative flex flex-col items-center mb-[-6px]">
        <div className="w-15.5 h-10 bg-black rounded-md" />
        <div className="w-7.5 h-6 bg-gradient-to-b from-black to-gray-800 rounded-b-sm" />
      </div>

      {/* Outer Wrapper with Grey Border Effect */}
      <div className="relative w-[565px] h-[870px] mt-[-14px] bg-[#EEEEEE] py-10 px-2 rounded-[50px] shadow-lg">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-15 h-5 rounded-full bg-white" />

        <div className="bg-white h-[765px] rounded-[50px] shadow-md border border-gray-200 overflow-hidden">
          <div className="px-10 pt-10 text-[#111]">
            {/* Progress Lines */}
            <div className="flex justify-between items-center mb-12">
              <div className="h-1.5 rounded-full bg-lime-400 w-1/3 mr-2" />
              <div className="h-1.5 rounded-full bg-lime-400 w-1/3 mr-2" />
              <div className="h-1.5 rounded-full bg-gray-200 w-1/3" />
            </div>

            {/* Top - Profile & Slots */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div className="ml-2">
                  <h1 className="text-2xl font-semibold ">Prince Bhesaniya</h1>
                  <p className="text-md text-gray-500 mb-2">
                    Web-developer, (Front-end)
                  </p>
                  {/* Social Icons */}
                  <div className="flex gap-4 text-gray-500 text-2xl">
                    <FaXTwitter className="cursor-pointer" />
                    <FaLinkedin className="cursor-pointer" />
                    <FaGithub className="cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500 flex flex-col items-end">
                <div className="flex items-center">
                  <span className="text-lime-500 text-base mr-1 animate-[blink_2s_ease-in-out_infinite]">●</span>
                  <span className="text-[15px] font-semibold text-black">Available</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-[70px] font-semibold leading-[1.15] tracking-tight mb-6">
              I create <br /> websites that <br /> work as hard <br /> as you do
            </h2>

            {/* Rating and Tag */}
            <div className="flex bg-gray-100 hover:bg-gray-200 transition-colors duration-200 w-fit px-6 py-2 items-center gap-2 mb-6 rounded-full cursor-pointer">
              <div className="flex text-black">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-black text-[12px]" />
                ))}
              </div>
              <div className="text-[12px] px-3 py-1 rounded-full text-black bg-white">
                50+ customers
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-10">
              I build designs that solve problems, inspire action, and drive
              success.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="relative flex items-center text-white text-sm font-medium h-12 pl-4 pr-1 rounded-full overflow-hidden bg-[#1E40FF] hover:bg-[#1a35d0] transition group">
                <span className="z-10 mr-2">Get started</span>
                <span className="h-9 w-9 rounded-full bg-white flex items-center justify-center text-[#1E40FF]">
                  <BsArrowUpRight
                    size={16}
                    className="transition-transform duration-500 ease-in-out transform group-hover:rotate-[45deg]"
                  />
                </span>
              </button>
              <button className="bg-[#f2f2f2] hover:bg-[#e4e4e4] text-black text-sm px-6 py-3 rounded-full transition">
                My work
              </button>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="flex justify-between items-center px-6 py-3 text-[12px] text-gray-600 mt-4">
          <span>
            Located in <span className="font-medium">London</span>, available
            worldwide.
          </span>
          <span className="flex items-center gap-1 font-medium cursor-pointer hover:underline group">
            Templifica
            <span className="text-[#1E40FF]">
              <BsArrowUpRight
                size={10}
                className="transition-transform duration-500 ease-in-out transform group-hover:rotate-[45deg]"
              />
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;


