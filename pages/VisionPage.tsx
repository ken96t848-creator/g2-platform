
import React from 'react';

const VisionPage: React.FC = () => {
  return (
    <div className="pt-48 md:pt-64 pb-24 bg-[var(--bg)]">
      {/* Manifesto Hero */}
      <section className="px-6 md:px-10 mb-32">
        <div className="fade-in-up visible">
          <div className="inline-block px-4 py-2 bg-[var(--blue)] text-white neo-border mb-8 font-black text-xs uppercase tracking-[0.3em]">
            The Vision Manifesto
          </div>
          <h1 className="heading-brutal text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] leading-[0.85] tracking-tighter mb-4">
            REWRITE<br />
            THE <span className="text-[var(--blue)]">RULES</span>.
          </h1>
          <div className="mb-12">
            <span className="text-2xl md:text-4xl font-black italic tracking-tighter bg-black text-white px-4 py-1">
              常識を塗り替える
            </span>
          </div>
          <div className="max-w-4xl border-l-8 border-black pl-8 py-6">
            <p className="text-2xl md:text-5xl font-black italic leading-none uppercase">
              "成果報酬"を<br />
              一過性の数字から、<br />
              未来への投資へと変える。
            </p>
          </div>
        </div>
      </section>
      {/* ... (rest of the content remains the same) */}
      <section className="px-6 md:px-10 mb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              num: '01', 
              title: 'TRANSPARENCY', 
              desc: '不透明な中間コストを排除。すべてのデータをオープンにし、フェアな取引環境を構築します。',
              color: 'bg-white'
            },
            { 
              num: '02', 
              title: 'STABILITY', 
              desc: '瞬間最大風速ではなく、長く安定して積み上がる「質の高い成果」を評価基準にします。',
              color: 'bg-[var(--blue)] text-white'
            },
            { 
              num: '03', 
              title: 'EMPOWERMENT', 
              desc: 'テクノロジーの力で、広告主とパートナーが互いの可能性を最大化し合えるエコシステムを作ります。',
              color: 'bg-black text-white'
            }
          ].map((pillar, i) => (
            <div 
              key={i} 
              className={`${pillar.color} p-8 lg:p-10 neo-border neo-shadow h-full flex flex-col justify-between hover:-translate-y-4 transition-transform duration-500`}
            >
              <div className="text-5xl font-black heading-brutal mb-12">{pillar.num}</div>
              <div>
                <h3 className="text-2xl sm:text-4xl md:text-xl lg:text-3xl xl:text-4xl font-black heading-brutal mb-6 italic break-words leading-[0.9]">
                  {pillar.title}
                </h3>
                <p className="font-bold text-sm lg:text-base leading-relaxed opacity-80">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Evolution Section */}
      <section className="bg-black text-white py-32 md:py-64 overflow-hidden relative border-b-4 border-black">
        <div className="absolute inset-0 earth-grid opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-sphere animate-pulse-glow pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 bg-white text-black neo-border mb-6 font-black text-[10px] uppercase tracking-widest">
                Global Infrastructure
              </div>
              <h2 className="heading-brutal text-5xl md:text-8xl mb-10 italic leading-none">
                CONNECTING<br />
                <span className="text-[var(--blue)]">PURE VALUE.</span>
              </h2>
              <div className="space-y-12">
                {[
                  { label: "NOW / THE CHAOS", desc: "分断されたデータ。不透明な計測。短期的な搾取。業界に蔓延するノイズを私たちが一掃します。" },
                  { label: "FUTURE / G2 STANDARD", desc: "接続された意志。絶対的な透明性。永続的な共栄。G2が創り出すのは、国境なき信頼のネットワークです。" }
                ].map((item, i) => (
                  <div key={i} className={`p-8 neo-border ${i === 1 ? 'border-[var(--blue)] bg-white/5' : 'border-white/20'}`}>
                    <div className={`text-xs font-black mb-4 tracking-widest ${i === 1 ? 'text-[var(--blue)]' : 'opacity-40'}`}>{item.label}</div>
                    <p className="text-lg md:text-xl font-bold leading-relaxed opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2 flex justify-center items-center h-[500px] md:h-[700px]">
              <div className="absolute w-[350px] md:w-[550px] h-[350px] md:h-[550px] border-2 border-white/10 rounded-full animate-rotate-slow">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white neo-border"></div>
              </div>
              <div className="absolute w-[280px] md:w-[450px] h-[280px] md:h-[450px] border border-[var(--blue)]/30 rounded-full animate-rotate-fast">
                 <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[var(--blue)] neo-border"></div>
              </div>
              <div className="relative w-[220px] md:w-[350px] h-[220px] md:h-[350px] neo-border border-white bg-black neo-shadow-blue rounded-full overflow-hidden flex justify-center items-center">
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                   <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.2" />
                   {[...Array(8)].map((_, i) => (
                     <ellipse key={i} cx="50" cy="50" rx={10 + i * 5} ry="48" fill="none" stroke="white" strokeWidth="0.1" className="animate-rotate-slow" style={{ animationDuration: `${20 + i * 2}s` }} />
                   ))}
                </svg>
                <div className="absolute w-20 h-20 bg-[var(--blue)] rounded-full blur-3xl animate-pulse-glow opacity-50"></div>
                <div className="absolute text-center">
                   <div className="text-4xl md:text-6xl font-black heading-brutal italic text-white tracking-tighter">G2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-48 px-6 md:px-10 bg-[var(--blue)] text-white text-center border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full earth-grid"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 fade-in-up visible">
          <h2 className="heading-brutal text-5xl md:text-8xl mb-12 italic tracking-tighter leading-none">
            BECOME A<br /><span className="text-black">PARTNER.</span>
          </h2>
          <p className="text-xl md:text-3xl font-black mb-12 italic leading-tight">
            未来の価値を共に創り、<br className="hidden md:block" />
            次世代のスタンダードを共に定義しませんか？
          </p>
          <button className="neo-button bg-white text-black px-12 py-6 heading-brutal text-2xl md:text-4xl italic hover:bg-black hover:text-white transition-colors">
            JOIN THE NETWORK
          </button>
        </div>
      </section>
      <div className="py-20 bg-[var(--bg)]"></div>
    </div>
  );
};

export default VisionPage;
