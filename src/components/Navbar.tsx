import { Link, useLocation } from 'react-router-dom';
import { Network, Search } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-100/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <img src="/Logo_green.png" alt="Cahaya Xcel" className="h-10 md:h-12" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-semibold transition-colors ${location.pathname === item.href ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white rounded-lg px-3 py-1.5 border border-slate-200 focus-within:border-green-500/50 transition-all shadow-sm">
              <Search className="text-slate-400 size-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:ring-0 text-sm w-32 lg:w-48 placeholder:text-slate-400 text-slate-800 outline-none"
              />
            </div>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:brightness-110 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-green-500/20"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

