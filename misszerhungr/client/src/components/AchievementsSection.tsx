import React from 'react';
import { motion } from 'framer-motion';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: "📊",
      title: "Reduce Food Insecurity",
      description: "Working to decrease food insecurity rates by 50% in our target communities through strategic partnerships and direct food distribution programs.",
      progress: 75,
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: "♻️",
      title: "Redistribute Surplus Food",
      description: "Diverting thousands of pounds of surplus food from landfills to families in need, reducing waste while feeding communities.",
      progress: 60,
      color: "from-secondary-500 to-secondary-600"
    },
    {
      icon: "🏘️",
      title: "Community Food Hubs",
      description: "Establishing community food hubs that provide access to fresh, nutritious food and educational resources for sustainable living.",
      progress: 40,
      color: "from-primary-500 to-secondary-500"
    },
    {
      icon: "👥",
      title: "Volunteer Network",
      description: "Building a robust network of volunteers and community partners to amplify our impact and reach more families in need.",
      progress: 85,
      color: "from-secondary-500 to-primary-500"
    },
    {
      icon: "📚",
      title: "Nutrition Education",
      description: "Providing nutrition education and cooking classes to help families make the most of available food resources.",
      progress: 55,
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: "🌍",
      title: "Policy Advocacy",
      description: "Advocating for policies that support food security, reduce food waste, and create sustainable food systems.",
      progress: 30,
      color: "from-secondary-500 to-secondary-600"
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
                className="bg-white rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-neutral-200"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-3xl">{achievement.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                  {achievement.title}
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
                  className="bg-white text-primary-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  Get Involved
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
