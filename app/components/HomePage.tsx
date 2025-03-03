'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types/category';
import HeroSection from './hero-section';
import NewArrivals from './new-arrivals';
import TestimonialCarousel from './testimonials';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AllProducts from './Products';

interface HomePageProps {
  categories: Category[];
}

const HomePage = ({ categories }: HomePageProps) => {
  // Filter featured categories first
  const displayCategories = [
    ...categories.filter(cat => cat.isFeatured),
    ...categories.filter(cat => !cat.isFeatured)
  ].slice(0, 8); // Show up to 8 categories
  
  // Function to chunk array into groups
  const chunkArray = (arr: Category[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  // Create responsive category groups
  const getResponsiveCategories = () => {
    // For desktop: 3 per slide
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      return chunkArray(displayCategories, 3);
    }
    // For tablet: 2 per slide
    else if (typeof window !== 'undefined' && window.innerWidth >= 640) {
      return chunkArray(displayCategories, 2);
    }
    // For mobile: 1 per slide
    return chunkArray(displayCategories, 1);
  };

  const [categoryGroups, setCategoryGroups] = React.useState<Category[][]>([]);
  
  React.useEffect(() => {
    setCategoryGroups(getResponsiveCategories());
    
    const handleResize = () => {
      setCategoryGroups(getResponsiveCategories());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Categories Carousel Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            
            {categoryGroups.length > 0 && (
              <Carousel
                showArrows={true}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                showThumbs={false}
                swipeable={true}
                emulateTouch={true}
                className="category-carousel"
                renderArrowPrev={(clickHandler, hasPrev) => (
                  <button
                    onClick={clickHandler}
                    disabled={!hasPrev}
                    className="absolute left-5 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 disabled:opacity-0 transition-all"
                    aria-label="Previous slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </button>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                  <button
                    onClick={clickHandler}
                    disabled={!hasNext}
                    className="absolute right-5 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 disabled:opacity-0 transition-all"
                    aria-label="Next slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                )}
              >
                {categoryGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.map((category) => (
                        <Link
                          href={`/category/${category.slug.current}`}
                          key={category._id}
                          className="group relative overflow-hidden rounded-2xl h-80 shadow-lg"
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={category.image?.asset?.url || "/img/placeholder.jpg"}
                              alt={category.name}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              priority={groupIndex === 0}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
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
                ))}
              </Carousel>
            )}
          </div>
        </section>
        
        {/* New Arrivals Section */}
        <NewArrivals />

        {/* All Products */}
        <AllProducts/>
        
        {/* Testimonials Section */}
        <TestimonialCarousel />
      </main>

      <style jsx global>{`
        .category-carousel .carousel .control-dots {
          margin: 16px 0 0;
        }
        .category-carousel .carousel .control-dots .dot {
          box-shadow: none;
          background: #d1d5db;
          width: 10px;
          height: 10px;
        }
        .category-carousel .carousel .control-dots .dot.selected {
          background: #4f46e5;
        }
        .category-carousel .carousel .slide {
          padding: 0 4px;
        }
      `}</style>
    </>
  );
};

export default HomePage;