import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const PlaceholderModal: React.FC<PlaceholderModalProps> = ({ isOpen, onClose, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl p-10 max-w-lg w-full card-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 card-shadow"
              >
                <span className="text-white font-bold text-2xl">TFA</span>
              </motion.div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-3">
                Coming Soon!
              </h2>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <p className="text-lg text-neutral-700 mb-6 font-medium">
                <strong>{content}</strong>
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-2xl p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">!</span>
                  </div>
                  <span className="text-primary-800 font-bold text-lg">Prototype Notice</span>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed">
                  This feature will be fully implemented after the client kickoff meeting. 
                  Thank you for your patience and interest in our mission!
                </p>
              </div>
            </motion.div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
            >
              Got it!
            </motion.button>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-6"
            >
              <p className="text-sm text-neutral-500">
                The Table for All • UN SDG 2 Initiative
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlaceholderModal;
