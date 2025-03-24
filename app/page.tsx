import Navbar from './components/Navbar';
import Button from './components/Button';
import Checkout from './components/Checkout';
import ImageSlider from './components/ImageSlider';
import FullWidthHero from './components/FullWidthHero';
import FeatureWithImage from './components/FeatureWithImage';
import Image from 'next/image';

export default function Home() {
  // Image paths for sliders and hero sections
  const heroImages = ['/images/Pickleball Picture (4).jpg', '/images/Pickleball Picture (7).jpg', '/images/Pickleball Picture (10).jpg'];

  const testimonialImages = ['/images/Pickleball Picture (11).jpg', '/images/Pickleball Picture (12).jpg', '/images/Pickleball Picture (13).jpg'];

  const productImages = ['/images/Pickleball Picture (5).jpg', '/images/Pickleball Picture (6).jpg', '/images/Pickleball Picture (8).jpg', '/images/Pickleball Picture (9).jpg'];

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
              <p className="text-xl md:text-2xl hidden md:block font-light text-white">More Bounce. More Fun. Less Strain.</p>
              <p className="text-white  text-base md:text-lg">
                The first pickleballs designed to bounce 10% higher than standard balls. Perfect for older players, softer courts, and anyone who wants a better game.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose 110% Pickleball?</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">We&apos;ve reimagined the pickleball to solve common problems and enhance your playing experience.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Higher Bounce', description: 'Less bending, more playing.' },
                { title: 'Eco-Friendly', description: 'Made entirely from recycled materials.' },
                { title: 'All Surfaces', description: 'Performs better on softer courts and in colder weather.' },
                { title: 'Easier on Joints', description: 'Reduces strain for players of all ages.' },
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
          title="Made From 100% Recycled Materials"
          subtitle="Play with purpose"
          description="Our eco-friendly pickleballs deliver premium performance while helping protect the planet."
          ctaText="Learn More"
          ctaLink="#why"
          height={500}
          position="right"
        />

        {/* Feature Highlight 1 */}
        <FeatureWithImage
          title="Higher Bounce for Less Strain"
          description="The 110% Pickleball is designed to bounce 10% higher than standard balls, reducing the need to bend down as much during play. This makes the game more accessible and enjoyable for players of all ages, while being especially beneficial for those with limited mobility."
          image="/images/Pickleball Picture.jpg"
          ctaText="Experience the Difference"
          imageOnRight={true}
          position="left"
        />

        {/* Feature Highlight 2 */}
        <FeatureWithImage
          title="100% Recycled Materials"
          description="Our innovative manufacturing process uses only recycled plastics, giving new life to materials that would otherwise end up in landfills or oceans. Each pickleball diverts approximately 30 plastic bottles from waste streams, making your game better for the planet."
          image="/images/Pickleball Picture (2).jpg"
          ctaText="Go Green with 110%"
          imageOnRight={false}
          backgroundColor="bg-gray-50"
          position="right"
        />

        {/* Who Is This For Section */}
        <section id="who" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Who Is This For?</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">Our pickleballs are designed to enhance the game for a variety of players in different settings.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mx-auto lg:max-w-4xl">
              {[
                { title: 'Older Players', description: 'Spend more time playing, less time picking up balls.' },
                { title: 'Eco-Conscious Athletes', description: 'Support sustainability without sacrificing performance.' },
                { title: 'Backyard & Indoor Players', description: 'Better bounce on carpets, tile, and soft surfaces.' },
                { title: 'Trainers & Beginners', description: 'More consistent bounces help improve skills faster.' },
              ].map((persona, index) => (
                <div key={index} className="flex bg-white p-6 rounded-xl shadow-sm">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{persona.title}</h3>
                    <p className="text-gray-600">{persona.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden">
              <ImageSlider images={testimonialImages} height={450} interval={5000} />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden">
                <ImageSlider images={productImages} height={400} interval={4500} />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">How It Works</h2>
                <p className="text-lg text-gray-700">
                  Our proprietary material blend and innovative design give 110% Pickleballs their unique, higher-bounce performance while maintaining the official weight and size standards.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-gray-600">Special polymer core with optimized elasticity</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-gray-600">Precision-engineered hole pattern for consistent performance</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-2 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-gray-600">Maintains regulation weight and size specifications</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Buy Now Section */}
        <section id="buy" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Elevate your game</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As a pickleball player, the quality of your equipment makes all the difference. Experience the advantage of 110% Pickleballs with our premium 3-pack sleeve.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Premium 3-Pack</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Each sleeve contains 3 of our high-performance pickleballs, designed to give you that extra 10% bounce. Perfect for players of all ages and skill levels who want to enhance their
                  playing experience.
                </p>

                <div className="max-w-xs pointer-events-none opacity-50 cursor-not-allowed">
                  <Checkout price="$19.99" />
                </div>
              </div>

              <div className="relative h-[300px] bg-gray-50 rounded-xl overflow-hidden">
                <Image src="/images/pb.webp" alt="110% Pickleball 3-pack of balls" fill style={{ objectFit: 'cover' }} />
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
              <p className="mt-4 text-gray-600">More Bounce. More Fun. Less Strain.</p>
              <p className="mt-8 text-sm text-gray-500">© 2025 110% Pickleball. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
