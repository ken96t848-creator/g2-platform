
import React from 'react';

interface HeroProps {
  onActionClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onActionClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 overflow-hidden bg-[#F2F2F2]">
      <div className="px-6 md:px-10 mb-12 md:mb-20 fade-in-up">
        <div className="mb-6 md:mb-8 inline-block px-3 md:px-4 py-1 neo-border bg-white text-[10px] md:text-xs font-black uppercase tracking-widest">
          The Next Gen ASP
        </div>
        <h1 className="heading-brutal text-5xl sm:text-6xl md:text-8xl lg:text-[11rem] mb-6 leading-[0.9] break-words">
          BUILDING<br />
          THE <span className="text-[var(--blue)]">FUTURE</span>
        </h1>
        <p className="text-lg md:text-xl font-bold max-w-2xl border-l-4 border-black pl-4 md:pl-6 py-2 text-gray-700">
          G2は、広告の常識を再定義し、<br className="hidden md:block" />
          持続可能な「成功」をデザインするパフォーマンスプラットフォームです。
        </p>
      </div>

      <div className="marquee-container -rotate-1 mb-10">
        <div className="marquee-content text-[15vw] md:text-[10vw]">
          &nbsp;SUSTAINABLE SUCCESS * G2 PERFORMANCE * SCALABLE GROWTH * PURE RESULTS *&nbsp;
          &nbsp;SUSTAINABLE SUCCESS * G2 PERFORMANCE * SCALABLE GROWTH * PURE RESULTS *&nbsp;
        </div>
      </div>

      <div className="px-6 md:px-10 flex flex-col sm:flex-row gap-4 md:gap-6 fade-in-up" style={{ transitionDelay: '0.3s' }}>
        <button 
          onClick={onActionClick}
          className="neo-button bg-black text-white px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-black uppercase tracking-tighter w-full sm:w-auto"
        >
          ADVERTISER
        </button>
        <button 
          onClick={onActionClick}
          className="neo-button bg-white text-black px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-black uppercase tracking-tighter w-full sm:w-auto"
        >
          AFFILIATE
        </button>
      </div>
    </section>
  );
};

export default Hero;
