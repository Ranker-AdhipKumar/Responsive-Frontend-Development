import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Heart, ShoppingBag, Check, Shield, Truck, RotateCcw } from 'lucide-react';

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    wishlist,
    toggleWishlist,
  } = useShop();

  const [selectedSize, setSelectedSize] = useState('UK 8.5');

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.includes(quickViewProduct.id);

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedSize);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center py-10">
        <div className="relative w-full max-w-3xl bg-white shadow-2xl text-left border border-gray-200 overflow-hidden flex flex-col md:flex-row">
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full hover:bg-white text-black shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Product Image */}
          <div className="md:w-1/2 bg-[#E8DCCF]/40 p-8 flex items-center justify-center relative border-b md:border-b-0 md:border-r border-brand-border">
            <span
              className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 ${
                quickViewProduct.badge === 'SALE'
                  ? 'bg-brand-coral text-white'
                  : 'bg-black text-white'
              }`}
            >
              {quickViewProduct.badge}
            </span>
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="max-h-[320px] object-contain drop-shadow-lg"
            />
          </div>

          {/* Right: Info & Actions */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {quickViewProduct.brand}
                </span>
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className="text-gray-400 hover:text-brand-coral"
                  aria-label="Toggle wishlist"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? 'fill-brand-coral text-brand-coral' : ''
                    }`}
                  />
                </button>
              </div>

              <h2 className="text-2xl font-black text-black font-display mb-2">
                {quickViewProduct.name}
              </h2>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-black text-black">
                  £{quickViewProduct.price}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    £{quickViewProduct.originalPrice}
                  </span>
                )}
                <span className="text-[11px] font-bold text-[#65A30D] bg-[#65A30D]/10 px-2 py-0.5">
                  In Stock · Glasgow Store
                </span>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                {quickViewProduct.description}
              </p>

              {/* Technical Specs */}
              {quickViewProduct.specs && (
                <div className="bg-brand-sand p-3.5 border border-brand-border/80 mb-6 text-xs space-y-1">
                  <div className="font-bold text-[10px] uppercase tracking-wider text-black mb-1.5">
                    Lab Specifications
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-neutral-700 text-[11px]">
                    <div>
                      <span className="text-gray-400">Weight: </span>
                      <span className="font-semibold">{quickViewProduct.specs.weight}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Heel Drop: </span>
                      <span className="font-semibold">{quickViewProduct.specs.drop}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Stack: </span>
                      <span className="font-semibold">{quickViewProduct.specs.stack}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Terrain: </span>
                      <span className="font-semibold">{quickViewProduct.specs.terrain}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-black mb-2">
                  <span>SELECT UK SIZE</span>
                  <span className="text-gray-500 font-normal underline cursor-pointer">
                    Size Guide
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {quickViewProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-xs font-bold border transition-all ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-gray-800 border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Add to Bag CTA */}
            <div>
              <button
                onClick={handleAdd}
                className="w-full bg-[#D2F800] text-black hover:bg-lime-400 font-extrabold text-xs uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO BAG · £{quickViewProduct.price}</span>
              </button>

              <div className="flex items-center justify-between text-[10px] text-gray-500 mt-3 pt-3 border-t border-gray-100">
                <span className="flex items-center gap-1">
                  <Truck className="w-3 h-3 text-black" /> Free UK Delivery
                </span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-3 h-3 text-black" /> 30-Day Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
