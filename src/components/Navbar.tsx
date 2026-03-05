import { Link, useLocation } from 'react-router-dom';
import { Network, Search } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900/95 backdrop-blur-xl border-b border-green-900/20 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <img src="/Logo_green.svg" alt="Cahaya Xcel" className="h-10 md:h-12" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-semibold transition-colors ${location.pathname === item.href ? 'text-green-400' : 'text-green-100/70 hover:text-green-400'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/5 rounded-lg px-3 py-1.5 border border-green-500/10 focus-within:border-green-500/50 transition-all">
              <Search className="text-green-500/60 size-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:ring-0 text-sm w-32 lg:w-48 placeholder:text-green-500/40 text-green-100 outline-none"
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

