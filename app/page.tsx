import React  from 'react';
import { 
  ArrowRight
} from 'lucide-react';
import HeroSection from './components/hero-section';
import TestimonialCarousel from './components/testimonials';
import NewArrivals from './components/new-arrivals';

const HomePage = () => {



  return (
    <>
      <main>
        {/* Hero Section */}
        <HeroSection/>

        {/* Categories Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{category_name:'Training',category_image:"/img/training.jpg"},{ category_name:'Running',category_image:"/img/running.jpg"}, {category_name:'Yoga',category_image:"/img/yoga.jpg"}].map((category) => (
                <div key={category.category_name} className="group relative overflow-hidden rounded-2xl h-96">
                  <img
                    src={category.category_image}
                    alt={category.category_name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.category_name}</h3>
                      <button className="text-white flex items-center group-hover:underline">
                        Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
       <NewArrivals/>

        {/* Testimonials Section */}
        <TestimonialCarousel/>
      </main>

     
    </>
  );
};

export default HomePage;