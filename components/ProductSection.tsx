
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const ProductSection: React.FC = () => {
  return (
    <section id="collection" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">COLLECTION <span className="text-zinc-600">01</span></h2>
          <p className="text-zinc-400 max-w-md">Our inaugural series focusing on core silhouettes and weather-resistant fabrics.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 border-b-2 border-white text-sm font-bold tracking-widest">ALL</button>
          <button className="px-6 py-2 text-zinc-500 text-sm font-bold tracking-widest hover:text-white transition-colors">JACKETS</button>
          <button className="px-6 py-2 text-zinc-500 text-sm font-bold tracking-widest hover:text-white transition-colors">HOODIES</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
