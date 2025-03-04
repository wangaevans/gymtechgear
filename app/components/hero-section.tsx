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
          <Image
            src="/img/fitness.jpg"
            alt="Athletic person working out"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover object-center"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-6 max-w-2xl">
          {/* Main headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:7xl font-bold text-white leading-tight">
              TRANSFORM <br className="hidden sm:block" />
              <span className="text-white">YOUR LIMITS</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-white/90 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Premium technical sportswear engineered for those who push boundaries 
            and demand excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link href={menLink} className="sm:w-auto">
              <button 
                className="bg-white text-black px-8 py-3 rounded-md font-semibold w-full hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Shop Men
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            
            <Link href={womenLink} className="sm:w-auto">
              <button 
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold w-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Shop Women
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, -8, 0] 
          }}
          transition={{ 
            opacity: { delay: 1, duration: 0.5 },
            y: { delay: 1, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ChevronDown className="w-6 h-6 text-white hover:text-white/80 transition-colors duration-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;