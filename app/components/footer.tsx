import React from 'react'
import { 
    Facebook, Twitter, Instagram,Youtube, MapPin, Phone, Mail
  } from 'lucide-react';

export default function Footer() {
  return (
    <div>
       {/* Footer */}
       <footer className="bg-black text-gray-300">
        {/* Newsletter Section */}
        {/* <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Join the Movement</h3>
                <p className="text-gray-400">Get 10% off your first order & stay updated</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 w-full md:w-80 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-r-lg hover:bg-blue-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">gymtechgear</h2>
              <div className="space-y-4 text-gray-400">
                <p className="mb-6">Elevate your workout with premium technical sportswear designed for peak performance.</p>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                  <span>123 Fitness Street, NY 10001</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-500" />
                  <span>contact@gymtechgear.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Contact', 'FAQs', 'Size Guide', 'Shipping Info'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Shop</h3>
              <ul className="space-y-3">
                {['Men\'s Collection', 'Women\'s Collection', 'New Arrivals', 'Special Offers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 gymtechgear. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
