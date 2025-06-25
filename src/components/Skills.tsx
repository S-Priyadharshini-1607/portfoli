import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Database, BarChart3, Code, Lightbulb, Globe, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'Artificial Intelligence', icon: Brain, level: 85, color: 'from-purple-500 to-purple-600' },
    { name: 'Machine Learning', icon: TrendingUp, level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'Deep Learning', icon: Lightbulb, level: 80, color: 'from-pink-500 to-pink-600' },
    { name: 'Python', icon: Code, level: 95, color: 'from-green-500 to-green-600' },
    { name: 'Power BI', icon: BarChart3, level: 85, color: 'from-yellow-500 to-yellow-600' },
    { name: 'HTML & CSS', icon: Globe, level: 88, color: 'from-orange-500 to-orange-600' },
    { name: 'Data Analytics', icon: Database, level: 87, color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key Skills
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 font-medium">Proficiency</span>
                  <span className="text-sm text-gray-900 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuously learning and adapting to emerging technologies in AI and Data Science. 
            Passionate about applying these skills to create innovative solutions that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;