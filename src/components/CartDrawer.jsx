import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    showToast,
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 75;
  const progressToFreeShipping = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  const discountAmount = (cartTotal * discountPercent) / 100;
  const shippingFee = cartTotal >= FREE_SHIPPING_THRESHOLD || cartTotal === 0 ? 0 : 4.95;
  const grandTotal = cartTotal - discountAmount + shippingFee;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'PACELINE10') {
      setDiscountPercent(10);
      showToast('10% Paceline Club discount applied!');
    } else {
      showToast('Invalid promo code. Try PACELINE10', 'error');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      showToast('Order confirmed! Simulated checkout completed.', 'success');
      setIsCartOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Bag">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-brand-sand">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-black" />
              <h2 className="text-lg font-black uppercase tracking-tight text-black font-display">
                Your Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-gray-500 hover:text-black rounded-full hover:bg-black/5"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="px-6 py-3 bg-[#111111] text-white text-xs">
            <div className="flex items-center justify-between mb-1.5 font-bold">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#D2F800]" />
                {amountToFreeShipping > 0
                  ? `Add £${amountToFreeShipping.toFixed(2)} more for FREE UK delivery`
                  : 'You have unlocked FREE UK delivery!'}
              </span>
              <span className="text-[#D2F800]">{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#D2F800] h-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center">
                <ShoppingBag className="w-12 h-12 text-gray-300 mb-4 stroke-1" />
                <p className="text-gray-500 text-sm font-medium mb-6">Your shopping bag is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-black text-[#D2F800] text-xs font-bold uppercase tracking-wider px-6 py-3"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex gap-4 pb-6 border-b border-gray-100 items-start"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover bg-gray-50 border border-gray-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                      {item.brand}
                    </span>
                    <h3 className="text-xs font-bold text-black line-clamp-1">
                      {item.name}
                    </h3>
                    <div className="text-xs text-gray-500 mt-0.5">
                      Size: <span className="font-semibold text-black">{item.size}</span>
                    </div>
                    <div className="text-xs font-black text-black mt-1">
                      £{item.price}
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          className="p-1 hover:bg-gray-100 text-gray-600"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          className="p-1 hover:bg-gray-100 text-gray-600"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-gray-400 hover:text-red-500 p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-200 bg-brand-sand">
              {/* Promo code */}
              <form onSubmit={handleApplyPromo} className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Code (Try PACELINE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-white border border-gray-300 px-3 py-2 text-xs uppercase focus:outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="bg-neutral-800 text-white text-xs font-bold px-3 py-2 uppercase hover:bg-black"
                >
                  Apply
                </button>
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-neutral-600 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-black">£{cartTotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-brand-coral font-semibold">
                    <span>Discount (10%)</span>
                    <span>-£{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>UK Delivery</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-[#65A30D] font-bold">FREE</span>
                    ) : (
                      `£${shippingFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-black pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="font-display">£{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-[#D2F800] text-black font-extrabold text-xs uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-lime-400 transition-colors shadow-sm disabled:opacity-75"
              >
                {isCheckingOut ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 mt-3 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
                <span>30-Day Free Returns · Official Authorized Retailer</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
