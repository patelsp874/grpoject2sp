import React from 'react';
import { motion } from 'framer-motion';

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 md:p-16 mb-20 card-shadow"
          >
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8">
                Creating Community Through Shared Meals
              </h3>
              
              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-8">
                We are dedicated to <span className="text-primary-600 font-semibold">creating a table</span> where 
                <span className="text-secondary-600 font-semibold"> everyone has a seat</span> and access to 
                nutritious food. Through community meals, food sharing programs, and sustainable solutions, 
                we're building connections that nourish both body and soul.
              </p>
              
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                Through innovative partnerships, community engagement, and data-driven solutions, 
                we work towards achieving the United Nations Sustainable Development Goal 2: 
                <span className="text-primary-600 font-semibold"> Zero Hunger</span>.
              </p>
            </div>
          </motion.div>

          {/* Mission Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "🍽️",
                title: "Community Meals",
                description: "Hosting shared meals that bring neighbors together, creating connections while providing nutritious food for all.",
                color: "from-primary-500 to-primary-600"
              },
              {
                icon: "🌱",
                title: "Food Sharing",
                description: "Connecting surplus food from restaurants, grocery stores, and farms with community tables and food programs.",
                color: "from-secondary-500 to-secondary-600"
              },
              {
                icon: "🤝",
                title: "Building Tables",
                description: "Creating spaces where everyone belongs, fostering community through shared meals and sustainable food systems.",
                color: "from-primary-500 to-secondary-500"
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-neutral-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-3xl">{pillar.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">{pillar.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Why It Matters Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-3xl p-12 md:p-16 text-white">
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                  Why It Matters
                </h3>
                <p className="text-xl leading-relaxed mb-8 opacity-90">
                  Hunger affects millions of families every day. It's not just about food—it's about dignity, 
                  opportunity, and the fundamental right to thrive. When we eliminate hunger, we create stronger, 
                  more resilient communities where everyone can reach their full potential.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-400 mb-2">1 in 8</div>
                    <div className="text-lg opacity-90">Americans face food insecurity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary-400 mb-2">40%</div>
                    <div className="text-lg opacity-90">Of food produced goes to waste</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
