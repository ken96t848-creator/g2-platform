
import React from 'react';

interface NavbarProps {
  onJoinClick?: () => void;
  onNavigate: (view: 'home' | 'company' | 'vision' | 'guide') => void;
  currentView: 'home' | 'company' | 'vision' | 'guide';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const navItems: { label: string; view: 'home' | 'company' | 'vision' | 'guide' }[] = [
    { label: 'ホーム', view: 'home' },
    { label: 'アフィリエイト', view: 'guide' },
    { label: 'ビジョン', view: 'vision' },
    { label: '会社概要', view: 'company' },
  ];

  return (
    <nav className="fixed top-12 md:top-16 left-0 w-full z-[60] py-2 md:py-4 px-4 md:px-12 bg-white border-b-4 border-black flex justify-between items-center transition-all duration-300">
      {/* Logo */}
      <div 
        className="text-2xl md:text-3xl font-black italic tracking-tighter heading-brutal cursor-pointer flex items-center shrink-0"
        onClick={() => onNavigate('home')}
      >
        G2<span className="text-[var(--blue)]">.</span>
      </div>
      
      {/* Direct Navigation Links (One-Click Access) */}
      <div className="flex gap-4 md:gap-10 lg:gap-12 text-[12px] sm:text-[14px] md:text-[16px] font-black uppercase tracking-[0.05em] items-center">
        {navItems.map((item) => (
          <button 
            key={item.view}
            onClick={() => onNavigate(item.view)}
            className={`whitespace-nowrap transition-all relative py-1 ${
              currentView === item.view 
                ? 'text-[var(--blue)]' 
                : 'hover:text-[var(--blue)]'
            }`}
          >
            {item.label}
            {currentView === item.view && (
              <span className="absolute bottom-[-6px] md:bottom-[-10px] left-0 w-full h-[3px] md:h-[5px] bg-[var(--blue)]"></span>
            )}
          </button>
        ))}
      </div>

      {/* Status Dot */}
      <div className="hidden sm:flex items-center gap-3 bg-black text-white px-3 py-1.5 md:px-4 md:py-2 font-black text-[8px] md:text-xs tracking-widest italic border-2 border-black shrink-0">
        <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--blue)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-[var(--blue)]"></span>
        </span>
        <span className="hidden md:inline">SYSTEM_ACTIVE</span>
        <span className="md:hidden">ACTIVE</span>
      </div>
    </nav>
  );
};

export default Navbar;
