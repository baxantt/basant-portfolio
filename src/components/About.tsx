import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 w-full">
      <div className="max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
          shadow-2xl text-gray-300 leading-8 text-lg
        "
      >
        <p className="mb-6">
          I'm a <span className="text-pink-400 font-semibold">full-stack developer</span> 
           passionate about building scalable, high-performance applications with clean 
          architecture and smooth user experiences. I love creating elegant UI components 
          and designing systems that feel fast, intuitive, and reliable.
        </p>

        <p className="mb-6">
          My expertise spans{" "}
          <span className="text-pink-400 font-semibold">React, TypeScript, Fastify, Node.js, Fastify, Docker, Kubernetes and microservices</span>, 
          and I enjoy bridging frontend and backend with seamless integrations.
        </p>

        <p>
          I thrive in crafting modern interfaces, solving complex problems, and building 
          products that make a real impact. Always learning, always improving — and always 
          shipping high-quality code.
        </p>
      </motion.div>
      </div>
    </section>
  );
}
