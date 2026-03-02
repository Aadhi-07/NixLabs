import { Link } from 'react-router-dom';
import { Network, Globe, Mail, Share2, Rss, Shield, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#161c2d] border-t border-slate-800 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center mb-8">
              <img src="/Logo_green.png" alt="Cahaya Xcel" className="h-10 md:h-12" />
            </div>
            <p className="text-green-300 text-base leading-relaxed mb-8 max-w-sm">
              Delivering advanced IT solutions that unify security, operations, and digital platforms into a single intelligent ecosystem.
            </p>
            <div className="flex gap-5">
              {[Globe, Mail, Share2].map((Icon, i) => (
                <button
                  key={i}
                  onClick={() => alert('Social link clicked!')}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500/10 text-green-400 hover:text-white hover:bg-green-500 transition-all"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-green-400 mb-8">Products</h4>
            <ul className="space-y-4">
              {['CCTV Systems', 'VMS & TAMS', 'Payment Gateways', 'Platform Integration'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-green-300 hover:text-white text-sm font-medium transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-green-400 mb-8">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-green-300 hover:text-white text-sm font-medium transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-green-400 mb-8">Legal</h4>
            <ul className="space-y-4">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Cookie Policy', href: '/privacy' }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-green-300 hover:text-white text-sm font-medium transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-green-500/60 text-sm font-medium">© 2024 Cahaya Xcel. Build smarter. Integrate better. Operate seamlessly.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <Globe size={16} />
              <span>English (US)</span>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <Shield size={16} />
              <span>Secure Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
