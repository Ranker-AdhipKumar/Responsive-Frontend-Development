import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Heart, Plus, Eye } from 'lucide-react';

const FILTER_TABS = [
  { id: 'new', label: 'New In' },
  { id: 'bestsellers', label: 'Best Sellers' },
  { id: 'raceday', label: 'Race Day' },
  { id: 'trail', label: 'Trail' },
];

export default function ArrivalsSection() {
  const [activeTab, setActiveTab] = useState('new');
  const { addToCart, wishlist, toggleWishlist, setQuickViewProduct } = useShop();

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeTab === 'new') return product.tags.includes('new');
    if (activeTab === 'bestsellers') return product.tags.includes('bestsellers');
    if (activeTab === 'raceday') return product.tags.includes('raceday');
    if (activeTab === 'trail') return product.tags.includes('trail');
    return true;
  });

  return (
    <section id="arrivals" className="py-20 bg-brand-sand border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-brand-coral text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-coral"></span>
              02 · JUST LANDED
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-dark font-display">
              New arrivals for the run.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 border ${
                    isActive
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-transparent text-gray-700 border-gray-300 hover:border-black hover:text-black'
                  }`}
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-transparent relative"
              >
                {/* Product Image Box */}
                <div className="relative aspect-square w-full bg-[#E8DCCF]/50 border border-brand-border/60 overflow-hidden mb-4">
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-none ${
                        product.badge === 'SALE'
                          ? 'bg-brand-coral text-white'
                          : 'bg-black text-white'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white text-gray-800 transition-colors shadow-sm"
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWishlisted
                          ? 'fill-brand-coral text-brand-coral'
                          : 'stroke-[2]'
                      }`}
                    />
                  </button>

                  {/* Shoe image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Hover Quick Actions */}
                  <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="flex-1 bg-white/95 text-black hover:bg-white text-xs font-bold py-2.5 px-3 flex items-center justify-center gap-1.5 shadow-md border border-gray-200"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                    <button
                      onClick={() => addToCart(product, 'UK 8.5')}
                      className="bg-black hover:bg-neutral-800 text-[#D2F800] text-xs font-bold py-2.5 px-3.5 flex items-center justify-center shadow-md"
                      title="Add UK 8.5 to bag"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                    </button>
                  </div>
                </div>

                {/* Product Metadata */}
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                    {product.brand}
                  </span>
                  <h3
                    onClick={() => setQuickViewProduct(product)}
                    className="text-sm font-bold text-black tracking-tight hover:underline cursor-pointer line-clamp-1 mb-1"
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-black">
                      £{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        £{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
