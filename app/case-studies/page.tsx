'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    ArrowRight,
    TrendingUp,
} from 'lucide-react'
import { caseStudies } from '@/lib/case-studies-data'

const CaseStudiesPage = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    // We only show Bright Land on this page as per user request
    const brightLandStudy = caseStudies.find(s => s.slug === "bright-land-real-estate");

    if (!brightLandStudy) return null;

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
                        <div className="inline-block px-6 py-2 bg-white/10 rounded-full mb-6 text-white uppercase tracking-widest text-sm font-bold">
                            Case Studies
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                            Real Impact, <span className="text-white">Real Results</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/90">
                            Explore how we're transforming business operations with intelligent AI automation.
                            Our featured implementation with Bright Land Real Estate demonstrates the power of automated lead orchestration.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="section-padding bg-canvas" ref={ref}>
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            className="bg-white rounded-[2.5rem] p-10 md:p-16 border-2 border-slate/10 shadow-2xl hover:border-blue-500/20 transition-all duration-500 group"
                        >
                            <div className="w-20 h-20 bg-charcoal rounded-3xl flex items-center justify-center mb-10 text-white shadow-xl group-hover:scale-110 transition-transform">
                                <brightLandStudy.icon className="w-10 h-10" />
                            </div>

                            <div className="flex items-center space-x-3 mb-6">
                                <span className="px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-bold rounded-full uppercase tracking-widest">
                                    {brightLandStudy.industry}
                                </span>
                                <span className="text-slate/40 tracking-widest text-xs font-bold">ACTIVE IMPLEMENTATION</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-charcoal leading-tight">
                                {brightLandStudy.title}
                            </h2>

                            <p className="text-xl text-slate/70 mb-12 leading-relaxed">
                                {brightLandStudy.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Impact Score</div>
                                    <div className="text-3xl font-bold text-blue-600">{brightLandStudy.summaryResults}</div>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Efficiency Gain</div>
                                    <div className="text-3xl font-bold text-green-600">520%</div>
                                </div>
                            </div>

                            <div className="border-t border-slate/10 pt-10">
                                <Link href={`/case-studies/${brightLandStudy.slug}`}>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-charcoal text-white py-6 rounded-2xl font-bold text-xl flex items-center justify-center space-x-4 shadow-xl group/btn"
                                    >
                                        <span>Read Full Detailed Case Study</span>
                                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Audit CTA */}
            <section className="pb-24 bg-canvas">
                <div className="container-custom">
                    <div className="bg-charcoal rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to be our next success story?</h2>
                            <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
                                Get a comprehensive audit of your business processes and see how we can implement
                                similar high-impact AI agents for your team.
                            </p>
                            <Link href="/audit">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-charcoal px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl"
                                >
                                    Start Your Free AI Audit
                                </motion.button>
                            </Link>
                        </div>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-full" style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                backgroundSize: '40px 40px'
                            }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CaseStudiesPage
