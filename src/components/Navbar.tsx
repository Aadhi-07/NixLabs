import { Link, useLocation } from 'react-router-dom';
import { Network, Search } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0f1d]/80 backdrop-blur-xl border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Network className="text-[#3b82f6] size-8 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-black tracking-tight text-white">Nixfusion Labs</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === item.href ? 'text-[#3b82f6]' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/5 rounded-lg px-3 py-1.5 border border-white/10 focus-within:border-[#3b82f6]/50 transition-all">
              <Search className="text-slate-500 size-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:ring-0 text-sm w-32 lg:w-48 placeholder:text-slate-500 text-white"
              />
            </div>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] hover:brightness-110 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-[#3b82f6]/20"
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
