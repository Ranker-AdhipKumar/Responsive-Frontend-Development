import React from 'react';
import { CATEGORIES } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function CategorySection() {
  return (
    <section id="categories" className="py-20 bg-brand-sand border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-brand-coral text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-coral"></span>
              01 · SHOP BY CATEGORY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-dark font-display">
              Every discipline. Every distance.
            </h2>
          </div>

          <a
            href="#arrivals"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-wider uppercase text-brand-dark hover:text-brand-coral transition-colors group"
          >
            <span>VIEW ALL COLLECTIONS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative h-[380px] sm:h-[420px] rounded-none overflow-hidden bg-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              {/* Background photo */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Content text */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-black tracking-tight mb-1 text-white font-display">
                  {cat.title}
                </h3>
                <p className="text-xs text-gray-300 mb-4 font-normal">
                  {cat.subtitle}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D2F800] group-hover:underline">
                  <span>SHOP</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
