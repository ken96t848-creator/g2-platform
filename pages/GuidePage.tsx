
import React from 'react';

const GuidePage: React.FC = () => {
  return (
    <div className="pt-48 md:pt-64 pb-24 bg-[var(--bg)]">
      {/* Page Hero */}
      <section className="px-6 md:px-10 mb-20 md:mb-32 overflow-hidden">
        <div className="fade-in-up visible">
          <div className="inline-block px-4 py-2 bg-black text-white neo-border mb-8 font-black text-xs uppercase tracking-[0.3em] neo-shadow-blue">
            The Knowledge Base
          </div>
          <h1 className="heading-brutal text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.8] mb-6 tracking-tighter uppercase whitespace-nowrap">
            AFFILIATE<span className="text-[var(--blue)]">.</span>
          </h1>
          <div className="mb-12">
            <span className="text-2xl md:text-5xl font-black italic tracking-tighter bg-black text-white px-6 py-2">
              アフィリエイトとは
            </span>
          </div>
          <div className="max-w-4xl border-l-8 border-black pl-8 py-4">
            <p className="text-xl md:text-3xl font-black italic leading-tight uppercase">
              UNDERSTAND THE SYSTEM.<br />
              MASTER THE PERFORMANCE.
            </p>
          </div>
        </div>
      </section>
      {/* ... (rest of the content remains the same) */}
      <section className="px-6 md:px-10 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="p-8 md:p-12 bg-white neo-border neo-shadow">
              <h2 className="heading-brutal text-3xl md:text-5xl mb-8 italic">WHAT IS <span className="text-[var(--blue)]">AFFILIATE?</span></h2>
              <p className="text-xl md:text-2xl font-black mb-8 leading-tight italic">
                アフィリエイトとは、<br />
                「成果報酬型広告」のこと。
              </p>
              <div className="space-y-6 text-base md:text-lg font-bold text-gray-600 leading-relaxed">
                <p>
                  メディア運営者（パートナー）が商品やサービスを紹介し、ユーザーが購入や申込などの「成果」に至った場合のみ、広告主から報酬が支払われる仕組みです。
                </p>
                <p>
                  広告主にとっては「リスクのない広告」、パートナーにとっては「価値を収益に変える手段」となります。
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="bg-[var(--blue)] text-white p-8 neo-border neo-shadow">
                <h3 className="heading-brutal text-xl mb-4 italic">FOR ADVERTISERS</h3>
                <p className="font-bold opacity-80 leading-relaxed text-sm md:text-base">
                  初期費用や掲載料ではなく、実際の売上や獲得に対してのみ費用が発生. マーケティング予算を100%効率的に運用することが可能です。
                </p>
              </div>
              <div className="bg-black text-white p-8 neo-border neo-shadow">
                <h3 className="heading-brutal text-xl mb-4 italic">FOR PARTNERS</h3>
                <p className="font-bold opacity-80 leading-relaxed text-sm md:text-base">
                  自身のメディアやSNSの「影響力」を資本化。質の高い情報を発信することで、青天井の収益を目指すことができます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 mb-32 bg-black py-24 md:py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 earth-grid opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="heading-brutal text-4xl md:text-7xl mb-16 italic text-center">POST ON <span className="text-[var(--blue)]">ANYWHERE.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'WEB / BLOG',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
                desc: '個人のブログや特化型レビューサイト。SEO（検索エンジン）を活用した、最も王道で深い訴求が可能なプラットフォーム。',
                color: 'border-white/20'
              },
              {
                title: 'INSTAGRAM',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
                desc: 'フィード投稿、ストーリーズ、リール動画。視覚的なインパクトと、フォロワーとの距離の近さを活かしたトレンド訴求。',
                color: 'border-[var(--blue)]'
              },
              {
                title: 'YOUTUBE',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>,
                desc: '実際の使用感を伝える動画レビュー。ショート動画での認知拡大から、長尺動画での確実な理解促進まで。',
                color: 'border-white/20'
              }
            ].map((item, i) => (
              <div key={i} className={`p-10 neo-border ${item.color} bg-white/5 flex flex-col items-center text-center group hover:bg-white hover:text-black transition-all duration-500`}>
                <div className="mb-8 p-6 bg-white text-black group-hover:bg-[var(--blue)] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="heading-brutal text-2xl mb-6">{item.title}</h3>
                <p className="font-bold text-sm leading-relaxed opacity-60 group-hover:opacity-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="marquee-container -rotate-2">
        <div className="marquee-content text-[15vw] md:text-[8vw]">
          &nbsp;AFFILIATE MARKETING * PERFORMANCE BASED ADVERTISING * G2 GUIDE *&nbsp;
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
