
import React from 'react';

interface TopActionHeaderProps {
  onActionClick: () => void;
}

const TopActionHeader: React.FC<TopActionHeaderProps> = ({ onActionClick }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-[80] flex h-12 md:h-16 border-b-4 border-black">
      {/* Advertiser Action - Clean White */}
      <button 
        onClick={onActionClick}
        className="flex-1 bg-white text-black flex items-center justify-center gap-3 group hover:bg-black hover:text-white transition-colors duration-300"
      >
        <span className="font-black text-sm md:text-lg lg:text-xl tracking-[0.1em] italic uppercase">
          広告主登録 <span className="hidden sm:inline opacity-30 ml-2">/ ADVERTISER</span>
        </span>
        <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>

      {/* Partner Action - Brand Blue */}
      <button 
        onClick={onActionClick}
        className="flex-1 bg-[var(--blue)] text-white flex items-center justify-center gap-3 group hover:bg-white hover:text-black transition-all duration-300 border-l-4 border-black"
      >
        <span className="font-black text-sm md:text-lg lg:text-xl tracking-[0.1em] italic uppercase">
          パートナー登録<span className="text-[10px] md:text-xs align-top ml-1 font-black underline decoration-2">無料</span> 
          <span className="hidden sm:inline opacity-40 ml-2">/ PARTNER</span>
        </span>
        <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
};

export default TopActionHeader;
