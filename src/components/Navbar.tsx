import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Basant.dev
        </h1>

        <div className="space-x-6 hidden md:flex">
          {["About", "Skills", "Experience", "Projects", "Socials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-pink-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
