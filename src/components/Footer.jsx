import React from 'react';
import { useShop } from '../context/ShopContext';

export default function Footer() {
  const { setPage, setIsGaitModalOpen } = useShop();

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'about') {
      setPage('about');
    } else if (target === 'gait') {
      setIsGaitModalOpen(true);
    } else if (target === 'home') {
      setPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setPage('home');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-[#0D0D0D] text-white pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-neutral-800">
          {/* Col 1: Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => {
                setPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl font-black tracking-tighter uppercase font-display mb-4 text-left block hover:opacity-90 transition-opacity"
            >
              PACELINE
            </button>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal max-w-xs">
              Race-day gear, trail-tested essentials, and everyday running kit — curated in Glasgow since 2015.
            </p>
          </div>

          {/* Col 2: SHOP */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-300 mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <a
                  href="#explore-men"
                  onClick={(e) => handleLinkClick(e, 'explore-men')}
                  className="hover:text-white transition-colors"
                >
                  Men's
                </a>
              </li>
              <li>
                <a
                  href="#explore-women"
                  onClick={(e) => handleLinkClick(e, 'explore-women')}
                  className="hover:text-white transition-colors"
                >
                  Women's
                </a>
              </li>
              <li>
                <a
                  href="#arrivals"
                  onClick={(e) => handleLinkClick(e, 'arrivals')}
                  className="hover:text-white transition-colors"
                >
                  Footwear
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  onClick={(e) => handleLinkClick(e, 'categories')}
                  className="hover:text-white transition-colors"
                >
                  Apparel
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  onClick={(e) => handleLinkClick(e, 'categories')}
                  className="hover:text-white transition-colors"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="#arrivals"
                  onClick={(e) => handleLinkClick(e, 'arrivals')}
                  className="hover:text-white transition-colors"
                >
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: HELP */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-300 mb-4">
              HELP
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <button
                  onClick={() => setIsGaitModalOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Shipping
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Returns
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Size Guides
                </span>
              </li>
              <li>
                <button
                  onClick={() => setIsGaitModalOpen(true)}
                  className="hover:text-[#D2F800] text-left transition-colors font-bold"
                >
                  Gait Analysis
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  FAQs
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: COMPANY */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-300 mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <button
                  onClick={() => setPage('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  Store · Glasgow
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Sustainability
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Careers
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Wholesale
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Press
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: FOLLOW */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-300 mb-4">
              FOLLOW
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://strava.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D2F800] transition-colors"
                >
                  Strava
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Newsletter
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-medium">
          <div>
            © 2026 Paceline Running Co. — All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Cookies</span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
