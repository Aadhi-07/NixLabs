import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import { CASE_STUDIES } from '../constants';
import { BookOpen, FileText, PlayCircle, ArrowRight, Search, Filter, Download, MessageSquare, Share2, Bookmark, X, Check } from 'lucide-react';

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [shared, setShared] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(null);
    setTimeout(() => {
      setToastMessage(message);
      setTimeout(() => setToastMessage(null), 3000);
    }, 10);
  };

  const categories = ['All', 'Corporate', 'Manufacturing', 'Healthcare', 'Education', 'Government'];

  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter(study => {
      const matchesCategory = activeCategory === 'All' || study.category === activeCategory;
      const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleBookmark = (title: string) => {
    setBookmarked(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const handleShare = (title: string) => {
    setShared(title);
    setTimeout(() => setShared(null), 2000);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-50 bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/20"
          >
            <Check className="size-6" />
            <span className="font-bold">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="mb-24 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-green-50 mb-8 tracking-tight">Insights, Knowledge & Support</h1>
        <p className="text-xl text-green-300 leading-relaxed mb-12">
          Explore our resources to learn more about intelligent systems, integration strategies, and digital transformation.
        </p>

        <div className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 text-left bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm mb-12 w-full max-w-fit mx-auto">
          {[
            'Case Studies',
            'Technical Articles',
            'Product Guides',
            'Integration Architecture',
            'Support & Documentation'
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-green-200 font-bold group">
              <div className="size-2 bg-green-600 rounded-full group-hover:scale-150 transition-transform"></div>
              {item}
            </div>
          ))}
        </div>

        <p className="text-lg text-green-500 font-medium max-w-2xl mx-auto leading-relaxed italic">
          We share practical insights to help organizations plan, deploy, and optimize technology solutions effectively.
        </p>
      </div>

      {/* Featured Whitepaper */}
      <section className="mb-32">
        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-green-500/20">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 0 L100 100 Z" fill="white"></path>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-100 text-xs font-black uppercase tracking-widest mb-8">Featured Whitepaper</span>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">The Future of <br />Hybrid Cloud Integration</h2>
              <p className="text-green-700 text-lg mb-10 leading-relaxed font-medium bg-white/95 p-6 rounded-2xl shadow-xl">
                "A comprehensive guide on bridging legacy on-premise hardware with modern cloud-native architectures for the 2025 enterprise."
              </p>
              <div className="flex flex-wrap gap-5">
                <button
                  onClick={() => showToast('Whitepaper PDF download started...')}
                  className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-3 shadow-xl cursor-pointer"
                >
                  <Download size={24} /> Download PDF
                </button>
                <button
                  onClick={() => showToast('Opening Interactive Reader...')}
                  className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all cursor-pointer"
                >
                  Read Online
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.div
                whileHover={{ rotate: -5, scale: 1.05 }}
                className="w-72 h-96 bg-white rounded-lg shadow-2xl relative overflow-hidden p-8 flex flex-col justify-between border-4 border-white/20"
              >
                <div className="space-y-4">
                  <div className="w-12 h-1.5 bg-green-600 rounded-full"></div>
                  <div className="text-2xl font-black text-slate-900 leading-tight">Hybrid Cloud <br />Integration <br />Report 2024</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Technical Series</div>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-slate-100 rounded-full"></div>
                  <div className="h-1 w-2/3 bg-slate-100 rounded-full"></div>
                  <div className="h-1 w-full bg-slate-100 rounded-full"></div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-[10px] font-black text-green-600 uppercase">Cahaya Xcel</div>
                  <div className="size-10 bg-slate-50 rounded-full flex items-center justify-center text-green-600">
                    <BookOpen size={20} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-black text-green-100 mb-4">Success Stories</h2>
            <div className="h-1.5 w-24 bg-green-600 rounded-full"></div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 size-4" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-800/50 border border-green-800/20 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all w-64"
              />
            </div>
            <div className="flex bg-slate-800/50 p-1 rounded-xl border border-green-800/20">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeCategory === cat
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-green-400 hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group bg-[#161c2d] rounded-3xl overflow-hidden border border-green-800/20 hover:border-green-500/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {study.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-widest mb-4">
                    <PlayCircle size={16} /> {study.readTime}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-green-400 transition-colors">{study.title}</h3>
                  <p className="text-green-300 mb-8 line-clamp-2 leading-relaxed">{study.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-green-800/20">
                    <button
                      onClick={() => showToast(`Opening Case Study: ${study.title}`)}
                      className="text-white font-bold text-sm hover:text-green-400 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      Read Case Study <ArrowRight size={16} />
                    </button>
                    <div className="flex gap-4 text-green-500">
                      <button
                        onClick={() => handleShare(study.title)}
                        className={`transition-colors ${shared === study.title ? 'text-green-400' : 'hover:text-white'}`}
                      >
                        {shared === study.title ? <Check size={18} /> : <Share2 size={18} />}
                      </button>
                      <button
                        onClick={() => toggleBookmark(study.title)}
                        className={`transition-colors ${bookmarked.includes(study.title) ? 'text-green-500 fill-green-500' : 'hover:text-white'}`}
                      >
                        <Bookmark size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredStudies.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="size-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-green-700">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No success stories found</h3>
              <p className="text-green-500">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#161c2d] p-10 rounded-3xl border border-green-800/20 hover:bg-[#1c243a] transition-all group">
          <div className="size-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-8 group-hover:scale-110 transition-transform">
            <FileText size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">API Documentation</h3>
          <p className="text-green-300 mb-8 leading-relaxed">Everything you need to integrate Cahaya Xcel into your existing workflow. Comprehensive guides for our unified ecosystem APIs.</p>
          <button
            onClick={() => showToast('Redirecting to Documentation Portal...')}
            className="text-green-500 font-bold flex items-center gap-2 hover:gap-4 transition-all cursor-pointer"
          >
            Browse Docs <ArrowRight size={20} />
          </button>
        </div>
        <div className="bg-[#161c2d] p-10 rounded-3xl border border-green-800/20 hover:bg-[#1c243a] transition-all group">
          <div className="size-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-8 group-hover:scale-110 transition-transform">
            <MessageSquare size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Community Forum</h3>
          <p className="text-green-300 mb-8 leading-relaxed">Join 10,000+ developers and engineers. Share solutions, ask questions, and stay updated on the latest integration patterns.</p>
          <button
            onClick={() => showToast('Connecting to Community Forum...')}
            className="text-green-500 font-bold flex items-center gap-2 hover:gap-4 transition-all cursor-pointer"
          >
            Join Discussion <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}
