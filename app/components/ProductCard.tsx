"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const MAX_NAME_LENGTH = 50; // Professional e-commerce standard

export default function ProductCard({ product }: ProductCardProps) {
  const truncatedName =
    product.name && product.name.length > MAX_NAME_LENGTH
      ? product.name.slice(0, MAX_NAME_LENGTH) + "..."
      : product.name;

  return (
    <div className="group relative bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
        {product.image?.asset?.url ? (
          <Image
            src={product.image.asset.url}
            alt={product.name || "Product image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
            No Image
          </div>
        )}
      </div>

      <div className="absolute right-4 top-4 flex flex-col gap-2">
        <button
          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <Link href={`/product/${product.slug?.current || ""}`} prefetch={false}>
        <div className="space-y-2 mb-4">
          <h3
            className="font-semibold text-lg max-w-full break-words"
            title={product.name} // Tooltip for full name on hover
          >
            {truncatedName}
          </h3>
          <p className="text-2xl font-bold text-gray-900">
            ${product.price ? product.price.toFixed(2) : "N/A"}
          </p>
        </div>

        <button
          className="w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:font-extrabold"
          aria-label="View product"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>View</span>
        </button>
      </Link>
    </div>
  );
}
