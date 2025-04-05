'use client';

import React from 'react';
import Image from 'next/image';

interface SurfacePerformanceProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundColor?: string;
}

export default function SurfacePerformance({
  title = 'Performance Across Different Surfaces',
  subtitle = '',
  description = 'Our R&D team has extensively tested our high-bounce pickleballs on various court surfaces to ensure consistent performance.',
  backgroundColor = 'bg-white',
}: SurfacePerformanceProps) {
  const surfaces = [
    {
      title: 'Clay Courts',
      description:
        "Clay is a softer, more forgiving surface that absorbs impact, which reduces ball speed and bounce height. A standard pickleball tends to bounce low on clay as some energy is lost into the soft ground. Our high-bounce pickleballs counteract clay's spongey effect with their added elasticity. They spring up ~10% higher, effectively restoring the bounce that clay courts steal.",
      image: '/images/clay.jpg',
    },
    {
      title: 'Artificial Turf',
      description:
        "Turf (or artificial grass) courts tend to give a lower bounce – much like real grass, the soft surface doesn't return energy to the ball efficiently. A standard pickleball can skid or die out on turf, making play challenging. High-bounce pickleballs are designed to compensate for turf's energy dissipation. Their extra rebound capability keeps the bounce height closer to what you'd expect on a hard court.",
      image: '/images/turf.jpg',
    },
    {
      title: 'Cushioned Courts',
      description:
        'Many indoor courts or cushioned acrylic surfaces have an underlying rubber/foam pad for shock absorption. While great for joints, this padding slows the game with a noticeably lower bounce because it soaks up impact energy. Our high-bounce pickleballs negate that effect by returning more energy to the bounce. Instead of the ball "sticking" to a cushioned floor, it springs off it.',
      image: '/images/soft.jpg',
    },
    {
      title: 'Tile Courts',
      description:
        'Modular tile surfaces (interlocking plastic court tiles) often have slight flex and seams that can create "dead spots." If a ball lands where a tile isn\'t fully supported, the tile flexes and absorbs impact, resulting in a low or altered bounce. 110% Pickleballs help overcome those dead spots. The balls\' extra elasticity pushes back against the flexing tile, producing a higher rebound even on sections of the court that normally dampen the bounce.',
      image: '/images/tile.jpg',
    },
  ];

  return (
    <section id="surfaces" className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600 mb-4">{subtitle}</p>}
          {description && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>}
        </div>

        <div className="space-y-16">
          {surfaces.map((surface, index) => (
            <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`relative h-64 md:h-80 rounded-xl overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image src={surface.image} alt={surface.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-2xl font-bold mb-4">{surface.title}</h3>
                <p className="text-gray-600">{surface.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
