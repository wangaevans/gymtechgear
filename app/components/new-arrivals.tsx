"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { newArrivalsQuery } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard"; 

export default function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const data: Product[] = await client.fetch(newArrivalsQuery);
        if (Array.isArray(data)) {
          setNewArrivals(data);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      }
    };
    fetchNewArrivals();
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">New Arrivals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium gym wear, designed for performance and style.
          </p>
        </div>

        {newArrivals.length === 0 ? (
          <p className="text-center text-gray-500">No new arrivals available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
