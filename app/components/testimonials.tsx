'use client'
import React, { useState } from 'react';
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
      rating: 5
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
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Athletes Say</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentTestimonial * (100 / slidesToShow.desktop)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-current" 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg italic">&quot;{testimonial.quote}&quot;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;