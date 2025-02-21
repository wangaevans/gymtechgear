'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types/category';
import HeroSection from './hero-section';
import NewArrivals from './new-arrivals';
import TestimonialCarousel from './testimonials';

interface HomePageProps {
  categories: Category[];
}

const HomePage = ({ categories }: HomePageProps) => {
  // Filter featured categories or use the first 3 if not enough featured ones
  const displayCategories = categories
    .filter(cat => cat.isFeatured)
    .slice(0, 3);

  if (displayCategories.length < 3) {
    const remainingCategories = categories
      .filter(cat => !cat.isFeatured)
      .slice(0, 3 - displayCategories.length);
    displayCategories.push(...remainingCategories);
  }

  return (
    <>
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Categories Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayCategories.map((category) => (
                <Link
                  href={`/category/${category.slug.current}`}
                  key={category._id}
                  className="group relative overflow-hidden rounded-2xl h-96"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image?.asset?.url || "/img/placeholder.jpg"}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={true}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                      <div className="text-white flex items-center group-hover:underline">
                        Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <NewArrivals />

        {/* Testimonials Section */}
        <TestimonialCarousel />
      </main>
    </>
  );
};

export default HomePage;