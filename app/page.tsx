import Navbar from './components/Navbar';
import Button from './components/Button';
import Checkout from './components/Checkout';
import ImageSlider from './components/ImageSlider';
import FullWidthHero from './components/FullWidthHero';
import FeatureWithImage from './components/FeatureWithImage';
import RDTesting from './components/RDTesting';
import SurfacePerformance from './components/SurfacePerformance';
import Image from 'next/image';

export default function Home() {
  // Image paths for sliders and hero sections
  const heroImages = ['/images/Pickleball Picture (4).jpg', '/images/Pickleball Picture (2).jpg', '/images/Pickleball Picture (10).jpg'];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section with Full-width Image Slider */}
        <section className="relative">
          <ImageSlider images={heroImages} height={700} fullWidth={true} interval={6000} className="mt-16" />
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-end mb-12 md:mb-0 md:justify-center md:items-start px-4 sm:px-6 lg:px-8 lg:ml-20">
            <div className="md:max-w-xl space-y-5 bg-black/30 p-4 md:p-8 rounded-lg backdrop-blur-xs md:backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">110% Pickleball</h1>
              <p className="text-xl md:text-2xl hidden md:block font-light text-white">Designed to bounce higher</p>
              <p className="text-white text-base md:text-lg">
                The first pickleballs scientifically proven to bounce 10% higher than standard balls. Engineered with advanced polymer technology for consistent performance across all court surfaces.
              </p>
              <div className="pt-4 hidden md:block">
                <Button href="#buy">Get your 3-pack sleeve today!</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose 110% Section */}
        <section id="why" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Optimized for Superior Performance</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our R&D team has developed a pickleball that solves real performance challenges through innovative materials science.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Scientifically Proven', description: '10% higher bounce verified through rigorous testing.' },
                { title: 'Advanced Materials', description: 'Engineered with extra-elastic polymer resin for superior rebound.' },
                { title: 'All Surfaces', description: 'Consistent performance across clay, turf, cushioned, and tile courts.' },
                { title: 'Energy Retention', description: 'Retains more energy on impact than standard pickleballs.' },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex items-start mb-4 text-green-700">
                    <svg className="w-6 h-6 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary Hero/Feature Section */}
        <FullWidthHero
          image="/images/Pickleball Picture (14).jpg"
          title="Engineered for Performance"
          subtitle=""
          description="Our high-bounce pickleballs deliver consistent performance across all court surfaces through innovative materials engineering."
          ctaText="Learn More"
          ctaLink="#why"
          height={500}
          position="right"
        />

        {/* Feature Highlight 1 */}
        <FeatureWithImage
          title="High-Bounce Design: ~10% Extra Rebound"
          description="Engineered with an extra-elastic polymer resin, our pickleballs rebound roughly 10% higher than standard balls. A normal pickleball can lose about 57% of its energy on impact (bouncing only ~33″ high from a 78″ drop), but our high-bounce balls retain more energy. The result is a more lively, consistent bounce on courts that usually dampen rebounds – meaning you spend less time chasing 'dead' bounces and more time enjoying fast-paced rallies."
          image="/images/Pickleball Picture.jpg"
          ctaText="Experience the Difference"
          imageOnRight={true}
          position="left"
        />

        {/* Surface Performance Section */}
        <SurfacePerformance />

        {/* R&D and Testing Section */}
        <RDTesting />

        {/* Buy Now Section */}
        <section id="buy" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Experience the difference</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Backed by science and engineered for performance, our high-bounce pickleballs deliver a superior playing experience across all court surfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Premium 3-Pack</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Each sleeve contains 3 of our high-performance pickleballs, engineered with extra-elastic polymer resin for that 10% higher bounce. Perfect for players who demand consistent
                  performance across all court surfaces.
                </p>

                <div className="max-w-xs pointer-events-none opacity-50 cursor-not-allowed">
                  <Checkout price="$19.99" />
                </div>
              </div>

              <div className="relative h-[400px] bg-gray-50 rounded-xl overflow-hidden">
                <Image src="/images/110.jpg" alt="110% Pickleball 3-pack of balls" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center items-center">
                <span className="text-2xl font-black text-black">110%</span>
                <span className="text-2xl font-light text-black">Pickleball</span>
              </div>
              <p className="mt-4 text-gray-600">Engineered for Performance</p>
              <p className="mt-8 text-sm text-gray-500">© 2025 110% Pickleball. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
