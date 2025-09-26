import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import AchievementsSection from './components/AchievementsSection';
import ImageGallery from './components/ImageGallery';
import NavigationButtons from './components/NavigationButtons';
import LoadingAnimation from './components/LoadingAnimation';
import Footer from './components/Footer';
import PlaceholderModal from './components/PlaceholderModal';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // Simulate loading time for splash page effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 second loading animation

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (content: string) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <AnimatePresence>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen"
          >
            <Header />
            <main>
              <HeroSection />
              <MissionSection />
              <AchievementsSection />
              <ImageGallery />
              <NavigationButtons onButtonClick={handleButtonClick} />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Placeholder Modal */}
      <PlaceholderModal
        isOpen={showModal}
        onClose={closeModal}
        content={modalContent}
      />
    </div>
  );
};

export default App;
