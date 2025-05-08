import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-slate-200 pt-10 font-sans">
      {/* Ribbon Strap */}
      <div className="w-2 h-24 bg-blue-600 rounded-t-full z-10" />

      {/* Hook Ring */}
      <div className="w-10 h-5 bg-gray-300 rounded-b-full -mt-1 flex justify-center items-center z-10 relative">
        <div className="w-4 h-4 border-14 border-gray-500 rounded-full" />
      </div>

      {/* Card Frame */}
      <div className="relative w-[340px] mt-[-8px]">
        {/* Hole Slot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-12 h-4 bg-slate-200 rounded-b-full" />

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border-4 border-gray-300 relative pt-4">
          {/* Inner content with padding */}
          <div className="px-6 pb-6 pt-2 bg-white relative z-0 text-[#111]">
            {/* Progress bar */}
            <div className="flex justify-center gap-1 mb-4">
              <div className="w-[90px] h-1 bg-lime-400 rounded-full" />
              <div className="w-[90px] h-1 bg-lime-400 rounded-full" />
              <div className="w-[90px] h-1 bg-gray-200 rounded-full" />
            </div>

            {/* Header: Profile */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Prince Bhesaniya"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-[15px] font-semibold">
                    Prince Bhesaniya
                  </h1>
                  <p className="text-[13px] text-gray-500 leading-none">
                    Web-designer, developer
                  </p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500 flex flex-col items-end gap-0.5">
                <span className="text-green-500 text-lg leading-3">●</span>
                <span className="text-[12px] leading-3">2 open slots</span>
                <span className="text-[12px] leading-3">for December</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 text-gray-400 text-sm mb-5 pl-1">
              <span className="cursor-pointer">𝕏</span>
              <span className="cursor-pointer">📷</span>
              <span className="cursor-pointer">🌐</span>
            </div>

            {/* Headline */}
            <h2 className="text-[32px] font-medium leading-[1.15] mb-5 tracking-tight">
              I create websites that work as hard as you do
            </h2>

            {/* Stars and Tag */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-black text-xs">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-black text-[10px]" />
                ))}
              </div>
              <div className="bg-gray-100 text-[11px] px-2 py-1 rounded-full text-black">
                50+ customers
              </div>
            </div>

            {/* Description */}
            <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
              I build designs that solve problems, inspire action, and drive
              success.
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="bg-[#3c4eff] text-white text-sm px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#2e3ad6] transition">
                Get started <BsArrowUpRight size={14} />
              </button>
              <button className="bg-[#f2f2f2] text-black text-sm px-5 py-2 rounded-full hover:bg-[#e5e5e5] transition">
                My work
              </button>
            </div>
          </div>

          {/* Bottom Tag */}
          <div className="bg-gray-100 text-center text-xs py-2 text-gray-500">
            www.yourportfolio.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
