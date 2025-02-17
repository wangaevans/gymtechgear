"use client"
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, Search, User, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserButton, useUser, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isLoaded, isSignedIn } = useUser();

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    // Handle scroll for shadow effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'New Arrivals', href: '/new' },
    { name: 'Collections', href: '/collections' }
  ];

  return (
    <header className={`sticky top-0 z-20  bg-white ${scrolled ? 'shadow-md' : 'shadow-sm'} transition-shadow duration-300`}>
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
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile menu button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="lg:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Logo with hover animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold flex-shrink-0 mr-4 lg:mr-0"
          >
            <Link href="/">GymTechWear</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name}>
                <Link 
                  href={item.href}
                  className="text-gray-700 hover:text-black relative py-2"
                >
                  <motion.span
                    className="relative inline-block"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="focus:outline-none"
              aria-label="Search"
            >
              <Search size={22} className="text-gray-800" />
            </motion.button>
            
            {/* Conditionally render auth elements based on sign-in state */}
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                  }
                }}
              />
            </SignedIn>
            
            <SignedOut>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/sign-in" aria-label="Sign in">
                  <User size={22} className="text-gray-800" />
                </Link>
              </motion.div>
            </SignedOut>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link href="/cart" aria-label="Shopping cart">
                <ShoppingCart size={22} className="text-gray-800" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t"
            >
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="px-4 py-4 text-gray-800 hover:bg-gray-50 flex justify-between items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </Link>
                  </motion.div>
                ))}
                
                {!isSignedIn && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: navItems.length * 0.05 }}
                  >
                    <Link
                      href="/sign-in"
                      className="px-4 py-4 text-gray-800 hover:bg-gray-50 flex justify-between items-center border-t"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-medium">Sign In</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </Link>
                  </motion.div>
                )}
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
              className="absolute top-full left-0 right-0 bg-white border-t border-b shadow-lg z-10"
            >
              <div className="max-w-3xl mx-auto flex items-center p-4">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  autoFocus
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-3 p-2"
                  aria-label="Close search"
                >
                  <X size={22} className="text-gray-500" />
                </motion.button>
              </div>
              
              {/* Popular searches - optional */}
              <div className="max-w-3xl mx-auto px-4 pb-4">
                <p className="text-sm text-gray-500 mb-2">Popular:</p>
                <div className="flex flex-wrap gap-2">
                  {['Leggings', 'Workout shirts', 'Gym shorts', 'Sports bra'].map(term => (
                    <button 
                      key={term} 
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;