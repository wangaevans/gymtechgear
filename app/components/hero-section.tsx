"use client"
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/img/man2.jpg"
          alt="Hero"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 max-w-3xl">
          {/* Small header text with animation */}
          {/* <div className="overflow-hidden">
            <span className="inline-block text-white/90 text-lg md:text-xl font-medium animate-slide-up">
              Welcome to the Future of Fitness Wear
            </span>
          </div> */}

          {/* Main headline with staggered animation */}
          <div>
            <h1 className="text-6xl md:text-8xl font-bold text-white space-y-4">
              <span className="block overflow-hidden">
                <span className="inline-block animate-slide-up animate-delay-150">
                  TRANSFORM
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block animate-slide-up animate-delay-300">
                  YOUR LIMITS
                </span>
              </span>
            </h1>
          </div>

          {/* Description with fade-in animation */}
          <p className="text-xl md:text-2xl text-white/80 max-w-xl animate-fade-in animate-delay-500">
            Premium technical sportswear engineered for those who push boundaries 
            and demand excellence.
          </p>

          {/* CTA Buttons with hover effects */}
          <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-700">
            <button className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Shop Men
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-black">
              <span className="flex items-center gap-2">
                Shop Women
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-8 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-delay" />
      </div>

      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-[0.03]" />
    </section>
  );
};

// Add these custom animations to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes slow-zoom {
    from { transform: scale(1); }
    to { transform: scale(1.1); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes slide-up {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  .animate-slow-zoom {
    animation: slow-zoom 20s linear infinite alternate;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-delay {
    animation: float 7s ease-in-out infinite;
    animation-delay: 1s;
  }

  .animate-slide-up {
    animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .animate-delay-150 {
    animation-delay: 150ms;
  }

  .animate-delay-300 {
    animation-delay: 300ms;
  }

  .animate-delay-500 {
    animation-delay: 500ms;
  }

  .animate-delay-700 {
    animation-delay: 700ms;
  }
`;
document.head.appendChild(style);

export default HeroSection;