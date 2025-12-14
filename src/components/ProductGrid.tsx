import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { QRCodeModal } from './QRCodeModal';
import { Product } from '../types/product';
import { supabase } from '../lib/supabase';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // --- SAYFALAMA AYARLARI ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Her sayfada kaç ürün görünsün?

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // BURASI SİZİN ÇALIŞAN ESKİ KODUNUZUN AYNISI (Sıralama kaldırıldı)
        const { data, error } = await supabase
          .from('products')
          .select('*');

        if (error) throw error;
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // --- SAYFALAMA MANTIĞI ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Genişliği düzelten kapsayıcı */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            AR Try-On Demo
          </h2>
          <p className="text-lg text-slate-400">
            Scan the QR code to test deep linking
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            {/* Basit bir yükleniyor yazısı veya spinner */}
            <p className="text-lg text-slate-400">Loading products...</p>
          </div>
        ) : (
          <>
            {/* YENİ TASARIM: Grid Yapısı */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onTryAR={setSelectedProduct}
                />
              ))}
            </div>

            {/* SAYFALAMA BUTONLARI */}
            {products.length > 0 && (
              <div className="flex justify-center items-center space-x-2 mt-16">
                {/* Geri Butonu */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Sayfa Numaraları */}
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === i + 1
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                {/* İleri Butonu */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}
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