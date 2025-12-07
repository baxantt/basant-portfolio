import { motion } from "framer-motion";

const timeline = [
  {
    title: "Engineer II",
    company: "StoneX Group Inc.",
    period: "Dec 2025 – Present",
    description:
      "Promoted to Engineer II and entrusted with leading a sub-team, owning the delivery of critical features and driving technical decisions for key modules of the platform.",
  },
  {
    title: "Engineer I",
    company: "StoneX Group Inc.",
    period: "July 2024 – Dec 2025",
    description:
      "Collaborated cross-functionally with multiple teams to understand business requirements and delivered several internal applications on the OSX platform, reducing manual workflows by approximately 30% and improving operational efficiency.",
  },
  {
    title: "Software Engineer Intern",
    company: "StoneX Group Inc.",
    period: "Jan 2024 – July 2024",
    description:
      "Contributed to the UI/UX component library by building reusable, scalable components and worked with the internal systems team to support and enhance core enterprise tools used across the organization.",
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
