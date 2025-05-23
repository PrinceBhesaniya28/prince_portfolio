// components/WorkShowcase.tsx
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Praxis",
    description: "An all-in-one, easy-to-edit template for creatives.",
    image: "/ea388753-b068-47ec-9636-acbb23a6c745.png",
    gradient: "from-[#1919ff] to-[#a366ff]",
    initial: "P"
  },
  {
    title: "E-Commerce",
    description: "Modern e-commerce platform with real-time inventory.",
    image: "/ea388753-b068-47ec-9636-acbb23a6c745.png",
    gradient: "from-[#FF6B6B] to-[#FFE66D]",
    initial: "E"
  },
  {
    title: "TaskFlow",
    description: "Project management tool for teams and individuals.",
    image: "/ea388753-b068-47ec-9636-acbb23a6c745.png",
    gradient: "from-[#4CAF50] to-[#8BC34A]",
    initial: "T"
  },
  {
    title: "SocialHub",
    description: "Social media dashboard with analytics and insights.",
    image: "/ea388753-b068-47ec-9636-acbb23a6c745.png",
    gradient: "from-[#9C27B0] to-[#E91E63]",
    initial: "S"
  },
  {
    title: "HealthTrack",
    description: "Fitness and health tracking application.",
    image: "/ea388753-b068-47ec-9636-acbb23a6c745.png",
    gradient: "from-[#2196F3] to-[#00BCD4]",
    initial: "H"
  }
];

const WorkShowcase = () => {
  return (
    <section className="text-center px-4 py-16">
      <h2 className="text-4xl font-bold mb-2">My work</h2>
      <p className="text-gray-500 mb-12">
        Check out some of my favorite<br className="sm:hidden" />
        & most recent projects.
      </p>

      <div className="flex flex-col gap-3 max-w-xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} p-6`}>
            <div className="transform rotate-12">
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-full shadow-lg flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#5B47FB] flex items-center justify-center text-white font-bold">
                  <span>{project.initial}</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">{project.title}</p>
                  <p className="text-xs text-gray-500">{project.description}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkShowcase;
