'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import {
  ChevronDown,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Building2,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

import { caseStudies } from '@/lib/case-studies-data'
import Link from 'next/link'

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="case-studies" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8"
            style={{ color: '#EAE6E0' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Real Results, Real Revenue
          </motion.h2>
          <motion.p
            className="text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'rgba(234, 230, 224, 0.9)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See how ambitious B2B companies are using Synopslabs AI to accelerate growth,
            slash costs, and dominate their markets
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group"
            >
              <div className="glass-dark rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Header - Always Visible */}
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-4 py-1 bg-white/10 rounded-full text-sm font-semibold" style={{ color: '#EAE6E0' }}>
                          {study.industry}
                        </span>
                        <span className="flex items-center space-x-2 text-white/70 text-sm">
                          <Building2 className="w-4 h-4" />
                          <span>{study.clientSize}</span>
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-3" style={{ color: '#EAE6E0' }}>
                        {study.companyName}
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
                        {study.challenge}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      <ChevronDown className="w-8 h-8" style={{ color: '#EAE6E0' }} />
                    </motion.div>
                  </div>

                  {/* Key Metrics - Always Visible */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <motion.div
                        key={resultIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + resultIndex * 0.05 }}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                      >
                        <result.icon className="w-5 h-5 mb-2" style={{ color: '#EAE6E0' }} />
                        <div className="text-2xl font-bold mb-1" style={{ color: '#EAE6E0' }}>
                          {result.value}
                        </div>
                        <div className="text-xs" style={{ color: 'rgba(234, 230, 224, 0.7)' }}>
                          {result.label}
                        </div>
                        <div className="text-xs font-semibold mt-1" style={{ color: '#4ADE80' }}>
                          {result.change}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-4 border-t border-white/10">
                    {/* Solution */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 flex items-center space-x-2" style={{ color: '#EAE6E0' }}>
                        <Target className="w-5 h-5" />
                        <span>Solution</span>
                      </h4>
                      <p className="text-lg leading-relaxed" style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
                        {study.solution}
                      </p>
                    </div>

                    {/* Client Quote */}
                    <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
                      <p className="text-lg italic mb-6 leading-relaxed" style={{ color: '#EAE6E0' }}>
                        "{study.quote}"
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <Users className="w-6 h-6" style={{ color: '#EAE6E0' }} />
                        </div>
                        <div>
                          <div className="font-bold" style={{ color: '#EAE6E0' }}>{study.author}</div>
                          <div className="text-sm" style={{ color: 'rgba(234, 230, 224, 0.7)' }}>{study.authorRole}</div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline & ROI */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between pt-4 border-t border-white/10 gap-6">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5" style={{ color: '#EAE6E0' }} />
                          <span style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
                            Implementation: <span className="font-bold" style={{ color: '#EAE6E0' }}>{study.timeline}</span>
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-5 h-5" style={{ color: '#4ADE80' }} />
                          <span style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
                            ROI: <span className="font-bold text-2xl" style={{ color: '#4ADE80' }}>{study.roi}</span>
                          </span>
                        </div>
                      </div>

                      <Link href={`/case-studies/${study.slug}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 border border-white/10 transition-colors"
                        >
                          <span>View Detailed Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="glass-dark rounded-3xl p-12 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#EAE6E0' }}>
              Ready for Results Like These?
            </h3>
            <p className="text-xl mb-8" style={{ color: 'rgba(234, 230, 224, 0.8)' }}>
              Get your free AI audit and discover your growth potential
            </p>
            <a href="/audit">
              <motion.button
                transition={{ duration: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-charcoal px-12 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 mx-auto group shadow-xl"
              >
                <span>Get Your Free Audit</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies

