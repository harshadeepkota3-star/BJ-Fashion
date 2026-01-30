
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Editorial Story Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-navy mb-6 block">Our Origins</span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-navy mb-8 leading-[0.9]">
              BORN IN <span className="font-bold">PARIS.</span><br />DEFINED IN <span className="font-bold">LONDON.</span>
            </h1>
            <p className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
              Founded in 2018, B&J Luxe focuses on the intersection of technical outerwear and traditional sartorial excellence. 
            </p>
            <p className="text-gray-600 font-medium leading-relaxed text-base">
              Eliminate the noise. We believe luxury is about the relentless pursuit of perfection in the smallest details. From textiles to internal structure, everything is intentional.
            </p>
          </motion.div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover grayscale" 
              alt="Brand Heritage" 
            />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'CRAFTSMANSHIP', text: 'Partnering with family-owned mills in Northern Italy.' },
              { num: '02', title: 'SUSTAINABILITY', text: 'Durability and timeless design reducing environmental footprint.' },
              { num: '03', title: 'TRANSPARENCY', text: 'Tracking every stage of our specialized supply chain.' }
            ].map(v => (
              <div key={v.num} className="text-center space-y-4">
                 <div className="text-4xl font-light text-navy/15">{v.num}</div>
                 <h3 className="text-xl font-bold tracking-tight uppercase">{v.title}</h3>
                 <p className="text-gray-600 font-medium text-base leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="py-20 bg-white max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200" 
              className="w-full aspect-[4/3] object-cover" 
              alt="Atelier" 
             />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter text-navy">THE ATELIER</h2>
            <p className="text-gray-600 font-medium text-base leading-relaxed">
              Every garment is constructed for longevity. Our atelier in London serves as both our creative hub and master workshop for custom fit orders.
            </p>
            <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-navy pb-1 hover:text-gray-400 hover:border-gray-300 transition-all">
              Studio Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
