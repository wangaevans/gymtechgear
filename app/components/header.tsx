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
    <header className="relative bg-white shadow-sm">
      {/* Top announcement bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Free shipping on orders over $100 | Shop Now
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="text-2xl font-bold">
            GymTechWear
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-gray-600"
            >
              <Search size={24} />
            </button>
            <a href="/account" className="hover:text-gray-600">
              <User size={24} />
            </a>
            <a href="/cart" className="hover:text-gray-600">
              <ShoppingCart size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 border-b"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t p-4">
            <div className="max-w-3xl mx-auto flex items-center">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="ml-2"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;