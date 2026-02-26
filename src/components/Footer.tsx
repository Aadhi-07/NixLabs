import { Link } from 'react-router-dom';
import { Network, Globe, Mail, Share2, Rss, Shield, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#161c2d] border-t border-slate-800 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Network className="text-[#3b82f6] size-8" />
              <span className="text-2xl font-black tracking-tight text-white">Nixfusion Labs</span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
              Empowering global industries with robust, scalable integration solutions. We turn complexity into competitive advantage.
            </p>
            <div className="flex gap-5">
              {[Globe, Mail, Share2].map((Icon, i) => (
                <button
                  key={i}
                  onClick={() => alert('Social link clicked!')}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-all"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Products</h4>
            <ul className="space-y-4">
              {['IoT Gateways', 'Edge Computing', 'Cloud Connect', 'Integration API'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Careers', href: '/about' },
                { label: 'Partner Program', href: '/contact' },
                { label: 'Newsroom', href: '/resources' }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'].map((item) => (
                <li key={item}>
                  <button onClick={() => alert(`${item} clicked`)} className="text-slate-400 hover:text-white text-sm font-medium transition-colors text-left">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">© 2024 Nixfusion Labs Systems Inc. Built for the future of industry.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <Globe size={16} />
              <span>English (US)</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <Shield size={16} />
              <span>Secure Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
