'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ShoppingBag,
    Banknote,
    Stethoscope,
    Home,
    Truck,
    Briefcase,
    ArrowRight,
    CheckCircle,
    Zap,
    Target,
    BarChart3,
    HardHat
} from 'lucide-react'

const IndustriesPage = () => {

    const industries = [
        {
            name: "Construction & Infrastructure",
            description: "Optimize project timelines, automate safety monitoring, and manage complex supply chains with AI-driven site management and predictive logistics.",
            icon: HardHat,
            color: "from-amber-600 to-orange-700",
            bgAccent: "bg-amber-600/10",
            features: [
                "AI-driven project scheduling & delay prediction",
                "Automated site safety & compliance monitoring",
                "Intelligent supply chain & materials management",
                "BIM-integrated AI for design optimization",
                "Contract & document analysis agents"
            ],
            results: "22% reduction in project delays, 40% faster document processing"
        },
        {
            name: "E-commerce & Retail",
            description: "Scale your sales and automate customer experience with intelligent AI agents that handle everything from product recommendations to post-purchase support.",
            icon: ShoppingBag,
            color: "from-blue-500 to-cyan-500",
            bgAccent: "bg-blue-500/10",
            features: [
                "AI-powered product recommendations",
                "Automated customer support & tracking",
                "Dynamic pricing optimization",
                "Inventory prediction & management",
                "Personalized marketing campaigns"
            ],
            results: "35% increase in AOV, 50% reduction in support tickets"
        },
        {
            name: "Financial Services",
            description: "Secure, compliant, and highly efficient AI solutions for banking, insurance, and investment firms looking to automate complex workflows.",
            icon: Banknote,
            color: "from-purple-500 to-pink-500",
            bgAccent: "bg-purple-500/10",
            features: [
                "Automated document verification",
                "Fraud detection & risk assessment",
                "AI-driven investment insights",
                "Claims processing automation",
                "Regulatory compliance monitoring"
            ],
            results: "90% faster processing, 100% audit accuracy"
        },
        {
            name: "Healthcare",
            description: "Enhance patient care and operational efficiency with AI systems designed for scheduling, diagnostic support, and administrative automation.",
            icon: Stethoscope,
            color: "from-green-500 to-emerald-500",
            bgAccent: "bg-green-500/10",
            features: [
                "Patient triage & scheduling bots",
                "Medical record summarization",
                "Diagnostic assistance tools",
                "Billing & claims automation",
                "Telehealth experience enhancement"
            ],
            results: "40% reduction in admin load, improved patient CSAT"
        },
        {
            name: "Real Estate",
            description: "Supercharge your property management and sales pipeline with AI that qualifies leads, manages bookings, and provides market insights.",
            icon: Home,
            color: "from-orange-500 to-red-500",
            bgAccent: "bg-orange-500/10",
            features: [
                "24/7 lead qualification & follow-up",
                "Automated property viewings scheduling",
                "Market trend analysis & forecasting",
                "Tenant onboarding & support",
                "Lease agreement generation"
            ],
            results: "3x lead conversion rate, 60% faster closing"
        },
        {
            name: "Logistics & Supply Chain",
            description: "Optimize routes, predict delays, and automate warehouse operations with intelligent infrastructure built for modern global trade.",
            icon: Truck,
            color: "from-yellow-500 to-orange-500",
            bgAccent: "bg-yellow-500/10",
            features: [
                "Dynamic route optimization",
                "Supply chain disruption prediction",
                "Warehouse automation & robotics",
                "Automated customs documentation",
                "Real-time shipment tracking agents"
            ],
            results: "20% reduction in fuel costs, 99% delivery accuracy"
        },
        {
            name: "Professional Services",
            description: "Empower legal, accounting, and consulting firms with AI that handles research, document drafting, and client relationship management.",
            icon: Briefcase,
            color: "from-indigo-500 to-blue-500",
            bgAccent: "bg-indigo-500/10",
            features: [
                "Automated legal/financial research",
                "Document drafting & summarization",
                "Client intake & onboarding",
                "Time tracking & billing automation",
                "Predictive project management"
            ],
            results: "15+ hours saved per week per professional"
        }
    ]

    const benefits = [
        {
            icon: Zap,
            title: "Industry Specific Models",
            description: "We don't use generic AI. Our models are trained on industry-specific data and nuances."
        },
        {
            icon: Target,
            title: "Precision Execution",
            description: "Deep understanding of sector-specific challenges ensures high-impact implementations."
        },
        {
            icon: BarChart3,
            title: "Measurable Impact",
            description: "KPI-driven approach with clear ROI metrics defined for every industry we serve."
        }
    ]

    return (
        <div className="min-h-screen bg-canvas">
            {/* Hero Section */}
            <section className="section-padding bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                            Tailored AI Solutions for Every Industry
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.9)' }}>
                            We don't believe in one-size-fits-all. Our AI agents are built with deep domain expertise
                            to solve the unique challenges of your specific sector.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="section-padding bg-canvas">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass rounded-3xl p-8 relative group hover:bg-slate/5 border-2 border-slate/20 hover:border-slate/40 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Icon */}
                                <motion.div
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                                >
                                    <industry.icon className="w-8 h-8 text-white" />
                                </motion.div>

                                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                                    {industry.name}
                                </h3>

                                <p className="mb-6 leading-relaxed flex-grow" style={{ color: '#535366' }}>
                                    {industry.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {industry.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#535366' }} />
                                            <span className="text-sm" style={{ color: '#535366' }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Results Badge */}
                                <div className={`${industry.bgAccent} rounded-xl p-4 mb-8`}>
                                    <div className="text-xs font-semibold mb-1" style={{ color: '#535366' }}>BENCHMARK IMPACT</div>
                                    <div className="text-sm font-bold" style={{ color: '#1C1C1C' }}>{industry.results}</div>
                                </div>

                                {/* CTA */}
                                <Link href="/audit">
                                    <motion.button
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group glass border-2 border-charcoal/20 hover:border-charcoal/40 text-charcoal"
                                    >
                                        <span>Transform Your {industry.name.split(' ')[0]} Business</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="section-padding bg-gradient-to-br from-charcoal via-charcoal to-slate relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#EAE6E0' }}>
                            Deep Expertise, Better Results
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="glass-dark rounded-3xl p-8 text-center border border-white/10"
                            >
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <benefit.icon className="w-8 h-8" style={{ color: '#EAE6E0' }} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4" style={{ color: '#EAE6E0' }}>
                                    {benefit.title}
                                </h3>
                                <p style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border-2 border-slate/30">
                            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1C1C1C' }}>
                                Don't See Your Industry?
                            </h2>
                            <p className="text-xl mb-8" style={{ color: '#535366' }}>
                                Our AI architecture is flexible and adaptable. Let's discuss your specific
                                use case and see how we can build a custom solution for your business.
                            </p>
                            <Link href="/contact">
                                <motion.button
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary text-lg px-12 py-4 flex items-center space-x-3 mx-auto group shadow-lg"
                                >
                                    <span>Speak with an Expert</span>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default IndustriesPage
