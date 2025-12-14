import { Smartphone } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-white">VirtualTry</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-slate-300 hover:text-white transition-colors">Products</a>
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#download" className="text-slate-300 hover:text-white transition-colors">Download</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
