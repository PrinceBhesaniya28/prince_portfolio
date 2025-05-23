"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress, 
  SiGit 
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Express", icon: SiExpress },
  { name: "Git", icon: SiGit },
];

const TechStack = () => {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {/* Multiple sets for seamless loop */}
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-8">
            {techStack.map((tech, index) => (
              <div key={`${setIndex}-${index}`} className="flex items-center gap-2">
                <tech.icon className="w-8 h-8 text-gray-700" />
                <span className="text-sm text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack; 