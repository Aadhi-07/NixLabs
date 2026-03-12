import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Target, Shield, Zap, Globe, ArrowRight, Layers, Terminal, Settings, Layout } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-500 text-xs font-black uppercase tracking-widest mb-8"
            >
              About Us
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight tracking-tight">
              Who We <span className="text-green-500">Are</span>
            </h1>
            <div className="space-y-6 mb-12">
              <p className="text-xl md:text-2xl text-green-300 leading-relaxed">
                Cahaya Xcel is a forward-thinking IT solutions company specializing in software integration, intelligent platforms, and secure digital infrastructure. We design and implement scalable technology ecosystems that connect security systems, business applications, and operational workflows into a unified environment.
              </p>
              <p className="text-xl md:text-2xl text-green-300 leading-relaxed">
                With deep expertise in surveillance systems, enterprise platforms, and integration architecture, we help organizations eliminate silos and achieve full visibility and control across their operations. Our solutions are built with state-of-the-art security standards, modern technologies, and future-ready architecture to support long-term growth.
              </p>
              <p className="text-xl md:text-2xl text-green-400 font-bold mt-4">
                Mission
              </p>
              <p className="text-xl md:text-2xl text-green-300 leading-relaxed">
                To continuously advance our team's expertise and technological capabilities, leveraging deep learning and innovation to deliver exceptional solutions and lasting value to our customers.
              </p>
              <p className="text-xl md:text-2xl text-green-400 font-bold mt-4">
                Vision
              </p>
              <p className="text-xl md:text-2xl text-green-300 leading-relaxed">
                To create intelligent platforms that seamlessly integrate access control, surveillance, and enterprise systems into a single unified solution for organizations worldwide.
              </p>
            </div>
            {/* <div className="flex justify-center gap-12 pt-10 border-t border-green-900/20">
              <div className="text-center">
                <div className="text-4xl font-black text-green-300 mb-2">500+</div>
                <div className="text-xs font-bold text-green-500 uppercase tracking-widest">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-300 mb-2">5+</div>
                <div className="text-xs font-bold text-green-500 uppercase tracking-widest">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-300 mb-2">99.9%</div>
                <div className="text-xs font-bold text-green-500 uppercase tracking-widest">SLA Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-300 mb-2">24/7</div>
                <div className="text-xs font-bold text-green-500 uppercase tracking-widest">Support</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-black">
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
              <div key={value.title} className="group p-10 bg-black rounded-3xl border border-green-900/20 hover:border-green-500/50 transition-all">
                <div className="size-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-8 group-hover:scale-110 transition-transform">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-100 mb-4">{value.title}</h3>
                <p className="text-green-300 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
