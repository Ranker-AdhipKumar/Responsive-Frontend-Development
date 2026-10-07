import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Search, User, ShoppingBag, Heart, Menu, X, ArrowRight, MapPin } from 'lucide-react';

export default function Navbar() {
  const { page, setPage, cartCount, wishlist, setIsCartOpen, setIsSearchOpen, setIsGaitModalOpen } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Men', href: '#explore-men', action: () => { setPage('home'); setTimeout(() => document.getElementById('explore-men')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { label: 'Women', href: '#explore-women', action: () => { setPage('home'); setTimeout(() => document.getElementById('explore-women')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { label: 'Footwear', href: '#arrivals', action: () => { setPage('home'); setTimeout(() => document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { label: 'Apparel', href: '#categories', action: () => { setPage('home'); setTimeout(() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { label: 'Brands', href: '#story', action: () => { setPage('home'); setTimeout(() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { label: 'Sale', href: '#arrivals', action: () => { setPage('home'); setTimeout(() => document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { label: 'About', href: '#about', action: () => setPage('about'), isCurrent: page === 'about' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-sand transition-all duration-200">
      {/* Top Announcement Bar */}
      <div className="bg-[#121212] text-[#F5F5F5] text-xs font-semibold tracking-wider py-2 px-4 sm:px-8 border-b border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs">
          <div className="hidden sm:block text-gray-300 font-medium">
            FREE UK DELIVERY OVER £75 <span className="mx-1 text-gray-500">·</span> 30-DAY RETURNS
          </div>
          <div className="text-center font-bold tracking-widest text-[#D2F800] uppercase">
            AUTUMN '26 — NEW ARRIVALS DROPPING WEEKLY
          </div>
          <div className="hidden md:flex items-center gap-2 text-gray-300 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D2F800]" /> STORE: GLASGOW
            </span>
            <span className="text-gray-500">·</span>
            <span>EN / £ GBP</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="border-b border-brand-border bg-brand-sand/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setPage('home')}
              className="text-2xl sm:text-3xl font-extrabold tracking-tighter uppercase font-display hover:opacity-90 transition-opacity flex items-center gap-2 text-black"
              aria-label="Paceline Home"
            >
              <span>PACELINE</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#D2F800] border border-black"></span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide">
            {navLinks.map((link) => {
              const isActive = link.label === 'About' ? page === 'about' : page === 'home' && false;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      if (link.action) link.action();
                    }}
                    className={`transition-colors duration-150 py-1 border-b-2 ${
                      link.isCurrent
                        ? 'border-black text-black font-bold'
                        : 'border-transparent text-gray-700 hover:text-black hover:border-gray-300'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-800 hover:text-black hover:bg-black/5 rounded-full transition-colors"
              aria-label="Open search dialog"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => {
                setPage('home');
                setTimeout(() => document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="p-2 text-gray-800 hover:text-black hover:bg-black/5 rounded-full transition-colors relative"
              aria-label={`Wishlist items: ${wishlist.length}`}
              title="View Wishlist items"
            >
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-red-500 text-red-500' : 'stroke-[2.2]'}`} />
              {wishlist.length > 0 && (
                <span className="absolute 1 -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-brand-coral text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Account Icon */}
            <button
              onClick={() => setIsGaitModalOpen(true)}
              className="hidden sm:inline-flex p-2 text-gray-800 hover:text-black hover:bg-black/5 rounded-full transition-colors"
              aria-label="Book clinic appointment / Account"
              title="Book In-Store Gait Analysis"
            >
              <User className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Shopping Bag Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-gray-800 hover:text-black hover:bg-black/5 rounded-full transition-colors relative"
              aria-label={`Open shopping cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-black text-[#D2F800] text-[11px] font-extrabold rounded-full flex items-center justify-center px-1 border border-black shadow-sm">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-800 hover:text-black hover:bg-black/5 rounded-full transition-colors ml-1"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[90px] z-50 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-brand-sand border-b border-brand-border p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Navigation</div>
              <ul className="flex flex-col gap-3 font-bold text-lg">
                <li>
                  <button
                    onClick={() => {
                      setPage('home');
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left py-2 px-3 rounded-md flex items-center justify-between ${
                      page === 'home' ? 'bg-black text-[#D2F800]' : 'hover:bg-black/5'
                    }`}
                  >
                    <span>Home & New Arrivals</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </li>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => {
                        link.action();
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left py-2 px-3 rounded-md flex items-center justify-between ${
                        link.label === 'About' && page === 'about'
                          ? 'bg-black text-[#D2F800]'
                          : 'hover:bg-black/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-brand-border flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsGaitModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 bg-[#D2F800] text-black font-bold text-sm uppercase tracking-wider rounded-none hover:bg-lime-400 transition-colors text-center border border-black shadow"
                >
                  Book Free Gait Analysis
                </button>
                <div className="flex items-center justify-between text-xs text-gray-600 pt-2 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-brand-coral" /> 142 Great Western Rd, Glasgow
                  </span>
                  <span>EN / £ GBP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
