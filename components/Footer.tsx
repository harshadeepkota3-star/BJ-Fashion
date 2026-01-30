
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-5 text-navy">Collections</h3>
            <ul className="space-y-2 text-gray-500 font-medium text-sm">
              <li><Link to="/collection" className="hover:text-navy transition-colors">New Arrivals</Link></li>
              <li><Link to="/collection" className="hover:text-navy transition-colors">Essentials</Link></li>
              <li><Link to="/collection" className="hover:text-navy transition-colors">Lookbook</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-5 text-navy">Support</h3>
            <ul className="space-y-2 text-gray-500 font-medium text-sm">
              <li><Link to="/about" className="hover:text-navy transition-colors">Shipping</Link></li>
              <li><Link to="/custom-fit" className="hover:text-navy transition-colors">Tailoring Guide</Link></li>
              <li><Link to="/about" className="hover:text-navy transition-colors">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-5 text-navy">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-gray-100 rounded hover:border-navy transition-colors group">
                <Instagram size={18} className="group-hover:text-navy" />
              </a>
              <a href="#" className="p-2 border border-gray-100 rounded hover:border-navy transition-colors group">
                <Twitter size={18} className="group-hover:text-navy" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-5 text-navy">Updates</h3>
            <div className="flex border-b border-gray-100 pb-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none px-0 py-1 text-sm focus:ring-0 flex-grow outline-none"
              />
              <button className="text-[10px] font-bold uppercase tracking-widest hover:text-navy transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50">
          <div className="mb-4 md:mb-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <Logo height={42} />
          </div>
          <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase">
            © 2024 B&J LUXE. 
          </p>
          <button 
            onClick={scrollToTop}
            className="hidden md:flex items-center text-[10px] font-bold tracking-[0.2em] uppercase group hover:text-navy transition-colors"
          >
            TOP
            <ArrowUp size={12} className="ml-1 transform group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
