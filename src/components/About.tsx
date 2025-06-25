import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center text-6xl font-bold text-purple-600">
                  PS
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute top-10 -right-4 w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-20 -left-8 w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="text-xl">📊</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Aspiring AI and Data Science professional with hands-on training from Intel Unnati Labs. 
              Skilled in Python, Machine Learning, and Data Analytics. Strong foundation in web 
              technologies and committed to building innovative AI-driven solutions to solve real-world challenges.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm passionate about leveraging artificial intelligence and data science to create 
              meaningful impact. Through my internships and certifications, I've developed expertise 
              in machine learning algorithms, data visualization, and AI-powered automation systems.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Education Focus</h3>
                <p className="text-gray-600">AI & Data Science</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Based In</h3>
                <p className="text-gray-600">Chennai, India</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                <p className="text-gray-600">2+ Years Learning</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Specialization</h3>
                <p className="text-gray-600">ML & Deep Learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;