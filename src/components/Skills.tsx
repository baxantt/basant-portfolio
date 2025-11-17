import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiRedux,
  SiGit,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
    { name: "Redux / MobX", icon: <SiRedux className="text-purple-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "Fastify", icon: <SiFastify className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  ];

  return (
    <section id="skills" className="py-20 w-full">
      <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:scale-105 transition cursor-pointer"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
