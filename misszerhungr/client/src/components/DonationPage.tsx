import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DonationPageProps {
  onBackToLanding: () => void;
}

const DonationPage: React.FC<DonationPageProps> = ({ onBackToLanding }) => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      alert(`Thank you for your $${donationAmount} ${donationType} donation! Your contribution will help feed families in Tuscaloosa.`);
      setIsProcessing(false);
      setShowPaymentForm(false);
      setDonationAmount(0);
    }, 2000);
  };

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setShowPaymentForm(true);
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
            <h1 className="text-xl font-bold text-gray-900">Make a Donation</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="text-6xl mb-4">💝</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Support Our Mission
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Help us end hunger in Tuscaloosa
              </p>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Your donation directly supports our food rescue programs, volunteer network, 
                and community meal initiatives. Every dollar makes a real difference in 
                someone's life.
              </p>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-2">$1</div>
                <div className="text-sm text-gray-600">Provides 3 meals</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">$25</div>
                <div className="text-sm text-gray-600">Feeds a family for a week</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">$100</div>
                <div className="text-sm text-gray-600">Supports VolunteerXpress for a day</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Donation Amount
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select an amount or enter a custom donation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Amount Selection */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Donation</h3>
              
              {/* Preset Amounts */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {presetAmounts.map((amount) => (
                  <motion.button
                    key={amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAmountSelect(amount)}
                    className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                  >
                    <div className="text-2xl font-bold text-gray-900">${amount}</div>
                    <div className="text-sm text-gray-600">
                      {amount === 25 && "Feeds family for week"}
                      {amount === 50 && "Supports 2 families"}
                      {amount === 100 && "VolunteerXpress day"}
                      {amount === 250 && "Community meal"}
                      {amount === 500 && "Major impact"}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Amount
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={donationAmount || ''}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter amount"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => donationAmount > 0 && setShowPaymentForm(true)}
                    disabled={donationAmount <= 0}
                    className="inline-flex items-center px-4 py-2 rounded-r-md border border-l-0 border-gray-300 bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    Donate
                  </motion.button>
                </div>
              </div>

              {/* Donation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Donation Type
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="donationType"
                      value="one-time"
                      checked={donationType === 'one-time'}
                      onChange={(e) => setDonationType(e.target.value as 'one-time' | 'monthly')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">One-time</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="donationType"
                      value="monthly"
                      checked={donationType === 'monthly'}
                      onChange={(e) => setDonationType(e.target.value as 'one-time' | 'monthly')}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Monthly</span>
                  </label>
                </div>
              </div>
            </motion.div>

            {/* Donation Impact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">🍽️</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Meals Provided</h4>
                  </div>
                  <p className="text-gray-600">
                    Your donation will provide approximately <strong>{donationAmount * 3}</strong> meals to families in need.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">👥</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Families Helped</h4>
                  </div>
                  <p className="text-gray-600">
                    Your contribution will help feed approximately <strong>{Math.ceil(donationAmount / 25)}</strong> families for a week.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-orange-600 text-sm">🚗</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">VolunteerXpress Support</h4>
                  </div>
                  <p className="text-gray-600">
                    Your donation supports our volunteer drivers and food rescue operations.
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-1">🔒</span>
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-1">✓</span>
                    Tax Deductible
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-1">📧</span>
                    Receipt Sent
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Complete Your Donation
              </h2>
              <button
                onClick={() => setShowPaymentForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">${donationAmount}</div>
                <div className="text-sm text-gray-600">
                  {donationType === 'monthly' ? 'Monthly Donation' : 'One-time Donation'}
                </div>
              </div>
            </div>

            <form onSubmit={handleDonationSubmit} className="space-y-4">
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
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Billing Address
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  I agree to the terms and conditions and privacy policy
                </label>
              </div>

              <div className="flex space-x-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  {isProcessing ? 'Processing...' : `Donate $${donationAmount}`}
                </motion.button>
                <button
                  type="button"
                  onClick={() => setShowPaymentForm(false)}
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
            <h3 className="text-2xl font-bold mb-4">Thank You for Your Support</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Your donation helps us continue our mission to end hunger in Tuscaloosa. 
              Together, we can make a difference in our community.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>501(c)(3) Nonprofit</span>
              <span>•</span>
              <span>Tax Deductible</span>
              <span>•</span>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonationPage;

