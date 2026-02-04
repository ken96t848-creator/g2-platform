
import React, { useState, useEffect } from 'react';
import ThreeCube from './ThreeCube';

const Hero: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [sysCode, setSysCode] = useState("G2_SYS_INIT");

  useEffect(() => {
    const codeInterval = setInterval(() => {
      const codes = ["BOOT_SEQ", "INIT_CORE", "AES_ENC", "TRAFFIC_OK", "PROTOCOL_V3", "SYNC_LOG"];
      setSysCode(codes[Math.floor(Math.random() * codes.length)]);
    }, 150);

    const progInterval = setInterval(() => {
      setProgress(98 + Math.random() * 1.5);
    }, 100);

    return () => {
      clearInterval(codeInterval);
      clearInterval(progInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 overflow-hidden bg-[#F2F2F2]">
      
      {/* Background Cube Visual */}
      <div className="absolute right-[-5%] top-[20%] w-[400px] h-[400px] opacity-20 hidden lg:block pointer-events-none">
        <ThreeCube />
      </div>

      <div className="px-6 md:px-10 mb-8 fade-in-up visible">
        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          <div className="bg-black text-white neo-border px-8 py-6 flex flex-wrap items-center gap-x-12 gap-y-4 neo-shadow-blue z-10 relative overflow-hidden flex-grow">
            <div className="flex flex-col min-w-[180px]">
              <span className="text-[10px] font-black opacity-40 tracking-[0.4em] mb-1">現在のステータス</span>
              <span className="font-black text-xl md:text-2xl italic tracking-tighter text-[var(--blue)] uppercase">準備中 / UNDER_DEV</span>
            </div>
            <div className="w-px h-12 bg-white/20 hidden lg:block"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black opacity-40 tracking-[0.4em] mb-1">公開予定日</span>
              <div className="flex items-baseline gap-4 leading-none">
                <span className="font-black text-3xl md:text-5xl text-white heading-brutal italic tracking-tighter uppercase">
                  2026.03 <span className="text-[var(--blue)]">LAUNCH</span>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#FFDE03] text-black lg:neo-border-l-0 neo-border px-8 py-6 flex flex-col justify-center min-w-[280px] lg:w-[380px] relative overflow-hidden">
             <div className="absolute left-0 top-0 bottom-0 bg-black/10" style={{ width: `${progress}%` }}></div>
             <div className="relative z-10 flex justify-between items-center gap-4 font-black">
               <span className="text-xs md:text-sm font-mono truncate bg-black text-[#FFDE03] px-2 py-0.5">{sysCode}</span>
               <span className="text-3xl md:text-4xl italic tracking-tighter leading-none">{progress.toFixed(1)}%</span>
             </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 mb-12 md:mb-20 fade-in-up visible z-10" style={{ transitionDelay: '0.1s' }}>
        <div className="mb-4 inline-block px-4 py-2 bg-black text-white text-[10px] md:text-xs font-bold tracking-[0.1em] neo-shadow uppercase">
          Performance Based Platform
        </div>
        <h1 className="heading-brutal text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] mb-2 leading-[0.8] break-words flex flex-col">
          <span className="text-[var(--blue)]">REDEFINE</span>
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl -mt-2 shimmer-text font-black uppercase">Performance</span>
        </h1>
        <div className="mb-10">
          <span className="text-2xl md:text-5xl font-black italic tracking-tighter bg-black text-white px-6 py-2">
            成果報酬を再定義する。
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <p className="text-xl md:text-3xl font-black max-w-4xl border-l-8 border-black pl-4 md:pl-10 py-3 text-gray-800 italic leading-[1.3] tracking-tighter">
            2026年3月の全面始動に向け、<br className="md:hidden" />
            最終構築フェーズへ。<br />
            私たちは、広告の「質」と「信頼」に革命を起こします。
          </p>
        </div>
      </div>

      <div className="marquee-container -rotate-1 mb-10">
        <div className="marquee-content text-[15vw] md:text-[10vw]">
          &nbsp;2026年3月 全面始動 * システム構築中 * G2 PERFORMANCE * 次世代ASP *&nbsp;
          &nbsp;2026年3月 全面始動 * システム構築中 * G2 PERFORMANCE * 次世代ASP *&nbsp;
        </div>
      </div>

      <div className="pb-20"></div>
    </section>
  );
};

export default Hero;
