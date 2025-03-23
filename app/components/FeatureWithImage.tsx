'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface FeatureWithImageProps {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  imageOnRight?: boolean;
  backgroundColor?: string;
  position?: 'left' | 'right';
}

export default function FeatureWithImage({ title, description, image, ctaText, ctaLink = '#buy', imageOnRight = false, backgroundColor = 'bg-white', position = 'left' }: FeatureWithImageProps) {
  // If position is provided, it takes precedence over imageOnRight
  const isImageOnRight = position ? position === 'right' : imageOnRight;

  return (
    <div className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content section */}
          <div className={`space-y-6 ${isImageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
            {ctaText && (
              <div className="pt-4">
                <Button href={ctaLink}>{ctaText}</Button>
              </div>
            )}
          </div>

          {/* Image section */}
          <div className={`relative h-[300px] lg:h-[400px] overflow-hidden rounded-lg ${isImageOnRight ? 'lg:order-2' : 'lg:order-1'}`}>
            <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
