'use client';

import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/img/fitness.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0">
        <div className="flex flex-col gap-6 md:gap-8 max-w-3xl">
          {/* Main headline with staggered animation */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.2,
                  delayChildren: 0.1,
                  ease: "easeOut"
                } 
              }
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              <motion.div 
                className="overflow-hidden inline-block"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              >
                <motion.span 
                  className="inline-block"
                  variants={{
                    hidden: { y: 100 },
                    visible: { 
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.2, 0.65, 0.3, 0.9]
                      }
                    }
                  }}
                >
                  TRANSFORM
                </motion.span>
              </motion.div>
              <motion.div 
                className="overflow-hidden inline-block ml-3 sm:ml-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              >
                <motion.span 
                  className="inline-block"
                  variants={{
                    hidden: { y: 100 },
                    visible: { 
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.2, 0.65, 0.3, 0.9]
                      }
                    }
                  }}
                >
                  YOUR LIMITS
                </motion.span>
              </motion.div>
            </h1>
          </motion.div>

          {/* Description with fade-in animation */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.7, 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            Premium technical sportswear engineered for those who push boundaries 
            and demand excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.9, 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <motion.button 
              className="group relative overflow-hidden bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Shop Men
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </motion.button>
            <motion.button 
              className="group bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold w-full sm:w-auto"
              whileHover={{ backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex items-center justify-center gap-2">
                Shop Women
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, -10, 0] 
          }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/80 hover:text-white" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-8 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: 1 
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;