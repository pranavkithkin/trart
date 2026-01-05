'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    Clock,
    TrendingUp,
    Target,
    Users,
    Building2,
    CheckCircle,
    BrainCircuit,
    Cpu,
    Workflow,
    ShieldCheck,
    ChevronRight,
    ArrowRight
} from 'lucide-react'
import { caseStudies } from '@/lib/case-studies-data'
import { notFound } from 'next/navigation'

const CaseStudyDetailPage = ({ params }: { params: { slug: string } }) => {
    const study = caseStudies.find(s => s.slug === params.slug)

    if (!study) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-canvas">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-white/10">
                <div className="container-custom py-4">
                    <Link href="/case-studies" className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-sm text-white">Back to Case Studies</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-charcoal">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 1.5'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='white'/%3E%3C/svg%3E")`
                    }} />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <span className={`px-4 py-1.5 bg-gradient-to-r ${study.color} text-white text-xs font-bold rounded-full uppercase tracking-widest`}>
                                {study.industry}
                            </span>
                            <span className="flex items-center space-x-2 text-white/50 text-sm">
                                <Building2 className="w-4 h-4" />
                                <span>{study.clientSize}</span>
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            {study.companyName}: {study.industry === 'Real Estate' ? 'Automating Growth with AI' : 'Strategic AI Implementation'}
                        </h1>

                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12">
                            How we transformed operations and delivered a {study.roi} ROI through intelligent automation.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {study.results.map((result, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <result.icon className="w-6 h-6 mb-3 text-white/70" />
                                    <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                                    <div className="text-xs text-white/50 uppercase tracking-widest mb-2">{result.label}</div>
                                    <div className="text-xs font-bold text-green-400">{result.change}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-canvas">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Column: Detailed Content */}
                        <div className="lg:col-span-8 space-y-20">
                            {/* Problem/Challenge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-charcoal">The Challenge</h2>
                                </div>
                                <div className="prose prose-xl prose-slate max-w-none text-slate-600">
                                    <p className="leading-relaxed mb-6">
                                        {study.challenge}
                                    </p>
                                    {study.objectives && (
                                        <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 mt-8">
                                            <h4 className="text-lg font-bold text-charcoal mb-4 uppercase tracking-widest">Key Objectives</h4>
                                            <ul className="space-y-4">
                                                {study.objectives.map((obj, i) => (
                                                    <li key={i} className="flex items-start space-x-3">
                                                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                                        <span className="font-medium">{obj}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Implementation/Solution */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                        <BrainCircuit className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-charcoal">The Solution</h2>
                                </div>
                                <div className="prose prose-xl prose-slate max-w-none text-slate-600">
                                    <p className="leading-relaxed mb-8">
                                        {study.solution}
                                    </p>

                                    {study.architecture && (
                                        <div className="mb-12">
                                            <h3 className="text-2xl font-bold text-charcoal mb-4">Architecture & Deep Tech</h3>
                                            <p className="leading-relaxed">
                                                {study.architecture}
                                            </p>
                                        </div>
                                    )}

                                    {study.workflows && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-charcoal mb-6">Execution Workflows</h3>
                                            <div className="space-y-4">
                                                {study.workflows.map((flow, i) => (
                                                    <div key={i} className="flex items-center space-x-4 p-4 bg-white rounded-2xl border-2 border-slate-50 shadow-sm">
                                                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-charcoal font-bold">
                                                            {i + 1}
                                                        </div>
                                                        <span className="font-medium text-charcoal">{flow}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Quote Section */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-charcoal rounded-[3rem] p-12 text-white relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl font-bold italic mb-10 leading-snug text-white">
                                        "{study.quote}"
                                    </p>
                                    <div className="flex items-center space-x-6">
                                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold text-white">{study.author}</div>
                                            <div className="text-white/60">{study.authorRole}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 p-12 opacity-5">
                                    <ShieldCheck className="w-48 h-48" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 space-y-12">
                            {/* Project Stats */}
                            <div className="glass p-8 rounded-[2.5rem] border-2 border-slate-100 space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Implementation Data</h4>
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 text-slate-600">
                                                <Clock className="w-5 h-5" />
                                                <span className="font-bold">Timeline</span>
                                            </div>
                                            <span className="text-charcoal font-bold">{study.timeline}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 text-slate-600">
                                                <TrendingUp className="w-5 h-5 text-green-500" />
                                                <span className="font-bold">Total ROI</span>
                                            </div>
                                            <span className="text-green-600 font-extrabold text-xl">{study.roi}</span>
                                        </div>
                                    </div>
                                </div>

                                {study.tools && (
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {study.tools.map((tool, i) => (
                                                <span key={i} className="px-4 py-2 bg-slate-100 text-charcoal text-sm font-bold rounded-lg border border-slate-200">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Similar Projects / CTA */}
                            <div className="bg-charcoal p-10 rounded-[2.5rem] text-white overflow-hidden relative group border border-white/10">
                                <div className="relative z-10">
                                    <Cpu className="w-12 h-12 mb-6 opacity-80" />
                                    <h3 className="text-2xl font-bold mb-4 text-white">Ready to build your AI advantage?</h3>
                                    <p className="text-white/70 mb-8">
                                        See exactly how we can apply these same automation frameworks to your business.
                                    </p>
                                    <Link href="/audit">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full py-4 bg-white text-charcoal font-bold rounded-xl shadow-xl flex items-center justify-center space-x-3"
                                        >
                                            <span>Get Free AI Audit</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.button>
                                    </Link>
                                </div>
                                {/* Abstract Pattern */}
                                <div className="absolute top-0 right-0 -mr-12 -mt-12 opacity-10 transform scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                                    <Workflow className="w-64 h-64" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Meta */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container-custom text-center">
                    <Link href="/case-studies" className="inline-flex items-center space-x-2 text-slate-500 hover:text-charcoal transition-colors group px-8 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-sm">Return to Case Studies</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default CaseStudyDetailPage
