
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <div className="fade-in-up">
          <h2 className="heading-brutal text-4xl md:text-6xl mb-8 md:mb-12">DECODE <span className="text-[var(--blue)]">G2</span></h2>
          <div className="space-y-6 md:space-y-8 text-lg md:text-xl font-bold leading-relaxed">
            <p className="text-gray-500">成果は一度きりの爆発力ではなく、積み上がるべき資産。</p>
            <p className="bg-[var(--bg)] p-6 md:p-10 neo-border neo-shadow">
              G2は、広告主のブランド価値とパートナーの収益が、<br className="hidden md:block" />
              長期的に共鳴し続けるための「質」に特化した環境を提供します。
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 fade-in-up" style={{ transitionDelay: '0.2s' }}>
          <div className="neo-border neo-shadow p-6 md:p-8 bg-white hover:-translate-y-1 transition-transform">
            <h3 className="heading-brutal text-xl md:text-2xl mb-4">OPTIMAL</h3>
            <p className="font-bold text-xs md:text-sm text-gray-600">厳選された案件のみを扱い、ブランドの品位と成果の最大化を両立します。</p>
          </div>
          <div className="neo-border neo-shadow-blue p-6 md:p-8 bg-white hover:-translate-y-1 transition-transform">
            <h3 className="heading-brutal text-xl md:text-2xl mb-4 text-[var(--blue)]">PURE</h3>
            <p className="font-bold text-xs md:text-sm text-gray-600">不透明さを排除。すべてのデータを透明化し、信頼の基盤を築きます。</p>
          </div>
          <div className="neo-border neo-shadow p-6 md:p-8 bg-black text-white md:col-span-2 hover:-translate-y-1 transition-transform">
            <h3 className="heading-brutal text-xl md:text-2xl mb-4">NOBLE TRUST</h3>
            <p className="font-bold text-xs md:text-sm opacity-80">迅速な意思決定と確実なオペレーション。パートナーの挑戦を資本で支えます。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
