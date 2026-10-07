import React, { useEffect } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import GaitModal from './components/GaitModal';
import QuickViewModal from './components/QuickViewModal';
import Toast from './components/Toast';
import { LayoutGrid, Info, ArrowUp } from 'lucide-react';

function AppContent() {
  const { page, setPage } = useShop();

  // Scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-sand text-brand-dark selection:bg-[#D2F800] selection:text-black">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 bg-black text-[#D2F800] px-4 py-2 font-bold text-xs uppercase tracking-wider"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Navbar />

      {/* Main Page Content */}
      <div id="main-content" className="flex-1">
        {page === 'about' ? <AboutPage /> : <HomePage />}
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <CartDrawer />
      <SearchModal />
      <GaitModal />
      <QuickViewModal />
      <Toast />

      {/* Reviewer / User Page Switcher Floating Bar */}
      <div className="fixed bottom-6 left-6 z-40 bg-black/90 backdrop-blur-md text-white p-1.5 shadow-2xl rounded-full border border-neutral-700 flex items-center gap-1">
        <button
          onClick={() => setPage('home')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
            page === 'home'
              ? 'bg-[#D2F800] text-black shadow'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
          aria-label="View Home Page Mockup"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <button
          onClick={() => setPage('about')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
            page === 'about'
              ? 'bg-[#D2F800] text-black shadow'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
          aria-label="View About Page Mockup"
        >
          <Info className="w-3.5 h-3.5" />
          <span>About</span>
        </button>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 p-3 bg-black text-white hover:bg-[#D2F800] hover:text-black transition-all shadow-xl border border-neutral-700"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
