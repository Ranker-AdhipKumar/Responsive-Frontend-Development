import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    setIsSubscribed(true);
    showToast('Welcome to the Paceline Club! Check your inbox for 10% off.');
  };

  return (
    <section className="bg-[#111111] py-14 sm:py-16 border-t border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left copy */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display mb-2">
              Join the Paceline club.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-normal">
              Early access to new drops, race-day tips, and 10% off your first order.
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-auto min-w-[340px] sm:min-w-[440px]">
            {isSubscribed ? (
              <div className="flex items-center gap-3 p-4 bg-white/5 border border-[#D2F800]/40 rounded-none text-[#D2F800]">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-bold">You're on the list! Welcome to the club.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  aria-label="Email address for newsletter"
                  className="flex-1 bg-[#1E1E1E] border border-neutral-700 text-white px-4 py-3.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#D2F800] text-black font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-lime-400 transition-colors flex items-center justify-center gap-2"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
