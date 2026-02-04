
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Trust from './components/Trust';
import Targeting from './components/Targeting';
import Company from './components/Company';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CompanyPage from './pages/CompanyPage';
import VisionPage from './pages/VisionPage';
import GuidePage from './pages/GuidePage';
import Preloader from './components/Preloader';
import TopActionHeader from './components/TopActionHeader';

type View = 'home' | 'company' | 'vision' | 'guide';

const App: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target instanceof Element) {
        const isInteractive = 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') ||
          target.closest('button') ||
          target.closest('.neo-button') ||
          target.classList.contains('cursor-pointer') ||
          window.getComputedStyle(target).cursor === 'pointer';
        
        setIsHovering(!!isInteractive);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const scanElements = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach(el => observer.observe(el));
    };

    if (!isLoading) {
      setTimeout(scanElements, 100);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isLoading, currentView]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigateTo = (view: View) => {
    if (view === currentView) return;
    setIsTransitioning(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      setCurrentView(view);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 450);
  };

  return (
    <div className="relative min-h-screen">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className="fixed top-0 left-0 w-full h-[3px] bg-black z-[100]">
        <div 
          className="h-full bg-[var(--blue)] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #2563EB 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: `translate(${(cursorPos.x - window.innerWidth / 2) * 0.015}px, ${(cursorPos.y - window.innerHeight / 2) * 0.015}px)`
        }}
      ></div>

      <div 
        className={`fixed inset-0 z-[9998] bg-[var(--blue)] transition-transform duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none flex flex-col items-center justify-center ${
          isTransitioning ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-black/5 opacity-50"></div>
        <div className={`transition-all duration-300 transform flex flex-col items-center ${isTransitioning ? 'opacity-100 scale-100 delay-150' : 'opacity-0 scale-95'}`}>
           <div className="heading-brutal text-white text-[12vw] md:text-[10vw] italic tracking-tighter drop-shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
             G2<span className="text-black">.</span>
           </div>
        </div>
      </div>
      
      <div 
        className="custom-cursor hidden md:block" 
        style={{ 
          left: `${cursorPos.x}px`, 
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 3 : 1})`,
          backgroundColor: isHovering ? 'var(--blue)' : 'white',
          opacity: isHovering ? 0.7 : 1,
          mixBlendMode: isHovering ? 'normal' : 'difference',
          border: 'none',
          transition: 'transform 0.1s ease-out, background-color 0.2s, mix-blend-mode 0.2s, opacity 0.2s',
          zIndex: 9999
        }} 
      />
      
      {!isLoading && (
        <>
          <TopActionHeader onActionClick={openModal} />
          <Navbar onJoinClick={openModal} onNavigate={navigateTo} currentView={currentView} />
          
          <main className={`${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 relative z-10`}>
            {currentView === 'home' ? (
              <>
                <Hero />
                <About />
                <Targeting onActionClick={openModal} />
                <Features />
                <Trust />
                <Company />
              </>
            ) : currentView === 'company' ? (
              <CompanyPage />
            ) : currentView === 'vision' ? (
              <VisionPage />
            ) : (
              <GuidePage />
            )}
          </main>

          <Footer />
        </>
      )}

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
