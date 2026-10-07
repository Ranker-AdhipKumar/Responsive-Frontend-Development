import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Calendar, Clock, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export default function GaitModal() {
  const { isGaitModalOpen, setIsGaitModalOpen, showToast } = useShop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-10-12',
    time: '11:00 AM',
    goal: 'Marathon Training',
    currentShoe: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isGaitModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Gait analysis booked! We look forward to seeing you at Great Western Road.');
    setTimeout(() => {
      setSubmitted(false);
      setIsGaitModalOpen(false);
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsGaitModalOpen(false)}
      />

      <div className="min-h-screen px-4 text-center flex items-center justify-center py-10">
        <div className="relative w-full max-w-lg bg-white shadow-2xl text-left border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-6 bg-[#111111] text-white flex items-center justify-between">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#D2F800] mb-1">
                GLASGOW CLINIC · 142 GREAT WESTERN RD
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight font-display">
                Book Free Gait Analysis
              </h2>
            </div>
            <button
              onClick={() => setIsGaitModalOpen(false)}
              className="p-1 text-gray-400 hover:text-white rounded"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 bg-brand-sand">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle className="w-16 h-16 text-[#65A30D] mb-4" />
                <h3 className="text-2xl font-black text-black font-display mb-2">
                  Session Confirmed!
                </h3>
                <p className="text-xs text-neutral-600 max-w-sm">
                  We have reserved your Saturday slot with Jamie Roy & the clinical team. A confirmation email has been dispatched to {formData.email || 'your email'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our clinical gait analysis includes high-speed video capture on our woodway treadmill, foot strike assessment, and tailored shoe matching with Jamie Roy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Cameron Smith"
                      className="w-full bg-white border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="cameron@example.com"
                      className="w-full bg-white border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1">
                      Time Slot *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                    >
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>01:30 PM</option>
                      <option>03:00 PM</option>
                      <option>04:30 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-black mb-1">
                    Primary Running Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full bg-white border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:border-black"
                  >
                    <option>Marathon Training (Sub-3 / Sub-4)</option>
                    <option>Couch to 5K Beginner</option>
                    <option>Highland Ultra & Trail Racing</option>
                    <option>Injury Prevention & Recovery</option>
                    <option>Track & Middle Distance</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-black text-[#D2F800] hover:bg-neutral-800 font-extrabold text-xs uppercase tracking-widest py-3.5 transition-colors shadow-sm"
                  >
                    Confirm Free Booking
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-black" />
                  <span>100% Free · No purchase obligation · Bring your current runners</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
