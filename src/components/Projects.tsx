import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Projects() {
  const projects = [
    {
      title: "CollabPad – Real-Time Collaboration Tool",
      link: "https://collabpad-frontend.vercel.app",
      tech: "MERN • WebSockets • Quill.js • Operational Transforms",
      description:
        "A real-time collaborative text editor allowing multiple users to edit and sync documents live using WebSockets and OT-based conflict resolution.",
    },
    {
      title: "The Notes App – Note Taking Platform",
      link: "https://drfnotesapp.netlify.app/",
      tech: "React • Django REST Framework",
      description:
        "A cross-device notes application with secure login, tagging, and cloud sync. Designed with a clean UI and fast API performance.",
    },
    {
      title: "Got Your Back – Student Community Platform",
      link: "https://github.com/",
      tech: "MERN Stack",
      description:
        "A collaborative platform for students to share notes, create study groups, and help each other academically. Includes posts, profiles, groups, and secure auth.",
    },
    {
      title: "Crypto Transactions on Blockchain",
      link: "https://cryptotransaction.netlify.app/",
      tech: "React • Ethers.js • Solidity",
      description:
        "A blockchain demo dApp allowing users to transact using MetaMask on test networks, explore wallet interactions, and view transaction confirmations.",
    }
  ];

  return (
    <section id="projects" className="py-20 w-full">
      <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, i) => (
          <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="
                p-8 rounded-2xl bg-white/5 backdrop-blur-xl
                border border-white/10 shadow-xl relative
                hover:bg-white/10 transition-all duration-300
              "
            >
              {/* Neon Border Glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent hover:border-pink-500/40 transition-all duration-300"></div>

              <h3 className="text-2xl font-semibold mb-2 text-pink-400">
                {proj.title}
              </h3>

              <p className="text-gray-300 text-sm mb-3">{proj.tech}</p>

              <p className="text-gray-400 mb-5 leading-relaxed">
                {proj.description}
              </p>

              <a
                className="text-pink-300 font-medium underline hover:text-pink-400 transition"
                href={proj.link}
                target="_blank"
              >
                Visit Project →
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
      </div>
    </section>
  );
}
