import React from 'react';
import { motion } from 'framer-motion';
import TuscaloosaMap from './TuscaloosaMap';
import ResourcesSection from './ResourcesSection';
import GoogleMap from './GoogleMap';
import { GOOGLE_MAPS_API_KEY } from '../config/googleMaps';

interface TuscaloosaMapInsightsProps {
  onBackToLanding: () => void;
}

const TuscaloosaMapInsights: React.FC<TuscaloosaMapInsightsProps> = ({ onBackToLanding }) => {
  const [activeTab, setActiveTab] = React.useState<'custom' | 'google'>('google');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={onBackToLanding}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </motion.button>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TFA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">The Table for All</h1>
                <p className="text-xs text-gray-500">Tuscaloosa Map Insights</p>
              </div>
            </motion.div>

            {/* Placeholder for balance */}
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Tuscaloosa Food Insecurity Dashboard
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Real-time data and interactive mapping of food insecurity across Tuscaloosa County, Alabama
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-2">15.2%</div>
                <div className="text-sm text-gray-600">County Food Insecurity Rate</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">34,500</div>
                <div className="text-sm text-gray-600">People Affected</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">227K</div>
                <div className="text-sm text-gray-600">Total Population</div>
              </div>
            </motion.div>
          </div>

          {/* Data Source Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
                <p className="text-sm text-gray-600">
                  Information compiled from Feeding America's Map the Meal Gap study, 
                  USDA Economic Research Service, and local food bank data.
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Last Updated</div>
                <div className="text-sm font-medium text-gray-900">December 2024</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit mx-auto">
              <button
                onClick={() => setActiveTab('google')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'google'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🗺️ Interactive Google Map
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'custom'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                📊 Data Visualization
              </button>
            </div>
          </div>

          {/* Map Content */}
          {activeTab === 'google' ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Interactive Tuscaloosa County Map</h2>
                <p className="text-gray-600">
                  Click on markers to see detailed food insecurity data for each area. 
                  Markers are color-coded by severity: Green (low), Yellow (medium), Orange (high), Red (critical).
                </p>
                {GOOGLE_MAPS_API_KEY === 'YOUR_API_KEY_HERE' && (
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Setup Required:</strong> Please add your Google Maps API key to <code>src/config/googleMaps.ts</code> 
                      to enable the interactive map. Get your API key from the <a href="https://goo.gle/468t4eo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Maps Platform</a>.
                    </p>
                  </div>
                )}
              </div>
              <div className="h-[600px] relative">
                <GoogleMap apiKey={GOOGLE_MAPS_API_KEY} />
                
                {/* Map Legend */}
                <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="text-sm font-semibold mb-3">Food Insecurity Severity</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Low (Under 12%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs">Medium (12-16%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <span className="text-xs">High (16-20%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-xs">Critical (20%+)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <TuscaloosaMap />
          )}
        </div>
      </section>

      {/* Resources Section */}
      <ResourcesSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">TFA</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">The Table for All</h3>
                    <p className="text-sm text-gray-400">Food Insecurity Tracker</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Providing real-time data and resources to combat food insecurity in Tuscaloosa County, Alabama.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#map" className="text-gray-300 hover:text-white transition-colors">Interactive Map</a></li>
                  <li><a href="#data" className="text-gray-300 hover:text-white transition-colors">Data Reports</a></li>
                  <li><a href="#resources" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
                  <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Emergency: 2-1-1</p>
                  <p>Phone: (205) 555-0123</p>
                  <p>Email: info@tableforall.org</p>
                  <p>Tuscaloosa, AL 35401</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-800 mt-8 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 The Table for All. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default TuscaloosaMapInsights;
