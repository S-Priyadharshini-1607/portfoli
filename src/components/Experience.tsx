import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const internships = [
    {
      title: 'Intel Unnati Labs',
      location: 'CIIC, Chennai',
      duration: 'Jul–Aug 2024',
      description:
        'Completed AI industrial training with a strong focus on ML, Deep Learning, and Neural Networks. Built predictive models on real datasets.',
      summary:
        '✔️ Mastered neural network design, data pipelines, and automation using AI tools.',
      skills: ['Python', 'ML', 'Neural Nets', 'DL Frameworks'],
    },
    {
      title: 'Cognifyz Technologies',
      location: 'Remote',
      duration: 'May–Jun 2025',
      description:
        'Worked on Power BI dashboards. Learned to visualize data and deliver insight-driven BI reports using business datasets.',
      summary:
        '📊 Gained real-world exposure to business analytics, storytelling, and data dashboards.',
      skills: ['Power BI', 'Data Viz', 'BI Reports', 'Analytics'],
    },
  ];

  const certificates = [
    { title: 'Intro to AI', org: 'IBM', date: 'Sep 2024', color: 'from-blue-500 to-blue-700' },
    { title: 'Generative AI', org: 'Intel', date: 'Feb 2025', color: 'from-purple-500 to-purple-700' },
    { title: 'Data Science Foundations', org: 'Great Learning', date: 'Mar 2025', color: 'from-green-500 to-green-700' },
    { title: 'OpenAI GPT & AI Engg.', org: 'Infosys', date: 'Jan 2025', color: 'from-yellow-500 to-orange-600' },
    { title: 'Cybersecurity Pro', org: 'Hebesec', date: 'Mar 2024', color: 'from-red-500 to-red-700' },
  ];

  return (
    <section id="experience" className="py-28 bg-gradient-to-br from-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 animate-pulse"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            🎓 Experience & Certifications
          </motion.h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">Elite exposure through real-world internships and certified programs.</p>
          <motion.div
            className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full animate-pulse"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Internships */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-purple-800 mb-10 text-center animate-pulse">🚀 Internships</h3>
          <div className="space-y-12">
            {internships.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
                transition={{ duration: 1, delay: idx * 0.3 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200 hover:shadow-purple-400 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">{item.title}</h4>
                    <div className="text-gray-500 text-sm flex gap-6 mt-1">
                      <span className="flex items-center gap-1 animate-bounce"><Calendar size={16} /> {item.duration}</span>
                      <span className="flex items-center gap-1 animate-pulse"><MapPin size={16} /> {item.location}</span>
                    </div>
                  </div>
                  <motion.div
                    className="mt-4 lg:mt-0"
                    animate={{ rotate: [0, 12, -12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                      <Briefcase className="text-white w-6 h-6" />
                    </div>
                  </motion.div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">{item.description}</p>
                <p className="text-sm italic text-gray-500 mb-4">{item.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-sm font-medium"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-semibold text-green-700 mb-10 text-center animate-pulse">📜 Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl hover:scale-[1.03] transition-all duration-500"
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 animate-wiggle`}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Award className="text-white w-5 h-5" />
                </motion.div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">{cert.title}</h4>
                <p className="text-purple-600 text-sm font-semibold">{cert.org}</p>
                <p className="text-gray-400 text-xs mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;