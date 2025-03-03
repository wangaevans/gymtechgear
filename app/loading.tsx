"use client"

export default function Loader() {
    return (
      <div className="flex items-center justify-center w-full h-[70vh]">
        <div className="relative">

          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
          <div className="mt-4 text-center text-gray-600 animate-pulse">
            Loading...
          </div>
        </div>
      </div>
    );
  }