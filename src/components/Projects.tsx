import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Recycle } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Project
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Project Image/Preview */}
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <Recycle size={80} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold">AI Waste Segregation System</h3>
              </div>
              
              {/* Floating AI elements */}
              <motion.div
                className="absolute top-8 left-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-white text-xl">🤖</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-8 right-8 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white text-2xl">♻️</span>
              </motion.div>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                AI-Powered Waste Segregation
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Smart waste classification system using AI to segregate waste into recyclable, 
                biodegradable, and non-biodegradable categories. Developed using computer vision 
                and machine learning algorithms to promote environmental sustainability through 
                intelligent automation.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Python', 'TensorFlow', 'Computer Vision', 'Machine Learning', 'Image Classification'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://github.com/S-PRIYADHARSHINI-AI/Waste_Management"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github size={20} />
                  View on GitHub
                </motion.a>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This project showcases my ability to apply AI and machine learning concepts to solve 
            real-world environmental challenges. More projects and contributions available on my GitHub profile.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;