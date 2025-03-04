"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, FAQItem, faqItems } from "./data";

const FAQs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const tabVariants = {
    inactive: { backgroundColor: "#f3f4f6", color: "#374151" },
    active: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const Accordion: React.FC<{ item: FAQItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
          whileHover={{ backgroundColor: "#f9fafb" }}
          whileTap={{ scale: 0.99 }}
        >
          <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 ml-2"
          >
            <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products, orders, shipping, and more. Can&apos;t find what you&apos;re
            looking for? Contact our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <div className="sm:hidden">
            <label htmlFor="category-select" className="sr-only">
              Select a category
            </label>
            <select
              id="category-select"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-4 justify-center" aria-label="Tabs">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variants={tabVariants}
                  animate={activeCategory === category ? "active" : "inactive"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {category}
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-12"
          >
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
              {faqItems[activeCategory]?.map((faq, index) => (
                <Accordion key={index} item={faq} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-blue-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900">Still have questions?</h2>
          <p className="mt-2 text-gray-600">Our customer support team is here to help. Reach out to us through any of the channels below:</p>
          <ul className="mt-4 list-disc list-inside">
            <li>
              Email:{" "}
              <a href="mailto:customer@example.com" className="text-blue-600 hover:text-blue-800">
                customer@example.com
              </a>
            </li>
            <li>Phone: (123) 456-7890</li>
          </ul>
          <p className="mt-4 text-gray-600">or simply call our customer service hotline.</p>
          <div className="mt-6 flex items-center justify-center">
            <a
              href="tel:1234567890"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
