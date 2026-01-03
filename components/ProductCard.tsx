
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-4 rounded-sm">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button className="w-full py-3 bg-white text-black font-bold uppercase text-xs tracking-widest">
            Quick Add
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">{product.name}</h3>
          <p className="text-xs text-zinc-500 mt-1 uppercase tracking-tighter">{product.category}</p>
        </div>
        <p className="text-sm font-light text-zinc-300">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
