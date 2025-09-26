import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white shadow-lg sticky top-0 z-50 border-b border-neutral-200"
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8">
          {/* Logo Placeholder */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center card-shadow">
              <span className="text-white font-bold text-lg">TFA</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-neutral-800">The Table for All</h1>
              <p className="text-sm text-neutral-600 font-medium">Nonprofit Organization</p>
            </div>
          </motion.div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#mission"
              whileHover={{ scale: 1.05 }}
              className="text-neutral-700 hover:text-primary-600 font-semibold transition-colors duration-200"
            >
              Mission
            </motion.a>
            <motion.a
              href="#achievements"
              whileHover={{ scale: 1.05 }}
              className="text-neutral-700 hover:text-primary-600 font-semibold transition-colors duration-200"
            >
              Impact
            </motion.a>
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              className="text-neutral-700 hover:text-primary-600 font-semibold transition-colors duration-200"
            >
              Gallery
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="text-neutral-700 hover:text-primary-600 font-semibold transition-colors duration-200"
            >
              Contact
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Donate
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="md:hidden p-3 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
