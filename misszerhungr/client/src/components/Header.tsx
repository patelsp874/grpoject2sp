import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container-max">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center card-shadow">
                <span className="text-white font-bold text-sm">TFA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-800">The Table for All</h1>
                <p className="text-xs text-neutral-600 font-medium">Nonprofit Organization</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            <button 
              onClick={() => {
                // This will be handled by the parent component
                const event = new CustomEvent('navigateToMap');
                window.dispatchEvent(event);
              }}
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium cursor-pointer"
            >
              Hunger in Tuscaloosa
            </button>
            <a href="#achievements" className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
              Impact
            </a>
                <button
                  onClick={() => {
                    const event = new CustomEvent('navigateToVolunteer');
                    window.dispatchEvent(event);
                  }}
                  className="text-neutral-700 hover:text-primary-600 transition-colors font-medium cursor-pointer"
                >
                  Volunteer
                </button>
            <button 
              onClick={() => {
                const event = new CustomEvent('navigateToAuth');
                window.dispatchEvent(event);
              }}
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium cursor-pointer"
            >
              Sign Up / Login
            </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const event = new CustomEvent('navigateToDonation');
                    window.dispatchEvent(event);
                  }}
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Donation
                </motion.button>
          </motion.nav>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;