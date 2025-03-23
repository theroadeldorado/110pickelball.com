'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  interval?: number;
  height?: number;
  fullWidth?: boolean;
  showIndicators?: boolean;
  showArrows?: boolean;
  className?: string;
}

export default function ImageSlider({ images, interval = 5000, height = 500, fullWidth = false, showIndicators = true, showArrows = true, className = '' }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={`relative overflow-hidden ${fullWidth ? 'w-full' : 'rounded-xl'} ${className}`} style={{ height: `${height}px` }}>
      {images.map((image, index) => (
        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <Image src={image} alt={`Slide ${index + 1}`} fill style={{ objectFit: 'cover' }} priority={index === 0} />
        </div>
      ))}

      {showArrows && (
        <>
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 focus:outline-none transition-all"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 focus:outline-none transition-all"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
