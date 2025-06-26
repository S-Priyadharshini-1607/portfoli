import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Recycle } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showModal, setShowModal] = useState(false);
  const [accuracy, setAccuracy] = useState(0);

  React.useEffect(() => {
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
    }
  }, [isInView]);

  const techs = ['Python', 'TensorFlow', 'Computer Vision', 'Machine Learning', 'Image Classification'];

  return (
    <section id="projects" className="relative py-28 bg-gradient-to-br from-gray-100 via-white to-purple-100 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-purple-200 rounded-full opacity-20 blur-sm"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-pulse"
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

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 5 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="group bg-white rounded-3xl shadow-2xl hover:shadow-purple-300 hover:scale-[1.01] transition-transform duration-500 overflow-hidden"
        >
          <div className="relative h-72 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center text-white overflow-hidden">
            <motion.div
              className="text-center z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Recycle className="w-20 h-20 mx-auto animate-spin-slow mb-2" />
              <h3 className="text-2xl font-bold drop-shadow-md">AI Waste Segregation System</h3>
            </motion.div>

            <motion.div
              className="absolute top-8 left-8 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              <span className="text-white text-xl animate-pulse">🤖</span>
            </motion.div>
            <motion.div
              className="absolute bottom-8 right-8 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-white text-2xl animate-bounce">♻️</span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <motion.h3 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Waste Classification</motion.h3>
            <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed">
              An intelligent system that classifies waste into recyclable, biodegradable, and non-biodegradable
              using deep learning and real-time image classification. Built with TensorFlow & CV.
            </motion.p>

            <div className="flex flex-wrap gap-3 mb-8">
              {techs.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium shadow-md hover:shadow-xl transition"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.1 * index }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Accuracy bar */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-1">Model Accuracy</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  className="h-4 rounded-full bg-gradient-to-r from-green-400 to-purple-600"
                  animate={{ width: `${accuracy}%` }}
                  transition={{ duration: 2 }}
                />
              </div>
              <p className="text-xs text-right text-gray-500 mt-1">{accuracy}%</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition-all duration-300"
                onClick={() => setShowModal(true)}
              >
                <ExternalLink size={20} /> Live Preview
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Outro */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            🚀 This project demonstrates how technology and sustainability can go hand in hand.
            More innovations await on my GitHub!
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] md:w-[600px] shadow-2xl relative">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔍 AI Segregation Preview</h3>
            <img
              src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
              alt="AI in action"
              className="rounded-lg w-full object-cover"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;