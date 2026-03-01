import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TEAM } from '../constants';
import { Target, Shield, Zap, Globe, ArrowRight, Layers, Terminal, Settings, Layout } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-[#0a0f1d] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block py-1.5 px-4 rounded-full bg-[#135bec]/20 text-[#135bec] text-xs font-black uppercase tracking-widest mb-8"
            >
              About Us
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight tracking-tight">
              Pioneering the future of <span className="text-[#135bec]">hardware-software integration</span> since 2015
            </h1>
            <div className="space-y-6 mb-12">
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-bold text-white">
                Our Mission
              </p>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
                At TechIntegrate Solutions, we believe that the future lies at the intersection of hardware and software. Our mission is to bridge these two worlds, creating seamless integration solutions that empower businesses to innovate faster and operate smarter.
              </p>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
                Founded by a team of engineers passionate about embedded systems and cloud technologies, we've grown from a small consultancy to a leading provider of integration solutions serving clients across manufacturing, healthcare, and smart infrastructure.
              </p>
            </div>
            <div className="flex justify-center gap-12 pt-10 border-t border-slate-800">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">2015</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">150+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">12</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">500+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: 'Excellence', desc: 'We hold ourselves to the highest standards in engineering quality and customer service.' },
              { icon: Zap, title: 'Innovation', desc: 'We constantly push boundaries to deliver cutting-edge solutions for complex challenges.' },
              { icon: Layers, title: 'Partnership', desc: 'We work alongside our clients as true partners, invested in their long-term success.' }
            ].map((value) => (
              <div key={value.title} className="group p-10 bg-[#161c2d] rounded-3xl border border-slate-800/50 hover:border-[#135bec]/50 transition-all">
                <div className="size-16 bg-[#135bec]/10 rounded-2xl flex items-center justify-center text-[#135bec] mb-8 group-hover:scale-110 transition-transform">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white mb-4">Leadership Team</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Guided by industry veterans with decades of experience in hardware engineering, cloud architecture, and enterprise operations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => {
              const Icon = (Icons as any)[member.icon] || Layout;
              return (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -10 }}
                  className="bg-[#161c2d] rounded-3xl overflow-hidden border border-slate-800/50 group"
                >
                  <div className="aspect-square bg-slate-900 relative flex items-center justify-center overflow-hidden">
                    {/* Abstract Pattern Background */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                      {member.pattern === 'radial' && <div className="w-full h-full bg-[radial-gradient(circle_at_center,#135bec_0%,transparent_70%)]"></div>}
                      {member.pattern === 'grid' && <div className="w-full h-full bg-[linear-gradient(to_right,#135bec_1px,transparent_1px),linear-gradient(to_bottom,#135bec_1px,transparent_1px)] bg-[size:20px_20px]"></div>}
                      {member.pattern === 'lines' && <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#135bec,transparent_2px,transparent_10px)]"></div>}
                      {member.pattern === 'dots' && <div className="w-full h-full bg-[radial-gradient(#135bec_1px,transparent_1px)] bg-[size:15px_15px]"></div>}
                    </div>
                    <Icon size={80} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-sm text-[#135bec] font-black uppercase tracking-widest">{member.role}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-[#0B0F17] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl font-black text-white mb-6">Our Journey</h2>
              <p className="text-slate-400 leading-relaxed mb-8">With deep expertise in surveillance systems, enterprise platforms, and integration architecture, we help organizations eliminate silos and achieve full visibility and control across their operations.</p>
              <button
                onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#135bec] font-bold flex items-center gap-2 group"
              >
                Full History <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div id="timeline" className="w-full md:w-2/3 space-y-12 relative">
              <div className="absolute left-0 top-0 w-px h-full bg-slate-800 ml-4"></div>
              {[
                { year: '2024', title: 'The Genesis', desc: 'Cahaya Xcel founded with a focus on intelligent platforms and software integration.' },
                { year: '2025', title: 'Global REACH', desc: 'Expanding our presence in government sectors and large-scale manufacturing across regions.' },
                { year: '2026', title: 'Intelligent Ecosystems', desc: 'Launching unified security and operational platforms for healthcare and corporate offices.' }
              ].map((milestone) => (
                <div key={milestone.year} className="relative pl-12">
                  <div className="absolute left-0 top-1.5 size-8 bg-[#135bec] rounded-full border-4 border-[#0B0F17] -ml-0.5"></div>
                  <div className="text-2xl font-black text-white mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-[#135bec] mb-3">{milestone.title}</h3>
                  <p className="text-slate-400 max-w-xl">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
