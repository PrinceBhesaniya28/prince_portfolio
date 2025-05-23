// components/WorkShowcase.tsx
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const WorkShowcase = () => {
  return (
    <section className="text-center px-4 py-16">
      <h2 className="text-4xl font-bold mb-2">My work</h2>
      <p className="text-gray-500 mb-12">
        Check out some of my favorite<br className="sm:hidden" />
        & most recent projects.
      </p>

      <div className="relative max-w-xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#1919ff] to-[#a366ff] p-6">
        <div className="transform rotate-12">
          <Image
            src="/ea388753-b068-47ec-9636-acbb23a6c745.png"
            alt="Praxis project screenshot"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </div>

        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-full shadow-lg flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#5B47FB] flex items-center justify-center text-white font-bold">
              <span>P</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm">Praxis</p>
              <p className="text-xs text-gray-500">An all-in-one, easy-to-edit template for creatives.</p>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
