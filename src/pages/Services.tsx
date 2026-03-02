import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import IntegrationDiagram from '../components/IntegrationDiagram';
import { CheckCircle2, ArrowRight, Search, Layout, Code, Rocket, TrendingUp, Shield, Zap, Cpu, Globe, Network } from 'lucide-react';

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10 max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-wider mb-6">Expertise & Innovation</span>
            <h1 className="text-5xl md:text-7xl font-black text-green-50 leading-tight mb-8">
              Digital Solutions & <br /><span className="text-green-500">Integration Expertise</span>
            </h1>
            <p className="text-xl text-green-300 leading-relaxed mb-10">
              Cahaya Xcel delivers specialized IT services that enable organizations to digitize, automate, and integrate their operations efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all">Explore Capabilities</Link>
              <button
                onClick={() => document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500/5 border border-green-500/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500/10 transition-all flex items-center gap-2 text-green-100"
              >
                Our Process <ArrowRight className="rotate-90" />
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-2/3 h-full hidden lg:block opacity-40">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent,transparent)]"></div>
        </div>
      </section>

      {/* Integration Diagram */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-green-100 mb-4">Unified Ecosystem</h2>
            <p className="text-green-300 max-w-2xl mx-auto font-medium">Cahaya Xcel Hub acts as the central intelligence layer, seamlessly bridging hardware and software units.</p>
          </div>
          <IntegrationDiagram />
        </div>
      </section>

      {/* Service Details */}
      {SERVICES.map((service, index) => (
        <section key={service.title} className={`py-24 ${index % 2 === 0 ? 'bg-[#161C27]/50 border-y border-white/5' : 'bg-[#0B0F17]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group ring-1 ring-white/10"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 via-transparent to-transparent"></div>
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-black text-green-100 mb-6">{service.title}</h2>
                <p className="text-lg text-green-300 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-green-200">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500 size-5" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex bg-green-600 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-green-700 transition-all items-center gap-3 shadow-lg shadow-green-500/20">
                  Consult an Expert <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How We Work */}
      <section id="how-we-work" className="py-24 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-green-100 mb-4">How We Work</h2>
            <p className="text-green-300 max-w-2xl mx-auto">Our rigorous four-stage delivery process ensures quality, security, and scalability in every project we undertake.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-white/5 -z-10">
              <div className="h-full bg-green-600 w-1/4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { step: '01', title: 'Discovery', icon: Search, desc: 'Deep-dive into your current systems, pain points, and business objectives to define a clear roadmap.' },
                { step: '02', title: 'Design', icon: Layout, desc: 'Architecture planning and solution blueprints created by our senior engineers and domain experts.' },
                { step: '03', title: 'Development', icon: Code, desc: 'Agile execution with continuous integration, testing, and security audits throughout the lifecycle.' },
                { step: '04', title: 'Deployment', icon: Rocket, desc: 'Seamless go-live transition with 24/7 monitoring and long-term maintenance support.' }
              ].map((item, i) => (
                <div key={item.step} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className={`size-24 rounded-2xl flex items-center justify-center mb-6 shadow-xl ${i === 0 ? 'bg-green-600 text-white shadow-green-500/30' : i === 1 ? 'bg-[#161C27] border-2 border-green-600 text-green-500 shadow-green-500/10' : 'bg-[#161C27] border-2 border-green-500/10 text-green-500/60'}`}>
                    <item.icon size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-green-100">{item.step}. {item.title}</h3>
                  <p className="text-green-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-green-600 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to integrate your future?</h2>
              <p className="text-green-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">Join organizations worldwide that trust Cahaya Xcel for their unified intelligent platforms.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-white text-green-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-xl shadow-black/20">Get Started Today</Link>
                <Link to="/contact" className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">Schedule a Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
