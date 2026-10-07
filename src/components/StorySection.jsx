import React from 'react';
import { useShop } from '../context/ShopContext';
import { STATS } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function StorySection() {
  const { setPage } = useShop();

  return (
    <section id="story" className="w-full bg-[#161616] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px] lg:min-h-[640px]">
        {/* Left Column: Mountain Runner Photo */}
        <div className="relative w-full h-[360px] sm:h-[460px] lg:h-full bg-black overflow-hidden">
          <img
            src="/assets/Home/story_section/image.png"
            alt="Runner on mountain ridge above the cloud inversion"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent lg:hidden"></div>
        </div>

        {/* Right Column: Narrative & Stats */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-24 max-w-2xl">
          {/* Eyebrow */}
          <div className="text-[#D2F800] text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D2F800]"></span>
            OUR STORY
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6 font-display">
            Built by runners.
            <br />
            Worn on every terrain.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed mb-10">
            PACELINE opened in 2015 with one goal — to become an all-inclusive hub for runners. Twenty seasons in, we still hand-pick every shoe, every layer and every accessory in our range. From your first Couch-to-5K to your third marathon, we prepare, empower and equip you with zero compromise on performance or style.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pb-10 border-b border-gray-800 mb-10">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#D2F800] font-display">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Action */}
          <div>
            <button
              onClick={() => setPage('about')}
              className="inline-flex items-center gap-3 border border-white/60 text-white font-bold text-xs sm:text-sm px-6 py-3.5 hover:bg-white hover:text-black transition-all duration-200 group active:scale-95"
            >
              <span>READ THE FULL STORY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
