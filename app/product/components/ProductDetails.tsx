"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";



export default function ProductDetails({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);
  const shortDescription = product.description!.slice(0, 150);

  // Generate the optimized image URL from Sanity
  const imageUrl = urlFor(product.image as SanityImageSource)
    .width(600)
    .height(600)
    .quality(90)
    .url();

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square w-full">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {/* Read More Toggle */}
          <p className="text-lg text-gray-600 mt-4">
            {expanded ? product.description : `${shortDescription}...`}
          </p>

          {/* Read More Button */}
          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="mt-2 text-blue-600 font-semibold hover:text-blue-700 transition"
            >
              Read More
            </button>
          )}

          {/* Product Price */}
          <p className="text-2xl font-semibold mt-4">
            ${product.price.toFixed(2)}
          </p>

          {/* Buy Now Button (Affiliate Link) */}
          {product.amazonAffiliateLink && (
            <a
              href={product.amazonAffiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Buy Now
            </a>
          )}
        </div>
      </div>
    </section>
  );
}