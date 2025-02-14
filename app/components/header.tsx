"use client"
import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, User, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'New Arrivals', href: '/new' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Collections', href: '/collections' }
  ];

  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm">
      {/* Top announcement bar with slide-in animation */}
      <div className="bg-black text-white text-center py-2 text-sm animate-slideDown">
        Free shipping on orders over $100 | Shop Now
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Mobile menu button with rotation animation */}
          <button 
            className="lg:hidden transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="animate-spin-once" />
            ) : (
              <Menu size={24} className="animate-spin-once" />
            )}
          </button>

          {/* Logo with hover animation */}
          <div className="text-2xl font-bold transition-transform duration-300 hover:scale-105">
            GymTechWear
          </div>

          {/* Desktop Navigation with hover animations */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-black transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Icons with hover animations */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="transition-transform duration-300 hover:scale-110 hover:text-gray-600"
            >
              <Search size={24} />
            </button>
            <a href="/account" className="transition-transform duration-300 hover:scale-110 hover:text-gray-600">
              <User size={24} />
            </a>
            <a href="/cart" className="transition-transform duration-300 hover:scale-110 hover:text-gray-600">
              <ShoppingCart size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation with slide animation */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 z-80 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 border-b transition-colors duration-300"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-10px)'
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Search Bar with slide and fade animation */}
        <div 
          className={`absolute top-full left-0 right-0 bg-white border-t transform transition-all duration-300 ease-in-out ${
            isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="max-w-3xl mx-auto flex items-center p-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-shadow duration-300"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="ml-2 transition-transform duration-300 hover:scale-110 hover:rotate-90"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// Add these custom animations to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes spinOnce {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  .animate-slideDown {
    animation: slideDown 0.5s ease-out;
  }

  .animate-spin-once {
    animation: spinOnce 0.3s ease-out;
  }
`;
document.head.appendChild(style);