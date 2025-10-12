import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VolunteerXpressProps {
  onBackToLanding: () => void;
}

const VolunteerXpress: React.FC<VolunteerXpressProps> = ({ onBackToLanding }) => {
  const [selectedRole, setSelectedRole] = useState<'driver' | 'coordinator' | null>(null);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for volunteer registration logic
    alert(`Thank you for signing up as a ${selectedRole}! We'll contact you soon with more details.`);
    setIsSigningUp(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.button
              onClick={onBackToLanding}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </motion.button>
            <h1 className="text-xl font-bold text-gray-900">VolunteerXpress</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="text-6xl mb-4">🚗💝</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                VolunteerXpress
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Drive Change, Deliver Hope
              </p>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Join our special volunteer program where students and community members 
                drive around Tuscaloosa picking up leftover food from restaurants and 
                delivering it directly to those in need. Make a real difference with every mile!
              </p>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Meals Delivered Weekly</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Active Volunteers</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">25</div>
                <div className="text-sm text-gray-600">Partner Restaurants</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How VolunteerXpress Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple steps to make a big impact in your community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Register as a volunteer driver or coordinator",
                icon: "📝",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "2", 
                title: "Get Notified",
                description: "Receive pickup requests via our app",
                icon: "📱",
                color: "from-green-500 to-green-600"
              },
              {
                step: "3",
                title: "Pick Up Food",
                description: "Drive to restaurants and collect surplus food",
                icon: "🍽️",
                color: "from-orange-500 to-orange-600"
              },
              {
                step: "4",
                title: "Deliver Hope",
                description: "Drop off food to families and individuals in need",
                icon: "🏠",
                color: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Role
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pick the volunteer role that fits your schedule and interests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Driver Role */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Volunteer Driver</h3>
                <p className="text-gray-600">Perfect for students and community members</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Flexible schedule - drive when you can</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Pick up food from partner restaurants</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Deliver directly to families in need</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Track your impact and earn community service hours</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedRole('driver');
                  setIsSigningUp(true);
                }}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Sign Up as Driver
              </motion.button>
            </motion.div>

            {/* Coordinator Role */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-200"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Volunteer Coordinator</h3>
                <p className="text-gray-600">Great for experienced volunteers and leaders</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Coordinate pickup schedules and routes</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Communicate with restaurants and volunteers</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Track deliveries and maintain records</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Help onboard new volunteers</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedRole('coordinator');
                  setIsSigningUp(true);
                }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Sign Up as Coordinator
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join VolunteerXpress?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Make a meaningful impact while gaining valuable experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Community Service Hours",
                description: "Perfect for students needing volunteer hours for school or scholarships"
              },
              {
                icon: "🤝",
                title: "Build Connections",
                description: "Meet like-minded volunteers and make lasting friendships"
              },
              {
                icon: "💪",
                title: "Leadership Skills",
                description: "Develop organizational and communication skills"
              },
              {
                icon: "❤️",
                title: "Direct Impact",
                description: "See the immediate difference you make in people's lives"
              },
              {
                icon: "🌱",
                title: "Reduce Food Waste",
                description: "Help restaurants reduce waste while feeding the hungry"
              },
              {
                icon: "🏆",
                title: "Recognition",
                description: "Earn certificates and recognition for your volunteer work"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Modal */}
      {isSigningUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Sign Up as {selectedRole === 'driver' ? 'Driver' : 'Coordinator'}
              </h2>
              <button
                onClick={() => setIsSigningUp(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleVolunteerSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {selectedRole === 'driver' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Driver's License Number
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Availability (Days/Times)
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Weekends, After 5 PM on weekdays..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to volunteer?
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`flex-1 py-3 px-6 rounded-lg text-white font-medium ${
                    selectedRole === 'driver' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}
                >
                  Sign Up
                </motion.button>
                <button
                  type="button"
                  onClick={() => setIsSigningUp(false)}
                  className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Drive Change?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join VolunteerXpress today and start making a difference in your community. 
              Every mile you drive brings hope to someone in need.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedRole('driver');
                  setIsSigningUp(true);
                }}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Become a Driver
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedRole('coordinator');
                  setIsSigningUp(true);
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Become a Coordinator
              </motion.button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VolunteerXpress;

