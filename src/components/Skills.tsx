import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Brain,
  Database,
  BarChart3,
  Code,
  Lightbulb,
  Globe,
  TrendingUp,
  BadgeCheck,
} from 'lucide-react';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'Artificial Intelligence', icon: Brain, level: 85, color: 'bg-purple-600', certified: true },
    { name: 'Machine Learning', icon: TrendingUp, level: 90, color: 'bg-blue-600', certified: true },
    { name: 'Deep Learning', icon: Lightbulb, level: 80, color: 'bg-pink-600', certified: false },
    { name: 'Python', icon: Code, level: 95, color: 'bg-green-600', certified: true },
    { name: 'Power BI', icon: BarChart3, level: 85, color: 'bg-yellow-500', certified: true },
    { name: 'HTML & CSS', icon: Globe, level: 88, color: 'bg-orange-500', certified: false },
    { name: 'Data Analytics', icon: Database, level: 87, color: 'bg-teal-600', certified: true },
  ];

  return (
    <section id="skills" className="py-28 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-pulse">
            My Superpowers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Merging intelligence, code, and design into meaningful innovation.
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full animate-pulse" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-2xl hover:shadow-purple-300 hover:scale-[1.02] transition-all duration-500 border border-gray-100 transform"
              >
                <div className="flex items-center mb-5 gap-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${skill.color} flex items-center justify-center text-white text-lg shadow-lg animate-[wiggle_3s_ease-in-out_infinite]`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      {skill.name}
                      {skill.certified && (
                        <BadgeCheck className="ml-2 text-green-500 w-5 h-5 animate-bounce" title="Certified" />
                      )}
                    </h3>
                    <span className="text-xs text-gray-500">Tech Domain</span>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-500 font-medium mb-1">
                    <span>Proficiency</span>
                    <span className="text-gray-800 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-3 ${skill.color} rounded-full shadow-inner animate-pulse`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.4, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            These are just tools. What matters most is how I use them to shape intelligent and impactful solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
