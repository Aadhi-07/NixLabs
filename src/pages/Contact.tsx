import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  MessageSquare,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/cahayaxcel@gmail.com", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <main className="py-24 bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <h1 className="text-5xl font-black text-white mb-8 tracking-tight">
              Let's Build <br />
              <span className="text-[#135bec]">Together</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-12">
              Have a complex integration challenge? Our senior engineers are
              ready to help you architect a solution that scales.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="size-12 bg-[#135bec]/10 rounded-xl flex items-center justify-center text-[#135bec] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-1">
                    Email Us
                  </h4>
                  <p className="text-lg font-bold text-white">
                    cahayaxcel@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="size-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-1">
                    Call Support
                  </h4>
                  <p className="text-lg font-bold text-white">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="size-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-1">
                    Headquarters
                  </h4>
                  <p className="text-lg font-bold text-white">
                    100 Innovation Drive, <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-slate-800">
              <h4 className="text-sm font-black text-white uppercase tracking-widest mb-8">
                San Francisco Headquarters
              </h4>

              <div className="aspect-video rounded-3xl overflow-hidden border border-slate-800 relative group shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                  alt="Cahaya Xcel SF Office"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <p className="text-white text-xs font-bold">100 Innovation Drive, CA 94105</p>
                  <p className="text-slate-500 text-[10px] uppercase font-black mt-1 tracking-widest">Main Operations Hub</p>
                </div>
              </div>

              <div className="mt-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 flex items-center justify-between group hover:border-[#135bec] transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-[#135bec]/10 rounded-xl flex items-center justify-center text-[#135bec]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">Interactive Map</h5>
                    <p className="text-slate-500 text-xs">Open in Google Maps</p>
                  </div>
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-white group-hover:translate-x-2 transition-all" size={20} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#161c2d] p-10 lg:p-16 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <MessageSquare size={200} />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-10">
                  Project Inquiry
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-500/20 border border-emerald-500/50 p-8 rounded-2xl text-center"
                  >
                    <ShieldCheck className="text-emerald-500 size-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-emerald-100">
                      Thank you for reaching out. Our team will contact you
                      within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          className="w-full bg-slate-900 border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">
                          Work Email
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="john@enterprise.com"
                          className="w-full bg-slate-900 border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">
                          Company
                        </label>
                        <input
                          required
                          type="text"
                          name="company"
                          placeholder="Acme Corp"
                          className="w-full bg-slate-900 border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">
                          Solution Interest
                        </label>
                        <select
                          name="solution"
                          className="w-full bg-slate-900 border-slate-800 rounded-xl px-4 py-4 text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all"
                        >
                          <option>CCTV & Surveillance</option>
                          <option>Visitor Management (VMS)</option>
                          <option>Payment Gateways</option>
                          <option>Platform Integration</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest">
                        Project Description
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Tell us about your integration needs..."
                        className="w-full bg-slate-900 border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Hidden FormSubmit fields */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Project Inquiry - Cahaya Xcel"
                    />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                          <Clock size={14} /> 24h Response
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                          <ShieldCheck size={14} /> Secure Data
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto bg-[#135bec] text-white px-12 py-5 rounded-xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl shadow-[#135bec]/20 flex items-center justify-center gap-3 disabled:opacity-60"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send size={20} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}