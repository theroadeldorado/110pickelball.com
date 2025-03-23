'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface FullWidthHeroProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  height?: number;
  darkOverlay?: boolean;
  position?: 'left' | 'center' | 'right';
}

export default function FullWidthHero({ image, title, subtitle, description, ctaText = 'Shop Now', ctaLink = '#buy', height = 600, darkOverlay = true, position = 'left' }: FullWidthHeroProps) {
  const positionClass = {
    left: 'items-start text-left ml-0 md:ml-20 lg:ml-32',
    center: 'items-center text-center',
    right: 'items-end text-right mr-0 md:mr-20 lg:mr-32',
  }[position];

  return (
    <div className="relative w-full" style={{ height: `${height}px` }}>
      <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} priority />

      {darkOverlay && <div className="absolute inset-0 bg-black/30 z-10"></div>}

      <div className={`absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 ${positionClass}`}>
        <div className="max-w-xl space-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{title}</h1>

          {subtitle && <p className="text-xl md:text-2xl font-light text-white">{subtitle}</p>}

          {description && <p className="text-white text-base md:text-lg text-balance">{description}</p>}

          {ctaText && (
            <div className="pt-4">
              <Button href={ctaLink}>{ctaText}</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
