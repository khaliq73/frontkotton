import { X } from 'lucide-react';
import { useState } from 'react';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-black text-white text-center py-2 px-4 relative text-sm z-40">
      <div className="container mx-auto flex justify-center items-center gap-4">
        <span>Free shipping for all orders over PKR 4000 🚚</span>
        <span className="hidden md:inline-block">|</span>
        <span className="font-bold">PRICE DROP ON ENTIRE STOCK — ONLY FOR 2 DAYS!</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TopBanner;
