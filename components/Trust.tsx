
import React from 'react';

const Trust: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto fade-in-up">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-start">
          <div className="lg:w-1/2">
            <h2 className="heading-brutal text-4xl md:text-5xl mb-6 md:mb-8 leading-tight">SAFE AND<br /><span className="text-[var(--blue)]">STEADY</span></h2>
            <p className="text-base md:text-lg font-bold text-gray-600 leading-relaxed mb-8">
              成果が正しく積み上がる環境を守るため、私たちは不正を一切許容しません。
              厳格なガイドラインと適正な成果承認を徹底しています。
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
            {['成果条件の明確化', '不正行為の禁止', 'ガイドライン遵守', '適正な報酬管理'].map((item, idx) => (
              <div key={idx} className="neo-border p-4 md:p-6 bg-[#F8F9FA] flex flex-col justify-between aspect-square hover:bg-[var(--blue)] hover:text-white transition-colors group">
                <div className="text-2xl md:text-3xl font-black">0{idx + 1}</div>
                <div className="font-black text-[10px] md:text-sm uppercase leading-tight">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
