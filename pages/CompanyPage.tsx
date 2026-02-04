
import React from 'react';

const CompanyPage: React.FC = () => {
  const profileData = [
    { label: '社名', value: '株式会社G2' },
    { label: '所在地', value: '大阪府大阪市西区土佐堀 2-1-3' },
    { label: '設立', value: '2026年3月' },
    { label: '資本金', value: '2,000,000円' },
    { label: '代表者', value: '三浦賢人' },
    { label: '事業内容', value: '成果報酬型広告（アフィリエイト）プラットフォーム事業' },
  ];

  return (
    <div className="pt-48 md:pt-64 pb-24 bg-[var(--bg)]">
      {/* Page Hero */}
      <section className="px-6 md:px-10 mb-20 md:mb-32 overflow-hidden">
        <div className="fade-in-up visible">
          <h1 className="heading-brutal text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.8] mb-6 tracking-tighter uppercase">
            COMPANY<span className="text-[var(--blue)]">.</span>
          </h1>
          <div className="mb-12">
            <span className="text-2xl md:text-5xl font-black italic tracking-tighter bg-black text-white px-6 py-2">
              会社概要
            </span>
          </div>
          <div className="max-w-3xl border-l-8 border-black pl-8 py-4">
            <p className="text-xl md:text-3xl font-black italic leading-tight">
              WE ARE NOT JUST AN ASP.<br />
              WE ARE THE GROWTH ENGINE.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Table Section */}
      <section className="px-6 md:px-10 mb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-brutal text-3xl md:text-5xl mb-12 italic">CORPORATE <span className="text-[var(--blue)]">PROFILE</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 border-t-4 border-black">
            {profileData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="md:col-span-4 p-6 md:p-10 border-b-4 border-black bg-white flex items-center">
                  <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] opacity-50">{item.label}</span>
                </div>
                <div className="md:col-span-8 p-6 md:p-10 border-b-4 border-black md:border-l-4 border-black bg-white flex items-center group hover:bg-[var(--blue)] hover:text-white transition-colors cursor-default">
                  <span className="text-lg md:text-2xl font-black leading-tight">{item.value}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message / Vision */}
      <section className="px-6 md:px-10 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="fade-in-up visible">
            <div className="aspect-[4/5] bg-gray-200 neo-border neo-shadow-blue overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507005911827-430973a2a940?auto=format&fit=crop&q=80&w=1000" 
                alt="CEO" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          <div className="fade-in-up visible" style={{ transitionDelay: '0.2s' }}>
            <h2 className="heading-brutal text-4xl md:text-6xl mb-8 leading-none italic">
              "THE REAL VALUE <br />LIES IN THE <span className="text-[var(--blue)]">FUTURE</span>."
            </h2>
            <div className="space-y-6 text-base md:text-lg font-bold leading-relaxed opacity-80">
              <p>
                インターネット広告の世界は、日々複雑化しています。しかし、その根底にある「価値を伝え、成果を生む」という本質は変わりません。
              </p>
              <p>
                G2が目指すのは、単なる広告の仲介役ではありません。広告主様とパートナー様、双方が持続的に成長し続けられる「プラットフォーム」としての大在り方を追求しています。
              </p>
              <p>
                不透明さを排除し、純粋な成果と信頼を積み上げる。それが、私たちが定義する次世代のスタンダードです。
              </p>
              <div className="pt-8">
                <p className="text-xs uppercase tracking-widest opacity-40 mb-2">Representative Director / CEO</p>
                <p className="text-3xl font-black heading-brutal italic">KENTO MIURA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Decoration */}
      <div className="marquee-container rotate-2 translate-y-12">
        <div className="marquee-content text-[15vw] md:text-[8vw]">
          &nbsp;G2 CORPORATE IDENTITY * TRUST * GROWTH * TRANSPARENCY *&nbsp;
          &nbsp;G2 CORPORATE IDENTITY * TRUST * GROWTH * TRANSPARENCY *&nbsp;
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
