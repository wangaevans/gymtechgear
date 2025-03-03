"use client";

import { useState, useEffect } from "react";
import {
  Filter,
  SlidersHorizontal,
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import ProductCard from "@/app/components/ProductCard";

interface Product {
  _id: string;
  name: string;
  price: number;
  slug: { current: string };
  image?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  category: string;
  color: string[];
  size: string[];
  brand: string;
}

interface FilterState {
  category: string[];
  color: string[];
  size: string[];
  brand: string[];
  priceRange: [number, number];
}

const allProductsQuery = `*[_type == "product"] {
  _id,
  name,
  price,
  slug,
  image {
    asset -> {
      _id,
      url
    }
  },
  "category": category->title,
  "color": colorOptions[]->name,
  "size": sizeOptions[]->name,
  "brand": brand->name
}`;


export default function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("featured");

  // Available filter options (will be populated from products)
  const [availableFilters, setAvailableFilters] = useState({
    categories: [] as string[],
    colors: [] as string[],
    sizes: [] as string[],
    brands: [] as string[],
    maxPrice: 0,
    minPrice: 0,
  });

  // Selected filters
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    color: [],
    size: [],
    brand: [],
    priceRange: [0, 1000],
  });

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data: Product[] = await client.fetch(allProductsQuery);

        setProducts(data);
        setFilteredProducts(data);

        // Extract available filter options
        const categories = [...new Set(data.map((p) => p.category))];
        const colors = [...new Set(data.flatMap((p) => p.color || []))];
        const sizes = [...new Set(data.flatMap((p) => p.size || []))];
        const brands = [...new Set(data.map((p) => p.brand))];
        const prices = data.map((p) => p.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        setAvailableFilters({
          categories,
          colors,
          sizes,
          brands,
          minPrice,
          maxPrice,
        });

        setFilters((prev) => ({
          ...prev,
          priceRange: [minPrice, maxPrice],
        }));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters and search
  useEffect(() => {
    let result = [...products];

    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term) ||
          product.brand?.toLowerCase().includes(term)
      );
    }

    // Apply category filter
    if (filters.category.length > 0) {
      result = result.filter((product) =>
        filters.category.includes(product.category)
      );
    }

    // Apply color filter
    if (filters.color.length > 0) {
      result = result.filter(
        (product) =>
          product.color &&
          product.color.some((color) => filters.color.includes(color))
      );
    }

    // Apply size filter
    if (filters.size.length > 0) {
      result = result.filter(
        (product) =>
          product.size &&
          product.size.some((size) => filters.size.includes(size))
      );
    }

    // Apply brand filter
    if (filters.brand.length > 0) {
      result = result.filter((product) =>
        filters.brand.includes(product.brand)
      );
    }

    // Apply price range filter
    result = result.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Apply sorting
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-a-z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      // 'featured' is default, no sorting needed
    }

    setFilteredProducts(result);
  }, [products, filters, searchTerm, sortOption]);

  // Toggle filter selection
  const toggleFilter = (type: keyof FilterState, value: string) => {
    setFilters((prev) => {
      // Type assertion to tell TypeScript that prev[type] is a string array
      const currentValues = prev[type] as string[];

      if (currentValues.includes(value)) {
        return {
          ...prev,
          [type]: currentValues.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [type]: [...currentValues, value],
        };
      }
    });
  };

  // Update price range
  const updatePriceRange = (range: [number, number]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: range,
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      category: [],
      color: [],
      size: [],
      brand: [],
      priceRange: [availableFilters.minPrice, availableFilters.maxPrice],
    });
    setSearchTerm("");
    setSortOption("featured");
  };

  // Filter section component
  const FilterSection = ({
    title,
    options,
    selectedValues,
    type,
  }: {
    title: string;
    options: string[];
    selectedValues: string[];
    type: keyof FilterState;
  }) => (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="checkbox"
              id={`${type}-${option}`}
              checked={selectedValues.includes(option)}
              onChange={() => toggleFilter(type, option)}
              className="mr-2 h-4 w-4"
            />
            <label
              htmlFor={`${type}-${option}`}
              className="text-sm text-gray-700"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">All Products</h1>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 lg:hidden"
            >
              <Filter className="w-5 h-5" />
              {/* <span>{showFilters ? "Hide Filters" : "Show Filters"}</span> */}
            </button>

            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="pl-4 pr-8 py-2 border rounded-lg appearance-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-a-z">Name: A to Z</option>
                <option value="name-z-a">Name: Z to A</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Filters - Desktop always visible, mobile toggleable */}
          <div
            className={`lg:w-1/4 lg:pr-8 ${showFilters ? "block" : "hidden"} lg:block`}
          >
            <div className="sticky top-24 bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Reset All
                </button>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <FilterSection
                title="Categories"
                options={availableFilters.categories}
                selectedValues={filters.category}
                type="category"
              />

              <FilterSection
                title="Colors"
                options={availableFilters.colors}
                selectedValues={filters.color}
                type="color"
              />

              <FilterSection
                title="Sizes"
                options={availableFilters.sizes}
                selectedValues={filters.size}
                type="size"
              />

              <FilterSection
                title="Brands"
                options={availableFilters.brands}
                selectedValues={filters.brand}
                type="brand"
              />

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">${filters.priceRange[0]}</span>
                  <span className="text-sm">${filters.priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min={availableFilters.minPrice}
                  max={availableFilters.maxPrice}
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    updatePriceRange([
                      parseInt(e.target.value),
                      filters.priceRange[1],
                    ])
                  }
                  className="w-full"
                />
                <input
                  type="range"
                  min={availableFilters.minPrice}
                  max={availableFilters.maxPrice}
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    updatePriceRange([
                      filters.priceRange[0],
                      parseInt(e.target.value),
                    ])
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="mb-4">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <p className="text-xl mb-4">
                  No products match your current filters
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-black text-white rounded-lg"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  console.log(product)
                  return(
                    <ProductCard key={product._id} product={product} />
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
