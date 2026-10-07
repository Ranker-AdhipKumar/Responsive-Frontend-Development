import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    tag: "AUTUMN / WINTER '26 COLLECTION",
    headingLine1: "Chase",
    headingLine2: "Every Second.",
    description: "Race-day gear, trail-tested essentials, and everyday kit — curated by runners, worn on every terrain.",
    image: "/assets/Home/hero_section/image1.png",
    primaryCta: "SHOP NEW ARRIVALS",
    secondaryCta: "READ OUR STORY"
  },
  {
    tag: "TECHNICAL TRAIL & ALPINE SERIES",
    headingLine1: "Conquer",
    headingLine2: "The Ridge.",
    description: "Waterproof carbon trail shoes, windproof layers, and ultra vests tested in the Scottish Highlands.",
    image: "/assets/Home/story_section/image.png",
    primaryCta: "EXPLORE TRAIL GEAR",
    secondaryCta: "VISIT GLASGOW CLINIC"
  }
];

export default function Hero() {
  const { setPage } = useShop();
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto rotate hero slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <section className="relative w-full h-[640px] sm:h-[720px] lg:h-[780px] bg-black overflow-hidden flex items-center">
      {/* Background Slides */}
      {HERO_SLIDES.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={item.image}
            alt="Paceline athlete in high performance running gear"
            className="w-full h-full object-cover object-center brightness-[0.88]"
            loading="eager"
          />
          {/* Subtle gradient vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full py-16">
        <div className="max-w-2xl text-white">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#D2F800] text-xs sm:text-sm font-extrabold tracking-widest uppercase">
              {slide.tag}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white font-display mb-6">
            <span className="block">{slide.headingLine1}</span>
            <span className="block">{slide.headingLine2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed max-w-xl mb-9 drop-shadow-sm">
            {slide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#arrivals"
              className="inline-flex items-center gap-3 bg-[#D2F800] text-black font-extrabold text-sm sm:text-base px-7 py-3.5 hover:bg-lime-400 transition-all duration-200 group shadow-lg active:scale-95"
            >
              <span>{slide.primaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => setPage('about')}
              className="inline-flex items-center border border-white/60 bg-black/25 backdrop-blur-md text-white font-semibold text-sm sm:text-base px-7 py-3.5 hover:bg-white hover:text-black transition-all duration-200 active:scale-95"
            >
              <span>{slide.secondaryCta}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Dots / Indicators at bottom right */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`h-2 transition-all duration-300 rounded-full ${
              activeSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
