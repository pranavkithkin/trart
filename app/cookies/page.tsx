'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cookie, Info, Settings, ShieldCheck, PieChart, Activity } from 'lucide-react'

const CookiePolicyPage = () => {
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
                            <Cookie className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white tracking-wide uppercase">Cookie Disclosure</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                            Cookie Policy
                        </h1>
                        <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
                            We use cookies to enhance your experience, analyze site traffic, and support our marketing efforts. Find out how we use them here.
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

                                {/* What are Cookies? */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <Info className="w-8 h-8 mr-3 text-charcoal/40" />
                                        1. What are Cookies?
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide personalized experiences, and report information to the site owners and their partners. Cookies can be "persistent" (staying on your device after you leave the site) or "session" (deleted when you close your browser).
                                    </p>
                                </div>

                                {/* Why We Use Cookies */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <ShieldCheck className="w-8 h-8 mr-3 text-charcoal/40" />
                                        2. Why We Use Cookies
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed mb-4">
                                        At Synopslabs AI, we use cookies for several critical reasons:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-slate text-lg">
                                        <li><strong>Essential Operations:</strong> To enable core site functionality such as security, network management, and accessibility.</li>
                                        <li><strong>Performance Analytics:</strong> To understand how visitors use our site, which allows us to optimize performance and content relevance.</li>
                                        <li><strong>Preference Management:</strong> To remember your preferences, such as language settings or cookie consent choices.</li>
                                        <li><strong>Marketing & Targeting:</strong> To track the effectiveness of our advertising campaigns and deliver content that is more relevant to your interests.</li>
                                    </ul>
                                </div>

                                {/* Types of Cookies */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <PieChart className="w-8 h-8 mr-3 text-charcoal/40" />
                                        3. Categories of Cookies We Use
                                    </h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-charcoal mb-2">A. Strictly Necessary Cookies</h3>
                                            <p className="text-lg text-slate leading-relaxed">
                                                These cookies are essential for you to browse the website and use its features. Without these cookies, services like secure login or form processing cannot be provided.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-charcoal mb-2">B. Analytical/Performance Cookies</h3>
                                            <p className="text-lg text-slate leading-relaxed">
                                                These cookies allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-charcoal mb-2">C. Functionality Cookies</h3>
                                            <p className="text-lg text-slate leading-relaxed">
                                                These are used to recognize you when you return to our website and enable us to personalize our content for you and remember your preferences.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Third-Party Tracking */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <Activity className="w-8 h-8 mr-3 text-charcoal/40" />
                                        4. Third-Party Cookies
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        In addition to our first-party cookies, we may also use third-party cookies (such as Google Analytics or LinkedIn Insight Tag) to report usage statistics of the service, deliver advertisements on and through the service, and so on. These third parties have their own privacy policies.
                                    </p>
                                </div>

                                {/* Managing Cookies */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
                                        <Settings className="w-8 h-8 mr-3 text-charcoal/40" />
                                        5. How to Manage Cookies
                                    </h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        Most web browsers allow you to control cookies through their settings. You can choose to block all cookies, accept only certain types, or be notified before a cookie is stored. Please note that if you choose to block strictly necessary cookies, you may not be able to access certain parts of our website or use all of its features.
                                    </p>
                                </div>

                                {/* Updates to Policy */}
                                <div>
                                    <h2 className="text-3xl font-bold text-charcoal mb-6">6. Updates to This Policy</h2>
                                    <p className="text-lg text-slate leading-relaxed">
                                        We may update this Cookie Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page regularly for the latest information on our cookie usage.
                                    </p>
                                </div>

                                {/* Contact */}
                                <div className="pt-8 border-t border-slate/20">
                                    <h3 className="text-2xl font-bold text-charcoal mb-4">Cookie Inquiries</h3>
                                    <p className="text-lg text-slate mb-6">
                                        If you have any questions about how we use cookies, please contact our data team:
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

export default CookiePolicyPage
