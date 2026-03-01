import { motion } from 'motion/react';
import { Scale, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function TermsConditions() {
    return (
        <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.1)_0%,transparent_40%)] -z-10"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 text-[#6366f1] text-xs font-black uppercase tracking-widest mb-6">
                        <Scale size={16} />
                        Legal Framework
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Terms & Conditions</h1>
                    <p className="text-slate-400 text-sm mb-12">Last Updated: March 1, 2026</p>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#6366f1]">01.</span> Agreement to Terms
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                By accessing or using Cahaya Xcel's platform, hardware products, and integrated services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you (the "Client" or "User") and Cahaya Xcel.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#6366f1]">02.</span> Intellectual Property
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                The Service, including its proprietary software, architectural designs, user interfaces, hardware specifications, and all original content, are the exclusive property of Cahaya Xcel. Our technical innovations and trademarks are protected by international copyright and intellectual property laws. Unauthorized reproduction or reverse engineering of our systems is strictly prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#6366f1]">03.</span> License and Usage
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                Subject to compliance with these terms, Cahaya Xcel grants you a limited, non-exclusive, non-transferable license to access the platform and use the products for their intended operational purposes. This license does not include any resale or commercial use of our services without prior written authorization.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#6366f1]">04.</span> Service Limitations
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                While we strive for 99.9% uptime and maximum system reliability, we do not guarantee that the service will be entirely uninterrupted. We reserve the right to modify or discontinue service components for essential maintenance, platform upgrades, or security patches.
                            </p>
                            <div className="mt-8 p-6 bg-[#161c2d] border border-slate-800 rounded-2xl flex items-start gap-4">
                                <AlertCircle className="text-[#6366f1] shrink-0" size={24} />
                                <p className="text-sm text-slate-300">
                                    <strong className="text-white">Enterprise Protocols:</strong> High-priority support and specific performance guarantees are governed by individual Service Level Agreements (SLA) between Cahaya Xcel and the respective organization.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#6366f1]">05.</span> User Responsibilities
                            </h2>
                            <ul className="list-disc pl-6 space-y-4 text-slate-400">
                                <li><strong className="text-white">Account Accuracy:</strong> Providing and maintaining accurate and current organizational information.</li>
                                <li><strong className="text-white">Security Integrity:</strong> Maintaining the strict confidentiality of system access credentials and reporting any unauthorized access immediately.</li>
                                <li><strong className="text-white">Compliant Usage:</strong> Ensuring all platform activities comply with local and international regulations, particularly concerning data surveillance and privacy.</li>
                                <li><strong className="text-white">Professional Conduct:</strong> Refraining from any activity that disrupts or compromises the integrity of the network infrastructure.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#6366f1]">06.</span> Indemnification
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                Users agree to defend, indemnify and hold harmless Cahaya Xcel and its affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of the platform or violation of these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#6366f1]">07.</span> Limitation of Liability
                            </h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                In no event shall Cahaya Xcel, nor its directors, employees, or partners, be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the service. Our total liability for any claim arising out of these terms shall not exceed the amount paid by the client for the specific service in question.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-white/5">
                            <p className="text-slate-500 text-sm italic">
                                These terms are governed by the laws of the jurisdiction in which Cahaya Xcel is registered. We reserve the right to update these terms at our discretion, with continued use of the platform constituting acceptance of any modifications.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
