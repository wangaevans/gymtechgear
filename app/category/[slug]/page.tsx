import { client } from "@/sanity/lib/client";
import {
  categoryBySlugQuery,
  productsInCategoryQuery,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import ProductGrid from "@/app/components/ProductGrid";
import CategoryHeader from "@/app/components/CategoryHeader";
import Link from "next/link";


export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params to extract the slug
  const { slug } = await params;

  // Fetch category data
  const category = await client.fetch(categoryBySlugQuery, { slug });

  if (!category) {
    notFound();
  }

  // Fetch products in this category
  const products = await client.fetch(productsInCategoryQuery, { categoryId: category._id });

  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}>
        <CategoryHeader category={category} />
      </Suspense>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Info & Stats */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {products.length} Products
              </h2>
              {category.description && (
                <p className="mt-2 text-gray-600 max-w-3xl">{category.description}</p>
              )}
            </div>

            {/* Filter & Sort Controls */}
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
          </div>

          {/* Category Metadata */}
          {(category.brand || category.targetAudience || category.categoryType) && (
            <div className="mt-6 flex flex-wrap gap-4">
              {category.brand && (
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  Brand: {category.brand}
                </span>
              )}
              {category.targetAudience && (
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  For: {category.targetAudience}
                </span>
              )}
              {category.categoryType && (
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  Type: {category.categoryType}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900">Home</Link>
            </li>
            <li>•</li>
            {category.parentCategory && (
              <>
                <li>
                  <Link href={`/category/${category.parentCategory.slug?.current}`} className="hover:text-gray-900">
                    {category.parentCategory.name}
                  </Link>
                </li>
                <li>•</li>
              </>
            )}
            <li className="font-medium text-gray-900">{category.name}</li>
          </ol>
        </nav>

        {/* Products Grid */}
        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-lg mb-3" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        }>
          <ProductGrid products={products} />
        </Suspense>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">We couldn&apos;t find any products in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
