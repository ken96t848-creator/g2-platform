
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-[var(--black)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-24 fade-in-up">
          <h2 className="heading-brutal text-5xl sm:text-7xl md:text-9xl mb-8 leading-none">REAL<br /><span className="text-[var(--blue)]">DRIVE</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div className="fade-in-up">
            <div className="neo-border border-white overflow-hidden mb-6 md:mb-8 neo-shadow-blue">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                alt="Tech" 
                className="w-full h-64 md:h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <h3 className="heading-brutal text-2xl md:text-3xl mb-4">01. 資産化設計</h3>
            <p className="text-base md:text-lg font-bold opacity-70">一過性の報酬を超え、明日への持続的な成長を実現する戦略を提供します。</p>
          </div>

          <div className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="neo-border border-white overflow-hidden mb-6 md:mb-8 neo-shadow">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2070" 
                alt="Data" 
                className="w-full h-64 md:h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <h3 className="heading-brutal text-2xl md:text-3xl mb-4 text-[var(--blue)]">02. 絶対的透明性</h3>
            <p className="text-base md:text-lg font-bold opacity-70">不正を一切排除したクリーンな計測。公正な評価こそが最大の価値を生むと信じています。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
