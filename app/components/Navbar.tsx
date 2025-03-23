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
              <span className="text-2xl font-bold text-black">110%</span>
              <span className="ml-1 text-2xl font-light text-black">Pickleball</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#shop" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
                Shop
              </Link>
              <Link href="#why" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
                Why 110%
              </Link>
              <Link href="#who" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
                Who It&apos;s For
              </Link>
              <Link href="#how" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
                How It Works
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
