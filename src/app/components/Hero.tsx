import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaXTwitter, FaDribbble, FaGlobe } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen pt-16 font-sans">
      {/* Strap */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-13.5 h-24 bg-[#1E40FF]" />

      {/* Hook */}
      <div className="z-20 relative flex flex-col items-center mb-[-6px]">
        {/* Black Base */}
        <div className="w-15.5 h-10 bg-black rounded-md" />
        {/* Tab */}
        <div className="w-7.5 h-6 bg-gradient-to-b from-black to-gray-800 rounded-b-sm" />
      </div>

      {/* Outer Wrapper with Grey Border Effect */}
      <div className="relative w-[565px] h-[870px] mt-[-14px] bg-[#EEEEEE] border-1 py-10 px-2 rounded-[50px] shadow-lg">
        {/* Slot behind hook */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-15 h-5 rounded-full border-2" />

        {/* Card */}
        <div className="bg-white h-[800px] rounded-[50px] shadow-md border border-gray-200 overflow-hidden">
          {/* Card Inner */}
          <div className="px-8 pt-10 text-[#111]">
            {/* Progress Lines */}
            <div className="flex justify-between items-center mb-6">
              <div className="h-1.5 rounded-full bg-lime-400 w-1/3 mr-2" />
              <div className="h-1.5 rounded-full bg-lime-400 w-1/3 mr-2" />
              <div className="h-1.5 rounded-full bg-gray-200 w-1/3" />
            </div>

            {/* Top - Profile & Slots */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-base font-semibold">Andrew Parker</h1>
                  <p className="text-sm text-gray-500">
                    Web-designer, developer
                  </p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500 flex flex-col items-end">
                <span className="text-green-500 text-base leading-none">●</span>
                <span className="leading-none">2 open slots</span>
                <span className="leading-none">for December</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-500 text-base mb-10">
              <FaXTwitter className="cursor-pointer" />
              <FaDribbble className="cursor-pointer" />
              <FaGlobe className="cursor-pointer" />
            </div>

            {/* Headline */}
            <h2 className="text-[42px] font-semibold leading-[1.15] tracking-tight mb-6">
              I create <br /> websites that <br /> work as hard <br /> as you do
            </h2>

            {/* Rating and Tag */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-black">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-black text-[12px]" />
                ))}
              </div>
              <div className="bg-gray-100 text-[12px] px-3 py-1 rounded-full text-black">
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
              <button className="bg-[#1E40FF] hover:bg-[#1a35d0] text-white text-sm px-6 py-3 rounded-full flex items-center gap-2 transition">
                Get started <BsArrowUpRight size={14} />
              </button>
              <button className="bg-[#f2f2f2] hover:bg-[#e4e4e4] text-black text-sm px-6 py-3 rounded-full transition">
                My work
              </button>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex justify-between items-center bg-gray-50 px-4 py-2 text-[12px] text-gray-500 mt-6">
            <span>
              Located in <span className="font-medium">London</span>, available
              worldwide.
            </span>
            <span className="flex items-center gap-1 font-medium cursor-pointer hover:underline">
              Templifica <BsArrowUpRight size={10} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
