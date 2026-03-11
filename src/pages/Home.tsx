import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FEATURED_SOLUTIONS, PRODUCTS } from '../constants';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

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
        <div className="absolute inset-0 bg-black -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Enterprise Solutions 2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Empowering Businesses Through<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Intelligent Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-300/80 leading-relaxed mb-12 max-w-2xl mx-auto">
              Cahaya Xcel delivers advanced IT solutions that unify security, operations, and digital platforms into a single intelligent ecosystem. From system integration and AI-driven automation to enterprise software and infrastructure, we help organizations modernize, secure, and scale with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link to="/products" className="bg-white text-green-900 hover:bg-green-50 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl">
                Build Smarter
              </Link>
              <Link to="/contact" className="bg-green-800/20 hover:bg-green-800/30 text-green-100 border border-green-700/30 px-10 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
                Integrate Better
              </Link>
            </div>
            <div className="mt-12 pt-8 border-t border-green-500/10">
              <p className="text-green-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">Industries we serve</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {['Corporate offices', 'Manufacturing', 'Healthcare', 'Education', 'Government sectors'].map((ind) => (
                  <span key={ind} className="text-green-300 text-sm font-medium">{ind}</span>
                ))}
              </div>
              <p className="mt-8 text-green-400/70 text-sm font-semibold italic">Build smarter. Integrate better. Operate seamlessly.</p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Featured Solutions */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-green-100 mb-4">What We Deliver</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-green-700 rounded-full"></div>
            </div>
            <Link to="/products" className="text-green-500 font-bold text-sm hover:underline hidden md:block">View all solutions {'->'}</Link>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[450px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {FEATURED_SOLUTIONS.map((solution, i) => (
              <motion.div
                key={solution.id}
                variants={fadeUp}
                whileHover={{ scale: 0.98 }}
                className={`group relative rounded-3xl overflow-hidden bg-zinc-900 border-t border-l border-white/10 shadow-2xl transition-all ${i === 0 ? 'md:col-span-2' : 'md:col-span-1'
                  } ${i === 2 ? 'md:col-span-3 lg:col-span-1' : ''}`}
              >
                {/* Shimmer Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="absolute inset-0 bg-black relative h-full flex flex-col justify-end">
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  <div className="relative p-8 z-10">
                    <div className="inline-block bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-white/10">
                      {solution.category}
                    </div>
                    <div className="flex justify-between items-end mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-green-400 transition-colors leading-tight">{solution.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {solution.description}
                    </p>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest hover:text-green-400 transition-colors"
                    >
                      Explore <span className="text-green-500 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
