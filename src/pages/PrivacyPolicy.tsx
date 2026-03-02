import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-black -z-10"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 text-[#3b82f6] text-xs font-black uppercase tracking-widest mb-6">
                        <Shield size={16} />
                        Data Protection Protocol
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Privacy Policy</h1>
                    <p className="text-slate-400 text-sm mb-12">Last Updated: March 1, 2026</p>

                    <div className="prose prose-invert max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#3b82f6]">01.</span> Introduction
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                At Cahaya Xcel, we are committed to protecting your privacy and ensuring the security of your dynamic data ecosystems. This Privacy Policy explains how we collect, use, and safeguard information when you interact with our platform, products, and services. We understand that your data is a critical asset, and we treat it with the highest level of care and professional integrity.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#3b82f6]">02.</span> Information Collection
                            </h2>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                We collect information that helps us provide a more personalized and secure experience. This includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-slate-400">
                                <li><strong className="text-white">Operational Telemetry:</strong> Real-time data from integrated security systems, including CCTV feeds, access control logs, and sensor diagnostics.</li>
                                <li><strong className="text-white">Enterprise Information:</strong> Professional contact details, billing information, and corporate identity verification.</li>
                                <li><strong className="text-white">Technical Metadata:</strong> IP addresses, browser types, device identifiers, and platform interaction logs used for performance optimization.</li>
                                <li><strong className="text-white">Communication Data:</strong> Records of support requests, technical inquiries, and project consultation feedback.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#3b82f6]">03.</span> Data Utilization
                            </h2>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                The information collected is utilized for the following core objectives:
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-slate-400">
                                <li>Maintaining and optimizing the performance of our intelligent IT ecosystems.</li>
                                <li>Providing proactive security alerts and automated system diagnostics.</li>
                                <li>Processing transactions and managing enterprise-level service agreements.</li>
                                <li>Complying with legal obligations and regulatory requirements in the jurisdictions we operate.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#3b82f6]">04.</span> Data Security Protocols
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                We implement enterprise-grade security measures including AES-256 encryption at rest, TLS 1.3 for data in transit, and continuous automated auditing. Our infrastructure is designed to maintain the highest standards of integrity and availability.
                            </p>
                            <div className="mt-8 p-6 bg-black border border-slate-800 rounded-2xl flex items-start gap-4">
                                <Lock className="text-[#3b82f6] shrink-0" size={24} />
                                <p className="text-sm text-slate-300">
                                    <strong>Standard Compliance:</strong> Our platform adheres to global security standards (including ISO/IEC 27001) and is regularly audited for compliance with data protection regulations.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#3b82f6]">05.</span> Retention and Deletion
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                We retain your data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Upon termination of service, data is securely purged from our active systems according to our data sanitation protocols, unless retention is mandated for legal or compliance reasons.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#3b82f6]">06.</span> Third-Party Disclosure
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                Cahaya Xcel does not sell, trade, or otherwise transfer your sensitive data to outside parties. This excludes trusted third parties who assist us in operating our platform, so long as those parties agree to keep this information strictly confidential and follow our rigorous security standards.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#3b82f6]">07.</span> Cookies and Tracking
                            </h2>
                            <p className="text-slate-400 leading-relaxed italic">
                                Our platform uses essential and performance-enhancing cookies to maintain session integrity and analyze traffic patterns. Users can manage their cookie preferences through their browser settings, though some enterprise features may require specific cookies to function correctly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-[#3b82f6]">08.</span> Contact Us
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                If there are any questions regarding this privacy policy, you may contact our Data Protection Office at:
                                <br /><br />
                                <strong className="text-white text-lg">cahayaxcel@gmail.com</strong>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
