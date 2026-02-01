
import React from 'react';

interface CompanyProps {
  onContactClick?: () => void;
}

const Company: React.FC<CompanyProps> = ({ onContactClick }) => {
  return (
    <section id="company" className="py-20 md:py-32 px-6 md:px-10 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <div className="fade-in-up">
          <h2 className="heading-brutal text-5xl md:text-7xl mb-8 md:mb-12">MISSION</h2>
          <div className="mb-8">
            <p className="text-3xl sm:text-4xl md:text-5xl font-black italic leading-tight">
              "BREAK THE LIMITS, <br />DESIGN THE GROWTH."
            </p>
            <p className="text-base md:text-lg font-bold mt-4 md:mt-6 text-[var(--blue)]">
              限界を突破し、成長をデザインする。
            </p>
          </div>
        </div>
        
        <div className="fade-in-up space-y-4" style={{ transitionDelay: '0.2s' }}>
          <div className="p-5 md:p-6 neo-border bg-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 neo-shadow">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Company Name</span>
            <span className="font-black text-sm md:text-base">株式会社G2</span>
          </div>
          <div className="p-5 md:p-6 neo-border bg-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 neo-shadow">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Business</span>
            <span className="font-black text-sm md:text-base">ASP / DIGITAL MARKETING</span>
          </div>
          <div className="p-5 md:p-6 neo-border bg-black text-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 neo-shadow-blue">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Location</span>
            <span className="font-black text-sm md:text-base">TOKYO, JP</span>
          </div>
          <button 
            onClick={onContactClick}
            className="w-full mt-8 md:mt-12 neo-button bg-white text-black py-6 md:py-8 heading-brutal text-2xl md:text-3xl"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Company;
