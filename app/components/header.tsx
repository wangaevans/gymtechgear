"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, Search,  X } from "lucide-react";
// import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useDebounce } from "@/hooks/useDebounce";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";

// Define the search query according to the Sanity guide
const searchQuery = `*[_type == "product" && (name match $searchTerm || description match $searchTerm)] {
  _id,
  name,
  price,
  "slug": slug.current,
  "image": {
    "asset": {
      "url": image.asset->url
    }
  }
}[0...10]`;

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Men", href: "/audience/men" },
  { name: "Women", href: "/audience/women" },
  { name: "Training", href: "/category/training" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchTerm("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setSearchResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      setIsSearching(true);
      try {
        // Format the search term to work with Sanity's text search
        const formattedSearchTerm = `*${debouncedSearchTerm}*`;
        
        // Use the Sanity client to search
        const results = await client.fetch(searchQuery, {
          searchTerm: formattedSearchTerm
        });
        
        console.log('Sanity search results:', results);
        setSearchResults(results);
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      }
      setIsSearching(false);
    };

    fetchSearchResults();
  }, [debouncedSearchTerm]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-20 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16 md:h-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-bold"
        >
          <Link href="/">GymTechGear</Link>
        </motion.div>

        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className={`text-gray-700 hover:text-black transition-all relative group ${
                  isLinkActive(link.href) ? "text-black font-medium" : ""
                }`}
              >
                {link.name}
                <motion.span
                  className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
                    isLinkActive(link.href) ? "w-full" : "w-0"
                  }`}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center space-x-4"
          ref={searchRef}
        >
          <motion.div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search
                size={22}
                className={`text-gray-800 transition-transform duration-300 ${
                  isSearchOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </motion.button>

            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "300px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-lg"
                  >
                    <input
                      type="text"
                      placeholder="Search for products..."
                      className="w-full outline-none text-sm bg-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoFocus
                    />
                    {isSearching && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Search size={18} className="text-gray-400" />
                      </motion.div>
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {searchTerm && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl"
                      >
                        {searchResults.length > 0 ? (
                          searchResults.map((product, index) => (
                            <motion.div
                              key={product._id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="border-b last:border-b-0"
                            >
                              <Link
                                href={`/product/${product.slug}`}
                                className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
                                onClick={() => setIsSearchOpen(false)}
                              >
                                {product.image && (
                                  <div className="relative w-10 h-10">
                                    <Image
                                      src={product.image.asset.url!}
                                      alt={product.name}
                                      fill
                                      className="object-cover rounded-md"
                                      sizes="40px"
                                    />
                                  </div>
                                )}
                                <div>
                                  <p className="text-sm font-medium">{product.name}</p>
                                  <p className="text-xs text-gray-500">${product.price}</p>
                                </div>
                              </Link>
                            </motion.div>
                          ))
                        ) : (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="p-3 text-gray-500 text-sm"
                          >
                            {isSearching ? "Searching..." : "No results found"}
                          </motion.p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/sign-in">
                <User size={22} className="text-gray-800" />
              </Link>
            </motion.div>
          </SignedOut> */}
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md z-50 overflow-hidden"
          >
            <motion.div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-gray-700 text-lg hover:text-black transition-all block ${
                      isLinkActive(link.href) ? "text-black font-medium" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;