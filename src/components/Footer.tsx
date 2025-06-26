import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-white pt-24 pb-16 overflow-hidden">
      {/* Glowing Background Circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-700 opacity-30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-32 -right-20 w-64 h-64 bg-pink-600 opacity-20 blur-2xl rounded-full animate-bounce-slow" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-purple-500 opacity-10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-500 animate-gradient-x">
            ✨ Priyadharshini S
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            💡 AI Innovator | 🌐 Full-Stack Engineer | 📊 Data Whisperer<br />
            Transforming ideas into intelligent digital solutions.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-6 mb-10"
        >
          {[
            {
              icon: <Github size={22} />,
              href: 'https://github.com/S-Priyadharshini-1607',
              hover: 'hover:bg-purple-600',
            },
            {
              icon: <Linkedin size={22} />,
              href: 'https://www.linkedin.com/in/priya-dharshini-8692482a6',
              hover: 'hover:bg-blue-600',
            },
            {
              icon: <Mail size={22} />,
              href: 'mailto:priyadharshinip@gmail.com',
              hover: 'hover:bg-green-600',
            },
          ].map(({ icon, href, hover }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, rotate: [0, -8, 8, 0] }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`w-14 h-14 bg-gray-800 ${hover} rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 animate-fadeIn`}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider + Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <p className="text-sm text-gray-500">
            © 2025 <span className="font-medium text-purple-400">Priyadharshini S</span> — All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Floating Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-tr from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_2px_rgba(192,132,252,0.4)] z-50"
        whileHover={{ scale: 1.25, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
