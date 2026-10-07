import React from 'react';
import { useShop } from '../context/ShopContext';
import { PILLARS, TIMELINE, FOUNDERS } from '../data/products';
import { MapPin, Clock, Phone, Calendar, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { setPage, setIsGaitModalOpen } = useShop();

  return (
    <div className="bg-brand-sand min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-4">
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
          <button
            onClick={() => setPage('home')}
            className="hover:text-black transition-colors"
          >
            HOME
          </button>
          <span>/</span>
          <span className="text-black">ABOUT</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-14 text-center">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-dark font-display mb-6">
          Our Story
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-neutral-600 font-normal leading-relaxed">
          We opened Paceline in 2015 with one goal — to build the running shop we'd always wanted. A decade in, we're still hand-picking every shoe, every layer and every accessory for runners just like us.
        </p>
      </section>

      {/* Large Hero Runner Shoes Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20">
        <div className="relative w-full h-[320px] sm:h-[460px] lg:h-[540px] overflow-hidden shadow-sm">
          <img
            src="/assets/About/main_story_section/image_joggers.png"
            alt="Marathon runners crossing timing mat on road"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </section>

      {/* Section 01: Why We Exist */}
      <section className="py-20 border-t border-brand-border bg-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Col */}
            <div className="lg:col-span-5">
              <div className="text-brand-coral text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-coral"></span>
                01 · WHY WE EXIST
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark font-display leading-[1.05]">
                We're all
                <br />
                about the run.
              </h2>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-neutral-700 text-base sm:text-lg font-normal leading-relaxed">
              <p>
                If your aim is 5K or 26.2 miles, on road or trail, we're here to prepare, empower and equip you — from your first training run through to race-day. Our tried-and-tested range covers road, trail, track and field, apparel and accessories, with zero compromise on performance or style.
              </p>
              <p>
                Paceline is small and independent, but the community around it is anything but. We run our own weekly club, host free gait analysis, and partner with local charities so 20% of profits from kids' kits go to Girls Run Glasgow.
              </p>
              <p>
                Whatever mile you're on, we want to be your shop. Come say hello.
              </p>
              <div className="pt-2 font-bold text-neutral-900 tracking-wide text-base">
                — Rae & Jamie, Founders
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: What We Stand For */}
      <section className="py-20 border-t border-brand-border bg-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-12">
            <div className="text-brand-coral text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-coral"></span>
              02 · WHAT WE STAND FOR
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-dark font-display">
              Three things we won't compromise on.
            </h2>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-8 sm:p-10 border border-brand-border/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <span className={`text-4xl sm:text-5xl font-black font-display block mb-6 ${pillar.color}`}>
                    {pillar.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-black font-display mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Ten Seasons In (Timeline) */}
      <section className="py-20 border-t border-brand-border bg-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-14">
            <div className="text-brand-coral text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-coral"></span>
              03 · TEN SEASONS IN
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-dark font-display">
              How we got here.
            </h2>
          </div>

          {/* Horizontal Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TIMELINE.map((item) => (
              <div
                key={item.year}
                className="flex flex-col border-t-2 border-neutral-300 pt-6 group hover:border-black transition-colors"
              >
                <span className="text-3xl sm:text-4xl font-black text-brand-coral font-display mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: Visit Us In Glasgow (Split) */}
      <section className="w-full bg-[#111111] text-white overflow-hidden border-t border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          {/* Left info box */}
          <div className="lg:col-span-5 p-8 sm:p-14 lg:p-16 flex flex-col justify-center">
            <div className="text-[#D2F800] text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D2F800]"></span>
              04 · COME SAY HI
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-display mb-8">
              Visit us in
              <br />
              Glasgow
            </h2>

            <div className="space-y-4 text-sm text-neutral-300 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D2F800] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">142 Great Western Road</div>
                  <div className="text-xs text-neutral-400">West End, Glasgow, G4 9NT</div>
                  <div className="text-xs text-neutral-500 mt-0.5">2 min walk from St George's Cross Subway</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D2F800] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Opening Hours</div>
                  <div className="text-xs text-neutral-400">Mon - Fri: 10:00 — 18:30</div>
                  <div className="text-xs text-neutral-400">Saturday: 09:00 — 18:00 (Clinic Day)</div>
                  <div className="text-xs text-neutral-400">Sunday: 11:00 — 17:00</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D2F800] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Store & Clinic Phone</div>
                  <div className="text-xs text-neutral-400">+44 (0) 141 552 4890</div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setIsGaitModalOpen(true)}
                className="inline-flex items-center gap-3 bg-[#D2F800] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 hover:bg-lime-400 transition-colors uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK IN-STORE GAIT ANALYSIS</span>
              </button>
            </div>
          </div>

          {/* Right Map */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full bg-neutral-900 overflow-hidden">
            <img
              src="/assets/About/visit_us_section/map.png"
              alt="Stylized map showing Paceline Glasgow storefront"
              className="w-full h-full object-cover object-center"
            />
            {/* Interactive Location Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
              <div className="relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75"></span>
                <div className="relative w-8 h-8 rounded-full bg-brand-coral border-2 border-white flex items-center justify-center text-white shadow-lg">
                  <MapPin className="w-4 h-4 fill-white" />
                </div>
              </div>
              <div className="mt-2 bg-black/90 backdrop-blur-md text-white px-3 py-1.5 text-xs font-bold rounded shadow-lg border border-neutral-700 flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#D2F800]"></span>
                PACELINE GLASGOW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Meet The Founders */}
      <section className="py-20 border-t border-brand-border bg-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-12">
            <div className="text-brand-coral text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-coral"></span>
              05 · MEET THE FOUNDERS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-dark font-display">
              The people behind the shop.
            </h2>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                className="bg-white border border-brand-border/70 overflow-hidden shadow-sm flex flex-col"
              >
                {/* Photo with Badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#D2F800] text-black font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-none shadow">
                      {founder.badge}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-black text-black font-display mb-1">
                      {founder.name}
                    </h3>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-coral mb-4">
                      {founder.role}
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action: Ready to run? (Lime green banner) */}
      <section className="bg-[#D2F800] text-black py-20 px-4 sm:px-8 text-center border-t border-b border-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-black/80 text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-4">
            READY TO RUN?
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1] font-display mb-10">
            Come find your next
            <br />
            pair of shoes.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setPage('home');
                setTimeout(() => {
                  document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-black text-white hover:bg-neutral-800 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 transition-colors shadow-lg active:scale-95"
            >
              SHOP FOOTWEAR
            </button>
            <button
              onClick={() => setIsGaitModalOpen(true)}
              className="border-2 border-black text-black hover:bg-black hover:text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 transition-all duration-200 active:scale-95"
            >
              BOOK GAIT ANALYSIS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
