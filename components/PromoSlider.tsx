
import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 1,
    title: "15年連続満足度NO.1",
    subtitle: "MOST TRUSTED ASP",
    description: "業界最大級のネットワークと、最高水準のサポート体制。G2はあなたの成果を逃しません。",
    tag: "AWARDS",
    color: "bg-[var(--blue)]",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "高単価案件、独占公開中",
    subtitle: "EXCLUSIVE OFFERS",
    description: "他社にはない、G2だけのプレミアム案件。あなたのメディアに、さらなる付加価値を。",
    tag: "PREMIUM",
    color: "bg-[#FFDE03]",
    textColor: "text-black",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "2026年、新システム始動",
    subtitle: "NEXT GENERATION",
    description: "AIによる最適化、リアルタイムトラッキング。アフィリエイトの未来が、ここから始まる。",
    tag: "SYSTEM V3",
    color: "bg-black",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
  }
];

const PromoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // Using ReturnType<typeof setInterval> to avoid dependency on NodeJS namespace in browser environments
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const handleManualNav = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(nextSlide, 5000);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative">
        
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 md:px-10 z-30 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 md:w-16 md:h-16 bg-white text-black neo-border neo-shadow hover:bg-[var(--blue)] hover:text-white transition-all flex items-center justify-center pointer-events-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="bevel"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 md:w-16 md:h-16 bg-white text-black neo-border neo-shadow hover:bg-[var(--blue)] hover:text-white transition-all flex items-center justify-center pointer-events-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="bevel"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Slider Container */}
        <div className="relative h-[450px] md:h-[600px] flex items-center justify-center">
          {slides.map((slide, index) => {
            const offset = index - currentIndex;
            const isCenter = index === currentIndex;
            
            // シンプルなスライド表示ロジック
            let transformClass = "scale-90 opacity-0 pointer-events-none";
            let zIndex = 0;

            if (isCenter) {
              transformClass = "scale-100 opacity-100 translate-x-0 z-20";
              zIndex = 20;
            } else if (offset === 1 || (currentIndex === slides.length - 1 && index === 0)) {
              transformClass = "scale-90 opacity-40 translate-x-[70%] z-10 hidden md:flex";
              zIndex = 10;
            } else if (offset === -1 || (currentIndex === 0 && index === slides.length - 1)) {
              transformClass = "scale-90 opacity-40 translate-x-[-70%] z-10 hidden md:flex";
              zIndex = 10;
            }

            return (
              <div 
                key={slide.id}
                className={`absolute w-full max-w-5xl h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col md:flex-row bg-white neo-border neo-shadow overflow-hidden ${transformClass}`}
                style={{ zIndex }}
              >
                {/* Image Part */}
                <div className="w-full md:w-1/2 h-48 md:h-full bg-gray-200 relative overflow-hidden">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className={`absolute top-4 left-4 ${slide.color} ${slide.textColor || 'text-white'} px-4 py-1 font-black text-xs neo-border-sm border-2 border-black uppercase tracking-widest`}>
                    {slide.tag}
                  </div>
                </div>

                {/* Content Part */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start text-left">
                  <p className="text-[var(--blue)] font-black tracking-[0.2em] mb-4 text-sm uppercase">
                    {slide.subtitle}
                  </p>
                  <h3 className="heading-brutal text-4xl md:text-6xl mb-6 leading-none italic tracking-tighter">
                    {slide.title}
                  </h3>
                  <p className="font-bold text-gray-500 mb-10 leading-relaxed text-sm md:text-base">
                    {slide.description}
                  </p>
                  <button className="neo-button bg-black text-white px-8 py-4 font-black italic hover:bg-[var(--blue)] transition-colors">
                    DETAIL VIEW
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicators (Dots) */}
        <div className="flex justify-center gap-4 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualNav(index)}
              className={`w-4 h-4 transition-all duration-300 neo-border ${
                currentIndex === index ? 'bg-[var(--blue)] w-12' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSlider;
