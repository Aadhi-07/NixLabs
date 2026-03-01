import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { STATS, FEATURED_SOLUTIONS, PRODUCTS } from '../constants';
import AnimatedCounter from '../components/AnimatedCounter';
import LogoCarousel from '../components/LogoCarousel';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (id: string) => {
    const product = PRODUCTS.find(p => p.id === id);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-40 lg:pb-52">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2)_0%,transparent_50%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.15)_0%,transparent_50%),linear-gradient(135deg,#0a0f1d_0%,#020617_100%)] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
              </span>
              Enterprise Solutions 2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Empowering Businesses Through<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#6366f1]">Intelligent Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
              Cahaya Xcel delivers advanced IT solutions that unify security, operations, and digital platforms into a single intelligent ecosystem. From system integration and AI-driven automation to enterprise software and infrastructure, we help organizations modernize, secure, and scale with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link to="/products" className="bg-white text-[#0a0f1d] hover:bg-slate-100 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl">
                Build Smarter
              </Link>
              <Link to="/contact" className="bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-10 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
                Integrate Better
              </Link>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">Industries we serve</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {['Corporate offices', 'Manufacturing', 'Healthcare', 'Education', 'Government sectors'].map((ind) => (
                  <span key={ind} className="text-slate-300 text-sm font-medium">{ind}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 bg-[#161c2d]/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-slate-800/50">
            {STATS.map((stat, i) => (
              <div key={i} className={`flex flex-col gap-2 items-center md:items-start md:px-8 ${i !== 0 ? 'md:border-l border-slate-800' : ''}`}>
                <span className="text-white text-4xl font-black leading-none">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <div className="relative z-10">
        <LogoCarousel />
      </div>

      {/* Featured Solutions */}
      <section className="py-32 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">What We Deliver</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] rounded-full"></div>
            </div>
            <Link to="/products" className="text-[#3b82f6] font-bold text-sm hover:underline hidden md:block">View all solutions →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_SOLUTIONS.map((solution) => (
              <motion.div
                key={solution.id}
                whileHover={{ y: -10 }}
                className="group bg-[#161c2d] rounded-3xl overflow-hidden border border-slate-800/80 transition-all hover:border-[#3b82f6]/50 hover:shadow-2xl"
              >
                <div className="aspect-video bg-slate-900 relative overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-5 left-5 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {solution.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors">{solution.title}</h3>
                    <span className="text-[#3b82f6] font-black text-xl">{solution.price}</span>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed mb-8">
                    {solution.description}
                  </p>
                  <Link
                    to="/products"
                    className="block w-full py-4 px-4 bg-slate-800 text-white hover:bg-[#3b82f6] rounded-xl font-bold transition-all text-sm text-center uppercase tracking-widest"
                  >
                    {solution.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
