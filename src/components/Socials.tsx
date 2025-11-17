import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe } from "react-icons/fa";

export default function Socials() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/basant-narayan",
      color: "text-blue-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/",
      color: "text-gray-300",
    },
    {
      name: "Portfolio",
      icon: <FaGlobe />,
      link: "https://basant-narayan.netlify.app/",
      color: "text-purple-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/basant.narayann/",
      color: "text-pink-500",
    },
  ];

  return (
    <section id="socials" className="py-20 w-full">
      <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10"
      >
        Social Profiles
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:scale-110 transition group"
          >
            <div className={`text-5xl mb-3 ${s.color}`}>{s.icon}</div>
            <p className="text-lg font-semibold">{s.name}</p>
          </motion.a>
        ))}
      </div>
      </div>
    </section>
  );
}
