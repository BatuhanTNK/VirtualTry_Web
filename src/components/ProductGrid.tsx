import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { QRCodeModal } from './QRCodeModal';
import { Product } from '../types/product';
import { products } from '../data/products';

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-white">
              AR Try-On Demo
            </h2>
            <p className="text-lg text-slate-400">
              Scan the QR code to test deep linking
            </p>
          </div>

          <div className="flex justify-center">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onTryAR={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <QRCodeModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
