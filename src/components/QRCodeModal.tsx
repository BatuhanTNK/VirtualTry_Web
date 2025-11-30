import { X, Smartphone } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Product } from '../types/product';

interface QRCodeModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QRCodeModal({ product, onClose }: QRCodeModalProps) {
  if (!product) return null;

  const deepLink = `virtual-tryon://ar-scene?model=${encodeURIComponent(product.model_url)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-slate-800 rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-700 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-3 bg-blue-600/20 rounded-2xl">
              <Smartphone className="w-10 h-10 text-blue-400" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Try in AR</h3>
            <p className="text-slate-400">{product.name}</p>
          </div>

          <div className="flex justify-center p-6 bg-white rounded-2xl">
            <QRCodeSVG
              value={deepLink}
              size={200}
              level="H"
              includeMargin={false}
            />
          </div>

          <div className="space-y-2">
            <p className="text-slate-300 font-medium">Scan with your phone to view in AR App</p>
            <p className="text-sm text-slate-500">
              Make sure you have the VirtualTry app installed
            </p>
          </div>

          <div className="pt-4 border-t border-slate-700">
            <p className="text-xs text-slate-500 font-mono break-all">
              {deepLink}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
