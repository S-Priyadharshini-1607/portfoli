import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
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
      title: 'GPT Models & AI-First Software Engineering',
      issuer: 'Infosys',
      date: 'Jan 2025',
      color: 'from-orange-600 to-orange-700'
    },
    {
      title: 'Certified Cybersecurity Professional',
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
      description: 'Completed industrial training in ML & Deep Learning at CIIC Intel Unnati Data Centric Labs, Chennai. Gained hands-on experience in data preprocessing, neural networks, model development, and predictive analytics. Applied AI to real-world automation problems.',
      skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Data Preprocessing']
    },
    {
      title: 'Cognifyz Technologies',
      duration: 'May – June 2025',
      location: 'Remote',
      description: 'Interned in Power BI domain. Learned data visualization, dashboard design, and business intelligence principles. Created analytical dashboards to derive insights from business datasets.',
      skills: ['Power BI', 'Data Visualization', 'Business Intelligence', 'Dashboard Design']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience & Certifications
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        {/* Internships */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Internships</h3>
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{internship.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{internship.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-purple-600 rounded-full text-sm font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-purple-600 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;