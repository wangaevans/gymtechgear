import React from 'react';
import  Link  from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram,
  Phone, 
  Mail
} from 'lucide-react';

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-black text-gray-300">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">gymtechgear</h2>
              <div className="space-y-4 text-gray-400">
                <p className="mb-6">Elevate your workout with premium technical sportswear designed for peak performance.</p>
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
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'FAQs', path: '/faqs' },
                  // { name: 'Size Guide', path: '/size-guide' },
                  // { name: 'Shipping Info', path: '/shipping' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path} 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Shop</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Men\'s Collection', path: '/audience/men' },
                  { name: 'Women\'s Collection', path: '/audience/women' },
                  // { name: 'New Arrivals', path: '/collections/new-arrivals' },
                  // { name: 'Special Offers', path: '/collections/special-offers' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path} 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, url: 'https://facebook.com/gymtechgear' },
                  { Icon: Twitter, url: 'https://twitter.com/gymtechgear' },
                  { Icon: Instagram, url: 'https://instagram.com/gymtechgear' },
                  // { Icon: Youtube, url: 'https://youtube.com/gymtechgear' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    <social.Icon className="w-5 h-5" />
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
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms-of-service" 
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}