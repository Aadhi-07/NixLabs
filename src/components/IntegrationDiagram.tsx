import { motion } from 'motion/react';
import { Shield, Database, Cpu, Globe, Zap, Network } from 'lucide-react';

export default function IntegrationDiagram() {
    return (
        <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center overflow-hidden">
            {/* Central Hub */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="relative z-20 size-48 bg-gradient-to-br from-[#135bec] to-[#6366f1] rounded-3xl flex flex-col items-center justify-center shadow-2xl shadow-blue-500/50"
            >
                <Network size={64} className="text-white mb-2" />
                <span className="text-white font-black text-xl uppercase tracking-tighter">Xcel Hub</span>

                {/* Pulsing rings */}
                <motion.div
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 border-4 border-[#135bec] rounded-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute inset-0 border-2 border-[#135bec] rounded-3xl"
                />
            </motion.div>

            {/* Nodes */}
            {[
                { icon: Shield, label: 'Security', angle: 0, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { icon: Database, label: 'Enterprise', angle: 60, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
                { icon: Cpu, label: 'AI Core', angle: 120, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
                { icon: Globe, label: 'Network', angle: 180, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                { icon: Zap, label: 'Fast Pay', angle: 240, color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
                { icon: Network, label: 'API Unit', angle: 300, color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
            ].map((node, i) => {
                const radius = 250;
                const x = Math.cos((node.angle * Math.PI) / 180) * radius;
                const y = Math.sin((node.angle * Math.PI) / 180) * radius;

                return (
                    <div key={i} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Connection Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: radius }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                            style={{
                                transform: `rotate(${node.angle}deg)`,
                                transformOrigin: 'left center',
                                left: '50%',
                            }}
                            className="absolute h-[2px] bg-gradient-to-r from-[#135bec] to-transparent opacity-30"
                        />

                        {/* Pulsing Data Particle */}
                        <motion.div
                            animate={{ x: [0, x], y: [0, y], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                            className="absolute size-2 bg-[#3b82f6] rounded-full z-10 shadow-[0_0_10px_#3b82f6]"
                        />

                        {/* Node Content */}
                        <motion.div
                            initial={{ scale: 0, x: 0, y: 0 }}
                            whileInView={{ scale: 1, x, y }}
                            transition={{ duration: 0.8, delay: 1 + i * 0.1, type: "spring" }}
                            className={`absolute size-28 ${node.bg} ${node.border} border rounded-[2rem] flex flex-col items-center justify-center backdrop-blur-md pointer-events-auto cursor-help group hover:border-[#3b82f6] transition-all`}
                        >
                            <node.icon size={32} className={`${node.color} mb-2 group-hover:scale-110 transition-transform`} />
                            <span className="text-white text-[10px] font-black uppercase tracking-widest">{node.label}</span>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}
