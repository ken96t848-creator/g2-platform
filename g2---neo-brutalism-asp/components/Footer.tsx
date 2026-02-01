
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-20 px-6 md:px-10 bg-black text-white border-t-[8px] md:border-t-[12px] border-[var(--blue)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <div className="heading-brutal text-6xl md:text-8xl mb-6 md:mb-8 leading-none">G2<span className="text-[var(--blue)]">.</span></div>
          <p className="font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-50">© 2025 G2 CO., LTD. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-10 font-black uppercase text-[10px] tracking-widest italic">
          <a href="#" className="hover:text-[var(--blue)] underline decoration-2 underline-offset-4">Terms</a>
          <a href="#" className="hover:text-[var(--blue)] underline decoration-2 underline-offset-4">Privacy</a>
          <a href="#" className="hover:text-[var(--blue)] underline decoration-2 underline-offset-4">Social</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
