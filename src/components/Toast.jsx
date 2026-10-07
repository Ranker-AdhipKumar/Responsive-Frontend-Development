import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function Toast() {
  const { toast } = useShop();

  if (!toast) return null;

  const isError = toast.type === 'error';
  const isInfo = toast.type === 'info';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#111111] text-white p-4 shadow-2xl border border-neutral-700 flex items-center gap-3 animate-slideUp">
      {isError ? (
        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
      ) : isInfo ? (
        <Info className="w-5 h-5 text-sky-400 flex-shrink-0" />
      ) : (
        <CheckCircle2 className="w-5 h-5 text-[#D2F800] flex-shrink-0" />
      )}
      <p className="text-xs font-bold leading-snug flex-1">{toast.message}</p>
    </div>
  );
}
