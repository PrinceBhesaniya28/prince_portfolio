import React from "react";
import Hero from "./components/Hero";
import BottomNav from "./components/BottomNav";

export default function HomePage() {
  return (
    // <main className="overflow-hidden">
    <div className="flex flex-col flex-grow sm:block w-full h-full">
      <Hero />
      <BottomNav />
    </div>
    // </main>
  );
};
