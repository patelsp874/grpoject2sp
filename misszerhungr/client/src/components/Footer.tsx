import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-max">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-12"
          >
            {/* Logo and Mission */}
            <div className="md:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center card-shadow">
                  <span className="text-white font-bold text-xl">TFA</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">The Table for All</h3>
                  <p className="text-neutral-400 font-medium">Nonprofit Organization</p>
                </div>
              </motion.div>
              <p className="text-neutral-300 mb-8 max-w-md leading-relaxed">
                Dedicated to creating a table where everyone has a seat. Through community meals, 
                food sharing, and sustainable solutions, we're building connections that nourish 
                both body and soul.
              </p>
              
              {/* UN SDG Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl px-6 py-3 card-shadow"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold text-sm">2</span>
                </div>
                <span className="text-sm font-semibold">UN SDG 2: Zero Hunger</span>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Our Impact', 'Volunteer', 'Donate', 'Contact'].map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 font-medium">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
              <div className="space-y-4 text-neutral-300">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">info@tableforall.org</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">(555) 123-HUNGER</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">123 Community St, City, ST 12345</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2024 The Table for All. All rights reserved. | 
              <span className="text-primary-400 font-semibold"> UN SDG 2 Initiative</span>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: '📘' },
                { name: 'Twitter', icon: '🐦' },
                { name: 'Instagram', icon: '📷' },
                { name: 'LinkedIn', icon: '💼' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Prototype Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary-900 to-secondary-900 border border-primary-700 rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">!</span>
                </div>
                <span className="text-primary-200 font-bold text-lg">Prototype Notice</span>
              </div>
              <p className="text-primary-100 text-sm leading-relaxed">
                This is a prototype for stakeholder review. All features and content will be 
                finalized after the client kickoff meeting. Thank you for your patience!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;