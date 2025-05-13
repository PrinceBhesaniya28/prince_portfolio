import React from "react";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    // <main className="overflow-hidden">
      <div className="flex flex-col flex-grow sm:block w-full h-full">
        <Hero />
      </div>
    // </main>
  );
};
