import React from 'react';
import { motion } from 'framer-motion';

interface NavigationButtonsProps {
  onButtonClick: (content: string) => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onButtonClick }) => {
  const buttons = [
    {
      title: "Tuscaloosa Map Insights",
      description: "Explore interactive food insecurity data and mapping",
      icon: "🗺️",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "About Us",
      description: "Learn more about our organization, team, and values",
      icon: "👥",
      color: "from-primary-500 to-primary-600"
    },
    {
      title: "Our Impact",
      description: "See the difference we're making in communities",
      icon: "📈",
      color: "from-secondary-500 to-secondary-600"
    },
    {
      title: "Volunteer",
      description: "Join our volunteer network and make a difference",
      icon: "🤝",
      color: "from-primary-500 to-secondary-500"
    },
    {
      title: "Donate",
      description: "Support our mission with a financial contribution",
      icon: "💝",
      color: "from-secondary-500 to-primary-500"
    },
    {
      title: "Contact",
      description: "Get in touch with our team",
      icon: "📞",
      color: "from-primary-500 to-primary-600"
    }
  ];

  return (
    <section className="section-padding bg-white">
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
              Take Action Today
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Choose how you'd like to get involved with our mission to end hunger. 
              Each action you take brings us closer to a world without food insecurity.
            </p>
          </motion.div>

          {/* Navigation Buttons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buttons.map((button, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onButtonClick(button.title)}
                className={`bg-gradient-to-br ${button.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl mb-6"
                  >
                    {button.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                    {button.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {button.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 text-2xl"
                  >
                    →
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-4xl mx-auto border border-primary-200">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">!</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-800">Prototype Notice</h3>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                This is a prototype for stakeholder review. All buttons and features will be fully 
                functional after the client kickoff meeting. Click any button above to see the 
                placeholder message that will be shown to stakeholders.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NavigationButtons;
