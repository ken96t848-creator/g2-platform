
import React from 'react';

interface TargetingProps {
  onActionClick?: () => void;
}

const Targeting: React.FC<TargetingProps> = ({ onActionClick }) => {
  return (
    <section id="targeting" className="bg-[#F2F2F2] py-20 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-stretch">
          
          {/* Path A: Affiliate Partner */}
          <div className="fade-in-up flex flex-col items-start group">
            <div className="w-full bg-[var(--blue)] text-white p-6 sm:p-8 md:p-10 lg:p-14 neo-border neo-shadow-blue relative overflow-hidden flex flex-col h-full">
              {/* Decorative Circle */}
              <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="bg-white text-[var(--blue)] inline-block px-4 py-1 text-[10px] md:text-xs font-black tracking-widest uppercase mb-10 neo-border-sm border-2 border-white self-start z-10">
                PARTNER_SIDE
              </div>

              <div className="mb-10 relative z-10">
                <h3 className="heading-brutal text-5xl sm:text-7xl md:text-4xl lg:text-6xl xl:text-7xl leading-[0.9] mb-0 tracking-tighter">
                  AFFILIATE
                </h3>
                <div className="relative inline-block">
                  <div className="heading-brutal text-5xl sm:text-7xl md:text-4xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tighter text-black/20 -mt-1 select-none">
                    PARTNER
                  </div>
                  {/* The Orange Accent Dot */}
                  <div className="absolute right-[10%] bottom-[25%] w-3 h-3 md:w-5 md:h-5 bg-[#FF9F1C] rounded-full shadow-[0_0_15px_rgba(255,159,28,0.5)] animate-pulse"></div>
                </div>
              </div>

              <div className="flex gap-4 items-start mb-8 z-10">
                <div className="w-1.5 h-16 md:h-20 bg-white flex-shrink-0"></div>
                <p className="text-2xl lg:text-4xl font-black italic leading-[1.1] tracking-tighter">
                  商品・サービスを紹介して<br />
                  収益を得たい方
                </p>
              </div>

              <p className="text-sm md:text-base font-bold mb-12 leading-relaxed opacity-90 max-w-lg z-10">
                発信力・広告運用・集客スキルを、成果報酬として正当に評価されたい方へ。
                G2は、案件数の多さを売りにするASPではありません。
              </p>

              <div className="mt-auto z-10">
                <button 
                  onClick={onActionClick}
                  className="neo-button bg-white text-black px-6 py-5 md:py-6 font-black uppercase w-full tracking-tighter text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl italic hover:bg-black hover:text-white transition-colors"
                >
                  パートナーとして登録する
                </button>
              </div>
            </div>
          </div>

          {/* Path B: Advertiser */}
          <div className="fade-in-up flex flex-col items-start group" style={{ transitionDelay: '0.2s' }}>
            <div className="w-full bg-white text-black p-6 sm:p-8 md:p-10 lg:p-14 neo-border neo-shadow relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-black/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

              <div className="bg-black text-white inline-block px-4 py-1 text-[10px] md:text-xs font-black tracking-widest uppercase mb-10 self-start z-10">
                MERCHANT_SIDE
              </div>

              <div className="mb-10 relative z-10">
                <h3 className="heading-brutal text-5xl sm:text-7xl md:text-4xl lg:text-6xl xl:text-7xl leading-[0.9] mb-0 tracking-tighter">
                  ADVERTISER
                </h3>
                <div className="heading-brutal text-5xl sm:text-7xl md:text-4xl lg:text-6xl xl:text-7xl leading-[0.9] tracking-tighter text-gray-200 -mt-1 select-none">
                  NETWORK
                </div>
              </div>

              <div className="flex gap-4 items-start mb-8 z-10">
                <div className="w-1.5 h-16 md:h-20 bg-black flex-shrink-0"></div>
                <p className="text-2xl lg:text-4xl font-black italic leading-[1.1] tracking-tighter">
                  商品・サービスを広めたい<br />
                  事業者の方
                </p>
              </div>

              <p className="text-sm md:text-base font-bold mb-12 leading-relaxed text-gray-400 max-w-lg z-10">
                成果が出た分だけ支払う、無駄のない成果報酬型広告を検討中の方へ。
                G2は、短期的な露出ではなく、売上に直結する成果を重視したASPです。
              </p>

              <div className="mt-auto z-10">
                <button 
                  onClick={onActionClick}
                  className="neo-button bg-black text-white px-6 py-5 md:py-6 font-black uppercase w-full tracking-tighter text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl italic hover:bg-[var(--blue)] transition-colors"
                >
                  広告主として登録する
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Targeting;
