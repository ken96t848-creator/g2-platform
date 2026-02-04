
import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* 
          flex min-h-full を使用することで、コンテンツが短い時は中央に、
          長い時は上から順にスクロール可能な構造にします。
      */}
      <div className="flex min-h-full items-center justify-center p-4 md:p-12">
        <div className="w-full max-w-2xl bg-[#F2F2F2] neo-border neo-shadow-blue p-6 md:p-10 relative fade-in-up visible">
          {/* Close Button - 常に右上に固定 */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-[var(--blue)] transition-colors neo-border z-10"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div className="py-4 flex flex-col items-center">
            {/* Status Header */}
            <div className="mb-6 text-center">
              <div className="mb-2 inline-block px-4 py-1 bg-black text-white text-[10px] font-black tracking-[0.3em] uppercase neo-border-sm border-2 border-black">
                System Status: Building
              </div>
              <h2 className="heading-brutal text-4xl md:text-5xl italic tracking-tighter leading-none">
                SYSTEM IS <span className="text-[var(--blue)]">EVOLVING.</span>
              </h2>
            </div>

            {/* Path Content */}
            <div className="w-full space-y-0 relative">
              
              {/* 広告主様向け */}
              <div className="bg-[var(--blue)] text-white p-6 md:p-8 neo-border neo-shadow mb-6 relative z-10">
                <div className="mb-4">
                  <h3 className="heading-brutal text-2xl md:text-3xl italic tracking-tighter leading-tight">広告主様向け</h3>
                  <p className="font-black text-[10px] md:text-xs opacity-70 tracking-widest uppercase mt-0.5">FOR ADVERTISERS</p>
                </div>
                <p className="font-bold text-xs md:text-sm leading-relaxed opacity-90">
                  初期費用や掲載料ではなく、実際の売上や獲得に対してのみ費用が発生。マーケティング予算を100%効率的に運用することが可能です。
                </p>
              </div>

              {/* Separator Dot */}
              <div className="flex justify-center -my-3 relative z-20">
                <div className="w-8 h-8 bg-black rounded-full neo-border border-white flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* パートナー様向け */}
              <div className="bg-black text-white p-6 md:p-8 neo-border neo-shadow mt-6 relative z-10">
                <div className="mb-4">
                  <h3 className="heading-brutal text-2xl md:text-3xl italic tracking-tighter leading-tight">パートナー様向け</h3>
                  <p className="font-black text-[10px] md:text-xs opacity-50 tracking-widest uppercase mt-0.5">FOR PARTNERS</p>
                </div>
                <p className="font-bold text-xs md:text-sm leading-relaxed opacity-90">
                  自身のメディアやSNSの「影響力」を資本化。質の高い情報を発信することで、青天井の収益を目指すことができます。
                </p>
              </div>
            </div>

            {/* Launch Status */}
            <div className="mt-10 bg-white neo-border p-6 md:p-8 w-full text-center">
              <span className="text-[10px] font-black opacity-40 block mb-2 tracking-[0.4em] uppercase">Launch Window</span>
              <span className="text-2xl md:text-4xl text-[var(--blue)] font-black italic uppercase tracking-tighter leading-none">2026.03 Global Launch</span>
            </div>

            <p className="mt-8 font-bold text-gray-400 text-center max-w-md text-[10px] md:text-xs leading-relaxed italic">
              私たちは広告主とパートナー双方の利益を最大化する「究極のプラットフォーム」を構築しています。公開まで今しばらくお待ちください。
            </p>

            <button 
              onClick={onClose}
              className="mt-8 neo-button bg-black text-white px-12 py-4 font-black italic tracking-tighter text-lg hover:bg-[var(--blue)] transition-all w-full md:w-auto"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
