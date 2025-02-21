'use client';

import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { newArrivalsQuery } from '@/sanity/lib/queries';

interface Product {
  _id: string;
  name: string;
  price: number;
  slug: { current: string };
  image: { asset: { url: string } };
}

export default function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  console.log(hoveredId)

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const data: Product[] = await client.fetch(newArrivalsQuery);
        setNewArrivals(data);
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
      }
    };
    fetchNewArrivals();
  }, []);

  if (newArrivals.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">New Arrivals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium gym wear, designed for performance and style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="group relative bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredId(product._id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <Image
                  src={product.image.asset.url}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                  <button className="p-2 bg-white rounded-full shadow-lg transform -translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-lg transform -translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75 hover:bg-gray-100">
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <Link href={`/product/${product.slug.current}`}>
                <div className="space-y-2 mb-4">
                  <h3 className="font-semibold text-lg truncate">{product.name}</h3>
                  <p className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <button 
                  className="w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}