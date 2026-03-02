import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { X, Check, Shield, Zap, Globe, Cpu, Layers } from 'lucide-react';
import { Product } from '../types';
import * as LucideIcons from 'lucide-react';

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const navigate = useNavigate();
    if (!product) return null;

    const handleRequestQuote = () => {
        onClose();
        navigate('/contact');
    };

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
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[95%] max-w-5xl max-h-[90vh] overflow-hidden bg-black rounded-[2.5rem] border border-green-800/20 shadow-2xl flex flex-col md:flex-row"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 size-12 bg-green-900/50 backdrop-blur-md rounded-full flex items-center justify-center text-green-500 hover:text-white hover:bg-green-800 transition-all border border-white/10"
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
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <span className="bg-green-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-xl">
                                    {product.category}
                                </span>
                                <h2 className="text-4xl font-black text-green-100 mt-4 tracking-tighter">{product.title}</h2>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-black text-green-500 uppercase tracking-[0.2em] mb-4">Executive Summary</h4>
                                    <p className="text-green-300 leading-relaxed text-lg italic">"{product.description}"</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-green-900/30 p-4 rounded-2xl border border-green-500/10">
                                        <span className="text-[10px] text-green-500 font-black uppercase block mb-1">Performance</span>
                                        <span className="text-green-100 font-bold">{product.performanceTier} Tier</span>
                                    </div>
                                    <div className="bg-green-900/30 p-4 rounded-2xl border border-green-500/10">
                                        <span className="text-[10px] text-green-500 font-black uppercase block mb-1">Lead Time</span>
                                        <span className="text-green-100 font-bold">{product.availability}</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Technical Specifications</h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        {product.specs.map((spec, i) => {
                                            const Icon = (LucideIcons as any)[spec.icon] || Cpu;
                                            return (
                                                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-green-500/10 group hover:bg-green-500/5 transition-colors">
                                                    <div className="size-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                                        <Icon size={20} />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs text-green-500 font-bold block">{spec.label}</span>
                                                        <span className="text-green-100 font-bold">{spec.value}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-green-500/10 flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] text-green-500 font-black uppercase block">Investment</span>
                                        <span className="text-3xl font-black text-green-100">{product.price}</span>
                                    </div>
                                    <button
                                        onClick={handleRequestQuote}
                                        className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-green-700 transition-all shadow-xl shadow-green-500/20"
                                    >
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

