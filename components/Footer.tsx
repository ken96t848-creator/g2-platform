
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="company" className="bg-[#121212] text-white pt-32 pb-16 px-6 md:px-10 relative overflow-hidden">
      {/* Background Giant Text */}
      <div className="absolute bottom-[-5%] left-[-5%] heading-brutal text-[25vw] leading-none text-white/[0.03] pointer-events-none select-none">
        G2 PERFORMANCE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">
          
          <div className="max-w-xl">
            <div className="heading-brutal text-6xl md:text-8xl italic mb-8">
              成功を、<br />永続的な<br /><span className="text-[var(--blue)]">資産へ。</span>
            </div>
            <div className="flex flex-wrap gap-8 font-black text-[10px] tracking-[0.3em] uppercase opacity-40">
              <span>信頼</span>
              <span>•</span>
              <span>成長</span>
              <span>•</span>
              <span>透明性</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 text-sm font-bold uppercase tracking-widest">
            <div>
              <p className="text-[9px] opacity-30 mb-6 font-black tracking-[0.5em] uppercase">お問い合わせ</p>
              <div className="flex items-center gap-3 mb-2">
                <a href="tel:07054891825" className="hover:text-[var(--blue)] transition-colors font-black">070-5489-1825</a>
              </div>
              <p className="hover:text-[var(--blue)] transition-colors cursor-pointer">info@g2-platform.com</p>
            </div>
            <div>
              <p className="text-[9px] opacity-30 mb-6 font-black tracking-[0.5em] uppercase">所在地</p>
              <p className="opacity-60 leading-relaxed font-black">
                〒550-0001<br />
                大阪府大阪市西区土佐堀 2-1-3<br />
                G2 OSAKA BASE
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-10 border-t border-white/10">
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest opacity-40">
             <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
             <a href="#" className="hover:text-white transition-colors">利用規約</a>
          </div>
          <p className="text-[9px] font-black tracking-[0.4em] uppercase opacity-20">© 2026 G2. 限界を超え、その先へ。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
