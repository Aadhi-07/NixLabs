import { motion } from 'motion/react';
import { BookOpen, FileText, Settings, Layers, MessageSquare, ArrowRight } from 'lucide-react';

const RESOURCE_ITEMS = [
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Real-world success stories showcasing how organizations have transformed with Cahaya Xcel intelligent systems.',
  },
  {
    icon: BookOpen,
    title: 'Technical Articles',
    description: 'In-depth articles and guides on intelligent systems, integration strategies, and digital innovation.',
  },
  {
    icon: Settings,
    title: 'Product Guides',
    description: 'Step-by-step documentation and user guides for all Cahaya Xcel products and platforms.',
  },
  {
    icon: Layers,
    title: 'Integration Architecture',
    description: 'Architecture blueprints, diagrams, and best practices for building unified technology ecosystems.',
  },
  {
    icon: MessageSquare,
    title: 'Support & Documentation',
    description: 'Access our support portal, technical documentation, and expert assistance to ensure smooth operations.',
  },
];

export default function Resources() {
  return (
    <main>
      {/* Header */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-500 text-xs font-black uppercase tracking-widest mb-8"
            >
              Resources
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              Insights, Knowledge <span className="text-green-500">&amp; Support</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-300 leading-relaxed mb-10">
              Explore our resources to learn more about intelligent systems, integration strategies, and digital transformation.
            </p>
            <p className="text-lg text-green-500 font-medium max-w-2xl mx-auto leading-relaxed italic">
              We share practical insights to help organizations plan, deploy, and optimize technology solutions effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESOURCE_ITEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-black rounded-3xl p-10 border border-green-900/20 hover:border-green-500/50 transition-all"
              >
                <div className="size-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-8 group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-100 mb-4 group-hover:text-green-400 transition-colors">{item.title}</h3>
                <p className="text-green-300 leading-relaxed mb-8">{item.description}</p>
                <button className="text-green-500 font-bold flex items-center gap-2 hover:gap-4 transition-all cursor-pointer">
                  Learn More <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
