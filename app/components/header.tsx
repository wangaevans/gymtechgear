"use client"
import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-black text-white text-center py-2 text-sm"
      >
        Free shipping on orders over $100 | Shop Now
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Mobile menu button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Logo with hover animation */}
          <motion.a
          href='/' 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            GymTechWear
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-gray-700 hover:text-black"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={24} />
            </motion.button>
            <motion.a href="/account" whileHover={{ scale: 1.1 }}>
              <User size={24} />
            </motion.a>
            <motion.a href="/cart" whileHover={{ scale: 1.1 }}>
              <ShoppingCart size={24} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t"
            >
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-3 text-gray-700 hover:bg-gray-50 border-b"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white border-t"
            >
              <div className="max-w-3xl mx-auto flex items-center p-4">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2"
                >
                  <X size={24} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
