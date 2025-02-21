'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const menLink = '/audience/men';
  const womenLink = '/audience/women';

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Image
              src="/img/fitness.jpg"
              alt="Athletic person working out"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
              <motion.div 
                className="overflow-hidden inline-block"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              >
                <motion.span 
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
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
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white/80 to-white"
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
            className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-xl font-light"
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
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.9, 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <Link href={menLink} className="sm:w-auto">
              <motion.button 
                className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-semibold w-full transition-transform"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Shop Men
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </motion.button>
            </Link>
            
            <Link href={womenLink} className="sm:w-auto">
              <motion.button 
                className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-full font-semibold w-full transition-all duration-300"
                whileHover={{ 
                  backgroundColor: "rgba(255,255,255,1)", 
                  color: "#000"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Shop Women
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
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
          <ChevronDown className="w-8 h-8 text-white/80 hover:text-white transition-colors duration-300" />
        </motion.div>

        {/* Animated Decorative Elements */}
        <motion.div
          className="absolute top-1/4 right-8 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl pointer-events-none"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl pointer-events-none"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
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