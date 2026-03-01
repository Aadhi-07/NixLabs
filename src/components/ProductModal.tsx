import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Shield, Zap, Globe, Cpu, Layers } from 'lucide-react';
import { Product } from '../types';
import * as LucideIcons from 'lucide-react';

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[95%] max-w-5xl max-h-[90vh] overflow-hidden bg-[#161c2d] rounded-[2.5rem] border border-slate-800 shadow-2xl flex flex-col md:flex-row"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 size-12 bg-slate-900/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-white/10"
                        >
                            <X size={24} />
                        </button>

                        {/* Left: Visuals */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#161c2d] via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <span className="bg-[#135bec] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-xl">
                                    {product.category}
                                </span>
                                <h2 className="text-4xl font-black text-white mt-4 tracking-tighter">{product.title}</h2>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-black text-[#135bec] uppercase tracking-[0.2em] mb-4">Executive Summary</h4>
                                    <p className="text-slate-400 leading-relaxed text-lg italic">"{product.description}"</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                                        <span className="text-[10px] text-slate-500 font-black uppercase block mb-1">Performance</span>
                                        <span className="text-white font-bold">{product.performanceTier} Tier</span>
                                    </div>
                                    <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                                        <span className="text-[10px] text-slate-500 font-black uppercase block mb-1">Lead Time</span>
                                        <span className="text-white font-bold">{product.availability}</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Technical Specifications</h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        {product.specs.map((spec, i) => {
                                            const Icon = (LucideIcons as any)[spec.icon] || Cpu;
                                            return (
                                                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 group hover:bg-[#135bec]/5 transition-colors">
                                                    <div className="size-10 bg-[#135bec]/10 rounded-lg flex items-center justify-center text-[#135bec] group-hover:scale-110 transition-transform">
                                                        <Icon size={20} />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs text-slate-500 font-bold block">{spec.label}</span>
                                                        <span className="text-white font-bold">{spec.value}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] text-slate-500 font-black uppercase block">Investment</span>
                                        <span className="text-3xl font-black text-white">{product.price}</span>
                                    </div>
                                    <button className="bg-[#135bec] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
                                        Request Quote <LucideIcons.ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
