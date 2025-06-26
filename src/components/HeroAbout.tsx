import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Mail, BookOpen, Globe, Quote, Sparkles } from 'lucide-react';

const HeroAbout: React.FC = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true });

  const handleResumeClick = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'PriyadharshiniS_Resume.pdf';
    link.click();
    window.open('/resume.pdf', '_blank');
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden relative">
      {/* HERO LEFT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center px-8 py-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
            Priyadharshini S
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-800 font-light tracking-wide">
            🚀 AI Enthusiast | 📈 Data Analyst | 💻 Full-Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-base md:text-lg text-gray-700 leading-relaxed">
            Passionate about leveraging AI & Data Science to build impactful solutions. Skilled in Python, Power BI, and modern web development with a strong commitment to meaningful, real-world innovation.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <button
            onClick={handleResumeClick}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300"
          >
            <Download size={18} /> Resume
          </button>
          <button
            onClick={scrollToContact}
            className="bg-white text-purple-600 px-6 py-3 border-2 border-purple-600 rounded-full font-medium flex items-center gap-2 shadow-md hover:bg-purple-50 transition duration-300"
          >
            <Mail size={18} /> Contact
          </button>
        </motion.div>

        {/* Sparkles */}
        <motion.div
          className="absolute -top-10 left-1/4 w-16 h-16 text-yellow-400 animate-spin-slow"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <Sparkles size={40} />
        </motion.div>
      </div>

      {/* ABOUT RIGHT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-20 bg-white relative overflow-hidden">
        <div className="max-w-xl space-y-6" ref={aboutRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Summary</h2>
            <p className="text-gray-600 text-base">Tech Explorer. Purpose-Driven Engineer. Creative Problem Solver.</p>
            <div className="w-20 h-1 bg-purple-600 mt-3 rounded" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            As a B.Tech (AI & DS) student, I've built powerful web apps, dashboards, and AI systems with real-world impact. From industrial training at Intel Unnati to building an AI Waste Segregation System, my journey is fueled by innovation, design thinking, and data.
          </motion.p>

          {/* Highlights */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-purple-700 font-medium mt-4"
          >
            <li className="bg-purple-50 p-3 rounded-xl shadow-sm hover:shadow-md transition">⚡ GPT & Generative AI Certified</li>
            <li className="bg-purple-50 p-3 rounded-xl shadow-sm hover:shadow-md transition">📊 Power BI Dashboards & Analytics</li>
            <li className="bg-purple-50 p-3 rounded-xl shadow-sm hover:shadow-md transition">🤖 ML & Deep Learning Trained</li>
            <li className="bg-purple-50 p-3 rounded-xl shadow-sm hover:shadow-md transition">🌐 Full-Stack Web Development</li>
          </motion.ul>

          {/* Quote */}
          <motion.blockquote
            className="p-5 border-l-4 border-purple-600 bg-gray-50 shadow-inner italic text-purple-800 rounded-md flex gap-3 items-start"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Quote className="text-purple-400 mt-1" />
            “Code with purpose. Build with vision. Solve with intelligence.”
          </motion.blockquote>

          {/* Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="flex items-start gap-3">
              <BookOpen className="text-purple-600 mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-gray-900">Education</h4>
                <p>B.Tech – AI & Data Science</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="text-purple-600 mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-gray-900">Location</h4>
                <p>Tiruvannamalai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Emojis */}
        <motion.div
          className="absolute top-10 right-8 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shadow"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-xl">💡</span>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-8 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center shadow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-lg">👩‍💻</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAbout;