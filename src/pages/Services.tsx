import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight, Search, Layout, Code, Rocket, TrendingUp } from 'lucide-react';

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
            <span className="inline-block py-1 px-3 rounded-full bg-[#135bec]/20 text-[#135bec] text-xs font-bold uppercase tracking-wider mb-6">Expertise & Innovation</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              Future-Proofing <br /><span className="text-[#135bec]">Enterprise Infrastructure</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              We deliver high-performance technology services tailored for global enterprises. From hardware engineering to cloud-native integration, we bridge the gap between legacy systems and tomorrow's innovations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-[#135bec] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#135bec]/30 transition-all">Explore Capabilities</Link>
              <button 
                onClick={() => document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2 text-white"
              >
                Our Process <ArrowRight className="rotate-90" />
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-2/3 h-full hidden lg:block opacity-40">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,#135bec33,transparent,transparent)]"></div>
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
                <h2 className="text-4xl font-black text-white mb-6">{service.title}</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-slate-300">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#135bec] size-5" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex bg-[#135bec] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#135bec]/90 transition-all items-center gap-3 shadow-lg shadow-[#135bec]/20">
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
            <h2 className="text-4xl font-black text-white mb-4">How We Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Our rigorous four-stage delivery process ensures quality, security, and scalability in every project we undertake.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-white/5 -z-10">
              <div className="h-full bg-[#135bec] w-1/4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { step: '01', title: 'Discovery', icon: Search, desc: 'Deep-dive into your current systems, pain points, and business objectives to define a clear roadmap.' },
                { step: '02', title: 'Design', icon: Layout, desc: 'Architecture planning and solution blueprints created by our senior engineers and domain experts.' },
                { step: '03', title: 'Development', icon: Code, desc: 'Agile execution with continuous integration, testing, and security audits throughout the lifecycle.' },
                { step: '04', title: 'Deployment', icon: Rocket, desc: 'Seamless go-live transition with 24/7 monitoring and long-term maintenance support.' }
              ].map((item, i) => (
                <div key={item.step} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className={`size-24 rounded-2xl flex items-center justify-center mb-6 shadow-xl ${i === 0 ? 'bg-[#135bec] text-white shadow-[#135bec]/30' : i === 1 ? 'bg-[#161C27] border-2 border-[#135bec] text-[#135bec] shadow-[#135bec]/10' : 'bg-[#161C27] border-2 border-white/10 text-slate-500'}`}>
                    <item.icon size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.step}. {item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#135bec] rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to integrate your future?</h2>
              <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">Join 500+ enterprises that trust Nixfusion Labs for their mission-critical infrastructure.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-white text-[#135bec] px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl shadow-black/20">Get Started Today</Link>
                <Link to="/contact" className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">Schedule a Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
