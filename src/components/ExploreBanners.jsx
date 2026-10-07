import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ExploreBanners() {
  return (
    <section className="py-16 sm:py-24 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Men's Card */}
          <div
            id="explore-men"
            className="group relative h-[420px] sm:h-[480px] overflow-hidden bg-black shadow-md"
          >
            <img
              src="/assets/Home/explore_section/image_male.png"
              alt="Male runner training on outdoor track"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 flex flex-col justify-end text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2 font-display">
                Men's Running
              </h3>
              <p className="text-sm text-gray-300 mb-6 max-w-md font-normal">
                Pyjamas & running kit from race-day heroes.
              </p>
              <a
                href="#arrivals"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-wider uppercase text-white hover:text-[#D2F800] transition-colors"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 text-[#D2F800] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Women's Card */}
          <div
            id="explore-women"
            className="group relative h-[420px] sm:h-[480px] overflow-hidden bg-black shadow-md"
          >
            <img
              src="/assets/Home/explore_section/image_female.png"
              alt="Female runner stretching before workout"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 flex flex-col justify-end text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2 font-display">
                Women's Running
              </h3>
              <p className="text-sm text-gray-300 mb-6 max-w-md font-normal">
                20% of profits from kits go to Girls Run Glasgow.
              </p>
              <a
                href="#arrivals"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-wider uppercase text-white hover:text-[#D2F800] transition-colors"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 text-[#D2F800] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
