import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Mail, BookOpen, Globe, Quote } from 'lucide-react';

const HeroAbout: React.FC = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'PriyadharshiniS_Resume.pdf';
    link.click();
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden relative"
    >
      {/* Left: Hero */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center px-6 py-12 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-blue-600 drop-shadow-xl"
        >
          Priyadharshini S
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-800 font-light mt-4"
        >
          🚀 AI Innovator | 📈 Power BI Analyst | 💻 Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base text-gray-600 mt-6 max-w-lg"
        >
          Building intelligent systems and crafting user-focused web apps with data, design, and deep tech synergy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeClick}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-4 rounded-full font-medium flex items-center gap-2 shadow-xl hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-white text-purple-600 px-6 py-4 rounded-full font-medium flex items-center gap-2 shadow-xl border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
          >
            <Mail size={20} />
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Right: About */}
      <div className="w-full lg:w-1/2 py-20 px-8 bg-white relative flex items-center justify-center">
        <div className="max-w-xl" ref={aboutRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">About Me</h2>
            <p className="text-gray-600 text-base">Creative thinker. Curious learner. Tech-driven builder.</p>
            <div className="w-20 h-1 bg-purple-600 mt-3 rounded" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-700"
          >
            <p className="text-lg leading-relaxed">
              I’m Priyadharshini — a passionate individual committed to solving real-world problems with cutting-edge technologies like AI, ML, and full-stack development. I love crafting clean, functional systems that blend intelligence and design.
            </p>

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="p-5 border-l-4 border-purple-600 bg-gray-50 shadow-inner italic text-purple-800 rounded-md flex gap-3 items-start"
            >
              <Quote className="text-purple-400 mt-1" />
              “Technology should be purposeful — not just powerful.”
            </motion.blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-4">
                <BookOpen className="text-purple-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Education</h4>
                  <p>AI & Data Science, Arunai Engineering College</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="text-purple-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p>Tiruvannamalai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Emojis */}
          <motion.div
            className="absolute top-8 right-8 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center shadow"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="text-2xl">💡</span>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-8 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center shadow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="text-xl">👩‍💻</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;