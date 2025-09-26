import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-600 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary-600 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-primary-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-secondary-500 rounded-full"></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center mx-auto mb-8 card-shadow"
        >
          <span className="text-white font-bold text-3xl">TFA</span>
        </motion.div>

        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-neutral-800 mb-4"
        >
          The Table for All
        </motion.h1>

        {/* Tagline Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl md:text-2xl text-neutral-600 mb-8 font-medium"
        >
          Where Everyone Has a Seat
        </motion.p>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="bg-white rounded-2xl p-8 mb-12 card-shadow max-w-lg mx-auto"
        >
          <p className="text-lg text-neutral-700 leading-relaxed">
            "We are dedicated to <span className="text-primary-600 font-semibold">creating a table</span> where 
            <span className="text-secondary-600 font-semibold"> everyone has a seat</span> and access to 
            nutritious food, building community through shared meals and sustainable solutions."
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto">
          <div className="bg-neutral-200 rounded-full h-3 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
            />
          </div>
          
          {/* Progress Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-neutral-600 text-sm font-medium"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Preparing to make a difference...
            </motion.span>
          </motion.div>
        </div>

        {/* UN SDG Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl px-6 py-3 card-shadow">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-600 font-bold text-sm">2</span>
              </div>
              <span className="text-white text-sm font-semibold">UN SDG 2: Zero Hunger</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
                opacity: 0
              }}
              animate={{ 
                y: -50,
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 0.6,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="absolute w-3 h-3 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
