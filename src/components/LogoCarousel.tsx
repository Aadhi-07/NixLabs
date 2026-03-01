import { motion } from 'motion/react';

const LOGOS = [
    { name: 'Microsoft', url: 'https://img.icons8.com/color/96/microsoft.png' },
    { name: 'Amazon', url: 'https://img.icons8.com/color/96/amazon.png' },
    { name: 'Google', url: 'https://img.icons8.com/color/96/google-logo.png' },
    // { name: 'Intel', url: 'https://img.icons8.com/color/96/intel.png' },
    { name: 'IBM', url: 'https://img.icons8.com/color/96/ibm.png' },
    { name: 'Oracle', url: 'https://img.icons8.com/color/96/oracle-logo.png' },
];

export default function LogoCarousel() {
    return (
        <div className="py-20 border-y border-slate-800/50 bg-[#0a0f1d]/50 backdrop-blur-sm overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Global Partners & Trusted By</p>
            </div>

            <div className="flex relative items-center">
                {/* Infinite Scroll Container */}
                <motion.div
                    className="flex gap-24 items-center whitespace-nowrap"
                    animate={{ x: [0, -1920] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                        <div key={i} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                            <img src={logo.url} alt={logo.name} className="h-8 md:h-10 w-auto object-contain" />
                            <span className="text-white font-bold text-lg tracking-tight uppercase">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Overlays */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0a0f1d] to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0a0f1d] to-transparent z-10"></div>
            </div>
        </div>
    );
}
