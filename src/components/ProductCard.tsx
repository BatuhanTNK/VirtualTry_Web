import { Scan } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onTryAR: (product: Product) => void;
}

export function ProductCard({ product, onTryAR }: ProductCardProps) {
  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-600/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/20">
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-white text-center">{product.name}</h3>

        <button
          onClick={() => onTryAR(product)}
          className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
        >
          <Scan className="w-5 h-5" />
          <span>AR Try-On</span>
        </button>
      </div>
    </div>
  );
}
