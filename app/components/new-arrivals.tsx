'use client';

import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { newArrivalsQuery } from '@/sanity/lib/queries';

// Define TypeScript types for the product
interface Product {
  _id: string;
  name: string;
  price: number;
  slug: { current: string };
  image: { asset: { url: string } };
}

export default function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);

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

  // Hide the section if there are no products
  if (newArrivals.length === 0) return null;

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <Link key={product._id} href={`/product/${product.slug.current}`} passHref>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={product.image.asset.url}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
