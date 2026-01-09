'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, FileCheck } from 'lucide-react'

const PrivacyPolicyPage = () => {
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
                            <Shield className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white tracking-wide uppercase">Trust & Safety</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                            Privacy Policy
                        </h1>
                        <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
                            At Synopslabs AI, your privacy is our top priority. We are committed to protecting your personal data and being transparent about how we handle it.
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

                                {/* Introduction */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <FileText className="w-8 h-8 mr-3 text-charcoal/40" />
                                        1. Introduction
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        This Privacy Policy explains how Synopslabs AI ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website or use our AI-driven automation services. By using our services, you agree to the collection and use of information in accordance with this policy. We process your data in compliance with relevant data protection laws including the UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL) and, where applicable, the GDPR.
                                    </p>
                                </div>

                                {/* Information We Collect */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <Eye className="w-8 h-8 mr-3 text-charcoal/40" />
                                        2. Information We Collect
                                    </h2>
                                    <div className="space-y-4">
                                        <p className="text-lg text-slate leading-relaxed font-bold">
                                            A. Information You Provide to Us:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 text-slate text-lg">
                                            <li><strong>Contact Data:</strong> Name, professional email address, phone number, and mailing address.</li>
                                            <li><strong>Professional Data:</strong> Job title, company name, industry, and department.</li>
                                            <li><strong>Service Data:</strong> Business operational data, workflow details, and specific requirements for AI agent implementation.</li>
                                            <li><strong>Feedback Data:</strong> Information you provide when responding to surveys or providing feedback on our services.</li>
                                        </ul>
                                        <p className="text-lg text-slate leading-relaxed font-bold mt-6">
                                            B. Information Collected Automatically:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 text-slate text-lg">
                                            <li><strong>Log Data:</strong> IP address, browser type, operating system, referring URLs, and pages viewed.</li>
                                            <li><strong>Usage Logic:</strong> How you navigate our site, time spent on pages, and specific interactions with our features.</li>
                                            <li><strong>Cookies & Tracking:</strong> We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* How We Use Information */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <Lock className="w-8 h-8 mr-3 text-charcoal/40" />
                                        3. How We Use Your Information
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed mb-4">
                                        We use the collected data for various purposes, including:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate text-lg">
                                        <li><strong>Service Delivery:</strong> To provide, operate, and maintain our AI-driven automation solutions.</li>
                                        <li><strong>Personalization:</strong> To tailor our services to your specific business needs and optimize workflows.</li>
                                        <li><strong>Communications:</strong> To send technical notices, updates, security alerts, and administrative messages.</li>
                                        <li><strong>Analytics:</strong> To monitor and analyze trends, usage, and activities in connection with our Services.</li>
                                        <li><strong>Security:</strong> To detect, prevent, and address technical issues or fraudulent activities.</li>
                                        <li><strong>Compliance:</strong> To comply with legal obligations and enforce our terms and policies.</li>
                                    </ul>
                                </div>

                                {/* Data Sharing & Disclosure */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <Shield className="w-8 h-8 mr-3 text-charcoal/40" />
                                        4. Data Sharing and Disclosure
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed mb-4">
                                        We do not sell your personal data. We may share information in the following circumstances:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate text-lg">
                                        <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., cloud hosting, analytics).</li>
                                        <li><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities.</li>
                                        <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition of all or a portion of our business.</li>
                                        <li><strong>With Consent:</strong> We may share your information with your explicit consent.</li>
                                    </ul>
                                </div>

                                {/* Your Data Rights */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <FileCheck className="w-8 h-8 mr-3 text-charcoal/40" />
                                        5. Your Data Protection Rights
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed mb-4">
                                        Depending on your location, you may have the following rights:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate text-lg">
                                        <li><strong>Access:</strong> The right to request copies of your personal data.</li>
                                        <li><strong>Rectification:</strong> The right to request that we correct any inaccurate information.</li>
                                        <li><strong>Erasure:</strong> The right to request that we erase your personal data under certain conditions.</li>
                                        <li><strong>Restriction:</strong> The right to request that we restrict the processing of your data.</li>
                                        <li><strong>Portability:</strong> The right to request that we transfer the data to another organization.</li>
                                    </ul>
                                </div>

                                {/* Data Security */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <Shield className="w-8 h-8 mr-3 text-charcoal/40" />
                                        6. Data Security
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        We implement industry-standard security protocols, including AES-256 encryption at rest and TLS encryption in transit. Our systems are regularly monitored for vulnerabilities, and access to personal data is restricted to authorized personnel who need the information to perform their jobs.
                                    </p>
                                </div>

                                {/* International Transfers */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6">7. International Data Transfers</h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        Your information may be transferred to and maintained on computers located outside of your state or country where data protection laws may differ. By providing your information, you consent to these transfers. We take all steps reasonably necessary to ensure your data is treated securely.
                                    </p>
                                </div>

                                {/* Children's Privacy */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6">8. Children's Privacy</h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        Our Services are not intended for use by children under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to remove that information from our servers.
                                    </p>
                                </div>

                                {/* Changes to This Policy */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6">9. Changes to This Policy</h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this policy.
                                    </p>
                                </div>

                                {/* Contact Us */}
                                <div className="pt-8 border-t border-slate/20">
                                    <h3 className="text-2xl font-bold text-charcoal mb-4">Have Questions?</h3>
                                    <p className="text-lg text-slate mb-6">
                                        If you have any questions or concerns about this Privacy Policy or our data practices, please reach out to our team:
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

export default PrivacyPolicyPage
