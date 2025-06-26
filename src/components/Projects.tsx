import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Github, Recycle } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [accuracy, setAccuracy] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      let val = 0;
      const interval = setInterval(() => {
        if (val < 96) {
          val++;
          setAccuracy(val);
        } else {
          clearInterval(interval);
        }
      }, 30);
      controls.start({ scale: [0.8, 1.2, 1], rotate: [0, 360] });
    }
  }, [isInView, controls]);

  const techs = ['Python', 'TensorFlow', 'Computer Vision', 'Machine Learning', 'Image Classification'];

  return (
    <section id="projects" className="relative py-28 bg-gradient-to-br from-gray-100 via-white to-purple-100 overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-purple-300 rounded-full opacity-30 blur-sm"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 8 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            🌍 Featured AI Project
          </motion.h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Building intelligent systems that solve real environmental challenges.
          </p>
          <motion.div
            className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full"
            animate={{ scaleX: [0, 1.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1 }}
          className="group bg-white rounded-3xl shadow-2xl hover:shadow-purple-300 hover:scale-[1.01] transition-transform duration-500 overflow-hidden"
        >
          <div className="relative h-72 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center text-white">
            <motion.div
              className="text-center z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Recycle className="w-20 h-20 mx-auto animate-spin-slow mb-2" />
              <h3 className="text-2xl font-bold drop-shadow-md">AI Waste Segregation System</h3>
            </motion.div>
          </div>

          <div className="p-8 md:p-12">
            <motion.h3 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Waste Classification</motion.h3>
            <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A smart AI-driven waste classifier that detects and sorts materials into recyclable, biodegradable,
              and non-biodegradable categories in real-time. Built using TensorFlow and image recognition models
              for sustainable cities.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {techs.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium shadow-md hover:shadow-xl transition"
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <div className="flex items-center justify-center flex-col mb-10">
              <p className="text-sm text-gray-600 mb-2">Model Accuracy</p>
              <motion.div className="relative w-44 h-44" animate={controls}>
                <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                  <defs>
                    <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f87171" />
                      <stop offset="50%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                  <circle cx="88" cy="88" r="70" stroke="#e5e7eb" strokeWidth="14" fill="none" />
                  <motion.circle
                    cx="88"
                    cy="88"
                    r="70"
                    stroke="url(#animatedGradient)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={440}
                    strokeDashoffset={440 - (440 * accuracy) / 100}
                    transition={{ duration: 2 }}
                  />
                </svg>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-gray-800"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2 }}
                >
                  {accuracy}%
                </motion.div>
              </motion.div>
            </div>

            <motion.a
              href="https://github.com/S-Priyadharshini-1607/AI-Waste-Segregation-System"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300"
            >
              <Github size={20} /> View on GitHub
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            ♻️ Empowering a sustainable future through intelligent automation and smart systems.
            Explore more innovative projects on my GitHub!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;