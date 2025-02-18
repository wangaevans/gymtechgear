"use client";

import React, { useState, useEffect } from "react";
import { Menu, Search, User, X } from "lucide-react";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allCategoriesQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Category } from "@/types/category";

type NavItem = {
  name: string;
  href: string;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await client.fetch(allCategoriesQuery);
        const categoryLinks: NavItem[] = categories.map((cat: Category) => ({
          name: cat.name,
          href: `/category/${cat.slug?.current}`,
        }));

        setNavItems([
          { name: "Home", href: "/" },
          // { name: "About", href: "/about" },
          ...categoryLinks,
          { name: "Contact", href: "/contact" },
        ]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className={`sticky top-0 z-20 bg-white ${scrolled ? "shadow-md" : "shadow-sm"} transition-shadow duration-300`}>
      <div className="bg-black text-white text-center py-2 text-sm">
        Free shipping on orders over $100 | Shop Now
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16 md:h-20">
        <button 
          className={`lg:hidden transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="text-2xl font-bold transition-transform hover:scale-105">
          <Link href="/">GymTechWear</Link>
        </div>

        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative py-2 transition-colors duration-200
                ${isActive(item.href) 
                  ? "text-black font-medium" 
                  : "text-gray-600 hover:text-black"
                }
                ${isActive(item.href) && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:transition-transform after:duration-300"}
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button className="transition-transform hover:scale-110">
            <Search size={22} className="text-gray-800" />
          </button>

          <SignedIn>
            <UserButton 
              afterSignOutUrl="/" 
              appearance={{ 
                elements: { 
                  userButtonAvatarBox: "w-8 h-8" 
                } 
              }} 
            />
          </SignedIn>

          <SignedOut>
            <Link href="/sign-in">
              <User size={22} className="text-gray-800 transition-transform hover:scale-110" />
            </Link>
          </SignedOut>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-white transform transition-transform duration-300 ease-out lg:hidden
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6">
          <div className="text-xl font-bold mb-8">Navigation</div>
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive(item.href)
                    ? "bg-black text-white font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;