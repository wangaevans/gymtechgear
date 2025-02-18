// components/CategoryHeader.tsx
import Image from "next/image";

interface CategoryHeaderProps {
  category: {
    name: string;
    description?: string;
    image: {
      asset: {
        url: string;
      };
    };
    productCount?: number;
  };
}

export default function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div className="relative">
      {/* Background Image with Gradient Overlay */}
      <div className="relative h-[400px] md:h-[500px]">
        {category.image?.asset?.url && (
          <Image
            src={category.image.asset.url}
            alt={category.name}
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              {category.description}
            </p>
          )}
          {category.productCount !== undefined && (
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
              {category.productCount} Products Available
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
