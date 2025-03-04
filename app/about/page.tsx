import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">About</span>
                  <span className="block text-blue-600 xl:inline"> gymtechgear</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Founded in 2022, gymtechgear is on a mission to revolutionize athletic apparel by combining cutting-edge technology with superior comfort and style.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/img/fitness.jpg"
            alt="People working out in gymtechgear apparel"
            width={700}
            height={500}
            priority
          />
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From Fitness Enthusiasts to Industry Innovators
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              gymtechgear was born out of necessity when our founders couldn&apos;t find sportswear that met their high standards for both performance and comfort.
            </p>
          </div>

          <div className="mt-10 prose prose-lg mx-auto text-gray-500">
            <p>
              Our journey began in a small garage gym where three fitness enthusiasts—Sarah, Michael, and David—were discussing the shortcomings of their workout gear.
            </p>
            <p>
              Sarah, with her background in textile engineering, proposed a revolutionary idea: create sportswear that adapts to the body&apos;s needs during different phases of a workout.
            </p>
            <p>
              Michael, a fitness coach, provided insights into the biomechanics of movement, while David, with his experience in sustainable manufacturing, ensured our production 
              practices would be as mindful as our products.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Drives Us Forward
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We continuously seek new ways to improve our products, incorporating the latest advancements in fabric technology and design.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Sustainability",
                description: "We&apos;re committed to minimizing our environmental impact through responsible manufacturing practices and eco-friendly materials.",
                icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              },
              {
                title: "Performance",
                description: "Every product we create is designed to enhance athletic performance, helping you achieve your fitness goals.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              }
            ].map(({ title, description, icon }, index) => (
              <div key={index} className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">{title}</h3>
                <p className="mt-2 text-base text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
