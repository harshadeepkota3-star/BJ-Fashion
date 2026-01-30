
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  const newArrivals = PRODUCTS.slice(0, 4);

  return (
    <div className="relative">
      {/* Hero Section - Height optimized for impact with less whitespace */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-white">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Model"
            className="w-full h-full object-cover grayscale contrast-125 brightness-75"
          />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-6 mt-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[13px] uppercase tracking-[0.5em] font-black mb-2"
          >
            S/S 2024 COLLECTION
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl md:text-9xl font-light tracking-tighter mb-6 leading-[0.8]"
          >
            MODERN FASHION,<br /><span className="font-black">REFINED.</span>
          </motion.h1>
        </div>
      </section>

      {/* New Arrivals Section - Tighter margins */}
      <section className="py-12 px-6 bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-2">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black tracking-tighter text-navy mb-0 uppercase leading-none">New Arrivals</h2>
            <p className="text-gray-600 font-bold text-base mt-1">Refined silhouettes for the modern era.</p>
          </div>
          <Link to="/collection" className="group flex items-center text-xs font-black tracking-[0.2em] uppercase text-navy border-b-2 border-navy/10 pb-1">
            Browse All
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories - Compact Grid */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {CATEGORIES.slice(0, 2).map((category, idx) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative group h-[420px] overflow-hidden bg-navy"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700 grayscale"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white bg-gradient-to-t from-navy/70 to-transparent">
                <p className="text-[10px] uppercase tracking-[0.3em] font-black mb-1 opacity-70">Category</p>
                <h3 className="text-4xl font-black tracking-tighter mb-1 uppercase leading-none">{category.name}</h3>
                <p className="text-base font-bold mb-4 max-w-xs text-gray-200 leading-tight">{category.description}</p>
                <Link 
                  to="/collection"
                  className="w-fit border-b-2 border-white pb-1 text-[11px] font-black uppercase tracking-widest transition-all hover:text-gray-300 hover:border-gray-300"
                >
                  Explore Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Promo - Condensed */}
      <section className="flex flex-col lg:flex-row min-h-[400px] bg-white border-y border-gray-100">
        <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-navy/40 mb-3 block">Premium Tailoring</span>
          <h2 className="text-4xl lg:text-6xl font-light tracking-tighter text-navy mb-4 leading-none">THE <span className="font-black italic underline decoration-2">ART</span> OF FIT.</h2>
          <p className="text-gray-600 font-bold leading-relaxed mb-6 max-w-md text-base">
            Master tailors blending tradition with digital precision. Experience a silhouette sculpted for your frame.
          </p>
          <Link 
            to="/custom-fit"
            className="w-fit bg-navy text-white px-8 py-3 text-xs font-black uppercase tracking-[0.2em] transition-all"
          >
            Start Bespoke
          </Link>
        </div>
        <div className="lg:w-1/2 relative min-h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" 
            alt="Tailoring"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-90"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
