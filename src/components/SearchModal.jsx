import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { Search, X, ArrowRight } from 'lucide-react';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct, setPage } = useShop();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const quickSearches = ['Vaporfly', 'Trail', 'Cloudmonster', 'Hoka', 'Sale'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="min-h-screen px-4 text-center flex items-start justify-center pt-20 sm:pt-28">
        <div className="relative w-full max-w-2xl bg-white shadow-2xl text-left border border-gray-200 overflow-hidden">
          {/* Search Input Bar */}
          <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center gap-3 bg-brand-sand">
            <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search running shoes, apparel, brands..."
              className="w-full bg-transparent text-base sm:text-lg font-bold text-black focus:outline-none placeholder:text-gray-400 placeholder:font-normal"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 text-gray-400 hover:text-black rounded"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick searches chips */}
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-gray-500 font-bold">Trending:</span>
            {quickSearches.map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-2.5 py-1 bg-white hover:bg-neutral-200 rounded border border-gray-200 text-gray-700 font-medium"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Search Results Container */}
          <div className="max-h-[60vh] overflow-y-auto p-6">
            {query.trim() === '' ? (
              <div className="text-center py-10 text-gray-400 text-xs uppercase tracking-wider font-bold">
                Type above to explore our curated running catalogue
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-700 font-bold mb-1">No products found for "{query}"</p>
                <p className="text-gray-400 text-xs">Try searching for Nike, Hoka, Trail, or Road</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setQuickViewProduct(item);
                      setIsSearchOpen(false);
                    }}
                    className="flex gap-3 p-3 hover:bg-brand-sand border border-transparent hover:border-brand-border cursor-pointer transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover bg-gray-100 flex-shrink-0"
                    />
                    <div className="min-w-0 flex flex-col justify-center">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {item.brand}
                      </span>
                      <h4 className="text-xs font-bold text-black line-clamp-1">
                        {item.name}
                      </h4>
                      <span className="text-xs font-extrabold text-black mt-0.5">
                        £{item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
