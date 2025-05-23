import React from "react";
import Hero from "./components/Hero";
import BottomNav from "./components/BottomNav";
import WorkShowcase from "./components/Work";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    // <main className="overflow-hidden">
    <div className="flex flex-col flex-grow sm:block w-full h-full">
      <Hero />
      <div className="w-full max-w-[565px] mx-auto">
        <TechStack />
      </div>
      <WorkShowcase />
      <Contact />
      <BottomNav />
    </div>
    // </main>
  );
}
