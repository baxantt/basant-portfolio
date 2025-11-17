import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 w-full">
      <div className="max-w-4xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Contact
      </motion.h2>

      <p className="text-gray-300 mb-6">
        Want to collaborate or have a project in mind?
      </p>

      <a href="mailto:narayanbasant1702@gmail.com">
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:brightness-125 transition shadow-lg shadow-pink-600/20">
          Email Me
        </button>
      </a>
      </div>
    </section>
  );
}
