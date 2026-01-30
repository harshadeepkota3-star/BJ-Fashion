
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/98 backdrop-blur-md py-1 shadow-sm' : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Desktop Links - Left */}
        <div className="hidden lg:flex items-center space-x-12 text-[13px] font-bold tracking-[0.2em] uppercase text-navy/90">
          <Link to="/collection" className="hover:text-navy transition-colors">Shop</Link>
          <Link to="/custom-fit" className="hover:text-navy transition-colors">Custom Fit</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo - Centered and precisely sized */}
        <Link to="/" className="flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-300 px-4">
           <Logo height={isScrolled ? 50 : 64} className="transition-all duration-300" />
        </Link>

        {/* Desktop Links - Right */}
        <div className="hidden lg:flex items-center space-x-12 text-[13px] font-bold tracking-[0.2em] uppercase text-navy/90">
          <Link to="/about" className="hover:text-navy transition-colors">About</Link>
          <div className="flex items-center space-x-6 pl-4 border-l border-gray-100">
            <button className="hover:text-navy transition-colors">
              <Search size={20} strokeWidth={2.5} />
            </button>
            <button className="hover:text-navy transition-colors relative">
              <ShoppingBag size={20} strokeWidth={2.5} />
              <span className="absolute -top-1 -right-1 bg-navy text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black">0</span>
            </button>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="lg:hidden flex items-center">
          <button className="p-2"><ShoppingBag size={22} /></button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-8">
               <Logo height={48} />
               <button onClick={() => setMobileMenuOpen(false)}>
                 <X size={28} />
               </button>
            </div>
            <div className="flex flex-col space-y-6 text-4xl font-light tracking-tighter">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/collection" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
              <Link to="/custom-fit" onClick={() => setMobileMenuOpen(false)}>Custom Fit</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
