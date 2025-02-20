import { client } from "@/sanity/lib/client";
import { productsByAudienceQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Filter, SlidersHorizontal, ArrowLeft } from "lucide-react";
import ProductGrid from "@/app/components/ProductGrid";
import Link from "next/link";

export default async function ProductAudiencePage(props: { params: Promise<{ slug?: string }> }) {
  const params = await props.params;
  
  if (!params?.slug) {
    return notFound();
  }

  // Fetch products using the correct param
  const products = await client.fetch(productsByAudienceQuery, { audience: params.slug });

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Info & Stats */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {products.length > 0 ? `${products.length} Products` : "No products available"}
              </h2>
            </div>

            {/* Filter & Sort Controls */}
            {products.length > 0 && (
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition">
                  <Filter size={20} />
                  <span>Filter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition">
                  <SlidersHorizontal size={20} />
                  <span>Sort</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900">Home</Link>
            </li>
            <li>•</li>
            <li className="font-medium text-gray-900">{params.slug || "Category"}</li>
          </ol>
        </nav>

        {/* Products Grid */}
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">We don&apos;t have any products in this category yet. Please check back later!</p>
            <Link href="/" className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
              <ArrowLeft size={18} />
              <span>Go Back to Homepage</span>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
