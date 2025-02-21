'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Alex Thompson',
      role: 'Professional Athlete',
      image: '/img/man.jpg',
      quote: 'The quality and performance of GymTechWear has revolutionized my training routine.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Fitness Instructor',
      image: '/img/woman.jpg',
      quote: 'Breathable, flexible, and stylish. Everything I need in my workout gear.',
      rating: 4
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'CrossFit Champion',
      image: '/img/man2.jpg',
      quote: 'Finally found gear that can keep up with my intense training sessions.',
      rating: 5
    }
  ];

  const slidesToShow = {
    mobile: 1,
    desktop: 3
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      (prev + 1) % (testimonials.length - (slidesToShow.desktop - 1))
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      (prev - 1 + (testimonials.length - (slidesToShow.desktop - 1))) %
      (testimonials.length - (slidesToShow.desktop - 1))
    );
  };

  return (
    <section className="py-12 mb-5 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Athletes Say</h2>
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="flex-none w-full md:w-1/3 transition-transform duration-300 transform bg-white rounded-lg shadow-md"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`
                }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={testimonial.id === 1}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;