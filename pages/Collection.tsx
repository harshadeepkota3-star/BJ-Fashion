
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, SlidersHorizontal, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Collection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const categories = ['All', 'Men', 'Women', 'Footwear', 'Accessories'];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    return result;
  }, [selectedCategory]);

  return (
    <div className="pt-24 pb-16 bg-white">
      <header className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h1 className="text-5xl font-bold tracking-tighter text-navy mb-2">THE COLLECTION</h1>
        <p className="text-gray-400 text-xs tracking-widest uppercase font-bold">Exploration of Form & Function</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block space-y-10 sticky top-24 h-fit">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-navy">Category</h3>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-base font-medium transition-colors ${selectedCategory === cat ? 'text-navy underline underline-offset-4' : 'text-gray-400 hover:text-navy'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-navy">Size</h3>
            <div className="grid grid-cols-4 gap-1">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button key={size} className="border border-gray-100 py-1 text-xs font-bold hover:border-navy transition-colors">
                  {size}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Grid */}
        <main>
          {/* Controls */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <button className="lg:hidden flex items-center text-xs font-bold uppercase tracking-widest text-navy">
                <SlidersHorizontal size={16} className="mr-2" />
                Filter
              </button>
              <p className="text-sm text-gray-500 font-semibold">{filteredProducts.length} Results</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative group cursor-pointer flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-navy">
                <span>Sort: {sortBy}</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Collection;
