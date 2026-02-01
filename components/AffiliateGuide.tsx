
import React from 'react';

const AffiliateGuide: React.FC = () => {
  return (
    <section id="guide" className="py-20 md:py-32 px-6 md:px-10 bg-[#F2F2F2] border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 fade-in-up">
          <h2 className="heading-brutal text-4xl md:text-6xl mb-8">WHAT IS <span className="text-[var(--blue)]">AFFILIATE?</span></h2>
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl font-black mb-6 leading-tight">
              アフィリエイトとは、「成果報酬型広告」のこと。
            </p>
            <p className="text-lg font-bold text-gray-600 leading-relaxed bg-white p-6 md:p-8 neo-border neo-shadow">
              メディア運営者（パートナー）が商品やサービスを紹介し、ユーザーが購入や申込などの「成果」に至った場合のみ、広告主から報酬が支払われる仕組みです。
              広告主にとっては「リスクのない広告」、パートナーにとっては「価値を収益に変える手段」となります。
            </p>
          </div>
        </div>

        <h3 className="heading-brutal text-2xl md:text-3xl mb-10">POST ON <span className="text-[var(--blue)]">ANYWHERE</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
          {/* Website / Blog */}
          <div className="bg-white p-8 neo-border neo-shadow group hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-black mb-6 flex items-center justify-center text-white group-hover:bg-[var(--blue)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h4 className="heading-brutal text-xl mb-4">WEB / BLOG</h4>
            <p className="font-bold text-sm text-gray-600">
              個人のブログや特化型レビューサイト。SEO（検索エンジン）を活用した、最も王道で深い訴求が可能なプラットフォーム。
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-white p-8 neo-border neo-shadow group hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-black mb-6 flex items-center justify-center text-white group-hover:bg-[var(--blue)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <h4 className="heading-brutal text-xl mb-4 text-[var(--blue)]">INSTAGRAM</h4>
            <p className="font-bold text-sm text-gray-600">
              フィード投稿、ストーリーズ、リール動画。視覚的なインパクトと、フォロワーとの距離の近さを活かしたトレンド訴求。
            </p>
          </div>

          {/* YouTube */}
          <div className="bg-white p-8 neo-border neo-shadow group hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-black mb-6 flex items-center justify-center text-white group-hover:bg-[var(--blue)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </div>
            <h4 className="heading-brutal text-xl mb-4">YOUTUBE</h4>
            <p className="font-bold text-sm text-gray-600">
              実際の使用感を伝える動画レビュー。ショート動画での認知拡大から、長尺動画での確実な理解促進まで。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateGuide;
