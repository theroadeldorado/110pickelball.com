'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-black text-black">110%</span>
              <span className="text-2xl font-light text-black">Pickleball</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#why" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
                Performance
              </Link>
              <Link href="#surfaces" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
                Court Surfaces
              </Link>
              <Link href="#rd" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
                R&D & Testing
              </Link>
              <Link href="#buy" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
                Shop
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="#buy" className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
