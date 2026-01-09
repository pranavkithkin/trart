'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/lib/case-studies-data'

const CaseStudiesPage = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <div className="min-h-screen bg-canvas">
            {/* Hero Section */}
            <section className="section-padding bg-charcoal relative overflow-hidden pt-32">
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
                            Real Results, <span className="text-white">Real Revenue</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/90">
                            See how ambitious B2B companies are using Synopslabs AI to accelerate growth,
                            slash costs, and dominate their markets
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="section-padding bg-canvas" ref={ref}>
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.slug}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-charcoal rounded-2xl flex items-center justify-center mb-6">
                                        <study.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Tags */}
                                    <div className="flex items-center gap-2 mb-4 flex-wrap min-h-[2rem]">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {study.industry}
                                        </span>
                                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                                            Active Implementation
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3 text-charcoal min-h-[3.5rem] line-clamp-2">
                                        {study.companyName}: {study.title.split(':')[1] || study.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-grow line-clamp-3 min-h-[4.5rem]">
                                        {study.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <div className="border-2 border-slate-100 rounded-xl p-4 transition-colors group-hover:border-blue-100 h-full flex flex-col justify-between">
                                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                                Impact Score
                                            </div>
                                            <div className="text-xl font-bold text-blue-600">
                                                {study.roi}
                                            </div>
                                        </div>
                                        <div className="border-2 border-slate-100 rounded-xl p-4 transition-colors group-hover:border-green-100 h-full flex flex-col justify-between">
                                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                                Efficiency Gain
                                            </div>
                                            <div className="text-xl font-bold text-green-600">
                                                {study.results[0]?.change || study.results[1]?.change}
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Link href={`/case-studies/${study.slug}`} className="mt-auto">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-charcoal text-white py-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 group-hover:bg-slate-800 transition-colors shadow-lg"
                                        >
                                            <span>Read Full Detailed Case Study</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
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
