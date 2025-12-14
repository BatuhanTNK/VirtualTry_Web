import { Smartphone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-white">VirtualTry</span>
            </div>
            <p className="text-slate-400">
              Experience the future of shopping with AI-powered virtual try-on technology.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-slate-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#download" className="text-slate-400 hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <span>support@virtualtry.com</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; 2024 VirtualTry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
