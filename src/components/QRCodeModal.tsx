import { X, Smartphone, ExternalLink, Download } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Product } from '../types/product';
import { useEffect, useState } from 'react';

interface QRCodeModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QRCodeModal({ product, onClose }: QRCodeModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Kullanıcının cihazını kontrol et (Mobil mi Masaüstü mü?)
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      // Android, iOS veya ekran genişliği 768px'den küçükse mobil kabul et
      if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) || window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!product) return null;

  // --- AR BOYUT AYARI ---
  // Eğer veritabanında özel bir boyut yoksa varsayılan 0.1 kullan
  const scale = product.scale_factor || 0.1;
  
  // Deep Link Oluşturma: Hem model URL'sini hem de scale bilgisini paketliyoruz
  // Örnek çıktı: virtual-tryon://ar-scene?model=...&scale_factor=0.05
  const deepLink = `virtual-tryon://ar-scene?model=${encodeURIComponent(product.model_url)}&scale_factor=${scale}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative bg-slate-900 rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-700 animate-scale-in">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-blue-600/10 rounded-2xl border border-blue-600/20">
              <Smartphone className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">AR Deneyimi</h3>
            <p className="text-blue-400 font-medium">{product.name}</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            {isMobile ? (
              // --- MOBİL GÖRÜNÜM: TEK TIKLA AÇ BUTONU ---
              <div className="w-full space-y-4">
                <a 
                  href={deepLink}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Uygulamada Aç (AR)</span>
                </a>
                <p className="text-sm text-slate-400">
                  Uygulama otomatik olarak açılacaktır.
                </p>
              </div>
            ) : (
              // --- MASAÜSTÜ GÖRÜNÜM: QR KOD ---
              <>
                <div className="bg-white p-4 rounded-xl">
                  <QRCodeSVG
                    value={deepLink}
                    size={200}
                    level="H"
                    includeMargin={false}
                  />
                </div>
                <p className="mt-4 text-sm text-slate-400 font-medium">
                  Telefon kamerasını okutun
                </p>
              </>
            )}
          </div>
          
           {/* İndirme Linkleri (Uygulama yüklü olmayanlar için) */}
           <div className="pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-500 mb-3">Uygulama yüklü değil mi?</p>
            <div className="flex justify-center gap-3">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-medium">
                <Download className="w-3 h-3" />
                <span>App Store</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-medium">
                <Download className="w-3 h-3" />
                <span>Google Play</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}