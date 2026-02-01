
import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-white neo-border neo-shadow-blue p-6 md:p-10 relative fade-in-up visible">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-[var(--blue)] transition-colors neo-border"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <h2 className="heading-brutal text-3xl md:text-5xl mb-6 md:mb-8">GET IN <span className="text-[var(--blue)]">TOUCH</span></h2>
        
        <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); alert('送信されました（デモ）'); onClose(); }}>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full p-4 neo-border focus:neo-shadow-blue outline-none transition-all font-bold"
              placeholder="YOUR NAME"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full p-4 neo-border focus:neo-shadow-blue outline-none transition-all font-bold"
              placeholder="NAME@EXAMPLE.COM"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">Message</label>
            <textarea 
              required
              rows={4}
              className="w-full p-4 neo-border focus:neo-shadow-blue outline-none transition-all font-bold"
              placeholder="HOW CAN WE HELP?"
            ></textarea>
          </div>
          
          <button type="submit" className="w-full neo-button bg-black text-white py-4 md:py-6 heading-brutal text-xl md:text-2xl hover:bg-[var(--blue)]">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
