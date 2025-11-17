import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center" id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hi, I'm Basant
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Full-Stack Developer • UI Engineer • Problem Solver
        </p>

        <a href="#projects">
          <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:brightness-125 transition shadow-lg shadow-pink-600/20">
            Explore My Work
          </button>
        </a>
      </motion.div>
    </section>
  );
}
