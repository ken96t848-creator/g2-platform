
import React from 'react';

interface TargetingProps {
  onActionClick?: () => void;
}

const Targeting: React.FC<TargetingProps> = ({ onActionClick }) => {
  return (
    <section id="targeting" className="py-20 md:py-32 px-6 md:px-10 bg-white border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          <div className="bg-[#F8F9FA] p-8 md:p-12 neo-border neo-shadow fade-in-up">
            <div className="mb-6 flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black flex items-center justify-center shrink-0">
                <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white rotate-45"></div>
              </div>
              <h2 className="heading-brutal text-3xl md:text-4xl">ADVERTISER</h2>
            </div>
            <p className="text-base md:text-lg font-bold mb-8 md:mb-10 text-gray-600 leading-relaxed">
              ブランドを安売りせず、質の高いコンバージョンだけを。経営のパートナーとしての成果報酬型広告。
            </p>
            <button 
              onClick={onActionClick}
              className="neo-button bg-black text-white px-8 py-4 font-black uppercase w-full tracking-widest text-xs md:text-sm"
            >
              広告主登録
            </button>
          </div>

          <div className="bg-white p-8 md:p-12 neo-border neo-shadow-blue fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="mb-6 flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--blue)] flex items-center justify-center shrink-0">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white"></div>
              </div>
              <h2 className="heading-brutal text-3xl md:text-4xl">AFFILIATE</h2>
            </div>
            <p className="text-base md:text-lg font-bold mb-8 md:mb-10 text-gray-600 leading-relaxed">
              クリエイティブを収益へ。卓越した発信者たちが、雑念なく自身の表現に没頭できる環境。
            </p>
            <button 
              onClick={onActionClick}
              className="neo-button bg-[var(--blue)] text-white px-8 py-4 font-black uppercase w-full tracking-widest text-xs md:text-sm"
            >
              パートナー登録
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Targeting;
