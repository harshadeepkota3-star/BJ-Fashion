
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { ShoppingBag, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
        <motion.img 
          src={product.image} 
          alt={product.name}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full object-cover"
        />
        
        {/* Quick Actions */}
        <div className={`absolute inset-0 bg-navy/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className={`absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button className="bg-white text-navy px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-xl hover:bg-navy hover:text-white transition-all duration-300 flex items-center">
            <ShoppingBag size={14} className="mr-2" />
            Quick Add
          </button>
          <button className="bg-white p-3 text-navy shadow-xl hover:bg-red-50 transition-colors">
            <Heart size={16} />
          </button>
        </div>
      </div>

      <div className="space-y-1 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">{product.category}</p>
        <h3 className="text-sm font-medium tracking-tight text-navy">{product.name}</h3>
        <p className="text-sm font-light text-gray-500">${product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
