import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { MemoryStick as Memory, Cpu, Network, Shield, Database, RefreshCcw, MessageSquare, Cloud, Terminal, Search, Grid, List, Download, X, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';

export default function Products() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const categories = ['All', 'Security', 'Enterprise', 'Financial'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleRequestQuote = () => {
    navigate('/contact');
  };

  const handleResetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setViewMode('grid');
    // Also reset checkboxes in UI (they are currently uncontrolled in the DOM)
    document.querySelectorAll('input[type="checkbox"]').forEach((cb: any) => cb.checked = false);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="mb-12">
        <nav className="flex text-xs font-semibold uppercase tracking-widest text-green-500 mb-6">
          <Link to="/" className="hover:text-green-400 transition-colors">Console</Link>
          <span className="mx-3 text-green-800">/</span>
          <span className="text-green-200">Intelligent Systems</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tighter text-green-50 mb-4">Intelligent Systems & Infrastructure Solutions</h1>
            <p className="text-lg text-green-300 leading-relaxed">Cahaya Xcel provides robust technology products designed to enhance security, efficiency, and operational control across organizations.</p>
          </div>
          <Link to="/resources" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1f2937] border border-green-500/10 rounded-xl text-sm font-bold text-green-100 hover:bg-green-900/40 transition-all">
            <Download size={20} />
            Download API Specs
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="sticky top-32 space-y-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 size-4" />
              <input
                type="text"
                placeholder="Search assets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-green-500/10 rounded-xl pl-11 pr-4 py-3 text-sm text-green-100 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-green-500 mb-6">Product Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all ${activeCategory === cat
                      ? 'bg-green-600 text-white shadow-lg shadow-green-500/20'
                      : 'text-green-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      {cat === 'Security' && <Shield size={20} />}
                      {cat === 'Enterprise' && <Icons.Layers size={20} />}
                      {cat === 'Financial' && <Icons.CreditCard size={20} />}
                      {cat === 'All' && <Grid size={20} />}
                      {cat}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-md ${activeCategory === cat ? 'bg-white/20' : 'bg-white/5'}`}>
                      {cat === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-green-500 mb-6">Advanced Filters</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-bold text-green-200 mb-4 block">Performance Tier</label>
                  <div className="space-y-3">
                    {['Enterprise'].map((tier) => (
                      <label key={tier} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" defaultChecked className="rounded-md border-green-500/10 bg-white/5 text-green-600 focus:ring-green-500 focus:ring-offset-[#0a0f1a]" />
                        <span className="text-sm text-green-300 group-hover:text-white transition-colors">{tier} Tier Assets</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="pt-6 border-t border-green-500/10">
                  <label className="text-sm font-bold text-green-200 mb-4 block">Availability</label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked className="rounded-md border-green-500/10 bg-white/5 text-green-600 focus:ring-green-500 focus:ring-offset-[#0a0f1a]" />
                    <span className="text-sm text-green-300 group-hover:text-white transition-colors">Instant Deployment</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-green-500/10">
            <p className="text-sm text-green-500">Indexing <span className="font-bold text-green-100">{filteredProducts.length}</span> of {PRODUCTS.length} enterprise assets</p>
            <div className="flex items-center gap-6">
              <select className="bg-transparent border-none text-sm font-bold text-green-200 focus:ring-0 cursor-pointer hover:text-white">
                <option className="bg-[#0a0f1a]">Sort: Highest Priority</option>
                <option className="bg-[#0a0f1a]">Sort: New Releases</option>
                <option className="bg-[#0a0f1a]">Sort: Price Ascending</option>
                <option className="bg-[#0a0f1a]">Sort: Price Descending</option>
              </select>
              <div className="flex items-center border border-green-500/10 rounded-xl overflow-hidden bg-white/5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-green-500 hover:text-white'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-green-500 hover:text-white'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" : "space-y-6"}>
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={viewMode === 'grid' ? { y: -8 } : { x: 8 }}
                  className={`group bg-[#161c2d] border border-green-900/20 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-green-500/50 ${viewMode === 'list' ? 'flex items-center p-4 gap-8' : ''
                    }`}
                >
                  <div className={`relative bg-slate-900 overflow-hidden ${viewMode === 'list' ? 'h-32 w-48 shrink-0 rounded-xl' : 'h-56'}`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1f2937] to-transparent"></div>
                    {product.id === 'cctv-surveillance' && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#135bec] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">Featured Tech</span>
                      </div>
                    )}
                  </div>
                  <div className={`flex-1 ${viewMode === 'list' ? 'flex items-center justify-between' : 'p-6'}`}>
                    <div className={viewMode === 'list' ? 'max-w-md' : ''}>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{product.title}</h3>
                      <p className="text-sm text-slate-400 mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
                      {viewMode === 'grid' && (
                        <div className="space-y-3 mb-8">
                          {product.specs.map((spec, i) => {
                            const Icon = (Icons as any)[spec.icon];
                            return (
                              <div key={i} className="flex items-center gap-3 text-xs text-slate-400">
                                {Icon && <Icon size={18} className="text-green-500" />}
                                {spec.label}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div className={`${viewMode === 'list' ? 'flex items-center gap-12' : 'pt-6 border-t border-white/5 flex flex-col gap-6'}`}>
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <span className="text-[10px] text-slate-500 block font-black uppercase tracking-wider">
                            {product.price?.includes('/mo') ? 'Subscription' : 'Unit Price'}
                          </span>
                          <span className="text-2xl font-black text-white">{product.price}</span>
                        </div>
                        {viewMode === 'list' && (
                          <div className="flex gap-3">
                            <button
                              onClick={handleRequestQuote}
                              className="bg-slate-800 text-white p-3 rounded-xl hover:bg-green-600 transition-all border border-white/5"
                              title="Request Quote"
                            >
                              <MessageSquare size={20} />
                            </button>
                            <button
                              onClick={() => handleOpenModal(product)}
                              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all font-bold flex items-center gap-2"
                            >
                              View <ArrowRight size={16} />
                            </button>
                          </div>
                        )}
                      </div>

                      {viewMode === 'grid' && (
                        <div className="flex gap-3 mt-auto">
                          <button
                            onClick={handleRequestQuote}
                            className="flex-1 bg-slate-800 text-white py-3 rounded-xl font-bold text-sm hover:bg-green-600 transition-all border border-white/10"
                          >
                            Quote
                          </button>
                          <button
                            onClick={() => handleOpenModal(product)}
                            className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-green-700 transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                          >
                            View <ArrowRight size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="size-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-600">
                  <Search size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No assets found</h3>
                <p className="text-slate-500">Try adjusting your filters or search query to find what you're looking for.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                  className="mt-8 text-green-500 font-bold hover:underline"
                >
                  Reset all filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
