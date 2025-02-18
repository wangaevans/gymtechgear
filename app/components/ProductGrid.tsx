
// components/ProductGrid.tsx
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  brand?: string;
  rating?: number;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/product/${product.slug.current}`}
          className="group"
        >
          {/* Product Image */}
          <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image.asset.url}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Quick View Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                Quick View
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.brand && (
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
            )}
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </p>
              {product.rating && (
                <div className="flex items-center">
                  <span className="text-sm text-yellow-500">★</span>
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}