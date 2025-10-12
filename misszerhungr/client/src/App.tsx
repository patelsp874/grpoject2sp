import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import AchievementsSection from './components/AchievementsSection';
import ImageGallery from './components/ImageGallery';
import LoadingAnimation from './components/LoadingAnimation';
import Footer from './components/Footer';
import PlaceholderModal from './components/PlaceholderModal';
import TuscaloosaMapInsights from './components/TuscaloosaMapInsights';
import AuthPage from './components/AuthPage';
import VolunteerXpress from './components/VolunteerXpress';
import DonationPage from './components/DonationPage';
import VolunteerApplicationForm from './components/VolunteerApplicationForm';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [currentPage, setCurrentPage] = useState<'landing' | 'map-insights' | 'auth' | 'volunteer' | 'donation' | 'volunteer-form'>('landing');

  // Simulate loading time for splash page effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 second loading animation

    return () => clearTimeout(timer);
  }, []);

  // Handle navigation events from header
  useEffect(() => {
    const handleNavigateToMap = () => {
      setCurrentPage('map-insights');
    };

    const handleNavigateToAuth = () => {
      setCurrentPage('auth');
    };

    const handleNavigateToVolunteer = () => {
      setCurrentPage('volunteer');
    };

    const handleNavigateToDonation = () => {
      setCurrentPage('donation');
    };

    window.addEventListener('navigateToMap', handleNavigateToMap);
    window.addEventListener('navigateToAuth', handleNavigateToAuth);
    window.addEventListener('navigateToVolunteer', handleNavigateToVolunteer);
    window.addEventListener('navigateToDonation', handleNavigateToDonation);
    
    return () => {
      window.removeEventListener('navigateToMap', handleNavigateToMap);
      window.removeEventListener('navigateToAuth', handleNavigateToAuth);
      window.removeEventListener('navigateToVolunteer', handleNavigateToVolunteer);
      window.removeEventListener('navigateToDonation', handleNavigateToDonation);
    };
  }, []);


  const closeModal = () => {
    setShowModal(false);
  };

  const goBackToLanding = () => {
    setCurrentPage('landing');
  };

  const navigateToVolunteerForm = () => {
    setCurrentPage('volunteer-form');
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
                {currentPage === 'landing' ? (
                  <>
                    <Header />
                    <main>
                      <HeroSection />
                      <MissionSection />
                      <AchievementsSection onNavigateToVolunteerForm={navigateToVolunteerForm} />
                      <ImageGallery onNavigateToVolunteerForm={navigateToVolunteerForm} />
                    </main>
                    <Footer />
                  </>
                ) : currentPage === 'map-insights' ? (
                  <TuscaloosaMapInsights onBackToLanding={goBackToLanding} />
                ) : currentPage === 'auth' ? (
                  <AuthPage onBackToLanding={goBackToLanding} />
                ) : currentPage === 'volunteer' ? (
                  <VolunteerXpress onBackToLanding={goBackToLanding} />
                ) : currentPage === 'volunteer-form' ? (
                  <VolunteerApplicationForm onBackToLanding={goBackToLanding} />
                ) : (
                  <DonationPage onBackToLanding={goBackToLanding} />
                )}
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
