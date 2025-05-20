import Link from "next/link";
import { Home, NotebookText, X } from "lucide-react";

const BottomDock = () => {
  return (
    <div className="fixed bottom-6 text-lg left-1/2 -translate-x-1/2 z-50 w-fit px-6 py-3 rounded-full shadow-xl border border-white/10 bg-black/70 backdrop-blur-md flex items-center gap-6 text-white">
      {/* Home Icon */}
      <Link
        href="/"
        className="text-white hover:text-gray-300 transition-colors duration-200"
      >
        <Home size={22} />
      </Link>

      {/* Projects */}
      <Link
        href="/projects"
        className="text-white font-medium hover:text-gray-300 transition-colors duration-200"
      >
        Projects
      </Link>

      {/* Journal */}
      <Link
        href="/journal"
        className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
      >
        <span className="hidden sm:inline font-medium">Journal</span>
      </Link>

      {/* X Icon */}
      <Link
        href="/close"
        className="text-white hover:text-gray-300 transition-colors duration-200"
      >
        <span className="text-20px"> X </span>
      </Link>

      {/* Contact Button */}
      <Link
        href="/contact"
        className="bg-white text-black px-5  py-1.5 rounded-full font-base transition-colors duration-300 hover:bg-[#1E40FF] hover:text-white"
      >
        Contact
      </Link>
    </div>
  );
};

export default BottomDock;
