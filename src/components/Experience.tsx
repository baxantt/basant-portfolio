import { motion } from "framer-motion";

const timeline = [
  {
    title: "Engineer ll",
    company: "StoneX Group Inc.",
    period: "Dec 2025 – Present",
    description:
      "Promoted to Engineer ll and started leading a sub-team to deliver critical features for the platform.",
  },
  {
    title: "Engineer l",
    company: "StoneX Group Inc.",
    period: "July 2024 – Dec 2025",
    description:
      "Promoted to Engineer 1 for consistent performance, delivering high-impact features and improvements.",
  },
  {
    title: "Software Engineer Intern",
    company: "StoneX Group Inc.",
    period: "Jan 2024 – July 202",
    description:
      "Joined as an intern and contributed to key product features while collaborating with global teams.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>

        <div className="relative border-l border-gray-700 ml-4">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 border-4 border-black shadow-lg"></div>

              <h3 className="text-2xl font-semibold text-purple-400">
                {item.title}
              </h3>
              <p className="text-lg font-medium text-gray-300">
                {item.company}
              </p>
              <p className="text-sm text-gray-500 mb-2">{item.period}</p>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
