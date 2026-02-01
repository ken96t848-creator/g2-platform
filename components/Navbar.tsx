
import React from 'react';

interface NavbarProps {
  onJoinClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] z-50 py-3 md:py-4 px-4 md:px-8 bg-white neo-border neo-shadow flex justify-between items-center">
      <div className="text-2xl md:text-3xl font-black italic tracking-tighter heading-brutal">
        G2<span className="text-[var(--blue)]">.</span>
      </div>
      <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
        <a href="#about" className="hover:text-[var(--blue)] transition-colors">Vision</a>
        <a href="#guide" className="hover:text-[var(--blue)] transition-colors">Guide</a>
        <a href="#features" className="hover:text-[var(--blue)] transition-colors">Impact</a>
        <a href="#targeting" className="hover:text-[var(--blue)] transition-colors">Partners</a>
        <a href="#company" className="hover:text-[var(--blue)] transition-colors">Contact</a>
      </div>
      <button 
        onClick={onJoinClick}
        className="neo-button bg-[var(--blue)] text-white px-4 md:px-5 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest"
      >
        Join Us
      </button>
    </nav>
  );
};

export default Navbar;
