import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingAnimation: React.FC = () => {
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadingMessages = [
      "Initializing...",
      "Connecting communities...",
      "Preparing shared meals...",
      "Building bridges...",
      "Creating tables...",
      "Almost ready..."
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      setLoadingText(loadingMessages[messageIndex]);
      messageIndex = (messageIndex + 1) % loadingMessages.length;
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary-200 to-primary-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-secondary-200 to-secondary-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 left-1/4 w-56 h-56 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full opacity-15 blur-xl"
        />
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              y: -100,
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 6,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeOut"
            }}
            className="absolute"
          >
            <div className={`w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-primary-400' : 
              i % 3 === 1 ? 'bg-secondary-400' : 
              'bg-gradient-to-r from-primary-400 to-secondary-400'
            }`} />
          </motion.div>
        ))}
      </div>

      <div className="text-center relative z-10 max-w-3xl mx-auto px-6">
        {/* Enhanced Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -360, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative mb-12"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-40 h-40 border-4 border-primary-200 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 w-36 h-36 border-2 border-secondary-200 rounded-full"
          />
          <div className="w-40 h-40 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 rounded-3xl flex items-center justify-center mx-auto card-shadow relative overflow-hidden">
            <motion.div
              animate={{ 
                background: [
                  "linear-gradient(45deg, #f59e0b, #10b981)",
                  "linear-gradient(45deg, #10b981, #f59e0b)",
                  "linear-gradient(45deg, #f59e0b, #10b981)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0"
            />
            <span className="text-white font-bold text-4xl relative z-10">TFA</span>
          </div>
        </motion.div>

        {/* Enhanced Title with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mb-6"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              The Table for All
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Enhanced Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-2xl md:text-3xl text-neutral-700 mb-12 font-medium"
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Where Everyone Has a Seat
          </motion.span>
        </motion.p>

        {/* Enhanced Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 mb-16 card-shadow max-w-2xl mx-auto border border-white/20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="text-xl text-neutral-700 leading-relaxed"
          >
            "We are dedicated to <motion.span 
              animate={{ color: ["#f59e0b", "#10b981", "#f59e0b"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="font-semibold"
            >creating a table</motion.span> where 
            <motion.span 
              animate={{ color: ["#10b981", "#f59e0b", "#10b981"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="font-semibold"
            > everyone has a seat</motion.span> and access to 
            nutritious food, building community through shared meals and sustainable solutions."
          </motion.p>
        </motion.div>

        {/* Enhanced Progress Section */}
        <div className="w-96 max-w-full mx-auto mb-8">
          {/* Progress Bar Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 card-shadow border border-white/20"
          >
            {/* Progress Bar */}
            <div className="bg-neutral-200 rounded-full h-4 mb-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-4 rounded-full relative overflow-hidden"
              >
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(90deg, #f59e0b, #10b981)",
                      "linear-gradient(90deg, #10b981, #f59e0b)",
                      "linear-gradient(90deg, #f59e0b, #10b981)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0"
                />
                <motion.div
                  animate={{ x: [-100, 400] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-20"
                />
              </motion.div>
            </div>
            
            {/* Progress Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-neutral-700 text-lg font-medium"
              >
                {loadingText}
              </motion.div>
            </AnimatePresence>
            
            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }}
              className="text-primary-600 text-sm font-semibold mt-2"
            >
              {progress}%
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced UN SDG Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl px-8 py-4 card-shadow inline-block"
          >
            <div className="flex items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4"
              >
                <span className="text-primary-600 font-bold text-lg">2</span>
              </motion.div>
              <span className="text-white text-lg font-semibold">UN SDG 2: Zero Hunger</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.2 }}
          className="flex justify-center space-x-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-3 h-3 bg-primary-500 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
