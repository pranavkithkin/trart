'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Scale, FileCheck, AlertCircle, HelpCircle, ShieldAlert, Gavel } from 'lucide-react'

const TermsOfServicePage = () => {
    return (
        <div className="min-h-screen bg-canvas">
            {/* Hero Section */}
            <section className="section-padding bg-charcoal relative overflow-hidden pt-32">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-8 border border-white/10">
                            <Scale className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white tracking-wide uppercase">Legal Terms</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                            Terms of Service
                        </h1>
                        <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
                            Please read these terms carefully before using our services. They outline your rights and responsibilities when partnering with Synopslabs AI.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="glass rounded-3xl p-8 md:p-12 border-2 border-slate/20">
                            <div className="space-y-12">
                                {/* Last Updated */}
                                <div className="text-sm font-bold text-slate/50 uppercase tracking-widest mb-8">
                                    Last Updated: January 9, 2026
                                </div>

                                {/* Acceptance of Terms */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <FileCheck className="w-8 h-8 mr-3 text-charcoal/40" />
                                        1. Acceptance of Terms
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        By accessing or using Synopslabs AI's website and AI-driven automation services, you agree to be bound by these Terms of Service. These terms apply to all visitors, clients, and others who access or use our services. If you disagree with any part of the terms, you may not access our services.
                                    </p>
                                </div>

                                {/* Description of Services */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <HelpCircle className="w-8 h-8 mr-3 text-charcoal/40" />
                                        2. Description of Services
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed mb-4">
                                        Synopslabs AI provides enterprise-grade AI-native automation, intelligent agent development, and growth consulting. Our services include but are not limited to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate text-lg">
                                        <li>Custom AI Agent development and deployment.</li>
                                        <li>Workflow automation and systems integration.</li>
                                        <li>AI strategy consulting and operational audits.</li>
                                        <li>Managed AI services and performance monitoring.</li>
                                    </ul>
                                </div>

                                {/* User Obligations */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <ShieldAlert className="w-8 h-8 mr-3 text-charcoal/40" />
                                        3. User Obligations
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed mb-4">
                                        As a user of our services, you agree to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate text-lg">
                                        <li>Provide accurate and complete information during onboarding.</li>
                                        <li>Maintain the confidentiality of any access credentials provided.</li>
                                        <li>Use the services only for lawful business purposes.</li>
                                        <li>Notify us immediately of any unauthorized use of your account or systems related to our services.</li>
                                    </ul>
                                </div>

                                {/* Intellectual Property */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <Gavel className="w-8 h-8 mr-3 text-charcoal/40" />
                                        4. Intellectual Property
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        All original content, features, and functionality of our platform, including proprietary AI models and code architectures (unless explicitly transferred in a separate service agreement), remain the exclusive property of Synopslabs AI. You may not reproduce, distribute, or create derivative works from our platform without our prior written consent.
                                    </p>
                                </div>

                                {/* Payment and Fees */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6">5. Payment and Fees</h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        Fees for our services are outlined in specific service agreements or project proposals. All payments are due according to the schedule specified in those agreements. Late payments may result in the suspension of services or additional interest charges.
                                    </p>
                                </div>

                                {/* Limitation of Liability */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <AlertCircle className="w-8 h-8 mr-3 text-charcoal/40" />
                                        6. Limitation of Liability
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        To the maximum extent permitted by applicable law, Synopslabs AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services; (ii) any conduct or content of any third party on the services; or (iii) unauthorized access, use, or alteration of your transmissions or content.
                                    </p>
                                </div>

                                {/* Disclaimer */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6">7. Disclaimer</h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        Your use of the services is at your sole risk. The services are provided on an "AS IS" and "AS AVAILABLE" basis. Synopslabs AI does not warrant that the services will be uninterrupted, timely, secure, or error-free.
                                    </p>
                                </div>

                                {/* Termination */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6">8. Termination</h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the services will immediately cease.
                                    </p>
                                </div>

                                {/* Governing Law */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6">9. Governing Law</h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates (UAE), without regard to its conflict of law provisions. Any legal action or proceeding related to these terms shall be brought exclusively in the courts located in Dubai, UAE.
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div className="pt-8 border-t border-slate/20">
                                    <h3 className="text-2xl font-bold text-charcoal mb-4">Legal Inquiries</h3>
                                    <p className="text-lg text-slate mb-6">
                                        If you have any questions or concerns regarding these Terms of Service, please reach out to our legal department:
                                    </p>
                                    <div className="space-y-4">
                                        <a
                                            href="mailto:pranav@synopslabs.com"
                                            className="block text-xl font-bold text-charcoal hover:text-blue-600 transition-colors"
                                        >
                                            pranav@synopslabs.com
                                        </a>
                                        <p className="text-slate italic">
                                            Synopslabs AI HQ<br />
                                            Dubai, United Arab Emirates
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TermsOfServicePage
