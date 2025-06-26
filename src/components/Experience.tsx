import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certifications = [
    {
      title: 'Introduction to AI',
      issuer: 'IBM',
      date: 'Sep 2024',
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Generative AI',
      issuer: 'Intel',
      date: 'Feb 2025',
      color: 'from-purple-600 to-purple-700'
    },
    {
      title: 'Data Science Foundations',
      issuer: 'Great Learning',
      date: 'Mar 2025',
      color: 'from-green-600 to-green-700'
    },
    {
      title: 'GPT & AI Software Engineering',
      issuer: 'Infosys',
      date: 'Jan 2025',
      color: 'from-orange-600 to-orange-700'
    },
    {
      title: 'Cybersecurity Professional',
      issuer: 'Hebesec',
      date: 'Mar 2024',
      color: 'from-red-600 to-red-700'
    }
  ];

  const internships = [
    {
      title: 'CIIC Intel Unnati',
      duration: 'July 25 – Aug 28, 2024',
      location: 'Chennai',
      description: 'Completed industrial training in ML & Deep Learning. Worked on neural networks, data pipelines, and automation analytics using real-world datasets.',
      skills: ['Machine Learning', 'Neural Networks', 'Data Preprocessing', 'Deep Learning']
    },
    {
      title: 'Cognifyz Technologies',
      duration: 'May – June 2025',
      location: 'Remote',
      description: 'Interned in the Power BI domain. Created business dashboards, worked with data storytelling and visualization techniques for BI reporting.',
      skills: ['Power BI', 'BI Dashboards', 'Data Storytelling', 'Visualization']
    }
  ];

  return (
    <section id="experience" className="py-28 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-pulse"
          >
            Experience & Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-xl mx-auto text-base md:text-lg"
          >
            Real-world learning through hands-on challenges and elite platforms.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full animate-pulse"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Internships */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-pulse">🧠 Internships</h3>
          <div className="space-y-12">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="bg-white p-8 rounded-3xl border border-purple-200 shadow-2xl hover:shadow-purple-300 transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{internship.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm font-medium">
                      <div className="flex items-center gap-1 animate-bounce">
                        <Calendar size={16} />
                        {internship.duration}
                      </div>
                      <div className="flex items-center gap-1 animate-pulse">
                        <MapPin size={16} />
                        {internship.location}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="mt-4 lg:mt-0"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="text-gray-700 mb-4 leading-relaxed"
                >
                  {internship.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {internship.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-sm font-medium"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-bounce">📜 Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8, rotateZ: 5 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateZ: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-[1.03] hover:rotate-1 transition-all duration-500"
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 animate-wiggle`}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h4>
                <p className="text-purple-600 font-medium">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;