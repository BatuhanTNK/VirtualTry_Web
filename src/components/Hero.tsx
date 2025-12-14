import { Download, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">AI-Powered AR Technology</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Future of Fashion:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Virtual Try-On
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Experience products in your space using our AI-powered mobile app.
            Try before you buy with cutting-edge augmented reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105">
              <Download className="w-5 h-5" />
              <span>App Store</span>
            </button>
            <button className="group flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-slate-700 hover:scale-105">
              <Download className="w-5 h-5" />
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
