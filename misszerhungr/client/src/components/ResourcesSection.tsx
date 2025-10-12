import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ResourcesSection: React.FC = () => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [showSNAPModal, setShowSNAPModal] = useState(false);
  const [showSchoolMealModal, setShowSchoolMealModal] = useState(false);
  const [showSeniorModal, setShowSeniorModal] = useState(false);
  const resources = [
    {
      title: "Emergency Food Assistance",
      description: "Find local food pantries and emergency assistance programs",
      icon: "🍽️",
      modalType: 'emergency'
    },
    {
      title: "SNAP Benefits",
      description: "Apply for Supplemental Nutrition Assistance Program benefits",
      icon: "💳",
      modalType: 'snap'
    },
    {
      title: "School Meal Programs",
      description: "Information about free and reduced-price school meals",
      icon: "🎒",
      modalType: 'school'
    },
    {
      title: "Senior Nutrition",
      description: "Meal programs and nutrition services for seniors",
      icon: "👴",
      modalType: 'senior'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Assistance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find help and resources for food assistance in Tuscaloosa County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => {
                if (resource.modalType === 'emergency') {
                  setShowEmergencyModal(true);
                } else if (resource.modalType === 'snap') {
                  setShowSNAPModal(true);
                } else if (resource.modalType === 'school') {
                  setShowSchoolMealModal(true);
                } else if (resource.modalType === 'senior') {
                  setShowSeniorModal(true);
                }
              }}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-3xl mb-4">{resource.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6"
        >
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Need Immediate Help?</h3>
              <p className="text-red-700 mb-4">Call 2-1-1 for emergency food assistance</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
                Call 2-1-1
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Emergency Food Assistance Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                🍽️ Emergency Food Assistance
              </h2>
              <button
                onClick={() => setShowEmergencyModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Overview */}
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-900 mb-3">🚨 Immediate Help Available</h3>
                <p className="text-red-800 mb-4">
                  If you or your family need food assistance right now, there are several resources available 
                  in Tuscaloosa County to help you get the food you need.
                </p>
              </div>

              {/* Food Pantries */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏪 Local Food Pantries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Tuscaloosa Community Food Bank</h4>
                    <p className="text-sm text-gray-600 mb-2">📍 316 35th St, Tuscaloosa, AL 35401</p>
                    <p className="text-sm text-gray-600 mb-2">📞 (205) 758-5515</p>
                    <p className="text-sm text-gray-600">🕒 Mon-Fri: 9AM-4PM</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Salvation Army Food Pantry</h4>
                    <p className="text-sm text-gray-600 mb-2">📍 1201 Greensboro Ave, Tuscaloosa, AL 35401</p>
                    <p className="text-sm text-gray-600 mb-2">📞 (205) 758-2804</p>
                    <p className="text-sm text-gray-600">🕒 Mon-Fri: 8AM-4PM</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">West Alabama Food Bank</h4>
                    <p className="text-sm text-gray-600 mb-2">📍 316 35th St, Tuscaloosa, AL 35401</p>
                    <p className="text-sm text-gray-600 mb-2">📞 (205) 333-5353</p>
                    <p className="text-sm text-gray-600">🕒 Mon-Fri: 8AM-5PM</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Community Soup Kitchen</h4>
                    <p className="text-sm text-gray-600 mb-2">📍 1718 15th St, Tuscaloosa, AL 35401</p>
                    <p className="text-sm text-gray-600 mb-2">📞 (205) 758-2804</p>
                    <p className="text-sm text-gray-600">🕒 Daily: 11AM-1PM</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📞 Emergency Contacts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                    <h4 className="font-bold text-red-800 mb-2">2-1-1 Helpline</h4>
                    <p className="text-red-700 mb-2">Call 2-1-1 for immediate food assistance referrals</p>
                    <p className="text-red-700">Available 24/7</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-2">Crisis Text Line</h4>
                    <p className="text-blue-700 mb-2">Text HOME to 741741</p>
                    <p className="text-blue-700">Free crisis support</p>
                  </div>
                </div>
              </div>

              {/* What to Bring */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 What to Bring</h3>
                <div className="bg-green-50 rounded-lg p-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• <strong>Photo ID</strong> (driver's license, state ID, passport)</li>
                    <li>• <strong>Proof of address</strong> (utility bill, lease agreement)</li>
                    <li>• <strong>Social Security numbers</strong> for all household members</li>
                    <li>• <strong>Proof of income</strong> (pay stubs, unemployment benefits, etc.)</li>
                    <li>• <strong>Bank statements</strong> (if applicable)</li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help Right Now?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Don't wait - help is available. Call 2-1-1 or visit one of our local food pantries today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Call 2-1-1
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-red-600 transition-all"
                  >
                    Find Nearest Pantry
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* SNAP Benefits Modal */}
      {showSNAPModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                💳 SNAP Benefits (Food Stamps)
              </h2>
              <button
                onClick={() => setShowSNAPModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Overview */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">💡 What is SNAP?</h3>
                <p className="text-blue-800 mb-4">
                  The Supplemental Nutrition Assistance Program (SNAP) provides monthly benefits to help 
                  low-income families buy food. Benefits are loaded onto an EBT card that works like a debit card.
                </p>
              </div>

              {/* Eligibility */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Eligibility Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-3">Income Limits (2024)</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>1 person:</strong> $1,580/month</li>
                      <li>• <strong>2 people:</strong> $2,137/month</li>
                      <li>• <strong>3 people:</strong> $2,694/month</li>
                      <li>• <strong>4 people:</strong> $3,250/month</li>
                      <li>• <strong>Each additional person:</strong> +$556</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-800 mb-3">Other Requirements</h4>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Must be U.S. citizen or legal resident</li>
                      <li>• Must live in Alabama</li>
                      <li>• Must meet work requirements (if able-bodied)</li>
                      <li>• Must provide required documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How to Apply */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📝 How to Apply</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Online Application</h4>
                      <p className="text-gray-600">Apply online at <strong>www.myDHR.alabama.gov</strong></p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-800">In-Person Application</h4>
                      <p className="text-gray-600">Visit your local DHR office</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Phone Application</h4>
                      <p className="text-gray-600">Call (855) 879-7676</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 Required Documents</h3>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <ul className="space-y-2 text-yellow-800">
                    <li>• <strong>Photo ID</strong> for all adults</li>
                    <li>• <strong>Social Security cards</strong> for all household members</li>
                    <li>• <strong>Proof of income</strong> (pay stubs, unemployment, etc.)</li>
                    <li>• <strong>Proof of expenses</strong> (rent, utilities, child care)</li>
                    <li>• <strong>Bank statements</strong></li>
                    <li>• <strong>Proof of citizenship/immigration status</strong></li>
                  </ul>
                </div>
              </div>

              {/* Benefits Amount */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Monthly Benefit Amounts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">Maximum Benefits</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• 1 person: $291</li>
                      <li>• 2 people: $535</li>
                      <li>• 3 people: $766</li>
                      <li>• 4 people: $973</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">What You Can Buy</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Fruits and vegetables</li>
                      <li>• Meat, poultry, fish</li>
                      <li>• Dairy products</li>
                      <li>• Breads and cereals</li>
                      <li>• Seeds and plants</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply for SNAP?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Get help with your application and maximize your benefits with our assistance program.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Apply Online
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
                  >
                    Get Help Applying
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* School Meal Programs Modal */}
      {showSchoolMealModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                🎒 School Meal Programs
              </h2>
              <button
                onClick={() => setShowSchoolMealModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Overview */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-3">🍎 Free & Reduced-Price Meals</h3>
                <p className="text-green-800 mb-4">
                  All children in Tuscaloosa County schools can receive nutritious meals through the National 
                  School Lunch Program and School Breakfast Program, regardless of family income.
                </p>
              </div>

              {/* Programs Available */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏫 Available Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-3">🍳 School Breakfast Program</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Free:</strong> Families at or below 130% of poverty level</li>
                      <li>• <strong>Reduced:</strong> Families at 130-185% of poverty level</li>
                      <li>• <strong>Paid:</strong> Families above 185% of poverty level</li>
                      <li>• <strong>Time:</strong> Before school starts</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-800 mb-3">🍽️ National School Lunch Program</h4>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Free:</strong> Families at or below 130% of poverty level</li>
                      <li>• <strong>Reduced:</strong> Families at 130-185% of poverty level</li>
                      <li>• <strong>Paid:</strong> Families above 185% of poverty level</li>
                      <li>• <strong>Time:</strong> During lunch period</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Income Guidelines */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Income Guidelines (2024-2025)</h3>
                <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="p-2 text-left">Household Size</th>
                        <th className="p-2 text-left">Free Meals (130%)</th>
                        <th className="p-2 text-left">Reduced Meals (185%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2">1</td>
                        <td className="p-2">$1,580/month</td>
                        <td className="p-2">$2,248/month</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-2">2</td>
                        <td className="p-2">$2,137/month</td>
                        <td className="p-2">$3,040/month</td>
                      </tr>
                      <tr>
                        <td className="p-2">3</td>
                        <td className="p-2">$2,694/month</td>
                        <td className="p-2">$3,833/month</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-2">4</td>
                        <td className="p-2">$3,250/month</td>
                        <td className="p-2">$4,625/month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Apply */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📝 How to Apply</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Get Application Form</h4>
                      <p className="text-gray-600">Pick up form from your child's school office or download online</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Fill Out Application</h4>
                      <p className="text-gray-600">Complete all required information about household income and size</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Submit Application</h4>
                      <p className="text-gray-600">Return completed form to school office</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Receive Notification</h4>
                      <p className="text-gray-600">School will notify you of eligibility within 10 days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summer Programs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">☀️ Summer Meal Programs</h3>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-800 mb-2">Summer Food Service Program</h4>
                  <p className="text-yellow-700 mb-2">
                    Free meals are available to all children 18 and under during summer months at various 
                    locations throughout Tuscaloosa County.
                  </p>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• <strong>Locations:</strong> Schools, community centers, parks</li>
                    <li>• <strong>Time:</strong> June - August</li>
                    <li>• <strong>No application required</strong></li>
                    <li>• <strong>All children welcome</strong></li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Apply for School Meals Today</h3>
                <p className="text-lg mb-6 opacity-90">
                  Ensure your child receives nutritious meals at school. Applications are accepted year-round.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Download Application
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-green-600 transition-all"
                  >
                    Find School Contact
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Senior Nutrition Modal */}
      {showSeniorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                👴 Senior Nutrition Programs
              </h2>
              <button
                onClick={() => setShowSeniorModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Overview */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-3">👥 Programs for Seniors 60+</h3>
                <p className="text-purple-800 mb-4">
                  Specialized nutrition programs designed to meet the unique needs of older adults, 
                  including congregate meals, home-delivered meals, and nutrition education.
                </p>
              </div>

              {/* Available Programs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🍽️ Available Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-3">🏠 Meals on Wheels</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Home delivery</strong> of nutritious meals</li>
                      <li>• <strong>Daily delivery</strong> Monday-Friday</li>
                      <li>• <strong>Suggested donation:</strong> $3.50 per meal</li>
                      <li>• <strong>No one turned away</strong> for inability to pay</li>
                      <li>• <strong>Wellness checks</strong> included</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-3">🏢 Congregate Meals</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Group dining</strong> at senior centers</li>
                      <li>• <strong>Social interaction</strong> and activities</li>
                      <li>• <strong>Suggested donation:</strong> $3.50 per meal</li>
                      <li>• <strong>Transportation assistance</strong> available</li>
                      <li>• <strong>Nutrition education</strong> included</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📍 Program Locations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Tuscaloosa Senior Center</h4>
                    <p className="text-sm text-gray-600 mb-2">📍 1900 15th St, Tuscaloosa, AL 35401</p>
                    <p className="text-sm text-gray-600 mb-2">📞 (205) 248-5000</p>
                    <p className="text-sm text-gray-600">🕒 Mon-Fri: 11AM-1PM</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Northport Senior Center</h4>
                    <p className="text-sm text-gray-600 mb-2">📍 415 5th St, Northport, AL 35476</p>
                    <p className="text-sm text-gray-600 mb-2">📞 (205) 333-2999</p>
                    <p className="text-sm text-gray-600">🕒 Mon-Fri: 11AM-1PM</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">West Alabama Area Agency on Aging</h4>
                    <p className="text-sm text-gray-600 mb-2">📍 1100 21st Ave, Tuscaloosa, AL 35401</p>
                    <p className="text-sm text-gray-600 mb-2">📞 (205) 333-2999</p>
                    <p className="text-sm text-gray-600">🕒 Mon-Fri: 8AM-5PM</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Salvation Army Senior Program</h4>
                    <p className="text-sm text-gray-600 mb-2">📍 1201 Greensboro Ave, Tuscaloosa, AL 35401</p>
                    <p className="text-sm text-gray-600 mb-2">📞 (205) 758-2804</p>
                    <p className="text-sm text-gray-600">🕒 Mon-Fri: 11AM-1PM</p>
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Eligibility Requirements</h3>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <ul className="space-y-2 text-yellow-800">
                    <li>• <strong>Age:</strong> 60 years or older</li>
                    <li>• <strong>Residency:</strong> Must live in Tuscaloosa County</li>
                    <li>• <strong>Income:</strong> No income restrictions (donations welcome)</li>
                    <li>• <strong>Mobility:</strong> Meals on Wheels for homebound seniors</li>
                    <li>• <strong>Spouse:</strong> Spouses of any age may participate</li>
                  </ul>
                </div>
              </div>

              {/* Special Services */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🛠️ Additional Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">🚗 Transportation</h4>
                    <p className="text-red-700 text-sm">Free transportation to congregate meal sites</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">📚 Nutrition Education</h4>
                    <p className="text-blue-700 text-sm">Classes on healthy eating and meal planning</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">🏥 Health Screenings</h4>
                    <p className="text-green-700 text-sm">Regular health checks and wellness programs</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Join Our Senior Nutrition Program</h3>
                <p className="text-lg mb-6 opacity-90">
                  Stay healthy and connected with nutritious meals and social activities designed for seniors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Apply for Meals
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-purple-600 transition-all"
                  >
                    Find Nearest Center
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ResourcesSection;
