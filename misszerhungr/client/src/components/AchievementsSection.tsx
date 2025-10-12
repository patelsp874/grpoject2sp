import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VolunteerApplicationForm from './VolunteerApplicationForm';

interface AchievementsSectionProps {
  onNavigateToVolunteerForm?: () => void;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onNavigateToVolunteerForm }) => {
  const [showDetailedPlan, setShowDetailedPlan] = useState(false);
  const [showSurplusFoodPlan, setShowSurplusFoodPlan] = useState(false);
  const [showCommunityHubsPlan, setShowCommunityHubsPlan] = useState(false);
  const [showVolunteerNetworkPlan, setShowVolunteerNetworkPlan] = useState(false);
  const [showNutritionEducationPlan, setShowNutritionEducationPlan] = useState(false);

  const achievements = [
    {
      icon: "📊",
      title: "Reduce Food Insecurity",
      description: "Working to decrease food insecurity rates by 50% in our target communities through strategic partnerships and direct food distribution programs.",
      progress: 75,
      color: "from-primary-500 to-primary-600",
      clickable: true
    },
    {
      icon: "♻️",
      title: "Redistribute Surplus Food",
      description: "Diverting thousands of pounds of surplus food from landfills to families in need, reducing waste while feeding communities.",
      progress: 60,
      color: "from-secondary-500 to-secondary-600",
      clickable: true,
      modalType: 'surplus'
    },
    {
      icon: "🏘️",
      title: "Community Food Hubs",
      description: "Establishing community food hubs that provide access to fresh, nutritious food and educational resources for sustainable living.",
      progress: 40,
      color: "from-primary-500 to-secondary-500",
      clickable: true,
      modalType: 'hubs'
    },
    {
      icon: "👥",
      title: "Volunteer Network",
      description: "Building a robust network of volunteers and community partners to amplify our impact and reach more families in need.",
      progress: 85,
      color: "from-secondary-500 to-primary-500",
      clickable: true,
      modalType: 'volunteer'
    },
    {
      icon: "📚",
      title: "Nutrition Education",
      description: "Providing nutrition education and cooking classes to help families make the most of available food resources.",
      progress: 55,
      color: "from-primary-500 to-primary-600",
      clickable: true,
      modalType: 'nutrition'
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
              What We're Trying to Achieve
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive approach to ending hunger focuses on multiple interconnected strategies 
              that address both immediate needs and long-term systemic change.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  if (achievement.clickable) {
                    if (achievement.modalType === 'surplus') {
                      setShowSurplusFoodPlan(true);
                    } else if (achievement.modalType === 'hubs') {
                      setShowCommunityHubsPlan(true);
                    } else if (achievement.modalType === 'volunteer') {
                      setShowVolunteerNetworkPlan(true);
                    } else if (achievement.modalType === 'nutrition') {
                      setShowNutritionEducationPlan(true);
                    } else {
                      setShowDetailedPlan(true);
                    }
                  }
                }}
                className={`bg-white rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-neutral-200 ${
                  achievement.clickable ? 'cursor-pointer' : ''
                }`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-3xl">{achievement.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center">
                  {achievement.title}
                  {achievement.clickable && (
                    <span className="ml-2 text-sm text-primary-600 font-normal">(Click for details)</span>
                  )}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {achievement.description}
                </p>
                
                {/* Progress Bar */}
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-neutral-600 mb-2 font-semibold">
                    <span>Progress</span>
                    <span>{achievement.progress}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${achievement.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (0.1 * index) }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-r ${achievement.color} h-3 rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 md:p-16 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Join Us in Making a Difference
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Together, we can build a world where no one goes hungry. 
                Your support helps us turn these goals into reality and create lasting change in our communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById('volunteer-section')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="bg-white text-primary-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  Get Involved
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById('achievements')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Detailed Plan Modal */}
      {showDetailedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                📊 Detailed Plan: Reduce Food Insecurity
              </h2>
              <button
                onClick={() => setShowDetailedPlan(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-8">
              {/* Goal Overview */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">🎯 Our Goal</h3>
                <p className="text-lg text-blue-800 mb-4">
                  Reduce food insecurity rates by <strong>50%</strong> in Tuscaloosa County within the next 3 years, 
                  targeting the most vulnerable populations and creating sustainable solutions for long-term food security.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">50%</div>
                    <div className="text-sm text-gray-600">Reduction Target</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">3 Years</div>
                    <div className="text-sm text-gray-600">Timeline</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">25K+</div>
                    <div className="text-sm text-gray-600">People Impacted</div>
                  </div>
                </div>
              </div>

              {/* Strategic Pillars */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🏗️ Strategic Pillars</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h4 className="text-xl font-bold text-green-800 mb-3">1. Direct Food Distribution</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Emergency Food Pantries:</strong> 15 new locations in high-need areas</li>
                      <li>• <strong>Mobile Food Units:</strong> 5 vehicles serving rural communities</li>
                      <li>• <strong>School Meal Programs:</strong> Weekend and summer meal programs</li>
                      <li>• <strong>Senior Meal Delivery:</strong> Home delivery for elderly residents</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold text-blue-800 mb-3">2. Food Rescue & Redistribution</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Restaurant Partnerships:</strong> 50+ restaurants donating surplus food</li>
                      <li>• <strong>Grocery Store Recovery:</strong> Daily pickups from major chains</li>
                      <li>• <strong>Farm-to-Table:</strong> Direct partnerships with local farmers</li>
                      <li>• <strong>VolunteerXpress:</strong> Student volunteer delivery network</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                    <h4 className="text-xl font-bold text-purple-800 mb-3">3. Community Capacity Building</h4>
                    <ul className="space-y-2 text-purple-700">
                      <li>• <strong>Community Gardens:</strong> 20 new gardens in underserved areas</li>
                      <li>• <strong>Nutrition Education:</strong> Cooking classes and meal planning</li>
                      <li>• <strong>Job Training:</strong> Culinary skills and food service training</li>
                      <li>• <strong>Financial Literacy:</strong> Budgeting and food cost management</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                    <h4 className="text-xl font-bold text-orange-800 mb-3">4. Policy & Advocacy</h4>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Local Policy:</strong> Advocate for food security ordinances</li>
                      <li>• <strong>State Legislation:</strong> Support SNAP and WIC programs</li>
                      <li>• <strong>Federal Advocacy:</strong> Push for increased food assistance funding</li>
                      <li>• <strong>Corporate Partnerships:</strong> Encourage business food donation policies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Implementation Timeline */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📅 Implementation Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Year 1: Foundation Building</h4>
                      <p className="text-gray-600">Establish partnerships, launch emergency programs, and set up infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Year 2: Scale & Expand</h4>
                      <p className="text-gray-600">Expand programs, launch community gardens, and increase volunteer network</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                    <div>
                      <h4 className="font-bold text-gray-800">Year 3: Sustainability & Impact</h4>
                      <p className="text-gray-600">Achieve 50% reduction target, establish sustainable systems, and measure impact</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Success Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Quantitative Measures</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Food insecurity rate reduction from 15.2% to 7.6%</li>
                      <li>• 2.5 million meals distributed annually</li>
                      <li>• 500,000 pounds of food rescued from waste</li>
                      <li>• 1,000+ families served monthly</li>
                      <li>• 200+ volunteers actively engaged</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Qualitative Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Improved community health outcomes</li>
                      <li>• Enhanced food security knowledge</li>
                      <li>• Stronger community connections</li>
                      <li>• Increased economic stability</li>
                      <li>• Reduced social isolation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Join us in reducing food insecurity in Tuscaloosa. Every contribution helps us reach our goal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Volunteer Today
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-all"
                  >
                    Donate Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Redistribute Surplus Food Modal */}
      {showSurplusFoodPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                ♻️ Detailed Plan: Redistribute Surplus Food
              </h2>
              <button
                onClick={() => setShowSurplusFoodPlan(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-8">
              {/* Goal Overview */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-900 mb-4">🎯 Our Mission</h3>
                <p className="text-lg text-green-800 mb-4">
                  Transform food waste into community nourishment by creating a comprehensive surplus food redistribution network 
                  that connects restaurants, grocery stores, and farms with families in need across Tuscaloosa County.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">500K+</div>
                    <div className="text-sm text-gray-600">Pounds Rescued Annually</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Partner Locations</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">2.5M</div>
                    <div className="text-sm text-gray-600">Meals Created</div>
                  </div>
                </div>
              </div>

              {/* The Path - How It Works */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🛤️ The Path: From Waste to Plate</h3>
                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-800 mb-2">Collection & Identification</h4>
                      <p className="text-blue-700 mb-3">Our network identifies surplus food from various sources:</p>
                      <ul className="space-y-1 text-blue-600">
                        <li>• <strong>Restaurants:</strong> End-of-day meals, excess prep, event catering</li>
                        <li>• <strong>Grocery Stores:</strong> Near-expiry produce, bakery items, deli foods</li>
                        <li>• <strong>Farms:</strong> Surplus crops, imperfect produce, seasonal excess</li>
                        <li>• <strong>Food Manufacturers:</strong> Overproduction, packaging errors, discontinued items</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">Quality Assessment & Sorting</h4>
                      <p className="text-green-700 mb-3">Trained volunteers assess and categorize food:</p>
                      <ul className="space-y-1 text-green-600">
                        <li>• <strong>Safety Check:</strong> Temperature, packaging integrity, expiration dates</li>
                        <li>• <strong>Quality Sorting:</strong> Grade A (immediate distribution), Grade B (cooking/processing)</li>
                        <li>• <strong>Category Organization:</strong> Fresh produce, prepared foods, pantry items, frozen goods</li>
                        <li>• <strong>Documentation:</strong> Track quantities, sources, and destinations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-purple-800 mb-2">Distribution Network</h4>
                      <p className="text-purple-700 mb-3">Multiple channels ensure food reaches those in need:</p>
                      <ul className="space-y-1 text-purple-600">
                        <li>• <strong>Direct Distribution:</strong> Food pantries, soup kitchens, shelters</li>
                        <li>• <strong>Mobile Units:</strong> Rural areas, senior centers, schools</li>
                        <li>• <strong>Community Events:</strong> Pop-up markets, neighborhood distributions</li>
                        <li>• <strong>Home Delivery:</strong> Elderly, disabled, and vulnerable families</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="text-xl font-bold text-orange-800 mb-2">Impact Tracking & Feedback</h4>
                      <p className="text-orange-700 mb-3">Continuous monitoring ensures effectiveness:</p>
                      <ul className="space-y-1 text-orange-600">
                        <li>• <strong>Recipient Feedback:</strong> Quality, quantity, and satisfaction surveys</li>
                        <li>• <strong>Partner Reports:</strong> Regular check-ins with food sources</li>
                        <li>• <strong>Waste Reduction Metrics:</strong> Pounds diverted from landfills</li>
                        <li>• <strong>Community Impact:</strong> Families served, meals provided, health outcomes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology & Innovation */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">💻 Technology & Innovation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">📱 Mobile App Platform</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Real-time surplus food alerts</li>
                      <li>• GPS tracking for pickup routes</li>
                      <li>• Volunteer scheduling system</li>
                      <li>• Recipient registration and preferences</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">📊 Data Analytics</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Predictive modeling for food surplus</li>
                      <li>• Route optimization algorithms</li>
                      <li>• Impact measurement dashboards</li>
                      <li>• Community need assessment tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Success Metrics & Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Environmental Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 500,000+ pounds diverted from landfills annually</li>
                      <li>• 40% reduction in food waste across partner locations</li>
                      <li>• 2,000+ tons CO2 emissions prevented</li>
                      <li>• 95% of rescued food successfully distributed</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Community Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 2.5 million meals created from surplus food</li>
                      <li>• 1,000+ families served monthly</li>
                      <li>• $2M+ in food value redistributed</li>
                      <li>• 200+ volunteers actively engaged</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Join Our Food Rescue Mission</h3>
                <p className="text-lg mb-6 opacity-90">
                  Help us turn food waste into community nourishment. Every rescued meal makes a difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Become a Partner
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-green-600 transition-all"
                  >
                    Volunteer Today
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Community Food Hubs Modal */}
      {showCommunityHubsPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                🏘️ Detailed Plan: Community Food Hubs
              </h2>
              <button
                onClick={() => setShowCommunityHubsPlan(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-8">
              {/* Goal Overview */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">🎯 Our Vision</h3>
                <p className="text-lg text-purple-800 mb-4">
                  Create a network of community food hubs that serve as central points for fresh, nutritious food access, 
                  education, and community building. These hubs will connect farmers, schools, and volunteers in a sustainable 
                  ecosystem that strengthens food security and community resilience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">20</div>
                    <div className="text-sm text-gray-600">Community Hubs Planned</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600">Farmer Partnerships</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">15</div>
                    <div className="text-sm text-gray-600">School Collaborations</div>
                  </div>
                </div>
              </div>

              {/* The Path - How We Establish Hubs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🛤️ The Path: Building Community Food Hubs</h3>
                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">Site Selection & Community Assessment</h4>
                      <p className="text-green-700 mb-3">Strategic placement based on community needs:</p>
                      <ul className="space-y-1 text-green-600">
                        <li>• <strong>High-Need Areas:</strong> Food deserts, low-income neighborhoods</li>
                        <li>• <strong>Accessibility:</strong> Public transportation, walkable locations</li>
                        <li>• <strong>Community Support:</strong> Local organizations, churches, schools</li>
                        <li>• <strong>Infrastructure:</strong> Storage facilities, kitchen equipment, meeting spaces</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-800 mb-2">Farmer & School Partnerships</h4>
                      <p className="text-blue-700 mb-3">Building the foundation of our food ecosystem:</p>
                      <ul className="space-y-1 text-blue-600">
                        <li>• <strong>Local Farmers:</strong> Direct partnerships for fresh produce supply</li>
                        <li>• <strong>School Gardens:</strong> Educational programs and food production</li>
                        <li>• <strong>Agricultural Education:</strong> Teaching sustainable farming practices</li>
                        <li>• <strong>Farm-to-School Programs:</strong> Connecting students with food sources</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-purple-800 mb-2">Volunteer Network Integration</h4>
                      <p className="text-purple-700 mb-3">Connecting community members through volunteer opportunities:</p>
                      <ul className="space-y-1 text-purple-600">
                        <li>• <strong>Hub Coordinators:</strong> Local volunteers managing daily operations</li>
                        <li>• <strong>Food Distribution:</strong> Volunteers handling food sorting and distribution</li>
                        <li>• <strong>Educational Programs:</strong> Teaching nutrition, cooking, and gardening</li>
                        <li>• <strong>Community Events:</strong> Organizing workshops, markets, and celebrations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="text-xl font-bold text-orange-800 mb-2">Program Development & Launch</h4>
                      <p className="text-orange-700 mb-3">Comprehensive services for community empowerment:</p>
                      <ul className="space-y-1 text-orange-600">
                        <li>• <strong>Fresh Food Access:</strong> Weekly markets, CSA programs, emergency food</li>
                        <li>• <strong>Nutrition Education:</strong> Cooking classes, meal planning, health workshops</li>
                        <li>• <strong>Community Gardens:</strong> Shared growing spaces, gardening education</li>
                        <li>• <strong>Resource Sharing:</strong> Tools, seeds, knowledge, and support networks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Farmer & Organization Volunteer Path */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🌾 How Farmers & Organizations Volunteer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h4 className="text-xl font-bold text-green-800 mb-4">👨‍🌾 Farmer Volunteer Opportunities</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-green-700 mb-2">Food Donation Program</h5>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Donate surplus crops and imperfect produce</li>
                          <li>• Participate in gleaning programs</li>
                          <li>• Provide seasonal excess harvests</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-green-700 mb-2">Educational Partnerships</h5>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Host farm tours for students and families</li>
                          <li>• Teach sustainable farming practices</li>
                          <li>• Mentor aspiring farmers and gardeners</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-green-700 mb-2">Community Engagement</h5>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Participate in farmers markets at hubs</li>
                          <li>• Support community garden initiatives</li>
                          <li>• Share knowledge and resources</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold text-blue-800 mb-4">🏢 Organization Volunteer Opportunities</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-blue-700 mb-2">School Partnerships</h5>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Integrate food hub programs into curriculum</li>
                          <li>• Provide student volunteers for hub activities</li>
                          <li>• Host nutrition education programs</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-blue-700 mb-2">Corporate Support</h5>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Employee volunteer programs</li>
                          <li>• Sponsorship of hub facilities and programs</li>
                          <li>• Skills-based volunteering (marketing, accounting, etc.)</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-bold text-blue-700 mb-2">Community Organizations</h5>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Churches, nonprofits, and civic groups</li>
                          <li>• Provide meeting spaces and resources</li>
                          <li>• Organize community events and outreach</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hub Services & Programs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🏪 Hub Services & Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">🥬 Fresh Food Access</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Weekly farmers markets</li>
                      <li>• CSA (Community Supported Agriculture) programs</li>
                      <li>• Emergency food assistance</li>
                      <li>• SNAP/EBT acceptance</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">📚 Education Programs</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Cooking and nutrition classes</li>
                      <li>• Gardening workshops</li>
                      <li>• Food preservation techniques</li>
                      <li>• Budget-friendly meal planning</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">🤝 Community Building</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Shared community gardens</li>
                      <li>• Volunteer opportunities</li>
                      <li>• Cultural food celebrations</li>
                      <li>• Resource sharing networks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Success Metrics & Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Community Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 20 community food hubs established</li>
                      <li>• 5,000+ families served monthly</li>
                      <li>• 50+ local farmers engaged</li>
                      <li>• 15 schools participating in programs</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Educational Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 1,000+ nutrition education participants</li>
                      <li>• 500+ community garden participants</li>
                      <li>• 200+ cooking class graduates</li>
                      <li>• 95% participant satisfaction rate</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Join Our Community Food Hub Network</h3>
                <p className="text-lg mb-6 opacity-90">
                  Help us build resilient communities through food security, education, and connection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Partner with Us
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-purple-600 transition-all"
                  >
                    Start a Hub
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Volunteer Network Modal */}
      {showVolunteerNetworkPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                👥 Detailed Plan: Volunteer Network
              </h2>
              <button
                onClick={() => setShowVolunteerNetworkPlan(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-8">
              {/* Goal Overview */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">🎯 Our Mission</h3>
                <p className="text-lg text-blue-800 mb-4">
                  Build a comprehensive volunteer network that connects passionate individuals with meaningful opportunities 
                  to fight hunger in Tuscaloosa County. Our volunteers are the heart of our organization, amplifying our 
                  impact and reaching more families in need through dedicated service and community engagement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">200+</div>
                    <div className="text-sm text-gray-600">Active Volunteers</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">15</div>
                    <div className="text-sm text-gray-600">Volunteer Roles</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">5K+</div>
                    <div className="text-sm text-gray-600">Hours Monthly</div>
                  </div>
                </div>
              </div>

              {/* The Volunteer Path */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🛤️ The Volunteer Path: Your Journey to Making a Difference</h3>
                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">Application & Registration</h4>
                      <p className="text-green-700 mb-3">Start your volunteer journey with a simple application process:</p>
                      <ul className="space-y-1 text-green-600">
                        <li>• <strong>Fill out volunteer application form</strong> online or in-person</li>
                        <li>• <strong>Choose your location:</strong> Tuscaloosa County (multiple sites available)</li>
                        <li>• <strong>Select your availability:</strong> Weekdays, weekends, evenings, or flexible</li>
                        <li>• <strong>Background check:</strong> Quick and confidential safety verification</li>
                        <li>• <strong>Orientation session:</strong> Learn about our mission and programs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-800 mb-2">Role Selection & Matching</h4>
                      <p className="text-blue-700 mb-3">Choose from diverse volunteer opportunities that match your skills and interests:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-bold text-blue-700 mb-2">🍎 Food Operations</h5>
                          <ul className="text-sm text-blue-600 space-y-1">
                            <li>• Food sorting and packaging</li>
                            <li>• Quality inspection and safety checks</li>
                            <li>• Inventory management</li>
                            <li>• Meal preparation and cooking</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-bold text-blue-700 mb-2">🚚 Delivery & Distribution</h5>
                          <ul className="text-sm text-blue-600 space-y-1">
                            <li>• Food delivery to families</li>
                            <li>• Mobile pantry operations</li>
                            <li>• Route planning and logistics</li>
                            <li>• Community event setup</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-bold text-blue-700 mb-2">📚 Education & Outreach</h5>
                          <ul className="text-sm text-blue-600 space-y-1">
                            <li>• Nutrition education classes</li>
                            <li>• Cooking demonstrations</li>
                            <li>• Community outreach</li>
                            <li>• School program support</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-bold text-blue-700 mb-2">💰 Fundraising & Admin</h5>
                          <ul className="text-sm text-blue-600 space-y-1">
                            <li>• Event planning and coordination</li>
                            <li>• Grant writing assistance</li>
                            <li>• Social media and marketing</li>
                            <li>• Data entry and reporting</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-purple-800 mb-2">Training & Onboarding</h4>
                      <p className="text-purple-700 mb-3">Comprehensive training ensures you're prepared and confident:</p>
                      <ul className="space-y-1 text-purple-600">
                        <li>• <strong>Role-specific training:</strong> Hands-on learning for your chosen position</li>
                        <li>• <strong>Safety protocols:</strong> Food handling, equipment use, emergency procedures</li>
                        <li>• <strong>Cultural sensitivity:</strong> Working respectfully with diverse communities</li>
                        <li>• <strong>Communication skills:</strong> Effective interaction with recipients and team members</li>
                        <li>• <strong>Shadowing program:</strong> Work alongside experienced volunteers</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="text-xl font-bold text-orange-800 mb-2">Active Volunteering & Impact</h4>
                      <p className="text-orange-700 mb-3">Start making a real difference in your community:</p>
                      <ul className="space-y-1 text-orange-600">
                        <li>• <strong>Flexible scheduling:</strong> Choose shifts that fit your lifestyle</li>
                        <li>• <strong>Team collaboration:</strong> Work with like-minded volunteers</li>
                        <li>• <strong>Direct impact:</strong> See immediate results of your efforts</li>
                        <li>• <strong>Skill development:</strong> Learn new abilities and gain experience</li>
                        <li>• <strong>Community connections:</strong> Build lasting relationships</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h4 className="text-xl font-bold text-indigo-800 mb-2">Recognition & Growth</h4>
                      <p className="text-indigo-700 mb-3">Celebrate achievements and advance your volunteer journey:</p>
                      <ul className="space-y-1 text-indigo-600">
                        <li>• <strong>Volunteer recognition:</strong> Monthly awards, certificates, and appreciation events</li>
                        <li>• <strong>Leadership opportunities:</strong> Become a team lead or coordinator</li>
                        <li>• <strong>Specialized roles:</strong> Advance to specialized positions</li>
                        <li>• <strong>Community impact reports:</strong> See the difference you're making</li>
                        <li>• <strong>Networking opportunities:</strong> Connect with professionals and community leaders</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Volunteer Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🎁 Volunteer Benefits & Rewards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Personal Development</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Skill Building:</strong> Gain valuable work experience</li>
                      <li>• <strong>Leadership Training:</strong> Develop management and coordination skills</li>
                      <li>• <strong>Networking:</strong> Connect with professionals and community leaders</li>
                      <li>• <strong>Resume Enhancement:</strong> Add meaningful volunteer experience</li>
                      <li>• <strong>Personal Growth:</strong> Build confidence and empathy</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Community Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Direct Service:</strong> Help families access nutritious food</li>
                      <li>• <strong>Waste Reduction:</strong> Prevent food from going to landfills</li>
                      <li>• <strong>Education:</strong> Teach others about nutrition and cooking</li>
                      <li>• <strong>Community Building:</strong> Strengthen neighborhood connections</li>
                      <li>• <strong>Social Change:</strong> Be part of systemic hunger solutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Specialized Programs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🌟 Specialized Volunteer Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                    <h4 className="text-lg font-bold text-green-800 mb-3">🎓 Student Volunteer Program</h4>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• Community service hours for graduation</li>
                      <li>• Scholarship opportunities</li>
                      <li>• Flexible scheduling around classes</li>
                      <li>• Leadership development workshops</li>
                      <li>• College application support</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                    <h4 className="text-lg font-bold text-blue-800 mb-3">👨‍💼 Corporate Volunteer Program</h4>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>• Team building activities</li>
                      <li>• Employee engagement programs</li>
                      <li>• Skills-based volunteering</li>
                      <li>• Corporate social responsibility</li>
                      <li>• Professional development</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-3">👴 Senior Volunteer Program</h4>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li>• Meaningful retirement activities</li>
                      <li>• Mentoring opportunities</li>
                      <li>• Flexible time commitments</li>
                      <li>• Social connection and purpose</li>
                      <li>• Health and wellness benefits</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Volunteer Network Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Network Growth</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 200+ active volunteers across Tuscaloosa County</li>
                      <li>• 85% volunteer retention rate</li>
                      <li>• 15 different volunteer roles available</li>
                      <li>• 5,000+ volunteer hours contributed monthly</li>
                      <li>• 95% volunteer satisfaction rating</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Community Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 2.5 million meals distributed with volunteer help</li>
                      <li>• 1,000+ families served monthly</li>
                      <li>• 500,000+ pounds of food rescued</li>
                      <li>• 50+ community events organized</li>
                      <li>• 20+ schools and organizations partnered</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Join Our Volunteer Network?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Start your journey today and become part of a community that's making a real difference in fighting hunger.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowVolunteerNetworkPlan(false);
                      if (onNavigateToVolunteerForm) {
                        onNavigateToVolunteerForm();
                      }
                    }}
                    className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Apply to Volunteer
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Nutrition Education Modal */}
      {showNutritionEducationPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                📚 Detailed Plan: Nutrition Education
              </h2>
              <button
                onClick={() => setShowNutritionEducationPlan(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-8">
              {/* Goal Overview */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-900 mb-4">🎯 Our Mission</h3>
                <p className="text-lg text-green-800 mb-4">
                  Empower families in Tuscaloosa County with comprehensive nutrition education, practical cooking skills, 
                  and knowledge about maintaining a healthy diet. We believe that education is the foundation of 
                  long-term food security and overall well-being.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-600">Families Educated</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Classes Monthly</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">95%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              {/* Why Nutrition Matters */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Why Nutrition Education is Essential</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold text-blue-800 mb-3">🏥 Health Impact</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Prevents Chronic Diseases:</strong> Reduces risk of diabetes, heart disease, and obesity</li>
                      <li>• <strong>Boosts Immune System:</strong> Proper nutrients strengthen body's defense mechanisms</li>
                      <li>• <strong>Improves Mental Health:</strong> Balanced diet supports brain function and mood stability</li>
                      <li>• <strong>Enhances Energy Levels:</strong> Proper nutrition provides sustained energy throughout the day</li>
                      <li>• <strong>Supports Growth:</strong> Essential for children's physical and cognitive development</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h4 className="text-xl font-bold text-green-800 mb-3">💰 Economic Benefits</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Reduces Healthcare Costs:</strong> Prevents expensive medical treatments</li>
                      <li>• <strong>Maximizes Food Budget:</strong> Learn to stretch limited resources effectively</li>
                      <li>• <strong>Reduces Food Waste:</strong> Proper meal planning prevents spoilage</li>
                      <li>• <strong>Improves Productivity:</strong> Better nutrition leads to better work performance</li>
                      <li>• <strong>Long-term Savings:</strong> Investment in health pays dividends over time</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Maintaining a Proper Diet */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🥗 How to Maintain a Proper Diet</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-purple-800 mb-4">🍎 The Balanced Plate Method</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-bold text-purple-700 mb-2">Fill Half Your Plate with:</h5>
                        <ul className="space-y-1 text-purple-600">
                          <li>• <strong>Vegetables:</strong> Leafy greens, broccoli, carrots, peppers</li>
                          <li>• <strong>Fruits:</strong> Apples, berries, citrus fruits, bananas</li>
                          <li>• <strong>Benefits:</strong> Vitamins, minerals, fiber, antioxidants</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-purple-700 mb-2">Fill Quarter with:</h5>
                        <ul className="space-y-1 text-purple-600">
                          <li>• <strong>Lean Proteins:</strong> Chicken, fish, beans, eggs, tofu</li>
                          <li>• <strong>Benefits:</strong> Muscle building, tissue repair, immune function</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h5 className="font-bold text-purple-700 mb-2">Fill Quarter with:</h5>
                      <ul className="space-y-1 text-purple-600">
                        <li>• <strong>Whole Grains:</strong> Brown rice, quinoa, whole wheat bread, oats</li>
                        <li>• <strong>Benefits:</strong> Sustained energy, fiber, B vitamins</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                      <h4 className="text-lg font-bold text-yellow-800 mb-3">💧 Hydration</h4>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• Drink 8-10 glasses of water daily</li>
                        <li>• Start each meal with water</li>
                        <li>• Limit sugary drinks</li>
                        <li>• Eat water-rich foods (cucumber, watermelon)</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                      <h4 className="text-lg font-bold text-orange-800 mb-3">⏰ Meal Timing</h4>
                      <ul className="space-y-1 text-orange-700 text-sm">
                        <li>• Eat every 3-4 hours</li>
                        <li>• Don't skip breakfast</li>
                        <li>• Plan meals in advance</li>
                        <li>• Listen to hunger cues</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                      <h4 className="text-lg font-bold text-red-800 mb-3">📏 Portion Control</h4>
                      <ul className="space-y-1 text-red-700 text-sm">
                        <li>• Use smaller plates</li>
                        <li>• Measure portions initially</li>
                        <li>• Eat slowly and mindfully</li>
                        <li>• Stop when 80% full</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Foods to Avoid */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Foods to Limit or Avoid</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h4 className="text-xl font-bold text-red-800 mb-3">🚫 Highly Processed Foods</h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• <strong>Fast Food:</strong> High in sodium, unhealthy fats, and calories</li>
                      <li>• <strong>Packaged Snacks:</strong> Chips, crackers with artificial ingredients</li>
                      <li>• <strong>Frozen Meals:</strong> Often high in sodium and preservatives</li>
                      <li>• <strong>Why Avoid:</strong> Linked to obesity, heart disease, and diabetes</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                    <h4 className="text-xl font-bold text-orange-800 mb-3">🍭 Sugary Foods & Drinks</h4>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Soda & Energy Drinks:</strong> Empty calories, blood sugar spikes</li>
                      <li>• <strong>Candy & Sweets:</strong> High sugar content, no nutritional value</li>
                      <li>• <strong>Sweetened Cereals:</strong> Often more sugar than nutrition</li>
                      <li>• <strong>Why Limit:</strong> Causes energy crashes, tooth decay, weight gain</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                    <h4 className="text-xl font-bold text-yellow-800 mb-3">🧈 Unhealthy Fats</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• <strong>Trans Fats:</strong> Found in fried foods, baked goods</li>
                      <li>• <strong>Excessive Saturated Fats:</strong> Fatty cuts of meat, full-fat dairy</li>
                      <li>• <strong>Why Limit:</strong> Increases cholesterol, heart disease risk</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-500">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">🧂 High Sodium Foods</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Processed Meats:</strong> Deli meats, hot dogs, bacon</li>
                      <li>• <strong>Canned Foods:</strong> High sodium content</li>
                      <li>• <strong>Restaurant Foods:</strong> Often heavily salted</li>
                      <li>• <strong>Why Limit:</strong> Increases blood pressure, heart disease risk</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Education Programs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Our Nutrition Education Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <h4 className="text-lg font-bold text-green-800 mb-3">👨‍👩‍👧‍👦 Family Cooking Classes</h4>
                      <ul className="space-y-2 text-green-700 text-sm">
                        <li>• Hands-on cooking instruction</li>
                        <li>• Budget-friendly meal planning</li>
                        <li>• Kid-friendly recipes</li>
                        <li>• Take-home recipe cards</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <h4 className="text-lg font-bold text-blue-800 mb-3">🎓 School Nutrition Programs</h4>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Interactive nutrition lessons</li>
                        <li>• Healthy snack demonstrations</li>
                        <li>• Garden-to-table education</li>
                        <li>• Parent workshops</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                      <h4 className="text-lg font-bold text-purple-800 mb-3">👴 Senior Nutrition Workshops</h4>
                      <ul className="space-y-2 text-purple-700 text-sm">
                        <li>• Age-specific nutrition needs</li>
                        <li>• Medication-food interactions</li>
                        <li>• Easy-to-prepare meals</li>
                        <li>• Social dining opportunities</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                      <h4 className="text-lg font-bold text-orange-800 mb-3">🏥 Health Condition Support</h4>
                      <ul className="space-y-2 text-orange-700 text-sm">
                        <li>• Diabetes management</li>
                        <li>• Heart-healthy eating</li>
                        <li>• Weight management</li>
                        <li>• One-on-one counseling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Program Impact & Success</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Educational Impact</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 500+ families completed nutrition education programs</li>
                      <li>• 95% of participants report improved cooking skills</li>
                      <li>• 87% of families eat more fruits and vegetables</li>
                      <li>• 78% of participants reduced processed food consumption</li>
                      <li>• 92% feel more confident planning healthy meals</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Health Outcomes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 65% of participants improved blood pressure readings</li>
                      <li>• 58% achieved healthier weight management</li>
                      <li>• 72% reported increased energy levels</li>
                      <li>• 81% experienced better sleep quality</li>
                      <li>• 89% reported improved overall well-being</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Learn About Nutrition?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Join our nutrition education programs and take control of your family's health and well-being.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Join a Class
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-green-600 transition-all"
                  >
                    Get Resources
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

export default AchievementsSection;
