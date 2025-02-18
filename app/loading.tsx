"use client"
// components/ui/Loader.tsx
export default function Loader() {
    return (
      <div className="flex items-center justify-center w-full h-[70vh]">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 rounded-full border-4 border-gray-200 animate-pulse" />
          
          {/* Inner spinning ring */}
          <div className="absolute top-0 left-0 w-16 h-16">
            <div className="w-16 h-16 rounded-full border-4 border-t-blue-600 animate-spin" />
          </div>
          
          {/* Loading text */}
          <div className="mt-4 text-center text-gray-600 animate-pulse">
            Loading...
          </div>
        </div>
      </div>
    );
  }